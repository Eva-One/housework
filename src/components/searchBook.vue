<template>
  <div class="panel-body form-inline">
    <div class="input-group">
      <div class="input-group-addon">书名</div>
      <input
        type="text"
        class="form-control"
        id="iptBookname"
        placeholder="请输入书名"
        v-model="bookName"
        @keyup.enter="search"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBook",
  data() {
    return {
      bookName: "",
    };
  },
  methods: {
    search() {
      if (!this.bookName.trim()) {
        alert("请输入书名");
        this.bookName = "";
      }
      this.$emit("search", this.bookName);
    },
  },
};
</script>

<style>
</style>