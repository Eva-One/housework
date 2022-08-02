<template>
  <div>
    <router-view></router-view>
    <van-tabbar route active-color="#21b97a">
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/news" icon="newspaper-o"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/user" icon="contact"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
