<template>
  <div>
    <van-image
      width="100%"
      src="http://liufusong.top:8080/img/profile/bg.png"
    />
    <div class="login">
      <div class="pic">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" />
      </div>
      <p>游客</p>
      <van-button type="info" size="small" color="#57b77e" @click="jumpRegister"
        >去登录</van-button
      >
    </div>
    <van-grid :column-num="3" :border="false" :icon-size="20" :gutter="12">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="credit-pay" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="smile-comment-o" text="联系我们" />
    </van-grid>
    <van-image src="http://liufusong.top:8080/img/profile/join.png" />
  </div>
</template>

<script>
export default {
  methods: {
    jumpRegister() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 3.52rem;
  left: 50%;
  z-index: 99;
  transform: translateX(-50%);
  width: 85%;
  height: 4.4rem;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
  text-align: center;
}

.login .pic {
  position: absolute;
  display: flex;
  top: -0.8533rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1.8667rem;
  height: 1.8667rem;
  border-radius: 0.9333rem;
  background-color: #f4f5f4;
}

.login .pic img {
  width: 1.6rem;
  height: 1.6rem;
  margin: auto;
}

.login p {
  margin-top: 1.5rem;
  margin-bottom: 0.3rem;
  font-size: 0.3467rem;
  color: #333;
}

.van-grid {
  margin-top: 3.5rem;
}

:deep(.van-grid-item__text) {
  font-size: 0.3467rem;
}

.van-image {
  margin-top: 0.4rem;
  display: flex;
  justify-content: center;
}

:deep(.van-image__img) {
  width: 92%;
}
</style>
