<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="datas.name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="datas.age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="datas.gender">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="flag ? add() : modify()">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in dataArr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="del">删除</button>
            <button @click="change(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataArr: [],
      datas: {
        name: "",
        age: 0,
        gender: "",
      },
      flag: false,
      num: 0,
    };
  },
  methods: {
    modify() {
      if (!this.datas.name || !this.datas.gender) return alert("请输入完整");
      this.dataArr.push(JSON.parse(JSON.stringify(this.datas)));
      this.datas.name = "";
      this.datas.gender = "";
    },
    del(val) {
      this.dataArr.splice(val, 1);
    },
    change(val) {
      this.flag = !this.flag;
      this.num = val;
    },
    add() {
      this.dataArr[this.num].name = this.datas.name;
      this.dataArr[this.num].age = this.datas.age;
      this.dataArr[this.num].gender = this.datas.gender;
    },
  },
};
</script>

