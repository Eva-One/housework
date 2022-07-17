<template>
  <div>
    <span v-for="(item, index) in arr" :key="index">
      <input type="checkbox" v-model="num" :value="item" />{{ item }}
    </span>
    <p>你选中的元素，累加的值和为：{{ getSum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      num: [],
    };
  },
  computed: {
    getSum() {
      return this.num.reduce((sum, item) => {
        return (sum += item);
      }, 0);
    },
  },
};
</script>

<style>
</style>