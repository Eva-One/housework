<template>
  <div>
    <!-- 需求：点击按钮 实现p标签 显示/隐藏动态切换 
    v-show="变量/表达式"
    v-if="变量/表达式">
    -->
    <p v-show='isShow'>我是v-show指令</p>
    <button @click="isShow = !isShow">click me hide</button>
    <br />
    <p v-if="isIf">我是v-if指令</p>
    <button @click="isIf = !isIf">click me if</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isIf: false,
    };
  },
};
</script>