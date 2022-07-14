<template>
    <div>
        <a v-bind:href="webUrl">去百度</a> <br>
        <img :src="imgUrl" alt=""><br>
        <img :src="picUrl" alt="">
    </div>
</template>

<script>
import img1 from './assets/logo.png'
export default {
    name:'App',
    data(){
        return{
            webUrl:'http://baidu.com/',
            imgUrl:'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
            picUrl:img1,//JS不能使用‘./assets/logo.png’作为地址
        }
    }
}
</script>