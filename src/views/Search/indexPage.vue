<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="val"
      @blur="search"
    />
    <!-- 搜索下容器 -->
    <div class="search_wrap">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span class="hot_item" v-for="(item, index) in list" :key="index">{{
          item.first
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getHotKeyApi, searchSongApi } from "@/api";
export default {
  data() {
    return {
      songList: [],
      list: [],
      val: "",
    };
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
        });
        return res.data.result.songs;
      } catch (e) {
        console.log(e);
      }
    },
    async search() {
      this.songList = await this.getSong();
      console.log(this.songList);
    },
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
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