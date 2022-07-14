<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click='reverse'>逆转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "HELLO, WORLD",
    };
  },
  methods: {
    reverse(){
        this.message=this.message.split("").reverse().join("");
    }
  }
};
</script>