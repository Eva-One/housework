<template>
  <div>
    <van-card
      v-for="(item, index) in list"
      :key="index"
      currency=""
      :desc="item.desc"
      :title="item.title"
      :thumb="`http://liufusong.top:8080${item.houseImg}`"
      @click="jumpDetail(item.houseCode)"
    >
      <template #price> {{ item.price }}<span>元/月</span> </template>
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item, index) in item.tags"
          :key="index"
          >{{ item }}</van-tag
        >
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "CollectionList",
  props: {
    list: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
  methods: {
    jumpDetail(val) {
      this.$router.push({
        path: "/detail",
        query: {
          id: val,
        },
      });
    },
  },
};
</script>

<style scoped>
:deep(.van-card__title) {
  font-size: 0.4rem;
  width: 6.5333rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 0.1333rem;
}
:deep(.van-card) {
  padding: 0.48rem 0 0.0267rem 0.1333rem;
  border-bottom: 1px solid #ccc;
}
:deep(.van-card:not(:first-child)) {
  margin-top: 0;
}
:deep(.van-card__content) {
  padding-left: 0.32rem;
}
:deep(.van-card__desc) {
  color: #b0b3b4;
  margin-bottom: 0.1333rem;
}
:deep(.van-tag--plain) {
  color: #39becd;
  background-color: #e1f5f8;
  height: 0.533rem;
}
:deep(.van-tag--plain::before) {
  border: none;
}
:deep(.van-card__price) {
  font-size: 0.4267rem;
  color: red;
  margin-bottom: 0.32rem;
}
:deep(.van-card__price span) {
  font-size: 0.32rem;
}
</style>
