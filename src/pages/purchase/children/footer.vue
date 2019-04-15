<template>
  <div class="footer">
    <ul class="footer-nav">
      <li>登录</li>
      <li>注册</li>
      <li>TOP</li>
    </ul>
    <div class="footer-content">
      <span>提建议</span>
      <span>电脑版</span>
      <span>帮  助</span>
    </div>
    <p>Copyright ©2018 北京当当网信息技术有限公司</p>
    <p>北京市朝阳区北三环东路8号，100028</p>
  </div>
</template>

<script>
export default {
  name: "toom"
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: absolute;
  height: 150px;
  bottom: -150px;
  left: 0;
  background: #ffffff;
  .footer-nav {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    height: 40px;
    line-height: 40px;
    position: relative;
    li {
      float: left;
      width: 50px;
      text-align: center;
      font-size: 14px;
      &:nth-child(3) {
        position: absolute;
        right: 10px;
        top: 0;
      }
    }
  }
  .footer-content {
    height: 40px;
    line-height: 40px;
   text-align: center;
   span{
     font-size: 14px;
     margin-left:10px;
    }
  }
  p {
    text-align: center;
    color: #999;
    font-size: 10px;
  }
}
</style>

