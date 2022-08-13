<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all" @click="CHANGE_TASK()"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keyup.enter="addTask"
    />
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTask() {
      if (!this.task) {
        return alert("请输入待办事项");
      } else {
        this.ADD_TASK(this.task);
        this.task = "";
      }
    },
    ...mapMutations(["ADD_TASK", "CHANGE_TASK"]),
  },
};
</script>
