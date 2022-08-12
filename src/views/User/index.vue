<template>
  <div>
    <van-image
      class="bgpic"
      v-if="!isLogin"
      width="100%"
      src="http://liufusong.top:8080/img/profile/bg.png"
    />
    <van-image
      class="bgpic"
      v-else
      width="100%"
      :src="`http://liufusong.top:8080${userInfo.avatar}`"
    />
    <div class="login">
      <div class="pic">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" />
      </div>
      <p v-if="!isLogin">游客</p>
      <p v-else>{{ userInfo.nickname }}</p>
      <van-button
        v-if="!isLogin"
        type="info"
        size="small"
        color="#57b77e"
        @click="jumpRegister"
        >去登录</van-button
      >
      <van-button
        v-else
        type="info"
        size="small"
        color="#57b77e"
        @click="logout"
        >退出</van-button
      >
      <p v-if="isLogin" class="edit">编辑个人资料</p>
    </div>
    <van-grid :column-num="3" :border="false" :icon-size="20" :gutter="12">
      <van-grid-item icon="star-o" text="我的收藏" @click="jumpCollect" />
      <van-grid-item icon="wap-home-o" text="我的出租" @click="jumpRent" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="credit-pay" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="smile-comment-o" text="联系我们" />
    </van-grid>
    <van-image src="http://liufusong.top:8080/img/profile/join.png" />
  </div>
</template>

<script>
import { requestUserApi } from "@/api";
export default {
  name: "User",
  data() {
    return {
      userInfo: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    jumpRegister() {
      this.$router.push({
        path: "/register",
      });
    },
    jumpCollect() {
      this.$router.push("/collection");
    },
    jumpRent() {
      this.$router.push("/rent");
    },
    async getUser() {
      if (this.$store.state.tokenObj.token) {
        const res = await requestUserApi(this.$store.state.tokenObj.token);
        this.userInfo = res.data.body;
      }
    },
    logout() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否确定退出?",
          width: "280px",
          confirmButtonText: "退出",
          confirmButtonColor: "#418ce2",
        })
        .then(() => {
          this.$store.commit("SET_TOKEN", {});
        })
        .catch(() => {});
    },
  },
  computed: {
    isLogin() {
      return !!this.$store.state.tokenObj.token;
    },
  },
};
</script>

<style scoped>
.bgpic {
  margin-top: 0;
}
.login {
  position: absolute;
  top: 3.52rem;
  left: 50%;
  z-index: 99;
  transform: translateX(-50%);
  width: 85%;
  height: 5rem;
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
  background-color: #fff;
  margin-top: 8.5rem;
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

.bgpic {
  margin-top: 0;
  position: absolute;
  top: 0;
  z-index: -2;
}

.login .edit {
  margin-top: 0.5rem;
  font-size: 0.32rem;
  color: grey;
}
</style>
