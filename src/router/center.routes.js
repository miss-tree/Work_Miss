const centerRoutes=[
    {path:'/',redirect: '/Home' },
    {path:'/Home',component: (resolve)=>require(['@/components/Home'],resolve)},
    {path:'/login',component: (resolve)=>require(['@/components/common/login'],resolve)},
    {path:'/newsTable',component: (resolve)=>require(['@/components/message/newsTable'],resolve)},
//==========协议==========协议==========协议==========协议==========协议==========协议
    {path:'/agreeList',component: (resolve)=>require(['@/components/Agreement/agreeList'],resolve),meta:{keepAlive:true,}},
    {path:'/agreeDetail',component: (resolve)=>require(['@/components/Agreement/agreeDetail'],resolve)},
//	功能组件
    {path:'/code',component: (resolve)=>require(['@/components/sample/code'],resolve)},
    {path:'/maps',component: (resolve)=>require(['@/components/assembly/maps'],resolve)},
    {path:'/uploadpic',component: (resolve)=>require(['@/components/assembly/uploadpic'],resolve)},
//	其他
    {path:'/setUp',component: (resolve)=>require(['@/components/other/setUp'],resolve),meta:{keepAlive:true,}},
//  个人中心
    {path:'/PersonCenter',component: (resolve)=>require(['@/components/PersonCenter'],resolve),meta:{keepAlive:true,}},
    {path:'/example',component: (resolve)=>require(['@/components/sample/example'],resolve)},
]
export default centerRoutes
