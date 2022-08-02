import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Layout from "@/views/Layout";
import Home from "@/views/Home";
import Search from "@/views/Search";
import News from "@/views/News";
import User from "@/views/User";
import Register from "@/views/Register";
import City from "@/views/City";

const routes = [
  {
    path: "",
    redirect: "/layout/home",
  },
  {
    path: "/layout",
    component: Layout,
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "search",
        component: Search,
      },
      {
        path: "news",
        component: News,
      },
      {
        path: "user",
        component: User,
      },
    ],
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/city",
    component: City,
  },
  {
    path: "/collection",
    component: () => {
      return import("@/views/Collection");
    },
  },
  {
    path: "/detail",
    component: () => {
      return import("@/views/Detail");
    },
  },
];

export const router = new VueRouter({
  routes,
});
