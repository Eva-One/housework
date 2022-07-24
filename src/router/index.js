import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/views/Layout/indexPage";
import Home from "@/views/Home/indexPage";
import Search from "@/views/Search/indexPage";
import Play from "@/views/Play/indexPage";

const routes = [
  {
    path: "/",
    redirect: "/layout/home",
  },
  {
    path: "/layout",
    component: Layout,
    redirect: "/layout/home",
    children: [
      {
        path: "home",
        component: Home,
        meta: {
          title: "首页",
        },
      },
      {
        path: "search",
        component: Search,
        meta: {
          title: "搜索",
        },
      },
    ],
  },
  {
    path: "/play",
    component: Play,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
