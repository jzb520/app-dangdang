import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import mine from './modules/mine.js'
import user from './modules/user.js'
import purchase from './modules/purchase'
import category from './modules/category.js'
import cart from './modules/cart.js'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        home,
        mine,
        user,
        purchase,
        category,
        cart
    }
})

export default store