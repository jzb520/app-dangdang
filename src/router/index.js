
import Vue from "vue";

import Router from 'vue-router'

import homeRouter from './home'
import categoryRoute from './category'
import cartRoute from './cart'
import purchaseRouter from './purchase'
import mineRoute from './mine'

Vue.use(Router);

const routes = [
    homeRouter,
    categoryRoute,
    cartRoute,
    purchaseRouter,
    mineRoute,
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '**',
        redirect: '/home'
    }
];


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})