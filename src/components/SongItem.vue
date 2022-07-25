<template>
  <van-cell center :title="name" :label="`${author}-${name}`">
    <template #right-icon>
      <van-icon name="play-circle-o" size="0.6rem" @click="play(id)" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    play(val) {
      this.$router.push({
        path: "/play",
        query: {
          id: val,
        },
      });
    },
  },
};
</script>

<style>
</style>