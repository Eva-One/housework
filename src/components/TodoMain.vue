<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.isDone }"
      v-for="item in taskList"
      :key="item.id"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          @click="changeStatus(item)"
          :checked="item.isDone"
        />
        <label>{{ item.value }}</label>
        <button class="destroy" @click="delTask(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["taskList"]),
  },
  methods: {
    ...mapMutations(["DEL_TASK", "CHANGE_TASK"]),
    delTask(id) {
      this.DEL_TASK(id);
    },
    changeStatus(val) {
      this.CHANGE_TASK(val);
    },
  },
};
</script>
