<template>
  <div>
    <MyHeader title="我的商品"></MyHeader>
    <div style="margin-top: 45px">
      <component :is="changeList"></component>
    </div>
    <MyTabBar :tabList="tabList" @switchList="switchList"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./views/GoodsList.vue";
import MyGoodsSearch from "./views/GoodsSearch.vue";
import MyUserInfo from "./views/UserInfo.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  data() {
    return {
      changeList: "MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods: {
    switchList(val) {
      this.changeList = this.tabList[val].componentName;
    },
  },
};
</script>


