<template>
  <div>
    <van-nav-bar title="亮马水晶" left-arrow @click-left="onClickLeft" />
    <!-- <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in houseInfo.houseImg" :key="index">
        <img v-lazy="`http://liufusong.top:8080${image}`" />
      </van-swipe-item>
    </van-swipe> -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in houseInfo.houseImg" :key="index">
        <img :src="`http://liufusong.top:8080${image}`" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { requestHouseDetailApi, requestHouseIsApi } from "@/api";
export default {
  name: "Detail",
  data() {
    return {
      id: this.$route.query.id,
      houseInfo: {},
    };
  },
  created() {
    this.getHouseDetail(), this.getHouseIs();
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/collection",
      });
    },
    async getHouseDetail() {
      const { data } = await requestHouseDetailApi(this.id);
      this.houseInfo = data.body;
    },
    async getHouseIs() {
      const res = await requestHouseIsApi(
        this.$store.state.tokenObj.token,
        this.id
      );
      console.log(res);
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #21b97a;
}
:deep(.van-nav-bar .van-icon) {
  color: #fff;
}
:deep(.van-nav-bar__title) {
  color: white;
  font-size: 0.48rem;
  font-weight: normal;
}
</style>
