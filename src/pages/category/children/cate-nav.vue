<template>
  <div class="cate-nav">
    <app-scroll class="scroll">
      <ul class="nav-List">
        <li v-for="(item,index) in data" :key="item.id"
        @click="getindex(index)"
        >{{item.title}}</li>
      </ul>
    </app-scroll>
  </div>
</template>

<script>
import BScroll from "../../../components/Iscroll";
export default {
  name: "cate-nav",
  components: {
    [BScroll.name]: BScroll
  },
  props: {
    data: Array
  },
  methods: {
      getindex(index){
          this.$emit('input',index)
      }
  }
};
</script>
<style lang="scss" scoped>
.cate-nav {
  width: 30%;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  background: #ffffff;
  border-right: 8px solid #ececec;
  box-sizing: border-box;
  .scroll {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0px;
  }
  .nav-List{
     line-height: 40px;
     text-align: center;
  }
}
</style>
