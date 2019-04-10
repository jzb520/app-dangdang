import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import category from './modules/category.js'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        home,
        category,
    }
})

export default store