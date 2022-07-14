<template>
  <div>
    <!-- 1. 绑定键盘按下事件.enter - 回车 
         2. .esc修饰符 - 取消键-->
    <input type="text" @keyup.enter="up">
    <hr>
    <input type="text" @keydown.esc="down">
  </div>
</template>

<script>
export default {
 methods: {
   up(){
    alert(111)
   },
   down(){
    alert(666)
   }
 }
}
</script>