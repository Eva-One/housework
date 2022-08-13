<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>数量值:{{ unfinishedNum }}</strong></span
    >
    <ul class="filters">
      <li>
        <a class="selected" href="javascript:;" @click="SET_LIST_ALL()">全部</a>
      </li>
      <li>
        <a href="javascript:;" @click="SET_LIST_UNFINISHED()">未完成</a>
      </li>
      <li>
        <a href="javascript:;" @click="SET_LIST_FINISHED()">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="DEL_TASK_FINISHED()">
      清除已完成
    </button>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["unfinishedNum"]),
  },
  methods: {
    ...mapMutations([
      "DEL_TASK_FINISHED",
      "SET_LIST_UNFINISHED",
      "SET_LIST_FINISHED",
      "SET_LIST_ALL",
    ]),
  },
};
</script>
