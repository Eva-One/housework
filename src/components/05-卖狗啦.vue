<template>
  <div class="content">
    <span><img :src="dogs.dogImgUrl" alt="" /></span>
    <h3>{{ dogs.dogName }}</h3>
  </div>
</template>

<script>
export default {
  name: "saleDog",
  props: {
    dogs: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.content {
  width: 33%;
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
</style>