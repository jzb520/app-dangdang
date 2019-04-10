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
}
}
</script>

<style>

</style>
