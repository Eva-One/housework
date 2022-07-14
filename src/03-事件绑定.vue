<template>
  <div>
    <p>你要购买商品的数量: {{ count }}</p>
    <!-- 1. 绑定事件
     语法: v-on:事件名="少量代码"
     语法: v-on:事件名="methods里函数名"
     语法: v-on:事件名="methods里函数名(值)"
     语法: @事件名="methods里函数名"
     -->
    <button v-on:click="count++">+1</button>
    <button v-on:click="add">+1</button>
    <button v-on:click="addMore(5)">+5</button>
    <button @click="addMore(-1)">减少1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      console.log(this);
      this.count += 1;
    },
    addMore(val) {
      this.count += val;
    },
  },
};
</script>