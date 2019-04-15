<template>
  <div class="device" id="page-cart">
    <header>
      <span class="header-title">购物清单</span>
      <span class="header-edit" @click="toggleDelBtn">
        <span v-show="!delFlag">编辑</span>
        <span v-show="delFlag">完成</span>
      </span>
    </header>
    <div class="pages">
      <div class="empty-states" v-if="cartList.length === 0">
        <span>这里是空的，快去逛逛吧</span>
      </div>
      <ul class="goods-list cart-list" v-else>
        <li class="goods-item" v-for="(item, index) in cartList" :key="item.index">
          <div class="item-selector">
            <div
              class="icon-selector"
              v-bind:class="{'selector-active': item.checked}"
              @click="selectGoods(item)"
            >
              <svg
                t="1504061791962"
                class="icon"
                style
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2922"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="12"
                height="12"
              >
                <path
                  d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
                  fill="#ffffff"
                  p-id="2923"
                ></path>
              </svg>
            </div>
          </div>
          <div class="goods-img">
            <img v-bind:src="item.img" v-bind:alt="item.name">
          </div>
          <div class="goods-info">
            <p class="goods-title">{{ item.name }}</p>
            <div class="goods-price">
              <span>
                ¥
                <b>{{ item.price }}</b>
              </span>
            </div>
            <span class="des">库存{{ item.stock }}件</span>
            <div class="goods-num">
              <div class="num-btn" @click="addCountAction(item,index)">+</div>
              <div class="show-num">{{ item.quantity }}</div>
              <div class="num-btn" @click="reduceCountAction(item,index)">-</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="action-bar" v-bind:class="{ 'del-box': delFlag }">
      <!-- del-box -->
      <div class="g-selector" @click="checkAll">
        <div class="item-selector">
          <div class="icon-selector" v-bind:class="{'selector-active': checkAllFlag}">
            <svg
              t="1504061791962"
              class="icon"
              style
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2922"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="12"
              height="12"
            >
              <path
                d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
                fill="#ffffff"
                p-id="2923"
              ></path>
            </svg>
          </div>
        </div>
        <span>全选</span>
      </div>
      <div class="action-btn buy-btn">去结算({{ selectedNum }})</div>
      <div class="action-btn del-btn" @click="delGoods">删除({{ selectedNum }})</div>
      <div class="total">
        合计：
        <span>
          ¥{{pay}}
          <b></b>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapState } from "vuex";
export default {
  name: "cart-app",
  data() {
    return {
      checkAllFlag: false,
      selectedNum: 0,
      delFlag: false,
      //cartList:this.$store.state.cart.cartList
      // cart: []
    };
  },
  methods: {
    /**
     * @method 增减单品数量
     * @param {Boolean} isAdd 是否增加
     * @param {Number} index 商品下标
     */
    reduceCountAction(item,index){
         var num = item.quantity;
        console.log(index);
          this.$store.dispatch('cart/reduceAction',index);
        this.$set(item, "subtotal", (item.price * num).toFixed(1));

    },
     addCountAction(item,index){
          var num = item.quantity;
            this.$store.dispatch('cart/addAction',index);
            this.$set(item, "subtotal", (item.price * num).toFixed(1));
    },
    



    // changeQty: function(isAdd, item) {
    //   var num = item.quantity,
    //     stock = item.stock;

    //   if (isAdd && num < stock) {
    //     this.$set(item, "quantity", ++num);
    //   } else if (!isAdd && num > 1) {
    //     this.$set(item, "quantity", --num);
    //   }

    //   this.$set(item, "subtotal", (item.price * num).toFixed(1));
    // },

    /**
     * @method 选择商品
     * @param {Object} item 商品对象
     */
    selectGoods: function(item) {
      // 状态值取反，并根据状态值对selectedNum进行加减
      item.checked = !item.checked;
      item.checked ? ++this.selectedNum : --this.selectedNum;
      // 设置全选
      this.selectedNum === this.cartList.length
        ? (this.checkAllFlag = true)
        : (this.checkAllFlag = false);
    },

    /**
     * @method 全选
     */
    checkAll: function() {
      var self = this;
      this.checkAllFlag = !this.checkAllFlag;

      this.cartList.forEach(function(item) {
        if (self.checkAllFlag) {
          // 全选
          item.checked = true;
          self.selectedNum = self.cartList.length;
        } else {
          // 取消全选
          item.checked = false;
          self.selectedNum = 0;
        }
      });
    },

    /**
     * @method 切换删除按钮
     */
    toggleDelBtn: function() {
      this.delFlag = !this.delFlag;
    },

    /**
     * @method 删除商品
     */
    delGoods: function() {
      /**
       * !提示：
       * 每次遍历删除数组元素时，会减少数组长度，所以不能缓存length
       * 也不能用forEach方法，因为它会自动缓存数组的长度
       * 这里还可以用filter
       */
      var cartList = this.cartList;
      this.cartList = cartList.filter(function(item) {
        return !item.checked;
      });
      // for (var i = 0; i < cart.length; i++) {
      //     cart[i].checked && cart.splice(i--, 1);
      // };

      // 重置 被选商品数量、全选状态、删除状态
      this.selectedNum = 0;
      this.checkAllFlag = false;
      this.delFlag = !this.delFlag;
    }
  },
   computed: {
    /**
     * @method 已选商品的总额
     */
    ...mapGetters({
      num: 'cart/count',
      pay: 'cart/pay'
    }),
    totalPrice: function() {
      var num = 0;
      this.cartList.forEach(function(item) {
        item.checked && (num += parseFloat(item.subtotal));
      });
      return num;
    },
     ...mapState({
      cartList: state => state.cart.cartList
    })
  },
};
</script>

