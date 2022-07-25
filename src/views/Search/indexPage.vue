<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="val"
      @input="search"
    />
    <!-- 搜索下容器 -->
    <div class="search_wrap" v-if="!songList.length">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span
          class="hot_item"
          v-for="(item, index) in list"
          :key="index"
          @click="add(item.first)"
          >{{ item.first }}</span
        >
      </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell
          center
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
          v-for="item in songList"
          :key="item.id"
        >
          <template #right-icon>
            <van-icon name="play-circle-o" size="0.6rem" />
          </template>
        </van-cell> -->
        <SongItem
          v-for="item in songList"
          :key="item.id"
          :name="item.name"
          :author="item.ar[0].name"
          :id="item.id"
        ></SongItem>
      </van-list>
    </div>
  </div>
</template>
<script>
import { getHotKeyApi, searchSongApi } from "@/api";
import SongItem from "@/components/SongItem";
export default {
  data() {
    return {
      songList: [],
      list: [],
      val: "",
      loading: false,
      finished: false,
      limit: 20,
      page: 1,
    };
  },
  components: {
    SongItem,
  },
  async mounted() {
    this.getHot();
    // const a = await this.getSong();
    // console.log(a);
  },
  methods: {
    async getHot() {
      try {
        const res = await getHotKeyApi();
        this.list = res.data.result.hots;
      } catch (e) {
        console.log(e);
      }
    },
    async getSong() {
      try {
        const res = await searchSongApi({
          keywords: this.val,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        });
        return res.data.result;
      } catch (e) {
        console.log(e);
      }
    },
    async search() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(async () => {
        this.page = 1;
        this.finished = false;
        if (!this.val.trim()) {
          return (this.songList = []);
        }
        const result = await this.getSong();
        this.songList = (result && result.songs) || [];
      }, 300);
    },
    async add(val) {
      this.page = 1;
      this.finished = false;
      this.val = val;
      const result = await this.getSong();
      this.songList = (result && result.songs) || [];
    },

    async onLoad() {
      this.page++;
      const result = await this.getSong();
      if (!result.songs || result.songCount <= (this.page - 1) * this.limit) {
        this.finished = true;
        this.loading = false;
        return;
      }
      this.songList = [...this.songList, ...((result && result.songs) || [])];
      this.loading = false;
    },
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
  margin-bottom: 0.825rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>