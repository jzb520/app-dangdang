<template>
  <div class="cate page">
    <cate-header></cate-header>
    <cate-nav :data='dataList' v-model="selectIndex"></cate-nav>
    <cate-menu :value='dataList' :dex='selectIndex'></cate-menu>
  </div>
</template>

<script>
import cateHeader from "./children/cate-header";
import cateNav from "./children/cate-nav";
import cateMenu from "./children/cate-menu";
import {mapState} from 'vuex'
export default {
  components: {
    [cateHeader.name]: cateHeader,
     [cateNav.name]: cateNav,
     [cateMenu.name]: cateMenu,
  },
  data(){
    return{
      selectIndex:0
    }
  },
  computed: {
    ...mapState({
      dataList: state => state.category.newData
    })
  },
  method: {
    selectIndex(index){
      this.selectIndex = index;
    }
  },
  created() {
      //请求左边栏数据
      this.$store.dispatch('category/getMenuDataAction')
  }
};
</script>

<style lang="scss" scoped>
.page{
    background: #eff4fa;
}
</style>

