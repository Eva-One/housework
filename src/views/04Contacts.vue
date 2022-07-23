<template>
  <div>
    <ul>
      <li>
        <span @click="choose('/contacts/all_contacts')" ref="a"
          >all_contacts</span
        >
        <!-- <router-link to="/contacts/all_contacts">all_contacts</router-link> -->
      </li>
      <li>
        <span @click="choose('/contacts/alice')" ref="b">Alice</span>
        <!-- <router-link to="/contacts/alice">Alice</router-link> -->
      </li>
      <li>
        <span @click="choose('/contacts/bob')" ref="c">Bob</span>
        <!-- <router-link to="/contacts/bob">Bob</router-link> -->
      </li>
    </ul>
    <button @click="change">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    choose(val) {
      this.$router.push({
        path: val,
      });
    },
    change() {
      const sign = Math.floor(Math.random() * 3);
      switch (sign) {
        case 0:
          this.$refs.a.click();
          break;
        case 1:
          this.$refs.b.click();
          break;
        case 2:
          this.$refs.c.click();
          break;
      }
    },
  },
};
</script>

<style>
</style>