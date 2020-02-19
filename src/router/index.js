import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./import-' + process.env.NODE_ENV)
//测试页面==========测试页面==========测试页面==========测试页面==========测试页面==========测试页面==========测试页面==========测试页面==========测试页面
import alertSearch from '../components/sample/alertSearch.vue'
import code from '../components/sample/code.vue'
import alertRight from '../components/sample/alertRight.vue'
import lookimg from '../components/sample/lookimg.vue'
import alert from '../components/sample/alert.vue'
import slideTable from '../components/sample/slideTable.vue'
import index from '../components/sample/index.vue'
import picker from '../components/sample/picker.vue'
import accordion from '../components/sample/accordion.vue'
import actionsheet from '../components/sample/actionsheet.vue'
import badge from '../components/sample/badges.vue'
import buttons from '../components/sample/buttons.vue'
import numbutton from '../components/sample/buttons-with-badges.vue'
import iconbutton from '../components/sample/buttons-with-icons.vue'
import loadbutton from '../components/sample/buttons-with-loading.vue'
import card from '../components/sample/card.vue'
import checkboxs from '../components/sample/checkbox.vue'
import dialog from '../components/sample/dialog.vue'
import icons from '../components/sample/icons.vue'
import iconsLight from '../components/sample/icons-extra.vue'
import inputs from '../components/sample/input.vue'
import MediaList from '../components/sample/media-list.vue'
import numbox from '../components/sample/numbox.vue'
import slider from '../components/sample/slider-default.vue'
import sliderTable from '../components/sample/slider-table-default.vue'
import sliderTitle from '../components/sample/slider-with-title.vue'
import refresh from '../components/sample/refresh.vue'
import tabView from '../components/sample/tabView.vue'
import muiSample from '../components/sample/muiSample.vue'
import timeLine from '../components/sample/timeLine.vue'
import template from '../components/sample/template.vue'
import tableList from '../components/sample/tableList.vue'
import form from '../components/sample/form.vue'
import dateTable from '../components/sample/dateTable.vue'
import mode_table from '../components/sample/mode_table.vue'
import searchId from '../components/sample/searchId.vue'
//组件
import uploadpic from '../components/assembly/uploadpic.vue'	/*图片上传*/
import maps from '../components/assembly/maps.vue'
//首页界面

import PersonCenter from '../components/PersonCenter.vue'
import newsTable from '../components/message/newsTable.vue'
import setUp from '../components/other/setUp.vue'
//==========个人中心==========个人中心==========个人中心==========个人中心==========个人中心==========个人中心==========个人中心==========个人中心==========个人中心==========个人中心
import kaoqingDetail from '../components/center/kaoqingDetail.vue'
import qiandao from '../components/center/qiandao'
//import applyList from '../components/center/applyList.vue'
import apply from '../components/center/apply.vue'
import kaoqinList from '../components/center/kaoqinList.vue'
import writeApply from '../components/center/writeApply.vue'
import shenqingDetail from '../components/center/shenqingDetail.vue'
import piyue from '../components/center/piyue.vue'
import piyueDetail from '../components/center/piyueDetail.vue'
import example from '../components/sample/example.vue'

//===========订单部分===========订单部分===========订单部分===========订单部分===========订单部分===========订单部分===========订单部分===========订单部分===========订单部分
import myTicket from '../components/ticket/myTicket.vue'
import applyList from '../components/ticket/applyList.vue'
import applyTicket from '../components/ticket/applyTicket.vue'
import myTicketApply from '../components/ticket/myTicketApply.vue'
import applyDetail from '../components/ticket/applyDetail.vue'

