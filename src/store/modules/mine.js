import api from '../../ajax/api'
import request from '../../ajax/request'

const state = {
    //列表数据
    mineList: []

};
const mutations = {
    //主页列表数据
    setMineList(state,param){
        state.mineList = param;
    }


};
const actions = {
    //请求商品列表
    async getMineListAction (context){
       let  result = require('../../json/Mine/FooterList.json');
       let newData = result.reco_list.map(item=>{
           return {
            product_id:item.product_id,
               productTags:item.productTags,
               price:item.price,
               name:item.name,
               beloved_tag:item.beloved_tag,
               promo_flag:item.promo_flag,
               image_url:item.image_url
            }
       });
       context.commit('setMineList',newData)
    }
}
export default {
    //命名空间
    namespaced: true,
    state,
    mutations,
    actions
}




