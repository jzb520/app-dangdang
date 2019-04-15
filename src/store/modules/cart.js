// import api from '../../ajax/api'
// import request from '../../ajax/request'

const state = {
    //列表数据
    cartList:[]

};
const getters = {
    //全局的计算属性
    count:function(state,getters){
        let count = 0;
        state.cartList.forEach(item=>{
            count += item.quantity
        })
        return count
    },
    pay(state,getters){
        let pay = 0;
        state.cartList.forEach(item=>{
            pay += item.quantity * item.price
        })
        return pay
    }
}
const mutations = {
    addGoods(state,param){
       let index = state.cartList.findIndex(item=>{
           return item.id === param.id;
       })
       if(index >= 0){
           //改变商品存在 quantity 进行累加
           let goods = {
               ...state.cartList[index],
               quantity:++state.cartList[index].quantity
           };
           state.cartList.splice(index,1,goods);
       }else{
           //不存在 quantity 为1
           param.quantity = 1;
           state.cartList.push(param);
       }
       console.log(state.cartList);
    },
    setCount(state,param){
        state.cartList.splice(param.index,1,{
            ...state.cartList[param.index],
            quantity:param.quantity
        })
    }
};
const actions = {
    reduceAction(context,param){
        let quantity = context.state.cartList[param].quantity
       if((quantity - 1) >= 1){
           //可以减少
           context.commit('setCount',{quantity:quantity-1,index:param})
       }else{
           alert('你是智障嘛 减到0你买个屁呀')
       }
    },
    addAction(context, param){
        let quantity = context.state.cartList[param].quantity
        if((quantity + 1) <= 10){
            //可以增加
            context.commit('setCount',{quantity:quantity+1,index:param});

        }else{
            alert('你个煞笔，买那么多当饭吃？？？')
        }
    }
}
export default {
    //命名空间
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}





