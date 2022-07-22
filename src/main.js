import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";

axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;

Vue.directive("focus", {
  update(el, binding, vNode) {
    // console.log(el);
    // console.log(binding);
    // console.log(vNode);
    vNode.context.$nextTick(() => {
      el.focus();
    });
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
