import api from '../../ajax/api'
import request from '../../ajax/request'

const state = {
    //列表数据
    hoemList: []

};
const mutations = {
    //主页列表数据
    sethomelist(state,param){
        state.hoemList = param;
    }


};
const actions = {
    //请求商品列表
    async gethomeListAction (context){
       let  result = require('../../json/home/home-footer-pageList.json');
       console.log(result);
       let newData = result.reco_list.map(({name,price,shop_id,image_url,productTags})=>({name,price,shop_id,image_url,productTags}));
       context.commit('sethomelist',newData)
    }
}
export default {
    //命名空间
    namespaced: true,
    state,
    mutations,
    actions
}





