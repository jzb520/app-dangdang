import {api,request} from '../../ajax'

const state = {
    isLogin:false,
    userInfo:null,
    showLogin:false
}

const mutations = {
    setLoginStatus(state,param){
        state.isLogin = param;
    },
    setUserInfo(state , param){
        let nameL = param.userName.split('');
        let nameStr = nameL[0] + '***' + nameL[nameL.length-1];
        param.userName = nameStr;
        state.userInfo = param;
    },
    setShowLogin(state,param){
        state.showLogin = param;
    }
}

const actions = {
    async login(context , param){
        if(param.type === 'sina'){
            let result = await request.get(api.USER_LOGIN_API , {code:param.code})
            let {data , code} = result.data

            if(code == 0){
                context.commit('setLoginStatus' , true);
                context.commit('setUserInfo' , data);
            } else {
                context.commit('setLoginStatus' , false);
            }
        }
    },
    async checkLogin(context){
        //检查是否登录了
        let result = await request.get(api.USER_CHECK_LOGIN_API);
        if(result.data.code == 0){
            //登录了
            context.commit('setLoginStatus' , true);
            context.commit('setUserInfo' , result.data.data);
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}