<template>
  <div>
    <!-- 需求： age 大于等于18，页面显示 成年人
         age 小于18 并且 大于等于12 ，页面显示 青少年
         age 小于12 ，页面显示 儿童 -->
    <h1 v-if="age>=18">成年人</h1>
    <h1 v-else-if="age>=12">青少年</h1>
    <h1 v-else>儿童</h1>
    <!-- v-if v-else-if v-else 配合使用 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        age:20,
    };
  },
};
</script>
<style></style>