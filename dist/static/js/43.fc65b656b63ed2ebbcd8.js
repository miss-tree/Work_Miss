webpackJsonp([43],{"4nDX":function(t,e){},Ui0A:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("default"),t._v(" "),t._l(t.ORDERLIST,function(e,a){return s("div",{staticClass:"listRow"},[s("div",[s("div",{staticClass:"huise"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"huise"},[t._v(t._s(e.orderNum))]),t._v(" "),s("div",{staticClass:"huise"},[t._v(t._s(e.person))])]),t._v(" "),s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:"已签收"==e.state,expression:"item.state=='已签收'"}],staticClass:"textRight span_green"},[t._v(t._s(e.state))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"物流中"==e.state,expression:"item.state=='物流中'"}],staticClass:"textRight span_red"},[t._v(t._s(e.state))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"未发货"==e.state,expression:"item.state=='未发货'"}],staticClass:"textRight"},[t._v(t._s(e.state))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"已开票"==e.state,expression:"item.state=='已开票'"}],staticClass:"textRight"},[t._v(t._s(e.state))]),t._v(" "),s("div",{staticClass:"textRight"},[t._v(t._s(e.money))]),t._v(" "),s("div",{staticClass:"textRight huise"},[t._v(t._s(e.dateTime))])])])})],2)},staticRenderFns:[]},i=s("VU/8")({data:function(){return{}},props:["ORDERLIST"],methods:{routerTo:function(t,e){"已签收"==t.state?this.$router.push({path:"/unTicketReturn",query:{id:t.id}}):"已开票"==t.state&&this.$router.push({path:"/ticketReturn",query:{id:t.id}})}}},a,!1,null,null,null).exports,n=s("hM5k"),r=s("zQ4B"),o={data:function(){return{alertShow:!1,STARTDATE:"",ENDDATE:"",ISCHECK:"",CHECKTIME:"",sectionArr:[{text:"销售部"},{text:"电商部"},{text:"OTC推广部"},{text:"大KA部"},{text:"财务部"},{text:"市场部"},{text:"财务组"}],SECTION:"",CHECKSTATE:[],curIndex:0,sureTime:"",list:[{title:"物流中"},{title:"未发货"},{title:"已签收"}],ORDERLIST:[{name:"国药控股股份有限公司",orderNum:"TEK190712HW33",money:"￥28450",state:"物流中",person:"黎放",dateTime:"2019-07-12",id:758961},{name:"华润医药控股有限公司",orderNum:"TEK190701WG451",money:"￥120000",state:"物流中",person:"刘禅",dateTime:"2019-07-01",id:894355444},{name:"华润医药控股有限公司",orderNum:"TEK170701XX658",money:"￥8000",state:"物流中",person:"吕布",dateTime:"2017-07-01",id:98796331854}],ORDERLIST2:[{name:"国药控股股份有限公司",orderNum:"TEK190712HW33",money:"￥28450",state:"未发货",person:"黎放",dateTime:"2019-07-12",id:758961},{name:"华润医药控股有限公司",orderNum:"TEK190701WG451",money:"￥120000",state:"未发货",person:"刘禅",dateTime:"2019-07-01",id:894355444},{name:"华润医药控股有限公司",orderNum:"TEK170701XX658",money:"￥8000",state:"未发货",person:"吕布",dateTime:"2017-07-01",id:98796331854}],ORDERLIST3:[{name:"国药控股股份有限公司",orderNum:"TEK190712HW33",money:"￥28450",state:"已签收",person:"黎放",dateTime:"2019-07-12",id:758961},{name:"华润医药控股有限公司",orderNum:"TEK190701WG451",money:"￥120000",state:"已签收",person:"刘禅",dateTime:"2019-07-01",id:894355444},{name:"华润医药控股有限公司",orderNum:"TEK170701XX658",money:"￥8000",state:"已签收",person:"吕布",dateTime:"2017-07-01",id:98796331854}],comArr:[{text:"泰恩康股份"},{text:"马鞍山天福康"},{text:"电商公司"},{text:"安徽维泰利"}]}},components:{list:i,search:n.a},computed:{spanColor:function(){this.ORDERLIST.forEach(function(t,e){return"通过"==t.state?"span_green":"未通过"==t.state?"span_red":void 0})}},mounted:function(){this.$data.sureTime=Object(r.d)(),Object(r.i)(),Object(r.h)("part",this.sectionArr),Object(r.h)("compony",this.comArr)},methods:{alert:function(){this.alertShow=!this.alertShow},setIndex:function(t){this.curIndex=t},getInfor:function(t){this.alertShow=t},rouerTo:function(t,e){this.$router.push({path:"/signOrder",query:{id:t.id}})},closeAlert:function(){this.alertShow=!1}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"mui-content"},[s("search",{attrs:{alertShow:t.alertShow},on:{setInfor:t.getInfor}}),t._v(" "),s("div",{staticClass:"tableSearch"},[t._m(1),t._v(" "),s("div",{staticClass:"searchBtn",on:{click:function(e){t.alert()}}},[t._v("\n\t\t\t\t\t\t搜索\n\t\t\t\t")]),t._v(" "),s("div",{staticStyle:{"margin-left":"15px"},on:{click:function(e){t.alert()}}},[s("i",{staticClass:"iconfont icon-fenxiaosousuo",staticStyle:{color:"#fff",display:"inline-block","font-size":"30px","margin-top":"5px"}})])]),t._v(" "),s("div",{staticStyle:{height:"51px"}}),t._v(" "),s("div",{staticClass:"tabHead ",attrs:{id:"singList"}},[s("ul",t._l(t.list,function(e,a){return s("li",{class:{active:t.curIndex==a},on:{click:function(e){t.setIndex(a)}}},[s("span",[t._v(t._s(e.title))])])}),0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.curIndex,expression:"curIndex==0"}]},[t._v("\n\t\t\t\t1\n\t\t\t\t"),t._v(" "),t._l(t.ORDERLIST,function(e,a){return s("div",{staticClass:"listRow",on:{click:function(s){t.rouerTo(e.id,a)}}},[s("div",[s("div",{staticClass:"huise"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"huise"},[t._v(t._s(e.orderNum))]),t._v(" "),s("div",{staticClass:"huise"},[t._v(t._s(e.person))])]),t._v(" "),s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:"已签收"==e.state,expression:"item.state=='已签收'"}],staticClass:"textRight span_green"},[t._v(t._s(e.state))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"物流中"==e.state,expression:"item.state=='物流中'"}],staticClass:"textRight span_red"},[t._v(t._s(e.state))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"未发货"==e.state,expression:"item.state=='未发货'"}],staticClass:"textRight"},[t._v(t._s(e.state))]),t._v(" "),s("div",{staticClass:"textRight"},[t._v(t._s(e.money))]),t._v(" "),s("div",{staticClass:"textRight huise"},[t._v(t._s(e.dateTime))])])])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.curIndex,expression:"curIndex==1"}]},[t._v("\n\t\t\t\t2\n\t\t\t\t"),s("list",{attrs:{ORDERLIST:t.ORDERLIST2}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2==t.curIndex,expression:"curIndex==2"}]},[t._v("\n\t\t\t\t3\n\t\t\t\t"),s("list",{attrs:{ORDERLIST:t.ORDERLIST3}})],1),t._v(" "),s("pages")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mui-bar mui-bar-nav back_title"},[e("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),e("h1",{staticClass:"mui-title"},[this._v("订单列表")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"70%"}},[e("input",{attrs:{type:"text",name:"",id:"search",value:"",placeholder:"请输入关键字(代码联想)"}})])}]},l=s("VU/8")(o,c,!1,null,null,null);e.default=l.exports},hM5k:function(t,e,s){"use strict";s("z7gM");var a=s("zQ4B"),i={data:function(){return{STARTDATE:"",ENDDATE:"",ISCHECK:"",CHECKTIME:"",SECTION:"",CHECKSTATE:[],comPany:"",sureTime:"",isShow:this.alertShow}},props:["alertShow"],methods:{addOrder:function(){this.isShow=!1,this.$emit("setInfor",this.isShow)},resetCkeck:function(){this.CHECKTIME="",this.CHECKSTATE=[],this.STARTDATE="",this.ENDDATE="",this.ISCHECK="",this.SECTION="",this.comPany=""},today:function(){this.ENDDATE=Object(a.c)(),this.STARTDATE=Object(a.c)()},yesterday:function(){var t=new Date,e=t.setDate(t.getDate()+-1),s=new Date(e);s=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate(),this.STARTDATE=s,this.ENDDATE=Object(a.c)()},weekly:function(){var t=new Date,e=t.setDate(t.getDate()+-7),s=new Date(e);s=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate(),this.STARTDATE=s,this.ENDDATE=Object(a.c)()},closeAlert:function(){this.isShow=!1,this.$emit("setInfor",this.isShow)}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.alertShow,expression:"alertShow"}],staticClass:"mongolia",on:{click:t.closeAlert}}),t._v(" "),s("div",{staticClass:"alertRight",class:t.alertShow?"alertOut":"outToleft",attrs:{id:"rightAlert"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"alert_bottom_div height_40px"},[s("div",{staticClass:"flex"},[s("div",{on:{click:function(e){t.resetCkeck()}}},[t._v("重置")]),t._v(" "),s("div",{on:{click:function(e){t.addOrder()}}},[t._v("确定")])])]),t._v(" "),s("div",{staticClass:"formTable"},[s("div",{staticClass:"form_title"},[t._v("申请日期")]),t._v(" "),s("div",{staticClass:"form_div"},[s("div",{staticClass:"alertRow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.STARTDATE,expression:"STARTDATE"}],staticClass:"btn mui-btn-block alertInput",attrs:{type:"text",id:"start856","data-options":'{"type":"date"}',placeholder:"选择日期 ..."},domProps:{value:t.STARTDATE},on:{input:function(e){e.target.composing||(t.STARTDATE=e.target.value)}}}),t._v(" "),s("span",[t._v("-")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ENDDATE,expression:"ENDDATE"}],staticClass:"btn mui-btn-block alertInput",attrs:{type:"text",id:"end978","data-options":'{"type":"date"}',placeholder:"选择日期 ..."},domProps:{value:t.ENDDATE},on:{input:function(e){e.target.composing||(t.ENDDATE=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"alertRow",staticStyle:{"padding-bottom":"5px"},attrs:{id:"checkBox"}},[s("div",{staticClass:"form_row_right flex justify_content"},[s("label",{on:{click:function(e){t.today()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.CHECKTIME,expression:"CHECKTIME"}],attrs:{type:"radio",name:"CHECKTIME",value:"今天"},domProps:{checked:t._q(t.CHECKTIME,"今天")},on:{change:function(e){t.CHECKTIME="今天"}}}),t._v(" "),s("div",{staticClass:"row_button"},[t._v("今天")])]),t._v(" "),s("label",{on:{click:function(e){t.yesterday()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.CHECKTIME,expression:"CHECKTIME"}],attrs:{type:"radio",name:"CHECKTIME",value:"昨天"},domProps:{checked:t._q(t.CHECKTIME,"昨天")},on:{change:function(e){t.CHECKTIME="昨天"}}}),t._v(" "),s("div",{staticClass:"row_button"},[t._v("昨天")])]),t._v(" "),s("label",{on:{click:function(e){t.weekly()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.CHECKTIME,expression:"CHECKTIME"}],attrs:{type:"radio",name:"CHECKTIME",value:"近七天"},domProps:{checked:t._q(t.CHECKTIME,"近七天")},on:{change:function(e){t.CHECKTIME="近七天"}}}),t._v(" "),s("div",{staticClass:"row_button"},[t._v("近七天")])])])])]),t._v(" "),s("div",{staticClass:"form_title"},[t._v("促销活动")]),t._v(" "),s("div",{staticClass:"form_div padding_tb_5px"},[s("div",{staticClass:"alertRow",attrs:{id:"checkBox"}},[s("div",{staticClass:"form_row_right flex justify_content"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ISCHECK,expression:"ISCHECK"}],attrs:{type:"radio",name:"ISCHECK",value:"是"},domProps:{checked:t._q(t.ISCHECK,"是")},on:{change:function(e){t.ISCHECK="是"}}}),t._v(" "),s("div",{staticClass:"row_button"},[t._v("是")])]),t._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ISCHECK,expression:"ISCHECK"}],attrs:{type:"radio",name:"ISCHECK",value:"否"},domProps:{checked:t._q(t.ISCHECK,"否")},on:{change:function(e){t.ISCHECK="否"}}}),t._v(" "),s("div",{staticClass:"row_button"},[t._v("否")])])])])]),t._v(" "),s("div",{staticClass:"form_title"},[t._v("订单状态")]),t._v(" "),s("div",{staticClass:"form_div padding_tb_5px"},[s("div",{staticClass:"alertRow"},[s("div",{staticClass:"form_row_right flex justify_content"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.CHECKSTATE,expression:"CHECKSTATE"}],attrs:{type:"checkbox",name:"CHECKSTATE",value:"草稿"},domProps:{checked:Array.isArray(t.CHECKSTATE)?t._i(t.CHECKSTATE,"草稿")>-1:t.CHECKSTATE},on:{change:function(e){var s=t.CHECKSTATE,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=t._i(s,"草稿");a.checked?n<0&&(t.CHECKSTATE=s.concat(["草稿"])):n>-1&&(t.CHECKSTATE=s.slice(0,n).concat(s.slice(n+1)))}else t.CHECKSTATE=i}}}),t._v(" "),s("div",{staticClass:"row_button"},[t._v("草稿")])]),t._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.CHECKSTATE,expression:"CHECKSTATE"}],attrs:{type:"checkbox",name:"CHECKSTATE",value:"通过"},domProps:{checked:Array.isArray(t.CHECKSTATE)?t._i(t.CHECKSTATE,"通过")>-1:t.CHECKSTATE},on:{change:function(e){var s=t.CHECKSTATE,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=t._i(s,"通过");a.checked?n<0&&(t.CHECKSTATE=s.concat(["通过"])):n>-1&&(t.CHECKSTATE=s.slice(0,n).concat(s.slice(n+1)))}else t.CHECKSTATE=i}}}),t._v(" "),s("div",{staticClass:"row_button"},[t._v("通过")])]),t._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.CHECKSTATE,expression:"CHECKSTATE"}],attrs:{type:"checkbox",name:"CHECKSTATE",value:"未通过"},domProps:{checked:Array.isArray(t.CHECKSTATE)?t._i(t.CHECKSTATE,"未通过")>-1:t.CHECKSTATE},on:{change:function(e){var s=t.CHECKSTATE,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=t._i(s,"未通过");a.checked?n<0&&(t.CHECKSTATE=s.concat(["未通过"])):n>-1&&(t.CHECKSTATE=s.slice(0,n).concat(s.slice(n+1)))}else t.CHECKSTATE=i}}}),t._v(" "),s("div",{staticClass:"row_button"},[t._v("未通过")])])])])]),t._v(" "),s("div",{staticClass:"form_title"}),t._v(" "),s("div",{staticClass:"form_div padding_tb_5px"},[s("div",{staticClass:"form_row"},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.SECTION,expression:"SECTION"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",name:"section",placeholder:"请选择",id:"part"},domProps:{value:t.SECTION},on:{input:function(e){e.target.composing||(t.SECTION=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"alertRow"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.comPany,expression:"comPany"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",name:"kpgs",placeholder:"请选择",id:"compony"},domProps:{value:t.comPany},on:{input:function(e){e.target.composing||(t.comPany=e.target.value)}}})])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"COMPANY"}},[this._v("\n                  \t部门\n                  "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"COMPANY"}},[this._v("\n                  \t开票公司\n                  "),e("span",{staticClass:"span_red"})])}]};var r=s("VU/8")(i,n,!1,function(t){s("4nDX")},null,null);e.a=r.exports}});