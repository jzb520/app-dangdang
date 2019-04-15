​
<template>
  <div id="goTop" @click="goTop" v-show="toTop">
    <img src="http://touch.m.dangdang.com/images/go-top.png" width="100%" alt>
  </div>
</template>
<script>
  let stop = false;                                
  let timer = null;	
export default {
  name: "goTop",
  props: {
    tops:[Number,String]
  },
  data() {
    return {
      toTop: true
    };
  },
  watch: {
    dataStop: {
      handler: function() {
        console.log("我变了" + this.dataStop);
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.needToTop); //滚动事件监听
    });
  },
  methods: {
    goTop: function() {
      回到顶部方法
      clearInterval(timer);
      timer = setInterval(function() {
        console.log(Number(this.tops));
        // let curHeight = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset // 得到当前高度
        let curHeight = this.tops;
        var now = curHeight;
        var speed = (0 - now) / 7; // 随着高度减速
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        console.log(`当前的高度应该是:` + curHeight);
        console.log("我是零你也那我没办法");
        if (curHeight === 0) {
          //当前高度为零,停止这次计时器
          clearInterval(timer); // 
        }
        document.documentElement.scrollTop = curHeight + speed; //直接给高度赋值,会调用needtotop方法
        document.body.scrollTop = curHeight + speed; //谷歌的
        stop = false; // A
        console.log("回到顶部一次");
      }, 30);
    },
    needToTop: function() {
      let curHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      let viewHeight = document.documentElement.clientHeight;
      if (curHeight > viewHeight + 100) {
        this.toTop = true; //赋值是为了按钮的v-show='toTop'
      } else {
        this.toTop = false;
      }
      if (stop) {
        //STOP
        clearInterval(timer); //C2
        console.log("我没了");
      }
      stop = true; //B
      console.log("执行了一次");
    }
  }
};
</script>
 
<style scoped>
#goTop {
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
#goTop:hover .goTopIcon {
  color: rgba(51, 153, 255, 1);
}
.goTopIcon {
  font-size: 20px;
  color: rgba(51, 153, 255, 0.8);
}
</style>
 
​