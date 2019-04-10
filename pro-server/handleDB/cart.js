const Cart = require('../model/Cart');
async function addGoods(info , userId){
    let result = await Cart.findOne({userId});
    if(result){
        //该用户有购物车数据
    }
}