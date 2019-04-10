import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import purchase from './modules/purchase'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        home,
        purchase
    }
})

export default store