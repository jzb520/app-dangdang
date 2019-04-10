import api from '../../ajax/api'
import request from '../../ajax/request'
import { realpathSync } from 'fs';

const state = {
    //列表数据
    newData: [],


};
const mutations = {
    //主页列表数据
    catemenuData(state, param) {
        state.newData = param
    }


};
const actions = {
    //请求商品列表
    async getMenuDataAction(context) {
        let result = require('../../json/FenLei/CaiNinXiHuan.json');
        let result2 = require('../../json/FenLei/ChuangYiWenJu.json');
        let result3 = require('../../json/FenLei/CuFangYongPin.json');
        let result4 = require('../../json/FenLei/DangDangLiPinKa.json');
        let result5 = require('../../json/FenLei/DangDangYouPin.json');
        let result6 = require('../../json/FenLei/DianNaoBanGong.json');
        let result7 = require('../../json/FenLei/DianZiShu.json');
        let result8 = require('../../json/FenLei/JiaJuJiaFang.json');
        let result9 = require('../../json/FenLei/JiaJuJiaZhuang.json');
        let result10 = require('../../json/FenLei/JiaYongDianQi.json');
        let result11 = require('../../json/FenLei/MeiZhuangGeHu.json');
        let result12 = require('../../json/FenLei/MuYinWanJu.json');
        let result14 = require('../../json/FenLei/NanNvXie.json');
        let result15 = require('../../json/FenLei/NanZhuang.json');
        let result16 = require('../../json/FenLei/PaiMai&JiuShu.json');
        let result17 = require('../../json/FenLei/QiCheYongPin.json');
        let result18 = require('../../json/FenLei/ShiPinShengXian.json');
        let result19 = require('../../json/FenLei/ShouBiaoYanJing.json');
        let result20 = require('../../json/FenLei/ShouJiShuMa.json');
        let result21 = require('../../json/FenLei/TingShu.json');
        let result22 = require('../../json/FenLei/TongZhuangTongXue.json');
        let result23 = require('../../json/FenLei/WangLuoWenXue.json');
        let result24 = require('../../json/FenLei/XiangBaoPiJu.json');
        let result25 = require('../../json/FenLei/YingYangBaoJian.json');
        let result26 = require('../../json/FenLei/YunDongHuWai.json');
        let result27 = require('../../json/FenLei/ZhuBaoShiPin.json');

        let newData = [result11, result2, result3, result4, result5, result6, result7, result8, result9, result10, result, result12, result14, result15, result16, result17, result18, result19, result20, result21, result22, result23, result24, result25, result26, result27];
        //分类nav
        console.log(newData);
        
        let Data = newData.map(item => {
            return {
                id: item.content.page_id,
                title: item.content.title,
                banner:item.content.banner,
                mini_banner: item.content.mini_banner.content,
                pile: item.content.pile.map(item => {
                    return {
                        group: item.group.map(item => {
                            return {
                                group_name: item.group_name,
                                more: item.more,
                                detail: item.detail.map(item => {
                                    return {
                                        cid: item.cid,
                                        icon: item.icon,
                                        title: item.title
                                    }

                                })
                            }
                        })
                    }

                })
            }
        })
        console.log(Data);
        
         context.commit('catemenuData',Data)   
        
    }
}
export default {
    //命名空间
    namespaced: true,
    state,
    mutations,
    actions
}