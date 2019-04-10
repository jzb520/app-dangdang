<template>
  <div class="navType3">
    <div class="promotion">
      <h1>
        <img src="../../../../public/images/category.png" alt>
      </h1>
      <a href>更多 ></a>
      <div class="promotion-content"></div>
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
  }
}
</style>

