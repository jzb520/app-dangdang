import api from '../../ajax/api'
import request from '../../ajax/request'

const state = {
    //列表数据
    bannerList: [],

};
const mutations = {
    //轮播图数据
    setBannerList(state, param) {
        state.bannerList = param;
    }


};
const actions = {
    //请求商品列表
    async getBannerListAction(context) {
        let result = require('../../json/ZhiDeMai/LiJiMaoSha.json');

        let newData = result.result.columns.map(({ navType, infos }) => {
            let list = infos.map(({num,type, productId, averageScore,commentCount,
                 originPrice, productImageUrl, productName, salePrice }) => (
                {
                    num,type,productId, originPrice, productImageUrl, productName, salePrice,
                    averageScore,commentCount,
                }));
            return {
                navType,
                list, 
            }
        });
        context.commit('setBannerList', newData);
        console.log(result);
    }
}
export default {
    //命名空间
    namespaced: true,
    state,
    mutations,
    actions
}





