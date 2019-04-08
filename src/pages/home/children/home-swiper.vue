<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img :src='image' width="100%">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "home-swiper",
  data() {
    return {
      images: ["http://img51.ddimg.cn/121110042569561_y.jpg", 
      "http://img58.ddimg.cn/79140050650868_y.jpg",
      "http://img52.ddimg.cn/182190058761362_y.jpg",
      "http://img60.ddimg.cn/upload_img/00785/ts0401_0408/1242x366-1553844361.jpg",
      "http://img60.ddimg.cn/upload_img/00749/xin/1242x366-1554106236.jpg",
      "http://img59.ddimg.cn/42360108939739_y.jpg",
      "http://img60.ddimg.cn/upload_img/00702/B/1242x366_01-1554192101.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper img{
    display: block;
}
</style>

