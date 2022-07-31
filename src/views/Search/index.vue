<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <van-icon name="map-marked" size="0.6rem" color="white" />
      </template>
      <template #label> <span @click="jumpCity">上海</span> </template>
      <template #left>
        <van-icon name="arrow-left" @click="jumpHome" />
      </template>
    </van-search>
    <van-dropdown-menu active-color="#21b97a">
      <van-dropdown-item title="区域">
        <van-area title="" :area-list="areaList" />
      </van-dropdown-item>
      <van-dropdown-item title="方式"
        ><van-area title="" :area-list="methodList" :columns-num="1" />
      </van-dropdown-item>
      <van-dropdown-item title="租金"
        ><van-area title="" :area-list="areaList" :columns-num="1" />
      </van-dropdown-item>

      <van-dropdown-item title="筛选" @open="showPopup" class="myScreen">
        <van-popup
          v-model="show"
          position="right"
          :style="{ width: '70%', height: '100%' }"
          duration="0.2"
          >内容</van-popup
        >
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: "",
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
        },
      },
      methodList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
      },
    };
  },
  methods: {
    onSearch() {},
    jumpHome() {
      this.$router.push({
        path: "/layout/home",
      });
    },
    jumpCity() {
      this.$router.push({
        path: "/city",
      });
    },
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.van-search {
  width: 100%;
  background-color: #21b97a;
  position: fixed;
  top: 0;
  z-index: 99;
  color: white;
}

.van-search__content {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

:deep(.van-icon-arrow-left) {
  padding-right: 0.2667rem;
}

.van-dropdown-menu {
  height: 0.8rem;
  margin-top: 1.468rem;
}

:deep(.van-dropdown-menu__bar) {
  height: 100%;
}

:deep(.van-picker) {
  position: relative;
}
:deep(.van-picker__toolbar) {
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 8;
  height: 1.3333rem;
}
:deep(.van-picker__toolbar .van-picker__cancel) {
  flex: 1;
  font-size: 0.48rem;
  color: #21b97a;
}
:deep(.van-picker__toolbar .van-picker__confirm) {
  flex: 2;
  font-size: 0.48rem;
  background-color: #21b97a;
  color: #fff;
}
:deep(.myScreen .van-dropdown-item) {
  z-index: 2005;
}
:deep(.myScreen .van-dropdown-item > .van-overlay) {
  display: none;
}
</style>
