<template>
  <div>
    <van-nav-bar
      :title="houseInfo.community"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="(image, index) in houseInfo.houseImg" :key="index">
        <img :src="`http://liufusong.top:8080${image}`" />
      </van-swipe-item>
    </van-swipe>
    <van-card :desc="`${houseInfo.price}`">
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item, index) in houseInfo.tags"
          :key="index"
        >
          {{ item }}
        </van-tag>
      </template>
    </van-card>
    <van-row type="flex" justify="space-around">
      <van-col span="6">
        <p class="one">{{ houseInfo.price }}/月</p>
        <p class="two">租金</p>
      </van-col>
      <van-col span="6">
        <p class="one">{{ houseInfo.roomType }}</p>
        <p class="two">房型</p>
      </van-col>
      <van-col span="6">
        <p class="one">{{ houseInfo.size }}平米</p>
        <p class="two">面积</p>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" class="myrow">
      <van-col span="9">
        <p class="three">装修：精装</p>
        <p class="four">楼层：{{ houseInfo.floor }}</p>
      </van-col>
      <van-col span="9">
        <p class="three">朝向{{ houseInfo.oriented }}</p>
        <p class="four">类型：普通住宅</p>
      </van-col>
    </van-row>
    <van-cell>
      <template #title>
        <span class="custom-title">小区：</span>
        <span>天山星城</span>
      </template>
    </van-cell>
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
    >
      <bm-info-window :position="center" :show="true">
        <p>{{ houseInfo.community }}</p>
      </bm-info-window>
    </baidu-map>
    <van-cell title="房屋配套" class="linestyle" square />
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        :text="item.name"
        v-for="(item, index) in isIcon"
        :key="index"
      >
        <template #icon>
          <span :class="item.icon"></span>
        </template>
      </van-grid-item>
    </van-grid>
    <van-cell title="房源概况" class="linestyle" square />
    <van-cell
      center
      title="王女士"
      icon="http://liufusong.top:8080/img/avatar.png"
      class="househost"
    >
      <template #label>
        <span class="iconfont icon-renzheng">已认证房主</span>
      </template>
      <template>
        <van-button plain type="primary" size="small">发消息</van-button>
      </template>
    </van-cell>
    <div class="housetext">
      <p>
        1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
        2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
        3.人车分流，环境优美。
        4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
      </p>
    </div>
    <van-cell title="猜你喜欢" class="linestyle" square />
    <collection-list :list="houseList"></collection-list>
    <van-row class="tabber" type="flex" align="center">
      <van-col span="8" @click="changeCollection">
        <span class="iconfont icon-shoucang" v-if="!isCollection"></span>
        <span class="iconfont icon-shoucang1" v-else></span>
        <span>收藏</span>
      </van-col>
      <van-col span="8">在线咨询</van-col>
      <van-col span="8">电话预约</van-col>
    </van-row>
  </div>
</template>

