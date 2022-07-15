<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="walk">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["帅哥", "美女", "程序员"],
    };
  },
  methods: {
    walk() {
      this.arr.push(this.arr[0]);
      this.arr.splice(0, 1);
    },
  },
};
</script>