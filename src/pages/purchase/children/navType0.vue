<template>
  <div class="navType0">
    <div class="promotion">
      <h1>
        <img src="../../../../public/images/jike.png" alt>
      </h1>
      <a href>更多 ></a>
      <div class="promotion-content">
        <van-swipe :width="100" :height="200" :show-indicators=false>
          <van-swipe-item v-for="item in data" :key="item.id">
            <div class="lunbo">
              <img :src="item.productImageUrl" alt>
              <span class="title">{{item.productName}}</span>
              <p>
                <span class="sale">￥{{item.salePrice}}</span>
                <br>
                <span class="origin">￥{{item.originPrice}}</span>
              </p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navType0",
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.promotion {
  width: 100%;
  height: 230px;
  background: url("http://z.dangdang.com/static/img/9.9-background.d4afbba.png")
    no-repeat;
       background-color:#fff; 
  background-size: cover;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  h1 {
    img {
      width: 40%;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
  a {
    color: #fff;
    display: block;
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 12px;
  }
  .promotion-content {
    position: absolute;
    top: 40px;
    left: 0px;
    padding: 0 10px;
    width: 100%;
    .van-swipe-item {
      margin-top:10px;
       margin-left:10px;
      .lunbo {
        width: 100px;
        background: #fff;
        padding: 5px 0;
        border-radius: 10%;
        img {
          width: 100px;
          height: 100px;
          margin:0 auto;
        }
        .title {
          display: block;
          font-size: 14px;
          width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin:0 auto;
        }
        p {
          display: block;
          width: 100px;
          height: 50px;
          text-align: center;
          .sale {
            color: red;
          }
          .origin {
            font-size: 12px;
            margin-left: 15px;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>

