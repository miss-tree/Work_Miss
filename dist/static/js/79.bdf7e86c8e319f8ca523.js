webpackJsonp([79],{"2LnI":function(t,e){},jroA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("zQ4B"),a=i("K7+K"),n={data:function(){return{STARTDATE:"",ENDDATE:"",ISCHECK:"",CHECKTIME:"",SECTION:"",CHECKSTATE:[],WHERE:"",CHECKPERSON:[],sureTime:"",sectionArr:[{text:"社区店"},{text:"街边店"},{text:"商业中心店"},{text:"职业院校院区店"},{text:"镇区中心店"},{text:"偏僻"},{text:"其他"}],msg:this.alertShow,comPany:"",comArr:[{text:"A"},{text:"B"},{text:"C"},{text:"D"}],checkWhere:[],second:[]}},props:["alertShow"],watch:{WHERE:function(t,e){var i=this;""!=t&&a.a.forEach(function(e,s){e.text==t&&(i.second=a.a[s].children)})}},mounted:function(){Object(s.i)(),this.checkWhere=a.a.map(function(t){return{text:t.text}}),Object(s.h)("part",this.checkWhere)},methods:{closeAlert:function(){this.msg=!1,this.$emit("changShow",this.msg)},addOrder:function(){this.msg=!1,this.$emit("changShow",this.msg)},resetCkeck:function(){this.CHECKTIME="",this.CHECKSTATE=[],this.STARTDATE="",this.ENDDATE="",this.ISCHECK="",this.SECTION="",this.WHERE="",this.CHECKPERSON=[],this.second=[],this.comPany=""},today:function(){this.ENDDATE=Object(s.c)(),this.STARTDATE=Object(s.c)()},yesterday:function(){var t=new Date,e=t.setDate(t.getDate()+-1),i=new Date(e);i=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),this.STARTDATE=i,this.ENDDATE=Object(s.c)()},weekly:function(){var t=new Date,e=t.setDate(t.getDate()+-7),i=new Date(e);i=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),this.STARTDATE=i,this.ENDDATE=Object(s.c)()}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.alertShow,expression:"alertShow"}],staticClass:"mongolia",on:{click:function(e){t.closeAlert()}}}),t._v(" "),i("div",{staticClass:"alertRight",class:t.alertShow?"alertOut":"outToleft",attrs:{id:"rightAlert"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"alert_bottom_div height_40px"},[i("div",{staticClass:"flex"},[i("div",{on:{click:function(e){t.resetCkeck()}}},[t._v("重置")]),t._v(" "),i("div",{on:{click:function(e){t.addOrder()}}},[t._v("确定")])])]),t._v(" "),i("div",{staticClass:"formTable"},[i("div",{staticClass:"form_title"},[t._v("签到月份")]),t._v(" "),i("div",{staticClass:"form_div"},[i("div",{staticClass:"alertRow"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.STARTDATE,expression:"STARTDATE"}],staticClass:"btn mui-btn-block alertInput",attrs:{type:"text",id:"start856","data-options":'{"type":"month"}',placeholder:"选择日期 ..."},domProps:{value:t.STARTDATE},on:{input:function(e){e.target.composing||(t.STARTDATE=e.target.value)}}}),t._v(" "),i("span",[t._v("-")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ENDDATE,expression:"ENDDATE"}],staticClass:"btn mui-btn-block alertInput",attrs:{type:"text",id:"end978","data-options":'{"type":"month"}',placeholder:"选择日期 ..."},domProps:{value:t.ENDDATE},on:{input:function(e){e.target.composing||(t.ENDDATE=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form_title"},[t._v("其他")]),t._v(" "),i("div",{staticClass:"form_div padding_tb_5px"},[i("div",{staticClass:"form_row"},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.WHERE,expression:"WHERE"}],staticClass:"form_row_right",attrs:{type:"text",name:"section",placeholder:"请选择",id:"part"},domProps:{value:t.WHERE},on:{input:function(e){e.target.composing||(t.WHERE=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form_row",staticStyle:{border:"0"}},[t._m(1),t._v(" "),i("div",{staticClass:"alertRow",staticStyle:{"margin-top":"5px",width:"fit-content"},attrs:{id:"checkPower"}},[i("div",{staticClass:"form_row_right flex ",staticStyle:{"flex-wrap":"wrap"}},t._l(t.second,function(e,s){return i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.CHECKPERSON,expression:"CHECKPERSON"}],attrs:{type:"checkbox",name:"powerData"},domProps:{value:e.text,checked:Array.isArray(t.CHECKPERSON)?t._i(t.CHECKPERSON,e.text)>-1:t.CHECKPERSON},on:{change:function(i){var s=t.CHECKPERSON,a=i.target,n=!!a.checked;if(Array.isArray(s)){var o=e.text,c=t._i(s,o);a.checked?c<0&&(t.CHECKPERSON=s.concat([o])):c>-1&&(t.CHECKPERSON=s.slice(0,c).concat(s.slice(c+1)))}else t.CHECKPERSON=n}}}),t._v(" "),i("button",{staticClass:"row_button",attrs:{type:"button"}},[t._v(t._s(e.text))])])}),0)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"COMPANY"}},[this._v("\n                  \t区域\n                  "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",staticStyle:{"flex-grow":"1"}},[this._v("\n                  \tOTC人员\n                  "),e("span",{staticClass:"span_red"})])}]},c=i("VU/8")(n,o,!1,null,null,null).exports,l={data:function(){return{myData:[],tl:"",now:-1,willShow:!1,isShow:!0}},watch:{tl:function(t,e){this.$emit("searchVal",t)}},methods:{setInput:function(t){this.tl=t},getCheck:function(t){this.tl=this.myData[t],this.$emit("searchVal",this.tl),this.willShow=!1},changeShow:function(){this.willShow=!this.willShow},get:function(t){38!=t.keyCode&&40!=t.keyCode&&(13==t.keyCode&&(window.open("https://www.baidu.com/s?wd="+this.tl),this.tl=""),this.myData=["广西授权人变更","电商资料申请","浙江地区办事点变更","办理资料申请","电商网上交易","粤东客户信息变更","益丰大药房"])},changeDown:function(){this.now++,this.now==this.myData.length&&(this.now=-1),this.tl=this.myData[this.now]},changeUp:function(){this.now--,-2==this.now&&(this.now=this.myData.length-1),this.tl=this.myData[this.now]},clk:function(t){var e=t.target.innerText;this.t1=e;var i=document.getElementById("input");i.style.color="blue",i.focus(),this.isShow=!1;var s=document.getElementById("boxUl");console.log(s)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{staticClass:"code_input",attrs:{id:"list"}},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.tl,expression:"tl"}],attrs:{type:"text",id:"search",autocomplete:"off",placeholder:"请输入药店名称..."},domProps:{value:t.tl},on:{blur:t.changeShow,focus:t.changeShow,keyup:function(e){t.get(e)},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;t.changeDown()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.changeUp()}],input:function(e){e.target.composing||(t.tl=e.target.value)}}})]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.willShow,expression:"willShow"}],staticClass:"code_ul",staticStyle:{position:"fixed",top:"85px",width:"100%"}},[t._l(t.myData,function(e,s){return i("li",{class:{gray:s==t.now},on:{click:function(e){t.getCheck(s)}}},[t._v("\n\t\t\t\t\t"+t._s(e))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:0==t.myData.length,expression:"myData.length==0"}]},[t._v("   请输入药店名称...")])],2)])])])},staticRenderFns:[]};var h=i("VU/8")(l,r,!1,function(t){i("2LnI")},null,null).exports,u=i("Y81h"),d=i.n(u),v={data:function(){return{checkData:[],checkInfor:[]}},props:["ORDERLIST"],watch:{checkData:function(t,e){var i=this;0!=this.checkData.length?(this.checkInfor=[],this.ORDERLIST.forEach(function(t,e){i.checkData.indexOf(t.id)>-1&&i.checkInfor.push(i.ORDERLIST[e])}),this.$emit("getCheck",this.checkInfor)):(this.checkInfor=[],this.$emit("getCheck",this.checkInfor))}},methods:{setAllCheck:function(){var t=this;this.checkData.length<this.ORDERLIST.length?(this.checkData=[],this.ORDERLIST.forEach(function(e,i){t.checkData.push(e.id)}),this.$emit("getCheck",this.checkInfor)):(this.checkData=[],this.$emit("getCheck",this.checkInfor))},routerTo:function(t,e){d.a.start(),this.$router.push({path:"/OTCsignDetail",query:{id:t.id}}),d.a.done()},setInfor:function(){}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{attrs:{id:"dateTable"}},[t._m(0),t._v(" "),i("div",{attrs:{id:""}},t._l(t.ORDERLIST,function(e,s){return i("div",{staticClass:"row"},[i("div",{staticClass:"col_50"},[i("span",{staticClass:"span_13px nowrap"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"col_20"},[i("span",{staticClass:"span_13px"},[t._v(t._s(e.person))])]),t._v(" "),i("div",{staticClass:"col_15"},[i("span",{staticClass:"span_13px",class:{span_green:"正常"==e.state,span_red:"异常"==e.state}},[t._v(t._s(e.state))])]),t._v(" "),i("div",{staticClass:"col_15"},[i("div",{staticClass:"tabRightBtn",on:{click:t.routerTo}},[t._v("详情")])])])}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Row"},[e("div",{staticClass:"col_50"},[this._v("药店名称")]),this._v(" "),e("div",{staticClass:"col_20"},[this._v("姓名")]),this._v(" "),e("div",{staticClass:"col_15"},[this._v("状态")]),this._v(" "),e("div",{staticClass:"col_15"},[this._v("查看")])])}]},_={data:function(){return{isFirst:!0,alertShow:!1,clientName:"",checkData:[],showSection:!1,columns:["销售部","电商部","OTC推广部","大KA部","财务部","市场部","财务组"],SECTION:"",CHECKSTATE:[],sureTime:"",ORDER:[{title:"聚缘堂药店",state:"正常",person:"黎放",dateTime:"2019-08-13 10：23：14",id:34534},{title:"倍宁医药(镇南路店)",state:"正常",person:"刘禅",dateTime:"2019-07-01",id:34534534},{title:"仁和堂药业(陈田药店)",state:"异常",person:"吕布",dateTime:"2017-07-01",id:534534534},{title:"康信药店",state:"异常",person:"黎放",dateTime:"2019-07-12",id:654},{title:"倍宁医药连锁(良口分店)",state:"虚假",person:"刘禅",dateTime:"2019-07-01",id:65768},{title:"温泉济康药店",state:"正常",person:"吕布",dateTime:"2017-07-01",id:65677}]}},components:{search:c,inputcode:h,list:i("VU/8")(v,m,!1,null,null,null).exports},created:function(){localStorage.getItem("IS_FIRST_LOGIN")&&(this.isFirst=!1,console.log("已经登陆过一次了"))},methods:{setGuide:function(){this.isFirst=!1,localStorage.setItem("IS_FIRST_LOGIN",!0)},getClientName:function(t){this.clientName=t},getCheckInfor:function(t){console.log(t),this.checkData=t},getAlertShow:function(t){this.alertShow=t},routerTo:function(){var t=~~(10*Math.random());t%2==0?(console.log(t),mui.alert("提交成功")):(console.log(t),mui.alert("提交失败，请重新提交"))}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"mui-content"},[i("div",{staticClass:"tableSearch justify_content"},[i("inputcode",{staticStyle:{width:"85%"},on:{searchVal:t.getClientName}}),t._v(" "),i("div",{on:{click:function(e){t.alertShow=!t.alertShow}}},[i("i",{staticClass:"iconfont icon-fenxiaosousuo lookAlert"})]),t._v(" "),i("search",{attrs:{alertShow:t.alertShow},on:{changShow:function(e){t.getAlertShow(e)}}})],1),t._v(" "),i("div",{staticStyle:{height:"51px"}}),t._v(" "),i("div",[i("list",{attrs:{ORDERLIST:t.ORDER},on:{getCheck:t.getCheckInfor}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mui-bar mui-bar-nav back_title"},[e("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),e("h1",{staticClass:"mui-title"},[this._v("OTC签到列表")])])}]},p=i("VU/8")(_,f,!1,null,null,null);e.default=p.exports}});