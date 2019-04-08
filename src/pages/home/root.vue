<template>
  <div class="home page">
    <app-header></app-header>
    <h1>首页</h1>
  </div>
</template>

<script>
import Header from "./children/home-header";
export default {
  components: {
    [Header.name]: Header
  }
};
</script>

<style>
</style>
