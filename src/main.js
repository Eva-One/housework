import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

import "amfe-flexible";
import "@/assets/reset.css";

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import { router } from "@/router/index";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
