<template>
  <div>
    <van-nav-bar :title="$route.meta.title" />
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  // mounted() {
  //   console.log(this.$route);
  // },

  //watch可以监听路由
  watch: {
    $route(val) {
      this.title = val.meta.title;
    },
  },
};
</script>

<style>
</style>