<template>
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th>id</th>
        <th>书名</th>
        <th>作者</th>
        <th>出版社</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in books" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.bookname }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.publisher }}</td>
        <td>
          <a href="#" @click="del(item.id)">删除</a>
          <a href="#" @click="display(item.id)">详情</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import eventBus from "./eventBus/index";
export default {
  name: "BookList",
  props: {
    books: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      displayVal: [],
    };
  },
  methods: {
    del(val) {
      this.$axios({
        url: "/api/delbook",
        params: {
          id: val,
        },
      }).then((res) => {
        alert(res.data.msg);
        this.$emit("del");
      });
    },
    display(val) {
      this.displayVal = this.books.filter((ele) => ele.id == val);
      eventBus.$emit("displayData", this.displayVal);
    },
  },
};
</script>

<style scoped>
.table {
  width: 98%;
  margin: 0 auto;
}
</style>