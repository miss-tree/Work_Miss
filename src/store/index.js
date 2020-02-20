import Vue from 'vue'
import Vuex from 'vuex'
import permission from './permission'
import createLogger from 'vuex/dist/logger' /*内置的logger插件,用于作为调试使用*/

Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		permission,
//		common,
//		user
	},
	state: {
		USER_ROLE: [{title:"订单申请",icon:"icon-dingdan",to:"/myOrder",name:"订单申请"},{title:"退货申请",icon:"icon-tuihuoliebiao",to:"/orderReturn",name:"退货申请"},
				{title:"开票申请",icon:"icon-invoice-register",to:"/myTicket",name:"开票申请"},{title:"报销管理",icon:"icon-shenpibaoxiao",to:"/BxList",name:"报销管理"},
				{title:"薪资",icon:"icon-xinzi0101",to:"/moneyList",name:"薪资"},{title:"终端管理",icon:"icon-yunyingshujuzhongduan",to:"/terminal",name:"终端管理"},
				{title:"请假",icon:"icon-qingjialeibie",to:"/leave",name:"请假"},{title:"印章管理",icon:"icon-yinzhang",to:"/seal",name:"印章管理"},
				{title:"异动管理",icon:"icon-gsg-renshiyidong",to:"/moveTab",name:"异动管理"},],
	},
	mutations: {
		setUSER_ROLE(state, payload) {
			state.USER_ROLE = payload.USER_ROLE;
		},
	},
	actions: {

	},
//	plugins: [createLogger()]
})