<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="当前城市" />
      <van-cell :title="local" />

      <van-index-anchor index="热门城市" />
      <van-cell :title="item.label" v-for="item in hotCity" :key="item.value" />

      <div v-for="item in A" :key="item.id">
        <van-index-anchor :index="item.id" />
        <van-cell
          :title="value.label"
          v-for="(value, index) in item.label"
          :key="index"
        />
      </div>
      <!-- <van-index-anchor :index="item.id" v-for="item in A" :key="item.id">
        <van-cell
          :title="value.label"
          v-for="(value, index) in item.label"
          :key="index"
        />
      </van-index-anchor> -->
    </van-index-bar>
  </div>
</template>

<script>
import { requestHotCityApi, requestCityApi } from "@/api/index";
export default {
  data() {
    return {
      local: "上海",
      indexList: [
        ...["#", "热"],
        ...[...Array(26)].map((v, i) => String.fromCharCode(i + 65)),
      ],
      // classIndex: [...Array(26)].map((v, i) => String.fromCharCode(i + 65)),
      hotCity: [],
      allCity: [],
      newCity: {},
      A: [],
    };
  },
  mounted() {
    this.requestHotCity();
    this.requestCity();
  },

  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/layout/home",
      });
    },
    async requestHotCity() {
      try {
        const res = await requestHotCityApi();
        this.hotCity = res.data.body;
      } catch (e) {
        console.log(e);
      }
    },
    async requestCity() {
      try {
        const res = await requestCityApi({
          level: 1,
        });
        this.allCity = res.data.body;
        for (let i = 97; i <= 122; i++) {
          this.allCity.forEach((ele) => {
            if (
              !this.newCity[String.fromCharCode(i)] &&
              ele.short.split("")[0] == String.fromCharCode(i)
            ) {
              return (this.newCity[String.fromCharCode(i)] = [ele]);
            } else if (
              this.newCity[String.fromCharCode(i)] &&
              ele.short.split("")[0] == String.fromCharCode(i)
            ) {
              return (this.newCity[String.fromCharCode(i)] = [
                ...this.newCity[String.fromCharCode(i)],
                ele,
              ]);
            }
          });
        }
        for (let key in this.newCity) {
          this.A.push({ label: this.newCity[key], id: key.toUpperCase() });
        }
        console.log(this.A);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #59b77f;
}

.van-nav-bar__title {
  color: white;
}
</style>>