<template>
  <div class="home page">
    <app-header></app-header>
    <home-center/>
    
  </div>
</template>

<script>
import Header from "./children/home-header";
import Center from "./children/home-center";
import GoTop from "../../components/GoTop";
export default {
  components: {
    [Header.name]: Header,
    [Center.name]: Center,
    [GoTop.name]: GoTop
  }
};
</script>

<style lang="scss" scoped>
</style>
