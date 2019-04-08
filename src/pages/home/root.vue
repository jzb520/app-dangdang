<template>
  <div class="home page">
    <app-header></app-header>
    <home-center/>
  </div>
</template>

<script>
import Header from "./children/home-header";
import Center from "./children/home-center";
export default {
  components: {
    [Header.name]: Header,
    [Center.name]: Center
  }
};
</script>

<style lang="scss" scoped>
</style>
