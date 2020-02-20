//==========订单部分订单部分==========订单部分==========订单部分==========订单部分
const moneyRoutes=[
  //==========预借款==========预借款==========预借款
	{path:'/advance',component: (resolve)=>require(['@/components/advance/advance'],resolve)},
	{path:'/advanceAdd',component: (resolve)=>require(['@/components/advance/advanceAdd'],resolve)},
	{path:'/advanceList',component: (resolve)=>require(['@/components/advance/advanceList'],resolve),meta:{keepAlive:true,}},
	{path:'/advanceDetail',component: (resolve)=>require(['@/components/advance/advanceDetail'],resolve)},
  //  报销
  	{path:'/BxList',component: (resolve)=>require(['@/components/baoxiao/BxList'],resolve),},
  	{path:'/examTravel',component: (resolve)=>require(['@/components/baoxiao/examTravel'],resolve)},
  	{path:'/travelDetail',component: (resolve)=>require(['@/components/baoxiao/travelDetail'],resolve)},
  	{path:'/comBX',component: (resolve)=>require(['@/components/baoxiao/comBX'],resolve)},
  	{path:'/actBX',component: (resolve)=>require(['@/components/baoxiao/actBX'],resolve)},

      {path:'/moneyDetail',component: (resolve)=>require(['@/components/money/moneyDetail'],resolve)},
      {path:'/moneyList',component: (resolve)=>require(['@/components/money/moneyList'],resolve)},
  //	印章
  	{path:'/seal',component: (resolve)=>require(['@/components/seal/seal'],resolve)},
  	{path:'/sealAdd',component: (resolve)=>require(['@/components/seal/sealAdd'],resolve)},
  	{path:'/mySeal',component: (resolve)=>require(['@/components/seal/mySeal'],resolve),meta:{keepAlive:true,}},
  	{path:'/sealDetail',component: (resolve)=>require(['@/components/seal/sealDetail'],resolve)},
    //	开票
    	{path:'/myTicket',component: (resolve)=>require(['@/components/ticket/myTicket'],resolve)},
    	{path:'/applyList',component: (resolve)=>require(['@/components/ticket/applyList'],resolve),meta:{keepAlive:true,}},
    	{path:'/applyTicket',component: (resolve)=>require(['@/components/ticket/applyTicket'],resolve)},
    	{path:'/myTicketApply',component: (resolve)=>require(['@/components/ticket/myTicketApply'],resolve),meta:{keepAlive:true,}},
    	{path:'/applyDetail',component: (resolve)=>require(['@/components/ticket/applyDetail'],resolve)},
    //	订单
    	{path:'/myOrder',component: (resolve)=>require(['@/components/order/myOrder'],resolve)},
    	{path:'/orderAdd',component: (resolve)=>require(['@/components/order/orderAdd'],resolve)},
    	{path:'/orderList',component: (resolve)=>require(['@/components/order/orderList'],resolve),meta:{keepAlive:true,}},
    	{path:'/orderDetail',component: (resolve)=>require(['@/components/order/orderDetail'],resolve)},
    	{path:'/signList',component: (resolve)=>require(['@/components/order/signList'],resolve),meta:{keepAlive:true,}},
    	{path:'/signOrder',component: (resolve)=>require(['@/components/order/signOrder'],resolve)},
    //	退货
    	{path:'/orderReturn',component: (resolve)=>require(['@/components/return/orderReturn'],resolve)},
    	{path:'/ticketList',component: (resolve)=>require(['@/components/return/ticketList'],resolve),meta:{keepAlive:true,}},
    	{path:'/ticketReturn',component: (resolve)=>require(['@/components/return/ticketReturn'],resolve)},
    	{path:'/ticketDetail',component: (resolve)=>require(['@/components/return/ticketDetail'],resolve)},
    	{path:'/unTicketList',component: (resolve)=>require(['@/components/return/unTicketList'],resolve),meta:{keepAlive:true,}},
    	{path:'/unTicketReturn',component: (resolve)=>require(['@/components/return/unTicketReturn'],resolve)},
    	{path:'/readyReturn',component: (resolve)=>require(['@/components/return/readyReturn'],resolve),meta:{keepAlive:true,}},
    	{path:'/unTicketDetail',component: (resolve)=>require(['@/components/return/unTicketDetail'],resolve)},
]
export default moneyRoutes
