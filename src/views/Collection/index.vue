<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <collection-list :list="collectionList"></collection-list>
  </div>
</template>

<script>
import { requestCollectionListApi } from "@/api";
import CollectionList from "@/components/CollectionList.vue";
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
  components: {
    CollectionList,
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
