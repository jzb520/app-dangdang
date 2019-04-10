<template>
  <div class="mine page">
    <app-scroll class="scroll">
      <div class="user-basic">
        <!-- 登录后显示 -->
        <div v-if="isLogin" class="header">
          <div class="wrap">
            <div class="img-url">
              <img :src="userInfo.image_url" alt>
            </div>
            <div class="title">
              <h3 class="test">
                {{userInfo.userName}}
                <div class="v0">
                  <img src="../../assets/v0.png">
                </div>
              </h3>
              <div class="dir">
                <span>余额 0.00</span>
                <span>礼品卡 0.00</span>
                <span>积分 0.00</span>
              </div>
            </div>
            <div class="me">
              <img src="../../assets/personal.png" alt>
            </div>
          </div>
        </div>
        <!-- //如果没有登录即显示 -->
        <a v-else @click="goWeiboLoginpage()">登录/注册</a>
      </div>
      <!-- 未登录和登录状态都显示 -->
      <div class="user-stat border-bottom">
          <router-link class="stat" to="/collect">
            <span>0</span>
            <p>收藏的商品</p>
          </router-link>
        <router-link class="stat" to="/focusOn">
          <span>0</span>
          <p>关注的店铺</p>
        </router-link>
        <router-link class="stat" to="/footprint">
          <span>0</span>
          <p>我的足迹</p>
        </router-link>
      </div>
      <div class="dd border-bottom">
        <span>
          <i></i>
          我的订单
        </span>
        <span>
          查看全部购买商品
          <i></i>
        </span>
      </div>
      <div class="pageMenu">
        <i>待付款</i>
        <i>待收货</i>
        <i>退换货</i>
      </div>
      <div class="vip">
        <span>会员中心</span>
        <van-icon name="arrow"/>
      </div>
      <div class="meList">
        <div class="me-lj m border-bottom">
          <span>我的礼券</span>
          <van-icon name="arrow"/>
        </div>
        <div class="me-jf m border-bottom">
          <span>积分抵现</span>
          <van-icon name="arrow"/>
        </div>
        <div class="me-dzs m border-bottom">
          <span>我的电子书</span>
          <van-icon name="arrow"/>
        </div>
        <div class="me-lpk m border-bottom">
          <span>我的礼品卡</span>
          <van-icon name="arrow"/>
        </div>
        <div class="me-shdz m">
          <span>收货地址</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="rob">
        <div class="rob-g rob-item border-bottom">
          <span>GAP开业庆典，3件4折</span>
          <van-icon name="arrow"/>
        </div>
        <div class="rob-r rob-item border-bottom">
          <span>人文经典必读，精选书每满100减50</span>
          <van-icon name="arrow"/>
        </div>
        <div class="rob-y rob-item border-bottom">
          <span>阅读丈量世界，好书每满100减40</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="kf">
        <span>客服反馈</span>
        <van-icon name="arrow"/>
      </div>


      <!-- 商品列表页 -->
      <page-list></page-list>

      <div v-if="isLogin" class="end">
        <p>
          <span>{{userInfo.userName}}</span>
          <i>退出</i>
        </p>
        <span>TOP</span>
      </div>
    </app-scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import BScroll from "../../components/Iscroll";
