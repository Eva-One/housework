<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in tabList"
      :key="index"
      :class="{ current: isCurrent == index }"
      @click="switchTab(index)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCurrent: 0,
    };
  },
  props: {
    tabList: {
      type: Array,
      default: () => [],
      // validator: () => {},
    },
  },
  methods: {
    switchTab(val) {
      this.isCurrent = val;
      this.$emit("switchList", val);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>