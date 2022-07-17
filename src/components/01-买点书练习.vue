<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul v-for="(item, index) in arr" :key="index">
      <li>{{ item.name }} <button @click="addNum(index)">买书</button></li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(item, index) in arr" :key="index">
        <td>{{ index }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.count }}</td>
        <td>{{ item.count * item.price }}</td>
      </tr>
    </table>
    <p>总价格为:{{ sum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
      sum: 0,
    };
  },
  methods: {
    addNum(val) {
      this.arr[val].count++;
    },
  },
  watch: {
    arr: {
      deep: true,
      handler() {
        return (this.sum = this.arr.reduce((sum, item) => {
          return (sum += item.price * item.count);
        }, 0));
      },
    },
  },
};
</script>


