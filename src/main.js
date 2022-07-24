import Vue from "vue";
import App from "./App.vue";

import "@/assets/flexible";
import "@/assets/reset.css";

Vue.config.productionTip = false;

import router from "@/router/index";

import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
