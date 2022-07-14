<template>
  <div>
    请输入用户名L：<input
      type="text"
      :value="username"
      @input="changeUname"
    /><br /><br />
    自我介绍：<textarea
      name="introduce"
      id=""
      cols="30"
      rows="10"
      :value="text"
      @change="changeText"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "zs",
      text: "",
    };
  },
  methods: {
    changeUname(e) {
      this.username = e.target.value;
    },
    changeText(e) {
      this.text = e.target.value;
    },
  },
};
</script>
