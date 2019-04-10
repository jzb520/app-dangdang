<template>
  <div class="purchase page">
    <!-- <app-scroll style="width:100%;height:100%"> -->
      <app-header></app-header>
      <div class="content">
        <div class="menu">
          <ul>
            <li v-for="item in ImgList" :key="item.id">
              <img :src="item.picUrl" alt>
            </li>
          </ul>
          <ul>
            <li v-for="item in ItemList" :key="item.id">
              <img :src="item.picUrl" alt>
            </li>
          </ul>
        </div>
        <div class="promotion">
          <h1>促销专场</h1>
          <a href>更多 ></a>
          <div class="promotion-content">
            <ul class="itemlist">
              <li v-for="item in promotionList" :key="item.id" class="item">
                <a href>
                  <h1>{{item.top}}</h1>
                  <h2>{{item.title}}</h2>
                  <img :src="item.picUrl" alt>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <activity ></activity>
      </div>
    <!-- </app-scroll> -->
  </div>
</template>

<script>
import Activity from './children/activity'
export default {
  components:{
     [Activity.name]: Activity,
  },
  data() {
    return {
      ImgList: [
        {
          id: 1,
          picUrl: "https://img61.ddimg.cn/2018/8/25/20180825153505715.png"
        },
        {
          id: 2,
          picUrl: "https://img61.ddimg.cn/2018/8/25/2018082515383576435.png"
        },
        {
          id: 3,
          picUrl: "https://img61.ddimg.cn/2018/8/25/2018082515395286917.png"
        },
        {
          id: 4,
          picUrl: "https://img63.ddimg.cn/2018/8/31/2018083116044590576.png"
        },
        {
          id: 5,
          picUrl:
            "http://img63.ddimg.cn/upload_img/00660/h5/ddpp-1537350824.png"
        }
      ],
      ItemList: [
        {
          id: 6,
          picUrl: "https://img62.ddimg.cn/2018/8/31/2018083116363087335.png"
        },
        {
          id: 7,
          picUrl: "https://img62.ddimg.cn/2018/8/31/2018083116355544875.png"
        },
        {
          id: 8,
          picUrl: "https://img61.ddimg.cn/2018/8/31/2018083116365438226.png"
        },
        {
          id: 9,
          picUrl: "https://img62.ddimg.cn/2018/8/31/2018083116373380162.png"
        },
        {
          id: 10,
          picUrl:
            "http://img60.ddimg.cn/upload_img/00782/h5/coupon-1537505152.png"
        }
      ],
      promotionList: [
        {
          id: 11,
          top: "4.9图书",
          title: "每满100减40",
          picUrl: "http://img3m5.ddimg.cn/56/4/23761145-1_b_2.jpg"
        },
        {
          id: 12,
          title: "4月图书49元5件",
          picUrl: "http://img3m8.ddimg.cn/13/30/24188188-1_b_3.jpg"
        },
        {
          id: 13,
          top: "教辅",
          title: "每满59减10",
          picUrl: "http://img3m6.ddimg.cn/55/25/22800646-1_b_29.jpg"
        },
        {
          id: 14,
          title: "童书4月99元10件",
          picUrl: "http://img3m1.ddimg.cn/92/6/25201631-1_b_3.jpg"
        },
        {
          id: 15,
          title: "4.7超品2件3.5折",
          picUrl: "http://img3m7.ddimg.cn/18/19/1216240857-1_b_15.jpg"
        },
        {
          id: 16,
          title: "玩具大牌日满199减100",
          picUrl: "http://img3m0.ddimg.cn/15/10/1236407550-1_b_1.jpg"
        }
      ]
    };
  }
  
};
</script>

<style lang="scss" scoped>
.purchase {
  overflow: scroll;
  .content {
    position: absolute;
    top: 44px;
    left: 0;
    .menu {
      ul {
        display: flex;
        li {
          flex: 1;
          background: #fff;
          border-left: 1px #efefef solid;
          border-bottom: 1px #efefef solid;
          transform: sclae(50);
          img {
            width: 100%;
            display: block;
          }
        }
      }
    }
    .promotion {
      width: 100%;
      height: 340px;
      background: url(http://z.dangdang.com/static/img/%E4%B9%9D%E5%AE%AB%E6%A0%BC.5e5e35d.png)
        no-repeat ;
   
      background-size: cover;
      position: relative;
      padding: 10px;
      box-sizing: border-box;
      h1 {
        font-size: 18px;
        text-align: center;
        color: #fff;
        font-weight: 600;
        line-height: 30px;
      }
      a {
        color: #fff;
        display: block;
        position: absolute;
        top: 20px;
        right: 10px;
        font-size: 14px;
      }
      .promotion-content {
        position: absolute;
        top: 40px;
        left: 0px;
        padding: 0 10px;
        width: 100%;
        .itemlist {
          display: flex;
          flex-wrap: wrap;
          .item {
            background: #fff;
            border-radius: 5px;
            width: 30%;
            margin: 3px;
            height: 130px;
            position: relative;
            box-sizing: border-box;
            text-align: center;
            overflow: hidden;
            padding: 10px;
            a {
              position:absolute;
              top:0px;
              left: 0px;
              display: block;
              margin: 5px auto;
              h1 {
                font-size: 14px;
                color: #333;
                 }
              h2 {
                font-size: 14px;
                color: #943dff;
              }
              img {
                display: block;
                margin: 2px auto;
                width: 70%;
              }
            }
          }
        }
      }
    }
  }
}
</style>

