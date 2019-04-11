<template>
    <div class="scroll-warp" ref='scroll'>
        <div class="scroll">
            <slot/>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
    name: 'app-scroll',
    mounted(){
        let scroll = new Bscroll(this.$refs.scroll,{
            click:true,
            // scrollX:true,
           
        });
        scroll.on('scrollStart',()=>{
            scroll.refresh();
        })
    }
}
</script>

<style scoped>
.scroll-warp{
  overflow: hidden;
}
</style>
