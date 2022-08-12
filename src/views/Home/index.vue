<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <van-icon name="map-marked" size="0.6rem" color="white" />
      </template>
      <template #label>
        <span @click="jumpCity">{{ $store.state.currentCity.label }}</span>
      </template>
    </van-search>

    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="item in images" :key="item.id">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" />
      </van-swipe-item>
    </van-swipe>
    <van-grid icon-size="1.1rem" :border="false">
      <van-grid-item icon="wap-home-o" text="整租" to="/layout/search" />
      <van-grid-item icon="friends-o" text="合租" to="/layout/search" />
      <van-grid-item icon="guide-o" text="地图找房" to="/layout/search" />
      <van-grid-item icon="gold-coin-o" text="去出租" to="/rent/add" />
    </van-grid>
    <van-grid :border="false" :column-num="2" direction="horizontal">
      <van-cell center title="租房小组" value="更多" />
      <van-grid-item v-for="item in group" :key="item.id">
        <van-image
          :src="`http://liufusong.top:8080${item.imgSrc}`"
          width="1.33rem"
          height="1.33rem"
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
  name: "Home",
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
.van-search {
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 99;
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
