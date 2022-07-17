<template>
  <div class="content" @click="choice">
    <span><img :src="imgUrl" alt="" /></span>
    <h3 :class="{ changeColor: color }">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "chooseDog",
  data() {
    return {
      color: false,
    };
  },
  //   props: {
  //     dogs: {
  //       type: Object,
  //       required: true,
  //       default: () => {
  //         return {};
  //       },
  //     },
  //   },
  props: ["imgUrl", "name", "index"],
  methods: {
    choice() {
      this.color = true;
      this.$emit("choose", this.index);
    },
  },
};
</script>

<style scoped>
.content {
  width: 32%;
  display: inline-block;
  /* margin-right: 50px; */
}

.content h3 {
  text-align: center;
}

img {
  width: 100%;
  height: 500px;
}

.changeColor {
  background-color: skyblue;
}
</style>