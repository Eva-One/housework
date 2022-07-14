<template>
  <div>
     <h2>v-model指令的实现</h2>
     <input type="text" :value='username' @input='setValue'><br><br>
     <textarea :value='content' @change='setValue1'></textarea>
  </div>
   <!-- 思考改的值是什么 
   实现v-model
   数据到视图
   视图到数据
   1. value  v-bind
   2. 输入事件 输入过程中 实时拿到dom input 里的value
   -->
</template>

<script>
export default {
  data(){
    return {
        username:'',
        content: '',
    }
  },
  methods:{
    setValue(e){
        this.username = e.target.value
    },
    setValue1(e){
        this.content = e.target.value
    }
  }
}
</script>