<style lang="scss" scoped>
#page-cart {
  position: absolute;
  top: 44px;
  bottom: 0px;
  width: 100%;
  z-index: 5;
  header {
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .header-title {
      margin-left: 21%;
      width: 50%;
      font-size: 16px;
      text-align: center;
      .header-edit {
        float: right;
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
}
  .header-title {
    position: absolute;
    margin-left: 21%;
    width: 50%;
    font-size: 16px;
    text-align: center;
}

.header-edit {
    float: right;
    padding: 0 10px;
    cursor: pointer;
}

.tab-wrap {
    height: 60px;
    background: red;
    overflow: hidden;
}

.cate-tab {
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #5D4285;
}

.cate {
    display: inline-block;
    width: 80px;
    height: 70px;
    color: #fff;
    line-height: 60px;
    text-align: center;
}

.tab-active {
    background-color: #9A51FF;
}

.filter-bar {
    display: flex;
    height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #E5E5E5;
    line-height: 40px;
}

.filter-opt {
    position: relative;
    width: 33.3%;
    color: #5F646E;
    text-align: center;
}

.filter-active {
    color: #7B57C5;
}

.goods-list {
    padding-top: 8px;
    height: 513px;
    overflow-y: scroll;
}

.cart-list {
    height: 560px;
}

.goods-item {
    display: flex;
    margin-bottom: 8px;
    padding: 10px 6px;
    min-height: 62px;
    background: #fff;
}

.goods-img {
    position: relative;
    margin-right: 4%;
    display: block;
    width: 16%;
}

.goods-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.goods-item .flag {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 20px;
    background-color: #FC5951;
    border-radius: 50%;
}

.goods-info {
    position: relative;
    width: 80%;
}

.goods-title {
    width: 80%;
    height: 38px;
    color: #363636;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.goods-price {
    margin-top: 6px;
    line-height: 1;
}

.goods-price span {
    font-size: 15px;
    color: #7a45e5;
    /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

.des {
    font-size: 12px;
    color: #888;
}

.save {
    position: absolute;
    right: 10px;
    bottom: 2px;
    width: 32px;
    height: 22px;
    background-color: #7a45e5;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.empty-states {
    padding-top: 60px;
    font-size: 18px;
    color: #AEB0B7;
    text-align: center;
}

.cart-list .goods-info {
    width: 68%;
}

.item-selector {
    width: 12%;
}

.icon-selector {
    position: relative;
    margin: 16px auto 0 auto;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
}

.selector-active {
    background-color: #7a45e5;
    border-color: #7a45e5;
}

.selector-active .icon {
    position: absolute;
    top: 2px;
    left: 2px;
}

.goods-num {
    position: absolute;
    right: 10px;
    top: 4px;
    width: 32px;
    color: #999;
    text-align: center;
}

.show-num {
    line-height: 28px;
}

.num-btn {
    width: 100%;
    height: 24px;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
}

.action-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    font-size: 15px;
    background-color: #fff;
    border-top: 1px solid #ddd;
}

.g-selector {
    float: left;
    width: 70px;
    margin-left: 4%;
    height: 52px;
    cursor: pointer;
}

.g-selector .item-selector {
    position: relative;
    display: inline-block;
}

.g-selector span {
    position: absolute;
    margin-left: 20px;
    color: #5F646E;
    top: 15px;
}

.total {
    float: right;
    color: #363636;
    font-size: 14px;
    line-height: 50px;
    margin-right: 20px;
}

.total span {
    color: #7A45E5;
}

.total b {
    font-size: 17px;
    margin-left: 4px;
}

.action-btn {
    float: right;
    width: 120px;
    height: 100%;
    color: #fff;
    text-align: center;
    font-weight: 300;
    line-height: 52px;
    cursor: pointer;
}

.buy-btn {
    background-color: #7A45E5;
}

.del-btn {
    display: none;
    background-color: #FF4069;
}

.del-box .total {
    display: none;
}

.del-box .buy-btn {
    display: none;
}

.del-box .del-btn {
    display: block;
}
</style>

