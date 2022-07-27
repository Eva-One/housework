<template>
  <div>
    <div class="top">
      <div class="location" @click="jumpCity">上海</div>
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        class="mySearch"
      >
        <template #action>
          <van-icon name="map-marked" size="0.6rem" color="white" />
        </template>
      </van-search>
    </div>

    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="item in images" :key="item.id">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" />
      </van-swipe-item>
    </van-swipe>
    <van-grid icon-size="40px" style="border: none">
      <van-grid-item icon="wap-home-o" text="整租" to="/layout/search" />
      <van-grid-item icon="friends-o" text="合租" to="/layout/search" />
      <van-grid-item icon="guide-o" text="地图找房" to="/layout/search" />
      <van-grid-item icon="gold-coin-o" text="去出租" to="/layout/search" />
    </van-grid>
    <van-grid :border="false" :column-num="2" direction="horizontal">
      <van-cell center title="租房小组" value="更多" />
      <van-grid-item v-for="item in group" :key="item.id">
        <van-image
          :src="`http://liufusong.top:8080${item.imgSrc}`"
          width="50"
          height="50"
        />
        <div style="font-size: 0.175rem; padding-left: 0.125rem">
          <p>{{ item.title }}</p>
          <p>{{ item.desc }}</p>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { requestSwiperApi, requestGroupApi } from "@/api/index";
export default {
  data() {
    return {
      images: [],
      group: [],
      value: "",
    };
  },
  mounted() {
    this.getSwiper();
    this.getGroup();
  },
  methods: {
    onSearch() {},
    async getSwiper() {
      const res = await requestSwiperApi();
      this.images = res.data.body;
    },
    async getGroup() {
      const res = await requestGroupApi();
      this.group = res.data.body;
    },
    jumpCity() {
      this.$router.push({
        path: "/city",
      });
    },
  },
};
</script>

<style scoped>
.top {
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  background: transparent;
}
.location {
  font-size: 0.4rem;
  height: 0.9rem;
  background-color: #f7f8fa;
  padding: 0.2rem 0 0 0.1rem;
  box-sizing: border-box;
  margin-left: 0.5rem;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.mySearch {
  background: transparent;
  width: 85%;
  padding-left: 0;
}
.van-search__content {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.my-swipe {
  width: 100%;
  height: 5.65rem;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
</style>