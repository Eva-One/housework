<template>
  <van-picker
    show-toolbar
    :columns="floorColumns"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    floorColumns() {
      return this.columns.map((ele) => ele.label);
    },
  },
  methods: {
    onConfirm(value, index) {
      this.$parent.$parent.houseFloor = value;
      this.$parent.$parent.houseFloorCode = this.columns[index].value;
      this.$parent.$parent.isPopShowL = false;
    },

    onCancel() {
      this.$parent.$parent.isPopShowL = false;
    },
  },
};
</script>

<style></style>
