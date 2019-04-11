<template>
  <div class="navType3">
    <div class="promotion">
      <h1>
        <img src="../../../../public/images/category.png" alt>
      </h1>
      <a href>更多 ></a>
      <scroll style="width:350px">
        <ul>
          <li v-for="item in data" :key="item.id" class="lunbo">
            <img :src="item.productImageUrl" alt class="lunbo-img">
            <span class="title">{{item.productName}}</span>
            <p>
              <span class="sale">￥{{item.salePrice}}</span>
              <br>
              <span class="origin">￥{{item.originPrice}}</span>
            </p>
          </li>
          <li class="text">
            <a href="">加载更多</a>
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "navType3",
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.promotion {
  width: 100%;
  height: 230px;
  background: url("http://z.dangdang.com/static/img/pintuan-background.5ea2bd3.png")
    no-repeat;
   background-color: #fff;
  background-size: contain;
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
  ul {
      width: 750px;
      margin-top:10px;
      .lunbo {
        width: 100px;
        height: 150px;
        background: #fff;
        padding: 5px 0;
        border-radius: 10%;
        box-shadow: 0 0.03rem 0.12rem #d7d7d7;
        float: left;
        margin: 3px 5px;
        .lunbo-img {
          width: 80px;
          height: 80px;
          margin: 0 auto;

        }
        .title {
          display: block;
          font-size: 14px;
          width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0 auto;
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
      .text a{
        text-align: center;
          line-height: 100px
      }
    }
}
</style>

