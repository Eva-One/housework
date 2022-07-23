<!---- 附加练习_1.切换页面 ------->
<!----
<template>
  <div>
    <router-link to="/index">首页</router-link>
    <router-link to="/class">分类</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/user">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
a {
  margin-right: 10px;
}
</style>
------->


<!------ 附加练习_2.二级路由嵌套 ------>
<!-------------
<template>
  <div>
    <div>
      <router-link to="/index">主页</router-link>
      <span @click="jump('/index', 'Index')">主页</span>
      <router-link to="/news">新闻</router-link>
      <router-link to="/gym">体育</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    jump(path, name) {
      this.$router.push({
        // path: path,
        name: name,
        query: {
          id: 666,
        },
        params: {
          username: "hhh",
        },
      });
    },
  },
};
</script>

<style scoped>
span,
a {
  margin-right: 5px;
}
</style>
------->

<!------附加练习_3-tabbar切换------>
<!--------
<template>
  <div>
    <MyHeader title="我的购物车"></MyHeader>
    <div style="margin-top: 45px">
      <router-view></router-view>
    </div>
    <MyTabBar :list="tabList"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";

export default {
  name: "App",
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
          path: "/goods",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
          path: "/search",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
          path: "/user",
        },
      ],
      changeName: "MyGoodsList",
    };
  },
  components: {
    MyHeader,
    MyTabBar,
  },
};
</script>

<style>
</style>
-------->

<!-------三级路由嵌套------->
<template>
  <div>
    <router-link to="/ui_router">Ui_Router</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  margin-right: 10px;
}
</style>