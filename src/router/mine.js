const route = {
    path: '/mine',
    component: ()=>import('../pages/mine/root'),
    children:[
        {
            path:'/collect',
            component:()=>import('../pages/mine/children/collect')
        },
        {
            path:'/focusOn',
            component:()=>import('../pages/mine/children/focus-on')
        },
        {
            path:'/footprint',
            component:()=>import('../pages/mine/children/footprint')
        }
    ]
}

export default route