import myOrder from '../components/order/myOrder.vue'
import orderAdd from '../components/order/orderAdd.vue'
import orderList from '../components/order/orderList.vue'
import orderDetail from '../components/order/orderDetail.vue'
import signList from '../components/order/signList.vue'
import signOrder from '../components/order/signOrder.vue'
//退货
import orderReturn from '../components/return/orderReturn.vue'
import readyReturn from '../components/return/readyReturn.vue'
import ticketList from '../components/return/ticketList.vue'
import ticketReturn from '../components/return/ticketReturn.vue'
import ticketDetail from '../components/return/ticketDetail.vue'
import unTicketList from '../components/return/unTicketList.vue'
import unTicketReturn from '../components/return/unTicketReturn.vue'
import unTicketDetail from '../components/return/unTicketDetail.vue'
//印章
import seal from '../components/seal/seal.vue'
import sealAdd from '../components/seal/sealAdd.vue'
import mySeal from '../components/seal/mySeal.vue'
import sealDetail from '../components/seal/sealDetail.vue'
//客户关系        
import client from '../components/client/client.vue'

//报销==========报销==========报销==========报销==========报销==========报销==========报销==========报销==========报销==========报销==========报销==========报销
import BxList from '../components/baoxiao/BxList.vue'
import travelDetail from '../components/baoxiao/travelDetail.vue'
import examTravel from '../components/baoxiao/examTravel.vue'
import formTable from '../components/baoxiao/formTable.vue'
import comBX from '../components/baoxiao/comBX.vue'
import actBX from '../components/baoxiao/actBX.vue'
//hr
import hr from '../components/hr/hr.vue'
import mianshiList from '../components/hr/mianshiList.vue'
import mianshiDetail from '../components/hr/mianshiDetail.vue'
import mianshiRecord from '../components/hr/mianshiRecord.vue'
import zhaopinManage from '../components/hr/zhaopinManage.vue'
import jobApply from '../components/hr/jobApply.vue'
import writejobApply from '../components/hr/writejobApply.vue'
import jobDetail from '../components/hr/jobDetail.vue'
import zhaopinList from '../components/hr/zhaopinList.vue'
/*=======================请假申请=======================请假申请=======================请假申请=======================请假申请=======================*/
import leave from '../components/leave/leave.vue'
import leaveAdd from '../components/leave/leaveAdd.vue'
import myLeave from '../components/leave/myLeave.vue'
import leaveDetail from '../components/leave/leaveDetail.vue'
/*=======================异动管理=======================异动管理=======================异动管理=======================异动管理=======================*/
import moveTab from '../components/move/moveTab.vue'
import writeMove from '../components/move/writeMove.vue'
import myMove from '../components/move/myMove.vue'
import moveDetail from '../components/move/moveDetail.vue'
//工资
import moneyList from '../components/money/moneyList.vue'
import moneyDetail from '../components/money/moneyDetail.vue'
//终端管理
import terminal from '../components/Terminal/terminal.vue'
import storeAdd from '../components/Terminal/person/storeAdd.vue'
import storeAddList from '../components/Terminal/person/storeAddList.vue'
import storeAddDetail from '../components/Terminal/person/storeAddDetail.vue'
import storeSignList from '../components/Terminal/person/storeSignList.vue'
import storeSignDetail from '../components/Terminal/person/storeSignDetail.vue'
import storeVistList from '../components/Terminal/person/storeVistList.vue'
import storeVisitDetail from '../components/Terminal/person/storeVisitDetail.vue'
import storeFlowList from '../components/Terminal/person/storeFlowList.vue'
import storeFlowDetail from '../components/Terminal/person/storeFlowDetail.vue'

