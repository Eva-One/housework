<template>
  <div>
    <MyTable :list="listArr">
      <template v-slot:header>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template v-slot:content="scope">
        <td>{{ scope.text.id }}</td>
        <td>{{ scope.text.goods_name }}</td>
        <td>{{ scope.text.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.text.inputVisible"
            @blur="scope.text.inputVisible = false"
            ref="displayData"
            v-model="scope.text.inputValue"
            @keyup.enter="addTag(scope.text)"
            @keyup.esc="scope.text.inputVisible = false"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="changeDisplay(scope.text.id)"
            style="margin-right: 5px"
          >
            +Tag
          </button>
          <span
            class="badge badge-warning"
            v-for="(item, index) in scope.text.tags"
            :key="index"
            style="margin-right: 5px"
            >{{ item }}</span
          >
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            @click="del(scope.text.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  data() {
    return {
      listArr: [],
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.render();
  },
  methods: {
    render() {
      this.$axios({
        url: "/api/goods",
      })
        .then((res) => {
          this.listArr = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(val) {
      const num = this.listArr.findIndex((ele) => ele.id == val);
      this.listArr.splice(num, 1);
    },
    changeDisplay(val) {
      const num = this.listArr.findIndex((ele) => ele.id == val);
      this.listArr[num].inputVisible = true;

      this.$nextTick(() => {
        // console.log(this.$refs);
        this.$refs.displayData.focus();
      });
    },
    addTag(val) {
      if (!val.inputValue.trim()) {
        val.inputValue = "";
        return alert("please enter");
      }
      val.tags.push(val.inputValue);
      val.inputValue = "";
    },
  },
};
</script>

<style scoped>
</style>