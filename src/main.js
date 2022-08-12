import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import BaiduMap from "vue-baidu-map";

Vue.config.productionTip = false;

import "amfe-flexible";
import "@/assets/reset.css";
import "@/assets/font_3565737_7hxk7h2lyh/iconfont.css";

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

Vue.use(BaiduMap, {
  ak: "oPWrpLzjnuSISG665G8030sKyxeYduLd",
});

import { router } from "@/router/index";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
