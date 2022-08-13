import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskList: [],
    id: 99,
    taskListCopy: [],
  },
  mutations: {
    ADD_TASK(state, task) {
      state.id++;
      state.taskList.unshift({ value: task, isDone: false, id: state.id });
      state.taskListCopy = state.taskList;
    },
    DEL_TASK(state, id) {
      state.taskList = state.taskList.filter((ele) => ele.id !== id);
    },
    CHANGE_TASK(state, val) {
      if (val) {
        const index = state.taskList.findIndex((ele) => ele === val);
        state.taskList[index].isDone = !state.taskList[index].isDone;
      } else {
        if (state.taskList.every((ele) => ele.isDone === true)) {
          state.taskList.forEach((ele) => (ele.isDone = !ele.isDone));
        } else {
          state.taskList.forEach((ele) => (ele.isDone = true));
        }
      }
    },
    DEL_TASK_FINISHED(state) {
      state.taskList = state.taskList.filter((ele) => ele.isDone === false);
    },
    SET_LIST_UNFINISHED(state) {
      state.taskList = state.taskListCopy;
      state.taskList = state.taskList.filter((ele) => ele.isDone === false);
    },
    SET_LIST_FINISHED(state) {
      state.taskList = state.taskListCopy;
      state.taskList = state.taskList.filter((ele) => ele.isDone === true);
    },
    SET_LIST_ALL(state) {
      state.taskList = state.taskListCopy;
    },
  },
  getters: {
    unfinishedNum: (state) => {
      return state.taskList.reduce((num, ele) => {
        if (ele.isDone === false) {
          num++;
        }
        return num;
      }, 0);
    },
  },
  plugins: [
    createPersistedState({
      key: "todolist",
    }),
  ],
});
