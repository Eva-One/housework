<template>
  <div>
    <h2 v-html="str"></h2>
    <h2 v-text="str"></h2>
    <p v-text="str">123{{ str }}</p>
  </div>
</template>

<script>
// 需求：str 变量渲染到页面上
export default {
  name: "App",
  data() {
    return {
      str: "<span>我是一个span</span>",
    };
  },
};
</script>