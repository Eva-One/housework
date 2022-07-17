<template>
  <tr>
    <td><input type="checkbox" v-model="list.checked" /></td>
    <td>{{ list.name }}</td>
    <td>{{ list.price }}</td>
    <td>
      <button @click="subNumber">-</button> {{ list.num }}
      <button @click="addNumber">+</button>
    </td>
    <td>{{ list.num * list.price }}</td>
    <td><button @click="delData">删除</button></td>
  </tr>
</template>

<script>
export default {
  name: "goodsList",
  props: {
    list: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
    index: {
      type: Number,
    },
  },
  methods: {
    subNumber() {
      this.$emit("sub", this.index);
    },
    addNumber() {
      this.$emit("add", this.index);
    },
    delData() {
      this.$emit("del", this.index);
    },
  },
};
</script>

