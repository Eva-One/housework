<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="enterFn"
      v-model="text"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    enterFn() {
      //非空校验
      if (!this.text.trim()) {
        this.text = "";
        return alert("请输入待办任务");
      }
      //传值
      this.$emit("addData", this.text);
      this.text = "";
    },
  },
  computed: {
    isAll: {
      set(val) {
        this.$parent.list.forEach((ele) => (ele.isDone = val));
      },
      get() {
        return this.$parent.list.every((ele) => ele.isDone);
      },
    },
  },
};
</script>