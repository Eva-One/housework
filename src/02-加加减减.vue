<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
        <a href="javascrit:;" @click="del(index)">删除</a>
      </li>
    </ul>
    <button @click="addValue">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 5, 3],
    };
  },
  methods: {
    addValue() {
      this.arr.push(Math.floor(Math.random() * 10));
    },
    del(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>