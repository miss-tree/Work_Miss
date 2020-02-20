const businessRoutes=[
  //==========业务==========业务==========业务==========业务==========业务==========业务
  	{path:'/busyList',component: (resolve)=>require(['@/components/business/busyList'],resolve)},
  	{path:'/busyOrder',component: (resolve)=>require(['@/components/business/busyOrder'],resolve)},
  	{path:'/busyOrderDetail',component: (resolve)=>require(['@/components/business/busyOrderDetail'],resolve)},
  	{path:'/proSales',component: (resolve)=>require(['@/components/business/proSales'],resolve),meta: {
              keepAlive: true, //此组件需要被缓存
          }},
  	{path:'/proSalesDetail',component: (resolve)=>require(['@/components/business/proSalesDetail'],resolve)},
  	{path:'/billList',component: (resolve)=>require(['@/components/business/billList'],resolve),meta: {keepAlive: true,}},
  	{path:'/billDetail',component: (resolve)=>require(['@/components/business/billDetail'],resolve)},
  	{path:'/receiptList',component: (resolve)=>require(['@/components/business/receiptList'],resolve),meta: {keepAlive: true,}},
  	{path:'/receDetail',component: (resolve)=>require(['@/components/business/receDetail'],resolve)},
  	{path:'/productsList',component: (resolve)=>require(['@/components/business/productsList'],resolve),meta: {keepAlive: true,}},
  	{path:'/proDetail',component: (resolve)=>require(['@/components/business/proDetail'],resolve)},
  	{path:'/policyList',component: (resolve)=>require(['@/components/business/policyList'],resolve),meta: {keepAlive: true,}},
  	{path:'/policyDetail',component: (resolve)=>require(['@/components/business/policyDetail'],resolve)},
  	{path:'/batchList',component: (resolve)=>require(['@/components/business/batchList'],resolve),meta: {keepAlive: true,}},
  	{path:'/batchDetail',component: (resolve)=>require(['@/components/business/batchDetail'],resolve)},
  	{path:'/returnList',component: (resolve)=>require(['@/components/business/returnList'],resolve),meta: {keepAlive: true,}},
  	{path:'/returnDetail',component: (resolve)=>require(['@/components/business/returnDetail'],resolve)},
  	{path:'/reMoneyList',component: (resolve)=>require(['@/components/business/reMoneyList'],resolve),meta: {keepAlive: true,}},
  	{path:'/remoneyDetail',component: (resolve)=>require(['@/components/business/remoneyDetail'],resolve)},
]
export default businessRoutes