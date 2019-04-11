<template>
    <div class="scroll-warp" ref='scroll'>
            <slot/>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
    name: 'scroll',
    mounted(){
        let scroll = new Bscroll(this.$refs.scroll,{
            click:true,
            scrollX:true,
            scrollY:false,
        });
        scroll.on('scrollStart',()=>{
            scroll.refresh();
        })
    }
}
</script>

 <style lang="scss" scoped>
.scroll-warp{
  overflow: hidden;
}
</style>
