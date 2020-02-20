//==========终端管理==========终端管理==========终端管理==========
const TerminalRoutes=[
  {path:'/terminal',component: (resolve)=>require(['@/components/Terminal/terminal'],resolve)},
  {path:'/storeAdd',component: (resolve)=>require(['@/components/Terminal/person/storeAdd'],resolve)},
  {path:'/storeAddList',component: (resolve)=>require(['@/components/Terminal/person/storeAddList'],resolve),meta:{keepAlive:true,}},
  {path:'/storeAddDetail', component: (resolve)=>require(['@/components/Terminal/person/storeAddDetail'],resolve)},
  {path:'/storeSignList', component: (resolve)=>require(['@/components/Terminal/person/storeSignList'],resolve),meta:{keepAlive:true,}},
  {path:'/storeSignDetail', component: (resolve)=>require(['@/components/Terminal/person/storeSignDetail'],resolve)},
  {path:'/storeVistList', component: (resolve)=>require(['@/components/Terminal/person/storeVistList'],resolve),meta:{keepAlive:true,}},
  {path:'/storeVisitDetail', component: (resolve)=>require(['@/components/Terminal/person/storeVisitDetail'],resolve)},
  {path:'/storeFlowList', component: (resolve)=>require(['@/components/Terminal/person/storeFlowList'],resolve),meta:{keepAlive:true,}},
  {path:'/storeFlowDetail', component: (resolve)=>require(['@/components/Terminal/person/storeFlowDetail'],resolve)},

  {path:'/LookSignList', component: (resolve)=>require(['@/components/Terminal/manage/LookSignList'],resolve),meta:{keepAlive:true,}},
  {path:'/signDetail', component: (resolve)=>require(['@/components/Terminal/manage/signDetail'],resolve)},
  {path:'/storePosition', component: (resolve)=>require(['@/components/Terminal/manage/storePosition'],resolve)},
  {path:'/storeInfo', component: (resolve)=>require(['@/components/Terminal/manage/storeInfo'],resolve)},
  {path:'/storeDetail', component: (resolve)=>require(['@/components/Terminal/manage/storeDetail'],resolve)},
  {path:'/OTCsignList', component: (resolve)=>require(['@/components/Terminal/manage/OTCsignList'],resolve),meta:{keepAlive:true,}},
  {path:'/OTCsignDetail', component: (resolve)=>require(['@/components/Terminal/manage/OTCsignDetail'],resolve)},
  {path:'/OTCvisitList', component: (resolve)=>require(['@/components/Terminal/manage/OTCvisitList'],resolve),meta:{keepAlive:true,}},
  {path:'/OTCvisitDetail', component: (resolve)=>require(['@/components/Terminal/manage/OTCvisitDetail'],resolve)},
  {path:'/visitList', component: (resolve)=>require(['@/components/Terminal/manage/visitList'],resolve),meta:{keepAlive:true,}},
  {path:'/visitDetail', component: (resolve)=>require(['@/components/Terminal/manage/visitDetail'],resolve)},
  {path:'/storeBackList', component: (resolve)=>require(['@/components/Terminal/manage/storeBackList'],resolve),meta:{keepAlive:true,}},
  {path:'/backDetail', component: (resolve)=>require(['@/components/Terminal/manage/backDetail'],resolve)},
  {path:'/storeCensus', component: (resolve)=>require(['@/components/Terminal/manage/storeCensus'],resolve),meta:{keepAlive:true,}},
  {path:'/censusDetail', component: (resolve)=>require(['@/components/Terminal/manage/censusDetail'],resolve)},
  {path:'/storeCodeList', component: (resolve)=>require(['@/components/Terminal/manage/storeCodeList'],resolve),meta:{keepAlive:true,}},
  {path:'/codeDetail', component: (resolve)=>require(['@/components/Terminal/manage/codeDetail'],resolve)},
]

export default TerminalRoutes
