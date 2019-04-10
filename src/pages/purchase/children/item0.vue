<template>
  <div class="item0">
    <div v-for="item in data" :key="item.id" class="item">
      <div class="ban">畅销榜第{{item.num}}名</div>
      <a href="/" class="more">更多></a>
      <a href="/" class="img">
        <img :src="item.productImageUrl" alt>
       <div class="content">
          <span class="title">{{item.productName}}</span>
          <p>
            <span class="sale">￥{{item.salePrice}}</span>
            <span class="origin">￥{{item.originPrice}}</span>
          </p>
           <div class="icon">
            <van-icon name="chat-o">{{item.commentCount}}</van-icon>
            <van-icon name="star">{{item.averageScore}}</van-icon>
            <van-icon name="shopping-cart-o"></van-icon>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "item0",
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.item0 {
  .ban {
    width: 100px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    line-height: 25px;
    background-image: linear-gradient(133deg, #f296bd, #ee3b31);
    border-bottom-right-radius: 10px;
  }
  .more {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #a1a1a1;
    font-size: 12px;
  }
  .img {
     width: 100%;
     display: block;
    padding: 10px;
    position: relative;
    img {
      width: 30%;
    }
     .content {
      position: absolute;
      top: 0px;
      left: 115px;
      margin-left: 10px;
      box-sizing: border-box;
      padding: 10px;
      .title {
           display: block;
        font-size: 14px;
        width: 220px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        display: block;
        width: 150px;
        height: 50px;
        margin-top: 30px;
        .sale {
          color: red;
        }
        .origin {
          font-size: 12px;
          margin-left: 15px;
          text-decoration: line-through;
        }
      }
        .icon {
      position: absolute;
      bottom: 0;
      right: 0;
      .van-icon{
          font-size: 10px;
          margin:10px;
      }
      .van-icon-shopping-cart-o{
          width: 20px;
          height: 20px;
          padding: 5px;
          border:  solid 1px #eeee;
          font-size: 18px;
          color: red;
          border-radius: 5px;

      }
    }
    }
  }
}
</style>

