<!---- 04-喜欢小狗狗嘛 ----->
<!----- <template>
  <div>
    <likeDog></likeDog>
    <likeDog></likeDog>
  </div>
</template>

<script>
import likeDog from "./components/04-喜欢小狗狗嘛.vue";
export default {
  components: {
    likeDog,
  },
};
</script>  ------->

<!---- 05-卖狗啦 ------>
<!----
<template>
  <div>
    <saleDog
      v-for="(item, index) in dogArr"
      :key="index"
      :dogs="item"
    ></saleDog>
  </div>
</template>

<script>
import saleDog from "./components/05-卖狗啦.vue";
export default {
  data() {
    return {
      dogArr: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=4281755285,2537866618&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=1352142999,3966120423&fm=253&fmt=auto&app=138&f=JPEG?w=525&h=500",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=836810080,3324855224&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=482",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=3985540655,73974364&fm=253&fmt=auto&app=138&f=JPG?w=500&h=847",
          dogName: "萨摩耶",
        },
      ],
    };
  },
  components: {
    saleDog,
  },
};
</script>
----->

<!---- 06.选择喜欢的修狗 ------->
<!---- <template>
  <div class="main">
    <chooseDog
      v-for="(item, index) in dogArr"
      :key="index"
      :imgUrl="item.dogImgUrl"
      :name="item.dogName"
      v-on:choose="chooseDogs"
      :index="index"
    ></chooseDog>
    <div class="like">
      喜欢的修狗:
      <ul v-for="(item, index) in like" :key="index">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import chooseDog from "./components/06-选择喜欢的修狗.vue";
export default {
  data() {
    return {
      dogArr: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=4281755285,2537866618&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=1352142999,3966120423&fm=253&fmt=auto&app=138&f=JPEG?w=525&h=500",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=836810080,3324855224&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=482",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=3985540655,73974364&fm=253&fmt=auto&app=138&f=JPG?w=500&h=847",
          dogName: "萨摩耶",
        },
      ],
      like: [],
    };
  },
  components: {
    chooseDog,
  },
  methods: {
    chooseDogs(val) {
      // console.log(111);
      this.like.push(this.dogArr[val].dogName);
    },
  },
};
</script>

<style scoped>
main {
  position: relative;
}

.like {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
}

.like ul {
  padding-left: 10px;
}
</style>
-------->

<!------ 07-购物车 ------->
<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="choose" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <goodsList
          v-for="(item, index) in goodList"
          :key="index"
          :list="item"
          @sub="subNum"
          @add="addNum"
          @del="delDatas"
          :index="index"
        ></goodsList>
      </tbody>
      <goodTotal :numTotal="addTotal"></goodTotal>
    </table>
  </div>
</template>

<script>
import goodsList from "./components/07-购物车.vue";
import goodTotal from "./components/07-购物车统计.vue";
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  components: {
    goodsList,
    goodTotal,
  },
  computed: {
    addTotal() {
      return this.goodList.reduce((sum, item) => {
        if (item.checked) {
          return (sum += item.num * item.price);
        } else {
          return sum;
        }
      }, 0);
    },
    choose: {
      set(val) {
        this.goodList.forEach((ele) => (ele.checked = val));
      },
      get() {
        return this.goodList.every((ele) => {
          return ele.checked;
        });
      },
    },
  },
  methods: {
    subNum(val) {
      this.goodList[val].num--;
    },
    addNum(val) {
      this.goodList[val].num++;
    },
    delDatas(val) {
      this.goodList.splice(val, 1);
    },
  },
};
</script>