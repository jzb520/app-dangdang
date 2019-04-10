<template>
    <header class="app-header ">
        <van-icon class='back' name="arrow-left" @click='backAction'></van-icon>
         <h1 class="title">
             {{title}}
        </h1>
        <van-icon class="dian" name='ellipsis'></van-icon>

    </header>
</template>

<script>
export default {
    name:'app-header',
    props:{
        title:{
            type:String,
            default:'值得买'
        },
    },
    //返回上一页
    methods:{
        backAction(){
            this.$router.back();
        }
    }

}
</script>

<style lang="scss" scoped>
.app-header{
    z-index: 4;
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    background:#fff;
    border-bottom: 1px #ccc solid;
    transform:sclae(50) ;
     .title{
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 44px;
        font-size: 16px;
        font-weight: bold;
    }
    .back.van-icon{
        position: absolute;
        width: 44px;
        height: 44px;
        top: 0;
        left: 5px;
        text-align: center;
        line-height: 44px;
        font-size: 25px;
    }
    .dian.van-icon{
        position: absolute;
        width:20px;
        height: 44px;
        top: 0;
        right: 15px;
        line-height: 44px;
        font-size: 25px;
    }
}
</style>