import { api } from "../../ajax/index";
import { mapState } from "vuex";
import pageList from './children/pageList'
import Vant from 'vant';
export default {
  components: {
    [BScroll.name]: BScroll,
    [pageList.name]:pageList
  },
  data() {
    return {
      username: ""
    };
  },
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin,
      userInfo: state => state.user.userInfo
    })
  },
  methods: {
    goWeiboLoginpage() {
      let path = api.SINA_LOGIN_URL;
      let app_Key = "3913954525";
      let redirect_uri = "http://129.204.72.71:3000/";
      // http://localhost:8080/mine
      path += `?client_id=${app_Key}&response_type=code&redirect_uri=${redirect_uri}&forcelogin=true`;
      window.location.href = path;
    },
    // goCollectAction(){
    //   window.location.href = '/collect';
    // },
  },
  created() {
    //判断当前页面是否是登录后跳转回来的
    if (this.$route.query.code) {
      //将code告诉后台，进行用户登录
      this.$store.dispatch("user/login", {
        type: "sina",
        code: this.$route.query.code
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mine {
  width: 100%;
  .scroll {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 49px;
  }
  .user-basic {
    width: 100%;
    height: 100px;
    background: url(../../assets/user-bg.jpg) no-repeat center center;
    background-position: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: block;
      width: 100px;
      height: 30px;
      border: 1px solid #fff;
      border-radius: 15px;
      text-align: center;
      line-height: 30px;
      color: #fff;
    }
    .header {
      width: 100%;
      height: 100%;
      .wrap {
        width: 100%;
        height: 100%;
        padding: 15px 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        position: relative;
        .img-url {
          width: 70px;
          height: 70px;
          img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
          }
        }
        .title {
          flex: 1;
          color: #fff;
          margin-left: 15px;
          .test {
            font-size: 14px;
            display: flex;
            justify-content: left;
            .v0 {
              width: 17px;
              height: 17px;
              margin-left: 5px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .dir {
            font-size: 10px;
            line-height: 30px;
            position: relative;
            &::before {
              content: "";
              display: block;
              width: 40px;
              height: 12px;
              background: url(../../assets/sign_tag.gif) no-repeat center;
              background-size: 100% 100%;
              position: absolute;
              left: 120px;
              top: -4px;
            }
            span {
              padding: 0 3px;
            }
          }
        }
        .me {
          width: 78px;
          height: 26px;
          position: absolute;
          bottom: 10px;
          right: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .user-stat {
    width: 100%;
    background: #fff;
    display: flex;
    padding: 8px 0;
    box-sizing: border-box;
    align-items: center;
    .stat {
      flex: 1;
      height: 100%;
      text-align: center;
      font-size: 12px;
      position: relative;
      &::before {
        content: "";
        display: black;
        width: 1px;
        height: 25px;
        background: #ddd;
        position: absolute;
        left: 0;
        top: 5px;
      }
      &:first-of-type::before {
        display: none;
      }
    }
  }
  .dd {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 12px;
    color: #333;
    background: #fff;
    box-sizing: border-box;
    span:last-of-type {
      color: #999;
    }
  }
  .pageMenu {
    width: 100%;
    background: #fff;
    display: flex;
    padding: 5px 0;
    box-sizing: border-box;
    i {
      flex: 1;
      font-size: 10px;
      color: #666;
      text-align: center;
      padding-top: 20px;
      box-sizing: border-box;
    }
    i:nth-of-type(1) {
      background: url(../../assets/fukuan-07.png) no-repeat center 2px;
      background-size: 15px;
    }
    i:nth-of-type(2) {
      background: url(../../assets/shouhuo-07.png) no-repeat center 2px;
      background-size: 15px;
    }
    i:nth-of-type(3) {
      background: url(../../assets/pd-return.png) no-repeat center 2px;
      background-size: 15px;
    }
  }
  .vip {
    width: 100%;
    background: #fff;
    margin-top: 8px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    color: #666;
    font-size: 12px;
  }
  .meList {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    margin-top: 8px;
    .m {
      padding: 12px 10px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      color: #333;
    }
  }
  .rob {
    width: 100%;
    background: #fff;
    margin-top: 8px;
    .rob-item {
      width: 100%;
      padding: 12px 10px;
      color: #666;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
    }
  }
  .kf{
    width: 100%;
    display: flex;
    background: #fff;
    justify-content: space-between;
    padding: 12px 10px;
    margin-top: 8px;
    font-size: 12px;
    color: #666;
    box-sizing: border-box;
  }
  .end{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    box-sizing: border-box;
    p{
      font-size: 12px;
      color: #999;
      i{
        margin-left: 20px;
      }
    }
    span{
      font-size: 12px;
      color: #999;
    }
  }
}
.child-page{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 10;
}
</style>

