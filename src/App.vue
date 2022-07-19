<template>
  <div class="todoapp">
    <TodoHeader @addData="addFn"></TodoHeader>
    <TodoMain :list="changeList" @delData="delFn"></TodoMain>
    <TodoFooter :num="count" @changeStatus="changeStatus"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list:
        (localStorage.getItem("todoList") &&
          JSON.parse(localStorage.getItem("todoList"))) ||
        [],
      status: "all",
    };
  },
  methods: {
    addFn(val) {
      this.list.push({
        name: val,
        isDone: false,
        id:
          (this.list.length > 0 && this.list[this.list.length - 1].id + 1) ||
          100,
      });
    },
    delFn(val) {
      const index = this.list.findIndex((ele) => {
        return ele.id == val;
      });
      this.list.splice(index, 1);
    },
    changeStatus(val) {
      this.status = val;
    },
  },
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    changeList() {
      if (this.status == "yes") {
        return this.list.filter((ele) => ele.isDone);
      } else if (this.status == "no") {
        return this.list.filter((ele) => !ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem("todoList", JSON.stringify(this.list));
      },
    },
  },
};
</script>

<style>
</style>
