<template>
  <div>
    <!-- 表格标题区域 -->
    <!-- <thead>
      <tr>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </tr>
    </thead> -->
    <!-- 表格主体区域 -->
    <!-- <tbody> -->
    <MyGoodsList :goodsList="list">
      <template v-slot:title>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template v-slot:content="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            v-focus
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-show="scope.row.inputVisible"
            @blur="scope.row.inputVisible = false"
            v-model="scope.row.inputValue"
            @keyup.enter="addTag(scope.row)"
            @keyup.esc="scope.row.inputVisible = false"
          />
          <button
            style="margin-right: 5px"
            class="btn btn-primary btn-sm add-tag"
            v-show="!scope.row.inputVisible"
            @click="scope.row.inputVisible = !scope.row.inputVisible"
          >
            +Tag
          </button>
          <span
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            style="margin-right: 5px"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delGood(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyGoodsList>
    <!-- </tbody> -->
  </div>
</template>

<script>
import MyGoodsList from "../components/MyGoodsList.vue";
export default {
  name: "MyTable",
  components: {
    MyGoodsList,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    })
      .then((res) => {
        this.list = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    delGood(id) {
      const index = this.list.findIndex((ele) => {
        return ele.id == id;
      });
      this.list.splice(index, 1);
    },
    addTag(val) {
      if (!val.inputValue.trim()) {
        val.inputValue = "";
        return alert("Please enter");
      } else {
        val.tags.push(val.inputValue.trim());
        val.inputValue = "";
      }
    },
  },
};
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>