import LookSignList from '../components/Terminal/manage/LookSignList.vue'
import signDetail from '../components/Terminal/manage/signDetail.vue'
import storePosition from '../components/Terminal/manage/storePosition.vue'
import storeInfo from '../components/Terminal/manage/storeInfo.vue'
import storeDetail from '../components/Terminal/manage/storeDetail.vue'
import OTCsignList from '../components/Terminal/manage/OTCsignList.vue'
import OTCsignDetail from '../components/Terminal/manage/OTCsignDetail.vue'
import OTCvisitList from '../components/Terminal/manage/OTCvisitList.vue'
import OTCvisitDetail from '../components/Terminal/manage/OTCvisitDetail.vue'
import visitList from '../components/Terminal/manage/visitList.vue'
import visitDetail from '../components/Terminal/manage/visitDetail.vue'
import storeBackList from '../components/Terminal/manage/storeBackList.vue'
import backDetail from '../components/Terminal/manage/backDetail.vue'
import storeCensus from '../components/Terminal/manage/storeCensus.vue'
import censusDetail from '../components/Terminal/manage/censusDetail.vue'
import storeCodeList from '../components/Terminal/manage/storeCodeList.vue'
import codeDetail from '../components/Terminal/manage/codeDetail.vue'
//预借款
import advance from '../components/advance/advance.vue'
import advanceAdd from '../components/advance/advanceAdd.vue'
import advanceList from '../components/advance/advanceList.vue'
import advanceDetail from '../components/advance/advanceDetail.vue'
//协议
import agreeList from '../components/Agreement/agreeList.vue'
import agreeDetail from '../components/Agreement/agreeDetail.vue'
//业务
import busyOrder from '../components/business/busyOrder.vue'
import busyOrderDetail from '../components/business/busyOrderDetail.vue'
import proSales from '../components/business/proSales.vue'
import proSalesDetail from '../components/business/proSalesDetail.vue'
import billList from '../components/business/billList.vue'
import billDetail from '../components/business/billDetail.vue'
import receiptList from '../components/business/receiptList.vue'
import receDetail from '../components/business/receDetail.vue'
import productsList from '../components/business/productsList.vue'
import proDetail from '../components/business/proDetail.vue'
import policyList from '../components/business/policyList.vue'
import policyDetail from '../components/business/policyDetail.vue'
import batchList from '../components/business/batchList.vue'
import batchDetail from '../components/business/batchDetail.vue'
import returnList from '../components/business/returnList.vue'
import returnDetail from '../components/business/returnDetail.vue'
import reMoneyList from '../components/business/reMoneyList.vue'
import remoneyDetail from '../components/business/remoneyDetail.vue'

Vue.use(Router)

