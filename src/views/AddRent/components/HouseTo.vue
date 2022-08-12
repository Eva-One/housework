<template>
  <van-picker
    show-toolbar
    :columns="toColumns"
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
    toColumns() {
      return this.columns.map((item) => item.label);
    },
  },
  methods: {
    onConfirm(value, index) {
      this.$parent.$parent.houseTo = value;
      this.$parent.$parent.houseToCode = this.columns[index].value;
      this.$parent.$parent.isPopShowC = false;
    },

    onCancel() {
      this.$parent.$parent.isPopShowC = false;
    },
  },
};
</script>

<style></style>
