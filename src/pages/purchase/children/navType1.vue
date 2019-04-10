<template>
  <div class="navType1">
   <div v-for="item in data" :key="item.id" class="item">
      <component :is="`item${item.type}`" :data="data"/>
    </div>
  </div>
</template>

<script>
import item0 from './item0'
import item1 from './item1'
import item2 from './item2'
import item3 from './item3'
export default {
  name: "navType1",
  components:{
    [item0.name]: item0,
    [item1.name]: item1,
    [item2.name]: item2,
    [item3.name]: item3,
    
  },
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.navType1 {
  position: relative;
  background:#eee;
  .item{
    margin-top:8px;
    padding: 8px 0;
    background: #fff;
  }
  
}
</style>

