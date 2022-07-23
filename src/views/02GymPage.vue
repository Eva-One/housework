<template>
  <div>
    <h1>体育*改变人生</h1>
    <router-link to="/gym/gymindex">体育主页</router-link>
    <router-link to="/gym/gymin">国内体育</router-link>
    <router-link to="/gym/gymout">国外体育</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  margin-right: 5px;
}
</style>