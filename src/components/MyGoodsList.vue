<template>
  <div>
    <table class="table table-bordered table-stripped">
      <thead>
        <tr>
          <!-- <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th> -->
          <slot name="title"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in goodsList" :key="item.id">
          <!-- <td>{{ item.id }}</td>
          <td>{{ item.goods_name }}</td>
          <td>{{ item.goods_price }}</td>
          <td>{{ item.tags }}</td>
          <td><button class="btn btn-danger btn-sm">删除</button></td> -->
          <slot name="content" :row="item"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    goodsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>