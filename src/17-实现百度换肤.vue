<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="./assets/01.jpg"
        alt=""
        @mouseenter="switchPic(1)"
        @click="setBgc"
      />
      <img
        src="./assets/02.jpg"
        alt=""
        @mouseenter="switchPic(2)"
        @click="setBgc"
      />
      <img
        src="./assets/03.jpg"
        alt=""
        @mouseenter="switchPic(3)"
        @click="setBgc"
      />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="currentPicUrl" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img1 from "./assets/01.jpg";
import img2 from "./assets/02.jpg";
import img3 from "./assets/03.jpg";
export default {
  data() {
    return {
      currentPicUrl: img1,
    };
  },
  methods: {
    switchPic(val) {
      this.currentPicUrl = { 1: img1, 2: img2, 3: img3 }[val];
    },
    setBgc(e) {
      document.body.style.background = `url(${e.target.src}) no-repeat 0 0 /cover`;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>