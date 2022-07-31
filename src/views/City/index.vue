<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <van-index-bar :index-list="indexList">
      <div v-for="item in A" :key="item.id">
        <van-index-anchor :index="item.id" />
        <van-cell
          :title="value.label"
          v-for="(value, index) in item.label"
          :key="index"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { requestHotCityApi, requestCityApi } from "@/api/index";
export default {
  data() {
    return {
      indexList: [],
      hotCitys: [],
      allCity: [],
      newCity: {},
      A: [],
    };
  },
  async mounted() {
    this.$toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    await this.requestHotCity();
    await this.requestCity();
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async requestHotCity() {
      try {
        const res = await requestHotCityApi();
        this.hotCitys = res.data.body;
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
        this.indexList.push(...["#", "热"]);
        this.A.push({ label: [{ label: "上海" }], id: "当前城市" });
        this.A.push({ label: this.hotCitys, id: "热门城市" });
        for (let key in this.newCity) {
          this.A.push({ label: this.newCity[key], id: key.toUpperCase() });
          this.indexList.push(key.toUpperCase());
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #21b97a;
}

:deep(.van-icon) {
  color: #fff;
}

:deep(.van-nav-bar__title) {
  color: white;
  font-size: 0.48rem;
  font-weight: normal;
}
</style>
>
