const route = {
    path: '/home',
    component: ()=>import('../pages/home/root'),
    children:[
        {
            path:'cate',
            component: ()=>import('../pages/cart/children/good-list')
        }
    ]
}

export default route