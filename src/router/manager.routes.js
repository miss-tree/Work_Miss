const managerRoutes=[
  //  请假
      {path:'/leave',component: (resolve)=>require(['@/components/leave/leave'],resolve)},
      {path:'/leaveAdd',component: (resolve)=>require(['@/components/leave/leaveAdd'],resolve)},
      {path:'/myLeave',component: (resolve)=>require(['@/components/leave/myLeave'],resolve),meta:{keepAlive:true,}},
      {path:'/leaveDetail',component: (resolve)=>require(['@/components/leave/leaveDetail'],resolve)},
  //  异动
      {path:'/moveTab',component: (resolve)=>require(['@/components/move/moveTab'],resolve)},
      {path:'/writeMove',component: (resolve)=>require(['@/components/move/writeMove'],resolve)},
      {path:'/myMove',component: (resolve)=>require(['@/components/move/myMove'],resolve),meta:{keepAlive:true,}},
      {path:'/moveDetail',component: (resolve)=>require(['@/components/move/moveDetail'],resolve)},
  
  //  人力资源
      {path:'/zhaopinList', component: (resolve)=>require(['@/components/hr/zhaopinList'],resolve)},
      {path:'/jobDetail',component: (resolve)=>require(['@/components/hr/jobDetail'],resolve)},
      {path:'/writejobApply',component: (resolve)=>require(['@/components/hr/writejobApply'],resolve)},
      {path:'/jobApply',component: (resolve)=>require(['@/components/hr/jobApply'],resolve)},
      {path:'/zhaopinManage',component: (resolve)=>require(['@/components/hr/zhaopinManage'],resolve)},
      {path:'/mianshiRecord',component: (resolve)=>require(['@/components/hr/mianshiRecord'],resolve)},
      {path:'/mianshiDetail',component: (resolve)=>require(['@/components/hr/mianshiDetail'],resolve)},
      {path:'/mianshiList',component: (resolve)=>require(['@/components/hr/mianshiList'],resolve)},
      {path:'/hr',component: (resolve)=>require(['@/components/hr/hr'],resolve)},
      
      {path:'/client',component: (resolve)=>require(['@/components/client/client'],resolve)},
      
      {path:'/shenqingDetail',component: (resolve)=>require(['@/components/center/shenqingDetail'],resolve)},
      {path:'/writeApply',component: (resolve)=>require(['@/components/center/writeApply'],resolve)},
      {path:'/piyue',component: (resolve)=>require(['@/components/center/piyue'],resolve)},
      {path:'/piyueDetail',component: (resolve)=>require(['@/components/center/piyueDetail'],resolve)},
      {path:'/kaoqingDetail',component: (resolve)=>require(['@/components/center/kaoqingDetail'],resolve)},
      {path:'/kaoqinList',component: (resolve)=>require(['@/components/center/kaoqinList'],resolve)},
      {path:'/apply',component: (resolve)=>require(['@/components/center/apply'],resolve)},
      {path:'/qiandao',component: (resolve)=>require(['@/components/center/qiandao'],resolve)},
]

export default managerRoutes