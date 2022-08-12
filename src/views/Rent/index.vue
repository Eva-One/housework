<template>
  <div>
    <van-nav-bar title="房屋管理" left-arrow @click-left="onClickLeft" />
    <collection-list :list="rentList"></collection-list>
  </div>
</template>

<script>
import { requestRentHouseApi } from "@/api";
import CollectionList from "@/components/CollectionList.vue";
export default {
  name: "Rent",
  data() {
    return {
      rentList: [],
    };
  },
  components: { CollectionList },
  beforeCreate() {
    if (!this.$store.state.tokenObj.token) {
      this.$router.push("/register");
    }
  },
  created() {
    this.getRentList();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/layout/user");
    },
    async getRentList() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      try {
        const res = await requestRentHouseApi(this.$store.state.tokenObj.token);
        if (res.data.status == 200) {
          this.rentList = res.data.body;
        } else {
          this.$toast.fail(res.data.description);
        }
      } catch (e) {
        this.$toast.fail("获取收藏列表失败");
      }
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
