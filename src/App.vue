<template>
  <div>
    <SearchBook @search="searchbook"></SearchBook>
    <BookList :books="list" @del="render"></BookList>
    <AddBook @render="render"></AddBook>
  </div>
</template>

<script>
import SearchBook from "./components/searchBook.vue";
import AddBook from "./components/addBook.vue";
import BookList from "./components/bookList.vue";
export default {
  name: "App",
  components: {
    SearchBook,
    BookList,
    AddBook,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.render();
  },
  methods: {
    searchbook(val) {
      this.list = this.list.filter((ele) => {
        return ele.bookname == val;
      });
    },
    render() {
      this.$axios({
        url: "/api/getbooks",
      }).then((res) => {
        // console.log(res);
        this.list = res.data.data;
      });
    },
  },
};
</script>



