import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 附加练习_1.切换页面
// import ClassPage from "./views/01ClassPage.vue";
// import IndexPage from "./views/01IndexPage.vue";
// import MyPage from "./views/01MyPage.vue";
// import MyOrders from "./views/01MyOrders.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// const routes = [
//   {
//     path: "",
//     redirect: "/index",
//   },
//   {
//     path: "/index",
//     component: IndexPage,
//   },
//   {
//     path: "/class",
//     component: ClassPage,
//   },
//   {
//     path: "/order",
//     component: MyOrders,
//   },
//   {
//     path: "/user",
//     component: MyPage,
//   },
// ];
// const router = new VueRouter({
//   routes,
// });

// 附加练习_2.二级路由嵌套
// import IndexPage from "./views/02IndexPage.vue";
// import NewsPage from "./views/02NewsPage.vue";
// import GymPage from "./views/02GymPage.vue";
// import GymIndex from "./views/02Second/GymIndex.vue";
// import GymIn from "./views/02Second/GymIn.vue";
// import GymOut from "./views/02Second/GymOut.vue";

// const routes = [
//   {
//     path: "",
//     redirect: "/index",
//   },
//   {
//     path: "/index",
//     component: IndexPage,
//     name: "Index",
//   },
//   {
//     path: "/news",
//     component: NewsPage,
//   },
//   {
//     path: "/gym",
//     component: GymPage,
//     children: [
//       {
//         path: "gymindex",
//         component: GymIndex,
//       },
//       {
//         path: "gymin",
//         component: GymIn,
//       },
//       {
//         path: "gymout",
//         component: GymOut,
//       },
//     ],
//   },
// ];

//附加练习_3-tabbar切换
// import "bootstrap/dist/css/bootstrap.css";
// import "./assets/fonts/iconfont.css";

// import axios from "axios";
// axios.defaults.baseURL = "https://www.escook.cn";
// Vue.prototype.$axios = axios;

// Vue.directive("focus", {
//   inserted(el) {
//     el.focus();
//   },
// });

// import GoodsList from "./views/03MyGoodsList.vue";
// import GoodsSearch from "./views/03MyGoodsSearch.vue";
// import UserInfo from "./views/03MyUserInfo.vue";

// const routes = [
//   {
//     path: "",
//     redirect: "/goods",
//   },
//   {
//     path: "/goods",
//     component: GoodsList,
//   },
//   {
//     path: "/search",
//     component: GoodsSearch,
//   },
//   {
//     path: "/user",
//     component: UserInfo,
//   },
// ];

//三级路由嵌套
import UiRouter from "./views/04UiRouter.vue";
import Contacts from "./views/04Contacts.vue";
import About from "./views/04About.vue";
import AllContacts from "./views/04Second/AllContacts.vue";
import Alice from "./views/04Second/Alice.vue";
import Bob from "./views/04Second/Bob.vue";
import Tel from "./views/04Third/04Tel.vue";
import Fax from "./views/04Third/04Fax.vue";

const routes = [
  {
    path: "",
    redirect: "/ui_router",
  },
  {
    path: "/ui_router",
    component: UiRouter,
  },
  {
    path: "/contacts",
    component: Contacts,
    children: [
      // {
      //   path: "",
      //   redirect: "all_contacts",
      // },
      {
        path: "all_contacts",
        component: AllContacts,
      },
      {
        path: "alice",
        component: Alice,
      },
      {
        path: "bob",
        component: Bob,
        children: [
          {
            path: "tel",
            component: Tel,
          },
          {
            path: "fax",
            component: Fax,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