export default new Router({
	mode: 'hash',
base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect: '/Home' },
    // {path:'/Home',component: (resolve)=>require(['@/components/Home'],resolve)},
    // {path:'/login',component: (resolve)=>require(['@/components/common/login'],resolve)},
//  消息
	{path:'/newsTable',component: newsTable},
//==========业务==========业务==========业务==========业务==========业务==========业务
	// {path:'/busyList',component: (resolve)=>require(['@/components/business/busyList'],resolve)},
	{path:'/busyOrder',component: busyOrder},
	{path:'/busyOrderDetail',component: busyOrderDetail},
	{path:'/proSales',component: proSales,meta: {
            keepAlive: true, //此组件需要被缓存
        }},
	{path:'/proSalesDetail',component: proSalesDetail},
	{path:'/billList',component: billList,meta: {keepAlive: true,}},
	{path:'/billDetail',component: billDetail},
	{path:'/receiptList',component: receiptList,meta: {keepAlive: true,}},
	{path:'/receDetail',component: receDetail},
	{path:'/productsList',component: productsList,meta: {keepAlive: true,}},
	{path:'/proDetail',component: proDetail},
	{path:'/policyList',component: policyList,meta: {keepAlive: true,}},
	{path:'/policyDetail',component: policyDetail},
	{path:'/batchList',component: batchList,meta: {keepAlive: true,}},
	{path:'/batchDetail',component: batchDetail},
	{path:'/returnList',component: returnList,meta: {keepAlive: true,}},
	{path:'/returnDetail',component: returnDetail},
	{path:'/reMoneyList',component: reMoneyList,meta: {keepAlive: true,}},
	{path:'/remoneyDetail',component: remoneyDetail},
//==========协议==========协议==========协议==========协议==========协议==========协议
	{path:'/agreeList',component: agreeList,meta:{keepAlive:true,}},
	{path:'/agreeDetail',component: agreeDetail},
//==========预借款==========预借款==========预借款==========预借款==========预借款==========预借款==========预借款==========预借款
	{path:'/advance',component: advance},
	{path:'/advanceAdd',component: advanceAdd},
	{path:'/advanceList',component: advanceList,meta:{keepAlive:true,}},
	{path:'/advanceDetail',component: advanceDetail},
//==========终端管理==========终端管理==========终端管理==========终端管理==========终端管理==========终端管理==========终端管理==========终端管理
	{path:'/terminal',component: terminal},
	{path:'/storeAdd',component: storeAdd},
	{path:'/storeAddList',component: storeAddList,meta:{keepAlive:true,}},
	{path:'/storeAddDetail', component: storeAddDetail},
	{path:'/storeSignList', component: storeSignList,meta:{keepAlive:true,}},
	{path:'/storeSignDetail', component: storeSignDetail},
	{path:'/storeVistList', component: storeVistList,meta:{keepAlive:true,}},
	{path:'/storeVisitDetail', component: storeVisitDetail},
	{path:'/storeFlowList', component: storeFlowList,meta:{keepAlive:true,}},
	{path:'/storeFlowDetail', component: storeFlowDetail},
	
	{path:'/LookSignList', component: LookSignList,meta:{keepAlive:true,}},
	{path:'/signDetail', component: signDetail},
	{path:'/storePosition', component: storePosition},
	{path:'/storeInfo', component: storeInfo},
	{path:'/storeDetail', component: storeDetail},
	{path:'/OTCsignList', component: OTCsignList,meta:{keepAlive:true,}},
	{path:'/OTCsignDetail', component: OTCsignDetail},
	{path:'/OTCvisitList', component: OTCvisitList,meta:{keepAlive:true,}},
	{path:'/OTCvisitDetail', component: OTCvisitDetail},
	{path:'/visitList', component: visitList,meta:{keepAlive:true,}},
	{path:'/visitDetail', component: visitDetail},
	{path:'/storeBackList', component: storeBackList,meta:{keepAlive:true,}},
	{path:'/backDetail', component: backDetail},
	{path:'/storeCensus', component: storeCensus,meta:{keepAlive:true,}},
	{path:'/censusDetail', component: censusDetail},
	{path:'/storeCodeList', component: storeCodeList,meta:{keepAlive:true,}},
	{path:'/codeDetail', component: codeDetail},
//==========订单部分==========订单部分==========订单部分==========订单部分==========订单部分==========订单部分==========订单部分==========订单部分
//	开票
	{path:'/myTicket',component: myTicket},
	{path:'/applyList',component: applyList,meta:{keepAlive:true,}},
	{path:'/applyTicket',component: applyTicket},
	{path:'/myTicketApply',component: myTicketApply,meta:{keepAlive:true,}},
	{path:'/applyDetail',component: applyDetail},
//	订单
	{path:'/myOrder',component: myOrder,
	children:[{path:'',component: orderAdd,}]},
	{path:'/orderAdd',component: orderAdd},
	{path:'/orderList',component: orderList,meta:{keepAlive:true,}},
	{path:'/orderDetail',component: orderDetail},
	{path:'/signList',component: signList,meta:{keepAlive:true,}},
	{path:'/signOrder',component: signOrder},
//	退货	
	{path:'/orderReturn',component: orderReturn},
	{path:'/ticketList',component: ticketList,meta:{keepAlive:true,}},
	{path:'/ticketReturn',component: ticketReturn},
	{path:'/ticketDetail',component: ticketDetail},
	{path:'/unTicketList',component: unTicketList,meta:{keepAlive:true,}},
	{path:'/unTicketReturn',component: unTicketReturn},
	{path:'/readyReturn',component: readyReturn,meta:{keepAlive:true,}},
	{path:'/unTicketDetail',component: unTicketDetail},
//	功能组件
	{path:'/code',component: code},
	{path:'/maps',component: maps},
	{path:'/uploadpic',component: uploadpic},
//  报销
	{path:'/BxList',component: BxList,},
	{path:'/examTravel',component: examTravel},
	{path:'/travelDetail',component: travelDetail},
	{path:'/comBX',component: comBX},
	{path:'/actBX',component: actBX},
//	印章	
	{path:'/seal',component: seal},
	{path:'/sealAdd',component: sealAdd},
	{path:'/mySeal',component: mySeal,meta:{keepAlive:true,}},
	{path:'/sealDetail',component: sealDetail},
//	其他
	{path:'/setUp',component: setUp},
//  个人中心
    {path:'/PersonCenter',component: PersonCenter},
    {path:'/example',component: example},
//  请假
    {path:'/leave',component: leave},
    {path:'/leaveAdd',component: leaveAdd},
    {path:'/myLeave',component: myLeave,meta:{keepAlive:true,}},
    {path:'/leaveDetail',component: leaveDetail},
//  异动
    {path:'/moveTab',component: moveTab},
    {path:'/writeMove',component: writeMove},
    {path:'/myMove',component: myMove,meta:{keepAlive:true,}},
    {path:'/moveDetail',component: moveDetail},
    
//  人力资源
    {path:'/zhaopinList', component: zhaopinList},
    {path:'/jobDetail',component: jobDetail},
    {path:'/writejobApply',component: writejobApply},
    {path:'/jobApply',component: jobApply},
    {path:'/moneyDetail',component: moneyDetail},
    {path:'/moneyList',component: moneyList},
    {path:'/zhaopinManage',component: zhaopinManage},
	{path:'/mianshiRecord',component: mianshiRecord},
	{path:'/shenqingDetail',component: shenqingDetail},
	{path:'/writeApply',component: writeApply},
	{path:'/mianshiDetail',component: mianshiDetail},
	{path:'/mianshiList',component: mianshiList},
	{path:'/piyue',component: piyue},
    {path:'/client',component: client},
    {path:'/hr',component: hr},
    {path:'/piyueDetail',component: piyueDetail},
    {path:'/kaoqingDetail',component: kaoqingDetail},
    {path:'/kaoqinList',component: kaoqinList},
    {path:'/apply',component: apply},
    {path:'/qiandao',component: qiandao},
//  测试界面
    {path:'/slideTable',component: slideTable},
    // {path:'/alertCenter',component: (resolve)=>require(['@/components/sample/alertCenter.vue'],resolve)},
    {path:'/alertSearch',component: alertSearch},
    {path:'/alertRight',component: alertRight},
    {path:'/alert',component: alert},
    {path:'/muiSample',component: muiSample},
    {path:'/lookimg',component: lookimg},
    {path:'/mode_table',component: mode_table},
    {path:'/picker',component: picker},
    {path:'/dateTable',component: dateTable},
    {path:'/form',component: form},
    {path:'/tableList',component: tableList,},
    {path:'/template',component: template},
    {path:'/timeLine',component: timeLine},
    {path:'/formTable', component: formTable},
    {path:'/page', component: index},
    {path:'/actionsheet', component: actionsheet},
    {path:'/accordion', component: accordion},
    {path:'/badge', component: badge},
    {path:'/buttons', component: buttons},
    {path:'/numbutton', component: numbutton},
    {path:'/iconbutton', component: iconbutton},
    {path:'/loadbutton', component: loadbutton},
    {path:'/card', component: card},
    {path:'/checkbox', component: checkboxs},
    {path:'/dialog', component: dialog},
    {path:'/icons', component: icons},
    {path:'/iconsLight', component: iconsLight},
    {path:'/inputs', component: inputs},
    {path:'/MediaList', component: MediaList},
    {path:'/numbox', component: numbox},
    {path:'/slider', component: slider},
    {path:'/sliderTable', component: sliderTable},
    {path:'/sliderTitle', component: sliderTitle},
    {path:'/refresh', component: refresh},
    {path:'/tabView', component: tabView},
    {path:'/searchId', component: searchId},
  ]
})

