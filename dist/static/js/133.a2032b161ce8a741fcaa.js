webpackJsonp([133],{d8nA:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{},[i("div",{staticClass:"form_div"},[i("div",{staticClass:"form_row"},[t._m(0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.billNum))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(1),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.name))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(2),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.payMony))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(3),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.type))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(4),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.bank))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(5),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.debt))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(6),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.billDate))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(7),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.outCom))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(8),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.INFOR.staff))])])]),t._v(" "),i("div",{staticClass:"form_title"},[t._v("备注")]),t._v(" "),i("div",{staticClass:"form_div bottom_boder"},[i("div",{staticClass:"padding-lr padding_bb",staticStyle:{"padding-top":"8px"}},[i("div",{staticClass:"detail_bz"},[t._v(t._s(t.INFOR.bz))])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t来款单号\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t来款客户\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t              \t  收款金额\n\t                "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t收款方式\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t收款银行\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t待核销金额\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t收款日期\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t收款公司\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t经办人\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])}]},e={data:function(){return{showAct:!1,showInfo:{}}},props:["INFOR"],computed:{MONEY:function(){return this.INFOR.map(function(t){return t.num*t.price}).reduce(function(t,s){return parseFloat(s)+t})}},methods:{getShow:function(t){this.showAct=!0,this.showInfo=this.INFOR[t]}}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",t._l(t.INFOR,function(s,a){return i("div",{},[i("div",{staticClass:"form_title"},[t._v("产品("+t._s(a+1)+")")]),t._v(" "),i("div",{staticClass:"form_div"},[i("div",{staticClass:"form_row"},[t._m(0,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(s.name))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(1,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(s.money=s.num*s.price)+"元")])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(2,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[i("div",{staticClass:"tabRightBtn",on:{click:function(s){t.getShow(a)}}},[t._v("详情")])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showAct,expression:"showAct"}]},[i("div",{staticClass:"mongolia",on:{click:function(s){t.showAct=!1}}}),t._v(" "),i("div",[i("div",{staticClass:"form_div"},[i("div",{staticClass:"alert_div"},[i("div",{attrs:{id:"midlePop"}},[i("div",{staticClass:"form_title"},[t._v("产品详情")]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"form_div"},[i("div",{staticClass:"form_row"},[t._m(3,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.showInfo.orderNum))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(4,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.showInfo.name))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(5,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.showInfo.num))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(6,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.showInfo.unit))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(7,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.showInfo.price)+"元")])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(8,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.showInfo.money=t.showInfo.num*t.showInfo.price)+"元")])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(9,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.showInfo.norms))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(10,!0),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.showInfo.exam))])])])]),t._v(" "),i("div",{staticClass:"alertMidBottom"},[i("button",{staticClass:"mui-btn mui-btn-block mui-btn-primary alertBtn",staticStyle:{"margin-top":"5px"},on:{click:function(s){t.showAct=!1}}},[t._v("关闭")])])])])])])]),t._v(" "),i("div",{staticClass:"mui-bar-tab mui-bar",staticStyle:{height:"40px",padding:"0 15px"}},[i("div",{staticClass:"bottomWidth flex justify_content"},[i("span",{staticClass:"span_15px"},[t._v("产品数量："+t._s(t.INFOR.length))]),t._v(" "),i("span",{staticClass:"span_15px",staticStyle:{"margin-left":"5px"}},[t._v("开票金额："+t._s(t.MONEY))])])])])}),0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n          产品名称\n          "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"person"}},[this._v("\n          合计金额\n          "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"phone"}},[this._v("\n          查看\n          "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"phone"}},[this._v("\n                      订单号\n                      "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise"},[this._v("\n                      产品名称\n                      "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"money"}},[this._v("\n                    \t  数量\n                      "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{for:"",id:"level"}},[this._v("\n                      \t单位\n                      "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"where"}},[this._v("\n                     \t 单价\n                      "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"person"}},[this._v("\n                    \t  合计金额\n                      "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"phone"}},[this._v("\n                     \t 规格\n                      "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"khmc"}},[this._v("\n                   \t   审核状态\n                      "),s("span",{staticClass:"span_red"})])}]},n={data:function(){return{curIndex:0,STOREINFOR:{company:"股份有限公司",orderNum:"M-H20190800017",part:"销售部、电商部",bank:"广大银行",level:"一级",billNum:"25283166",debt:2350,where:"普宁市流沙广达东路金丰园A栋16-18号",name:"聚缘堂药店",type:"电汇",outCom:"马鞍山天福康",billDate:"2019-09-04",payMony:"50000",person:"梁学萍",bz:"还差部分核销未完成",phone:"0663-2918255",staff:"王检平",sendNum:"TEK-YB20190600635",EMS:"SF1010636691396"},PROINFOR:[{name:"和胃整肠丸",norms:"300粒/瓶",price:75,num:2e3,unit:"瓶",money:0,exam:"审核通过",ph:"20180703",beginTime:"2018-07-12",endTime:"2020-07-11",picNum:10,orderNum:"2019072342"},{name:"板蓝根颗粒25袋",norms:"每袋装10克",price:4.15,num:600,unit:"包",money:0,exam:"审核通过",ph:"TH65962156",beginTime:"2019-08-27",endTime:"2021-08-26",picNum:0,orderNum:"2019072342"}]}},components:{storeMsg:i("VU/8")({props:["INFOR"]},a,!1,null,null,null).exports,proName:i("VU/8")(e,r,!1,null,null,null).exports}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"mui-content"},[i("get-top"),t._v(" "),i("div",[i("div",{staticClass:"tabHead",attrs:{id:"tabHead"}},[i("div",{class:{active:0==t.curIndex},on:{click:function(s){t.curIndex=0}}},[i("span",[t._v("概要信息")])]),t._v(" "),i("div",{class:{active:1==t.curIndex},on:{click:function(s){t.curIndex=1}}},[i("span",[t._v("产品信息")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.curIndex,expression:"curIndex==0"}]},[i("store-msg",{attrs:{INFOR:t.STOREINFOR}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.curIndex,expression:"curIndex==1"}]},[i("proName",{attrs:{INFOR:t.PROINFOR}}),t._v(" "),i("div",{staticStyle:{height:"60px"}})],1)])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"mui-bar mui-bar-nav back_title"},[s("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),s("h1",{staticClass:"mui-title"},[this._v("收款详情")])])}]},l=i("VU/8")(n,_,!1,null,null,null);s.default=l.exports}});