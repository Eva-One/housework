<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <van-card
      v-for="(item, index) in collectionList"
      :key="index"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="`http://liufusong.top:8080${item.houseImg}`"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item, index) in item.tags"
          :key="index"
          >{{ item }}</van-tag
        >
      </template>
    </van-card>
  </div>
</template>

<script>
import { requestCollectionListApi } from "@/api";
export default {
  data() {
    return {
      collectionList: [],
    };
  },
  beforeCreate() {
    if (!this.$store.state.tokenObj.token) {
      this.$router.push("/register");
    }
  },
  created() {
    this.getCollectionList();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getCollectionList() {
      const res = await requestCollectionListApi(
        this.$store.state.tokenObj.token
      );
      console.log(res);
      this.collectionList = res.data.body;
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #21b97a;
}

:deep(.van-icon) {
  color: #fff;
}

:deep(.van-nav-bar__title) {
  color: white;
  font-size: 0.48rem;
  font-weight: normal;
}
</style>
