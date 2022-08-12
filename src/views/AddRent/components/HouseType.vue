<template>
  <van-picker
    show-toolbar
    :columns="typeColumns"
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
    typeColumns() {
      return this.columns.map((item) => item.label);
    },
  },
  methods: {
    onConfirm(value, index) {
      this.$parent.$parent.houseType = value;
      this.$parent.$parent.isPopShowH = false;
      this.$parent.$parent.houseTypeCode = this.columns[index].value;
    },

    onCancel() {
      this.$parent.$parent.isPopShowH = false;
    },
  },
};
</script>

<style></style>
