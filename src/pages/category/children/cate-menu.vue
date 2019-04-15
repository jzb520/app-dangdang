<template>
  <div class="cate-menu">
    <app-scroll class="scroll">
    <div v-for="(item,index) in value[`${dex}`].banner" :key="item.index">
        <img :src="item.img" width="100%" alt>
      </div>
      <div v-for="(text,index) in value[`${dex}`].mini_banner" :key="text.index">
        <span>
          {{text.promo_title}}
          {{text.promo_text}}
        </span>
      </div>
      <div v-for="(pile,index) in value[`${dex}`].pile" :key="pile.index">
        <div class="kuang" v-for="(group,index) in pile.group" :key="group.index">
          <h1 class="biaoti">{{group.group_name}} {{group.more}}</h1>
          <ul class="cate-goodList">
            <li v-for="(detail,index) in  group.detail" :key="detail.index">
              <img :src="detail.icon" alt>
              <span>{{detail.title}}</span>
              
            </li>
          </ul>
        </div>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import BScroll from "../../../components/Iscroll";
export default {
  name: "cate-menu",
  components: {
    [BScroll.name]: BScroll
  },
  props: {
    value: Array,
    dex:Number
  }
};
</script>

<style lang="scss" scoped>
.cate-menu {
  width: 70%;
  position: absolute;
  right: 0px;
  top: 44px;
  bottom: 49px;
  background: #fff;
  .scroll {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0px;
  }
}
.kuang {
 
  .biaoti {
       padding: 10px;
  box-sizing: border-box;
    border-top: 8px solid#eff4fa;
  }
  .cate-goodList {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;
     padding: 10px;
    box-sizing: border-box;
    li {
      width: 33.3%;
      padding: 5px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
  }
}
</style>

