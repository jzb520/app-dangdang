import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import mine from './modules/mine.js'
import user from './modules/user.js'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        home,
        mine,
        user
    }
})

export default store