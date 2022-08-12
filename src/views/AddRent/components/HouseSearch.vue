<template>
  <div>
    <van-search
      v-model="keywords"
      show-action
      placeholder="请输入小区或地址"
      @input="onSearch"
      @cancel="onCancel"
      input-align="center"
    />
    <van-cell-group>
      <van-cell
        :value="item.communityName"
        v-for="(item, index) in list"
        :key="index"
        @click="$emit('chooseCommunity', item.communityName)"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: "",
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onSearch() {
      this.$emit("search", this.keywords);
    },
    onCancel() {
      this.$parent.$parent.isPopShowX = false;
    },
  },
};
</script>

<style></style>
