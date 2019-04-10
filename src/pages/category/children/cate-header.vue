<template>
  <header class="app-header border-bottom">
    <i class="iconfont icon-xiangyou1 i"></i>
    <span class="span">
      <i class="iconfont icon-sousuo"></i>
      <span>科技图书</span>
    </span>
    <i class="iconfont icon-liebiao i"></i>
  </header>
</template>

<script>
export default {
  name: "cate-header"
};
</script>

<style lang="scss" scoped>
.app-header {
  padding: 0 8px;
  box-sizing: border-box;
  height: 44px;
  background: #ffffff;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .span {
    width: 265px;
    height: 32px;
    border-radius: 15px;
    color: #b5bec5;
    background-color: #e8ecf0;
    line-height: 32px;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .i{
      font-size: 28px;
      transform:rotate(180deg);
  }
}
</style>
