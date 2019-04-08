<template>
  <nav class="tabs bd-t">
    <li class="tab">
      <router-link to="/home">
        <i class="iconfont icon-shouye2 active"></i>
        <span>首页</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/category">
        <i class="iconfont icon-liebiao"></i>
        <span>分类</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/purchase">
        <i class="iconfont icon-gongzi"></i>
        <span>值得买</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/cart">
        <i class="iconfont icon-gouwucheman"></i>
        <span>购物车</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/mine">
        <i class="iconfont icon-wode"></i>
        <span>我的当当</span>
      </router-link>
    </li>
  </nav>
</template>

<script>
export default {
  name: "app-tabs"
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  .tab a {
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
      display: inline-block;
      font-size: 22px;
    }
    span {
      font-size: 12px;
    }
  }
}
.bd-t::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 1px;
  background: #e0e0e0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.active{
    color: red;
}
</style>
