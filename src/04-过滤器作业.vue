<template>
  <div>
    <h1>国内网站：粉丝数量{{ fansNum | units(true) }}</h1>
    <h1>国外网站：粉丝数量{{ fansNum | units(false) }}</h1>
    <h1>时间：{{ timeOld | timeFormate("-") }}</h1>
    <h1>时间：{{ timeOld | timeFormate("/") }}</h1>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      fansNum: 1876986,
      timeOld: 1636450540055,
    };
  },
  filters: {
    units(val, choice) {
      if (choice) {
        return val / 10000 + "万";
      } else {
        return val / 1000 + "千";
      }
    },
    timeFormate(val, sign) {
      const date = new Date(val);
      return moment(date).format("YYYY" + sign + "MM" + sign + "DD");
    },
  },
};
</script>