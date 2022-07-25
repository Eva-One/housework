<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col span="8" v-for="item in list" :key="item.id">
        <van-image round width="100" height="100" :src="item.picUrl">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <p class="song_name">{{ item.name }}</p>
      </van-col>
    </van-row>

    <p class="title">最新音乐</p>
    <van-cell-group class="table">
      <!-- <van-cell
        center
        :title="item.name"
        :label="`${
          item.song &&
          item.song.artists &&
          item.song.artists[0] &&
          item.song.artists[0].name
        }-${item.name}`"
        v-for="item in newList"
        :key="item.id"
      >
        <template #right-icon>
          <van-icon name="play-circle-o" size="0.6rem" />
        </template>
      </van-cell> -->
      <SongItem
        v-for="item in newList"
        :key="item.id"
        :name="item.name"
        :author="
          item.song &&
          item.song.artists &&
          item.song.artists[0] &&
          item.song.artists[0].name
        "
        :id="item.id"
      ></SongItem>
    </van-cell-group>
  </div>
</template>

<script>
import { requestSongListApi, requsetNewSongListApi } from "@/api";
import SongItem from "@/components/SongItem";

export default {
  data() {
    return {
      list: [],
      newList: [],
    };
  },
  components: {
    SongItem,
  },
  mounted() {
    this.getList();
    this.getNewList();
  },
  methods: {
    async getList() {
      try {
        const res = await requestSongListApi({
          limit: 6,
        });

        this.list = res.data.result;
      } catch (e) {
        console.log(e);
      }
    },
    async getNewList() {
      try {
        const res = await requsetNewSongListApi();
        this.newList = res.data.result;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}

.table {
  margin-bottom: 1.25rem;
}
</style>