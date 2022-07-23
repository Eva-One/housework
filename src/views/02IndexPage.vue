<template>
  <div>
    <h2>首页</h2>
    <h4>{{ $route.params.username }}</h4>
    <h4>{{ $router.currentRoute.query.id }}</h4>
  </div>
</template>

<script>
export default {};
</script>

