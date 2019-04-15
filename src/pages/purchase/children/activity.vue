<template>
  <div class="activity">
    <div v-for="(item, index) in bannerlist" :key="item.id">
      <component :is="`navType${item.navType}`" :data="item.list" :index="index"/>
    </div>
  </div>
</template>

<script>
import navType0 from "./navType0";
import navType1 from "./navType1";
import navType2 from "./navType2";
import navType3 from "./navType3";
import navType4 from "./navType4";
import navType5 from "./navType5";
import { mapState } from "vuex";
export default {
  name: "activity",
  components: {
    [navType0.name]: navType0,
    [navType1.name]: navType1,
    [navType2.name]: navType2,
    [navType3.name]: navType3,
    [navType4.name]: navType4,
    [navType5.name]: navType5,
  },
  computed: {
    ...mapState({
      bannerlist: state => state.purchase.bannerList
    })
  },
  created() {
    //请求轮播图数据
    this.$store.dispatch("purchase/getBannerListAction");
  }
};
</script>

<style lang="scss" scoped>
.activity{
  width: 100%;
}
</style>

