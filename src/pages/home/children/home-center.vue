<template>
  <div class="home-center" ref="top">
    <!-- <app-scroll class="scroll" ref="top"> -->
    <home-swiper class="swiper"/>
    <div class="bigimg">
      <img
        src="http://img63.ddimg.cn/upload_img/00702/B/1242x524_02-1554192101.jpg"
        width="100%"
        alt
      >
    </div>
    <!-- menu菜单 -->
    <ul class="hoem-menu">
      <li v-for="item in menuList" :key="item.name">
        <router-link to="/home/cate">
          <img :src="item.picUrl" width="100%" alt>
        </router-link>
      </li>
    </ul>
    <div class="home-tiao"></div>
    <!-- 品牌街 -->
    <div class="home-pin">
      <img
        src="http://img61.ddimg.cn/upload_img/00528/000000/biaoti-101-1523330132.jpg"
        width="100%"
        alt
      >
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <ul class="home-gai">
          <li v-for="(i,index) in pinList" :key="i.index">
            <img :src="i.picurl" width="100%" alt>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="home-gai">
          <li v-for="(i,index) in pinList" :key="i.index">
            <img :src="i.picurl" width="100%" alt>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="home-gai">
          <li v-for="(i,index) in pinList" :key="i.index">
            <img :src="i.picurl" width="100%" alt>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
    <!-- 推荐列表 -->
    <ul class="homelist">
      <li v-for="(item,index) in homelist" :key="index">
        <img :src="item.image_url" width="100%" alt>
        <p>
          <span class="namespan">{{item.name}}</span>
        </p>
        <p>
          <span v-for="(value,index) in item.productTags" :key="index">
            <span>{{value.name}}</span>
          </span>
        </p>
        <p>￥{{item.price}}</p>
      </li>
    </ul>
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <img src="http://touch.m.dangdang.com/images/go-top.png" width="100%" alt>
      </button>
    </back-to-top>
    <!-- </app-scroll> -->
    <!-- 回到顶部  -->
    <!-- <goTop  :tops='scrollTop'></goTop> -->
    <div id="goTop" @click="backTop" v-show="toTop">
      <img src="http://touch.m.dangdang.com/images/go-top.png" width="100%" alt>
    </div>
  </div>
</template>

<script>
import Swiper from "./home-swiper";
import BScroll from "../../../components/Iscroll";
import GoTop from "../../../components/GoTop";
import BackToTop from "vue-backtotop";

import { mapState } from "vuex";
export default {
  name: "home-center",
  components: {
    [Swiper.name]: Swiper,
    [BScroll.name]: BScroll,
    [GoTop.name]: GoTop,
    [BackToTop.name]: BackToTop
  },
  computed: {
    ...mapState({
      homelist: state => state.home.hoemList
    })
  },
  data() {
    return {
      toTop: true,
      menuList: [
        {
          name: "畅销榜",
          picUrl:
            "http://img61.ddimg.cn/upload_img/00702/B/icon-4.4-1-1-1554377183.png"
        },
        {
          name: "新书榜",
          picUrl:
            "http://img62.ddimg.cn/upload_img/00705/B/icon-2-2-4.9-1554718637.png"
        },
        {
          name: "童书榜",
          picUrl:
            "http://img63.ddimg.cn/upload_img/00705/B/icon-3-4.9-1554718637.png"
        },
        {
          name: "今日促销",
          picUrl:
            "http://img61.ddimg.cn/upload_img/00705/S/iCON-4.1-4-1553869779.png"
        },
        {
          name: "49元5件",
          picUrl:
            "http://img61.ddimg.cn/upload_img/00702/Y/iCON-5-tj-3.26-1553591894.png"
        },
        {
          name: "服装",
          picUrl:
            "http://img61.ddimg.cn/upload_img/00528/000/000000-1552895541.jpg"
        },
        {
          name: "当当超市",
          picUrl:
            "http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png"
        },
        {
          name: "拼团",
          picUrl:
            "http://img63.ddimg.cn/upload_img/00528/000/pingtuan-1554258296.jpg"
        },
        {
          name: "领券中心",
          picUrl:
            "http://img62.ddimg.cn/upload_img/00528/000/9zhongxin-1545121233.png"
        },
        {
          name: "电子书",
          picUrl:
            "http://img61.ddimg.cn/upload_img/00528/000/248x248-1551957460.jpg"
        }
      ],
      pinList: [
        { picurl: "http://img59.ddimg.cn/79140050670139_y.jpg" },
        { picurl: "http://img50.ddimg.cn/79140050670140_y.jpg" },
        { picurl: "http://img51.ddimg.cn/79140050670141_y.jpg" },
        { picurl: "http://img52.ddimg.cn/79140050670142_y.jpg" },
        { picurl: "http://img59.ddimg.cn/79140050670149_y.jpg" },
        { picurl: "http://img59.ddimg.cn/79140050670159_y.jpg" },
        { picurl: "http://img57.ddimg.cn/79140050670167_y.jpg" },
        { picurl: "http://img59.ddimg.cn/79140050670169_y.jpg" },
        { picurl: "http://img50.ddimg.cn/79140050670170_y.jpg" },
        { picurl: "http://img51.ddimg.cn/79140050670171_y.jpg" }
      ]
    };
  },
  methods: {
    backTop() {
      console.log(this.$refs.top);

      let scrollTops = (this.$refs.top.scrollTop = 0);
      console.log(scrollTops);
    }
  },
  mounted() {
    let _this = this;
    window.addEventListener("scroll", function() {
      let top =
        this.$refs.top.scrollTop ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset; //要做兼容 在模拟器能正常获取scrolltop在微信h5页面和手机的浏览器页面一直为0
      console.log(top);
      if (top == 0 || top < 0) {
        _this.scrollTag = false;
      } else {
        _this.scrollTag = true;
      }
    });
  },
  created() {
    //请求数据
    this.$store.dispatch("home/gethomeListAction");
  }
};
</script>

<style lang="scss" scoped>
.home-center {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
  overflow-y: auto;
  .scroll {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0px;
  }
  .bigimg img {
    display: block;
  }
  .hoem-menu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      flex: 1 1 20%;
      img {
        display: block;
      }
    }
  }
  .home-tiao {
    width: 100%;
    height: 5px;
    background: #ececec;
  }
  .home-gai {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      flex: 1 1 20%;
      img {
        display: block;
      }
    }
  }
  .homelist {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1 1 50%;
      background: #ffffff;
      border: 2px solid #ececec;
      padding: 5px;
      box-sizing: border-box;
      .namespan {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        height: 30px;
      }
    }
  }
  .btn-to-top {
    width: 40px;
    height: 40px;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
  }
}
.but {
  position: fixed;
  bottom: 60px;
  left: 40px;
}
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


