import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "@/assets/flexible";
import "@/assets/reset.css";

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import { router } from "@/router/index";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
