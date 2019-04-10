<template>
  <div class="navType5">
    <div class="promotion">
      <h1>为你推荐</h1>
      <div class="promotion-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navType5",
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.promotion {
  width: 100%;
  height: 230px;
  background: url("http://z.dangdang.com/static/img/9.9-background.d4afbba.png")
    no-repeat;
  background-size: cover;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  h1 {
    font-size: 18px;
    text-align: center;
    color: #fff;
    font-weight: 600;
    line-height: 30px;
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

