<template>
    <div class="home-center">
        <home-swiper class="swiper"/>
        <div class="bigimg">
            <img src="http://img63.ddimg.cn/upload_img/00702/B/1242x524_02-1554192101.jpg" width="100%" alt="">
        </div>
    </div>
</template>

<script>
import Swiper from './home-swiper'
export default {
    name:'home-center',
    components: {
        [Swiper.name]: Swiper
    }

} 
</script>

<style lang="scss" scoped>
.home-center{
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
    background: red;
    .bigimg img{
        display: block;
    }
}


</style>


