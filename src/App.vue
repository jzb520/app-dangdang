<template>
  <div id="app">
    <!-- 根页面 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- tabs切换 -->
    <app-tabs></app-tabs>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue';
export default {
  components:{
    [Tabs.name]: Tabs,
  },
  created(){
      //检查用户是否登录过
      this.$store.dispatch('user/checkLogin')
  }
}
</script>

<style>

</style>
