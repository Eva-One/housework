<template>
  <div class="content">
    <span><img :src="imgUrl" alt="" /></span>
    <h3>{{ text }}</h3>
  </div>
</template>

<script scoped>
import img from "../assets/01.jpg";
export default {
  name: "likeDogs",
  data() {
    return {
      imgUrl: img,
      text: "没有狗狗照片，就看一下美景吧",
    };
  },
};
</script>

<style>
.content {
  display: inline-block;
  margin-right: 50px;
}

.content h3 {
  text-align: center;
}

img {
  width: 500px;
}
</style>