<script>
import {
  requestHouseDetailApi,
  requestHouseIsApi,
  delCollectionApi,
  addCollectionApi,
} from "@/api";
import CollectionList from "@/components/CollectionList.vue";
export default {
  name: "Detail",
  data() {
    return {
      id: this.$route.query.id,
      houseInfo: {
        price: "暂无数据",
      },
      center: { lng: 0, lat: 0 }, //经纬度
      zoom: 18, //地图展示级别
      support: [
        {
          name: "洗衣机",
          icon: "iconfont icon-xiyiji",
        },
        {
          name: "电视",
          icon: "iconfont icon-dianshiji",
        },
        {
          name: "天然气",
          icon: "iconfont icon-meiqitianranqi",
        },
        {
          name: "冰箱",
          icon: "iconfont icon-bingxiang",
        },
        {
          name: "暖气",
          icon: "iconfont icon-nuanqi",
        },
        {
          name: "宽带",
          icon: "iconfont icon-kuandai",
        },
        {
          name: "空调",
          icon: "iconfont icon-kongtiao",
        },
        {
          name: "沙发",
          icon: "iconfont icon-shafa",
        },
        {
          name: "热水器",
          icon: "iconfont icon-reshuiqi",
        },
        {
          name: "衣柜",
          icon: "iconfont icon-yigui",
        },
      ],
      isIcon: [
        {
          name: "暂无数据",
          icon: "iconfont",
        },
      ],
      houseList: [
        {
          desc: "三室/100/东/北京财富中心",
          houseCode: "bc9c727e-4701-c1a7",
          houseImg: "/uploads/upload_45bd1bd40ca52e329018a62053b9d50d.png",
          price: 5000,
          tags: ["近地铁"],
          title: "御景湾",
        },
        {
          desc: "一室/12/东/尚海湾豪庭",
          houseCode: "9351c930-aaa4-145f",
          houseImg: "/uploads/upload_d13abd247effc429feaefa2092d9fe9e.JPG",
          price: 12212,
          tags: ["近地铁", "商圈"],
          title: "碧桂园",
        },
        {
          desc: "一室/1234/东/天元公寓",
          houseCode: "d1bdf34d-638e-cedc",
          houseImg: "/uploads/upload_b987fdd5b3d7c98ef426ace243b796cf.jpeg",
          price: 1111,
          tags: ["附近学校", "生活圈"],
          title: "天下华府",
        },
      ],
      isCollection: "",
    };
  },
  components: {
    CollectionList,
  },
  created() {
    this.getHouseDetail();
    this.getHouseIs();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getHouseDetail() {
      const { data } = await requestHouseDetailApi(this.id);
      this.houseInfo = data.body;
      if (this.houseInfo.supporting.length) {
        this.isIcon.splice(0, 1);
        this.houseInfo.supporting.forEach((isItem) => {
          this.support.forEach((ele) => {
            if (ele.name === isItem) {
              this.isIcon.push(ele);
            }
          });
        });
      }
      this.center.lat = data.body.coord.latitude;
      this.center.lng = data.body.coord.longitude;
    },
    async getHouseIs() {
      const res = await requestHouseIsApi(
        this.$store.state.tokenObj.token,
        this.id
      );
      this.isCollection = res.data.body.isFavorite;
    },
    async changeCollection() {
      if (this.isCollection) {
        try {
          await delCollectionApi(this.$store.state.tokenObj.token, this.id);
          this.isCollection = false;
          this.$toast.success("取消收藏成功");
        } catch (e) {
          this.$toast.fail("取消收藏失败，请重试");
        }
      } else {
        try {
          await addCollectionApi(this.$store.state.tokenObj.token, this.id);
          this.isCollection = true;
          this.$toast.success("添加收藏成功");
        } catch (e) {
          this.$toast.fail("添加收藏失败，请重试");
        }
      }
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #21b97a;
}
:deep(.van-nav-bar .van-icon) {
  color: #fff;
}
:deep(.van-nav-bar__title) {
  color: white;
  font-size: 0.4267rem;
  font-weight: normal;
}
.my-swipe {
  width: 100%;
  height: 6.6rem;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
:deep(.van-card__desc) {
  color: #000;
  font-size: 0.4267rem;
  margin: 0.4rem 0 0.6rem;
}
:deep(.van-tag--plain) {
  color: #39becd;
  background-color: #e1f5f8;
  height: 0.533rem;
  margin-right: 0.08rem;
}
:deep(.van-tag--plain::before) {
  border: none;
}
:deep(.van-card) {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
:deep(.van-row) {
  height: 2.1867rem;
  text-align: center;
  padding: 0.4rem 0;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
:deep(.van-row .one) {
  font-size: 0.48rem;
  font-weight: bold;
  color: #fa5741;
}
:deep(.van-row .two) {
  font-size: 0.3733rem;
  color: #999;
}
:deep(.van-row .three) {
  text-align: left;
  font-size: 0.3467rem;
  color: #999;
  margin-bottom: 0.25rem;
}
:deep(.van-row .four) {
  text-align: left;
  font-size: 0.3467rem;
  color: #000;
}
:deep(.custom-title) {
  color: #999;
}
.bm-view {
  width: 100%;
  height: 200px;
}
:deep(.linestyle) {
  border-bottom: 1px solid #ccc;
  font-size: 0.4rem;
  font-weight: 600;
}
:deep(.househost .van-cell__left-icon) {
  height: unset;
  font-size: 1.42667rem;
  margin-right: 0.2667rem;
}
:deep(.househost .icon-renzheng) {
  font-size: 0.32rem;
  color: #fa5741;
}
.housetext {
  margin: 0.2667rem 0 0.2667rem 0.2667rem;
}
.housetext p {
  font-size: 14px;
  color: #333;
  width: 100%;
  line-height: 1.6;
}
.tabber {
  position: sticky;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  padding: unset;
  border-bottom: unset;
  height: 1.4rem;
  font-size: 0.4533rem;
  color: #999;
  border-top: 1px solid #ccc;
}
:deep(.tabber .van-col--8) {
  height: 100%;
  line-height: 1.4rem;
  border-right: 1px solid #ccc;
}
:deep(.tabber .van-col--8:first-child .icon-shoucang) {
  font-size: 0.5333rem;
}
:deep(.tabber .van-col--8:last-child) {
  border-right: none;
  color: #fff;
  background-color: #21b97a;
}
</style>
