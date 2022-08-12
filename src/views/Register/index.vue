<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="account"
        name="账号"
        placeholder="请输入账号"
        :rules="accountRl"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="passwordRl"
      />
      <div style="margin: 16px">
        <van-button
          square
          block
          type="info"
          native-type="submit"
          color="#21b97a"
          >登 录</van-button
        >
      </div>
    </van-form>
    <p>还没有账号，去注册～</p>
  </div>
</template>

<script>
import { accountRl, passwordRl } from "@/views/Register/rules";
import { requestLoginApi } from "@/api/index";
export default {
  name: "Register",
  data() {
    return {
      account: "",
      password: "",
      accountRl,
      passwordRl,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/layout/user",
      });
    },
    async onSubmit() {
      try {
        const res = await requestLoginApi(this.account, this.password);
        if (res.status === 200) {
          this.$store.commit("SET_TOKEN", res.data.body);
        }
        this.$router.go(-1);
        this.$toast(res.data.description);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #21b97a;
}
:deep(.van-nav-bar .van-icon) {
  color: #fff;
}
:deep(.van-nav-bar__title) {
  color: white;
  font-size: 0.48rem;
  font-weight: normal;
}
.van-form {
  margin-top: 0.5333rem;
}
:deep(.van-cell) {
  height: 1.6rem;
  font-size: 0.4533rem;
  line-height: 1.12rem;
  margin-bottom: 0.1333rem;
}
:deep(.van-button--square) {
  height: 1.3333rem;
}
:deep(.van-button__text) {
  font-size: 0.48rem;
}
:deep(.van-cell__value) {
  position: relative;
}
:deep(.van-field__error-message) {
  position: absolute;
  top: 0;
  right: 0;
}
p {
  margin-top: 0.6667rem;
  font-size: 0.3733rem;
  text-align: center;
  color: #666;
}
</style>
