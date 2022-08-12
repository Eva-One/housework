import Vue from "vue";
import Vuex from "vuex";
import { getToken, setToken } from "@/utils/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tokenObj: getToken() || {},
    currentCity: {
      // 当前城市
      label: "杭州",
      pinyin: "hangzhou",
      short: "hz",
      value: "AREA|19b39d4f-8a36-d6f8",
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.tokenObj = payload;
      setToken(payload);
    },
    SET_CURRENT_CITY(state, payload) {
      state.currentCity = payload;
    },
  },
});
