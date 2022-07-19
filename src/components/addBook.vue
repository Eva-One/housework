<template>
  <div class="panel panel-primary">
    <div class="panel-body form-inline">
      <div class="input-group">
        <div class="input-group-addon">书名</div>
        <input
          type="text"
          class="form-control"
          id="iptBookname"
          placeholder="请输入书名"
          v-model="name"
        />
      </div>
      <div class="input-group">
        <div class="input-group-addon">作者</div>
        <input
          type="text"
          class="form-control"
          id="iptAuthor"
          placeholder="请输入作者"
          v-model="author"
        />
      </div>
      <div class="input-group">
        <div class="input-group-addon">出版社</div>
        <input
          type="text"
          class="form-control"
          id="iptPublisher"
          placeholder="请输入出版社"
          v-model="publisher"
        />
      </div>
      <button id="btnAdd" class="btn btn-primary" @click="add">添加</button>
    </div>
  </div>
</template>

<script>
import eventBus from "./eventBus/index";
export default {
  name: "AddBook",
  data() {
    return {
      name: "",
      author: "",
      publisher: "",
    };
  },
  methods: {
    add() {
      if (this.name.trim() && this.author.trim() && this.publisher.trim()) {
        this.$axios({
          method: "POST",
          url: "/api/addbook",
          data: {
            bookname: this.name,
            author: this.author,
            publisher: this.publisher,
          },
        }).then((res) => {
          alert(res.data.msg);
          this.$emit("render");
          this.name = "";
          this.author = "";
          this.publisher = "";
        });
      } else {
        return alert("请输入完整");
      }
    },
  },
  mounted() {
    eventBus.$on("displayData", (val) => {
      this.name = val[0].bookname;
      this.author = val[0].author;
      this.publisher = val[0].publisher;
    });
  },
};
</script>

<style scoped>
.panel-primary {
  border-color: #fff;
}
</style>