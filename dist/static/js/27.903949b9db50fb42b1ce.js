webpackJsonp([27],{"4T7m":function(t,e,s){"use strict";var i=s("Y/Sf"),a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.topLayer,expression:"topLayer"}],staticClass:"mongolia",on:{click:t.closeAlert}}),t._v(" "),s("div",[s("div",{staticClass:"form_div"},[s("div",{staticClass:"form_row"},[t._m(0),t._v(" "),s("div",{staticClass:"form_row_right"},[s("div",{staticClass:"mui-btn mui-btn-primary",on:{click:function(e){t.returnAdd()}}},[t._v("\n            添加\n          ")]),t._v(" "),s("button",{staticClass:"mui-btn",attrs:{type:"button"},on:{click:function(e){t.delReturn()}}},[t._v("\n            删除\n          ")]),t._v(" "),s("span",{staticClass:"mui-btn mui-btn-success",on:{click:function(e){t.changeReturn()}}},[t._v("\n            编辑\n          ")])])]),t._v(" "),s("table",{staticClass:"dataTable",attrs:{border:"0",cellspacing:"",cellpadding:""}},[s("tr",[s("th",{staticClass:"col_10"},[s("label",{staticClass:"bui-checkbox-label bui-checkbox-anim"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.allCheck,expression:"allCheck"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allCheck)?t._i(t.allCheck,null)>-1:t.allCheck},on:{click:t.checkAll,change:function(e){var s=t.allCheck,i=e.target,a=!!i.checked;if(Array.isArray(s)){var r=t._i(s,null);i.checked?r<0&&(t.allCheck=s.concat([null])):r>-1&&(t.allCheck=s.slice(0,r).concat(s.slice(r+1)))}else t.allCheck=a}}}),t._v(" "),s("i",{staticClass:"bui-checkbox"})])]),t._v(" "),s("th",{staticClass:"col_40"},[t._v("产品名称")]),t._v(" "),s("th",{staticClass:"col_20"},[t._v("退货数量")]),t._v(" "),s("th",{staticClass:"col_15"},[t._v("单价")]),t._v(" "),s("th",{staticClass:"col_15"},[t._v("金额")])]),t._v(" "),t._l(t.list,function(e,i){return s("tr",[s("td",{staticClass:"col_10"},[s("label",{staticClass:"bui-checkbox-label bui-checkbox-anim"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkData,expression:"checkData"}],attrs:{type:"checkbox",name:"isCheck"},domProps:{value:e.name,checked:Array.isArray(t.checkData)?t._i(t.checkData,e.name)>-1:t.checkData},on:{change:function(s){var i=t.checkData,a=s.target,r=!!a.checked;if(Array.isArray(i)){var n=e.name,l=t._i(i,n);a.checked?l<0&&(t.checkData=i.concat([n])):l>-1&&(t.checkData=i.slice(0,l).concat(i.slice(l+1)))}else t.checkData=r}}}),t._v(" "),s("i",{staticClass:"bui-checkbox"})])]),t._v(" "),s("td",{staticClass:"col_40"},[s("span",[t._v(t._s(e.name))])]),t._v(" "),s("td",{staticClass:"col_20 text_algin"},[s("span",[t._v(t._s(e.returnNum))])]),t._v(" "),s("td",{staticClass:"col_15 text_algin"},[s("span",[t._v(t._s(e.price))])]),t._v(" "),s("td",{staticClass:"col_15 text_algin"},[s("span",[t._v(t._s(e.money))])])])})],2),t._v(" "),s("div",{staticClass:"form_row"},[t._m(1),t._v(" "),s("div",{staticClass:"form_row_right span_red"},[t._v(t._s(t.returnTotal))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.returnShow,expression:"returnShow"}],staticClass:"alert_div"},[s("div",[s("div",{staticClass:"form_title"},[t._v("产品退货")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"formTable"},[s("div",{staticClass:"form_div"},[s("div",{staticClass:"form_row"},[t._m(2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.isEditReturn,expression:"isEditReturn!=false"}],staticClass:"form_row_right"},[t._v(t._s(t.editReturn.name))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.isEditReturn,expression:"isEditReturn==false"}],staticClass:"filter-box form_row_right",attrs:{id:"proSelect"}},[s("div",{staticClass:"filter-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectPro,expression:"selectPro"}],staticClass:"filter-title",attrs:{type:"text",readonly:"",placeholder:"请选择"},domProps:{value:t.selectPro},on:{input:function(e){e.target.composing||(t.selectPro=e.target.value)}}}),t._v(" "),s("i",{staticClass:"icon icon-filter-arrow"})]),t._v(" "),t._l(t.proList,function(e,i){return s("select",{attrs:{name:"filter"}},[s("option",[t._v(t._s(e.text))])])})],2)]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(3),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editReturn.returnNum,expression:"editReturn.returnNum"}],staticClass:"form_row_right",attrs:{type:"number",pattern:"[0-9]*",placeholder:"0"},domProps:{value:t.editReturn.returnNum},on:{input:function(e){e.target.composing||t.$set(t.editReturn,"returnNum",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(4),t._v(" "),s("div",{staticClass:"form_row_right"},[t._v(t._s(t.editReturn.unit))])]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(5),t._v(" "),s("div",{staticClass:"form_row_right"},[t._v(t._s(t.editReturn.price))])]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(6),t._v(" "),s("div",{staticClass:"form_row_right"},[t._v(t._s(t.editReturn.money=t.editReturn.returnNum*t.editReturn.price))])]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(7),t._v(" "),s("div",{staticClass:"form_row_right"},[t._v(t._s(t.editReturn.M_num))])]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(8),t._v(" "),s("div",{staticClass:"form_row_right"},[t._v(t._s(t.editReturn.M_MONEY))])])])])]),t._v(" "),s("div",{staticClass:"alertMidBottom"},[s("button",{directives:[{name:"show",rawName:"v-show",value:1==t.isEditReturn,expression:"isEditReturn==true"}],staticClass:"mui-btn mui-btn-block mui-btn-primary alertBtn",on:{click:function(e){t.saveReturn()}}},[t._v("保存编辑")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:0==t.isEditReturn,expression:"isEditReturn==false"}],staticClass:"mui-btn mui-btn-block mui-btn-primary alertBtn",on:{click:function(e){t.keepReturn()}}},[t._v("添加")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n          退货列表\n          "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n          金额合计\n          "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n                    产品名称\n                    "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n                    退货数量\n                    "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n                    单位\n                    "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n                    单价\n                    "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n                    金额\n                    "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n                    应收件数\n                    "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n                    产品应收款\n                    "),e("span",{staticClass:"span_red"})])}]},r=s("VU/8")(i.a,a,!1,null,null,null);e.a=r.exports},QrUS:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("r+if"),a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"mui-content"},[s("div",{staticClass:"formTable"},[s("div",{staticClass:"form_title"},[t._v("客户信息")]),t._v(" "),s("div",{staticClass:"form_div"},[s("div",{staticClass:"form_row"},[t._m(1),t._v(" "),s("div",{staticClass:"filter-box form_row_right",attrs:{id:"RETURNTYPE"}},[t._m(2),t._v(" "),t._l(t.clientName,function(e,i){return s("select",{attrs:{name:"filter"}},[s("option",[t._v(t._s(e.text))])])})],2)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"部分退货"==t.RETURNTYPE,expression:"RETURNTYPE=='部分退货'"}]},[s("div",{staticClass:"form_row"},[t._m(3),t._v(" "),s("div",{staticClass:"form_row_right"},[t._v(t._s(t.ORDERCUSTOMERINFOR.name))])]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(4),t._v(" "),s("div",{staticClass:"form_row_right"},[t._v(t._s(t.ORDERCUSTOMERINFOR.person))])]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(5),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ORDERCUSTOMERINFOR.phone,expression:"ORDERCUSTOMERINFOR.phone"}],staticClass:"form_row_right",attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入"},domProps:{value:t.ORDERCUSTOMERINFOR.phone},on:{input:function(e){e.target.composing||t.$set(t.ORDERCUSTOMERINFOR,"phone",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(6),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ORDERCUSTOMERINFOR.ticketname,expression:"ORDERCUSTOMERINFOR.ticketname"}],staticClass:"form_row_right",attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.ORDERCUSTOMERINFOR.ticketname},on:{input:function(e){e.target.composing||t.$set(t.ORDERCUSTOMERINFOR,"ticketname",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(7),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ORDERCUSTOMERINFOR.where,expression:"ORDERCUSTOMERINFOR.where"}],staticClass:"form_row_right",attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.ORDERCUSTOMERINFOR.where},on:{input:function(e){e.target.composing||t.$set(t.ORDERCUSTOMERINFOR,"where",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(8),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.EXPRESS,expression:"EXPRESS"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",readonly:"readonly",name:"section",placeholder:"请选择"},domProps:{value:t.EXPRESS},on:{click:function(e){t.showPicker=!0},input:function(e){e.target.composing||(t.EXPRESS=e.target.value)}}}),t._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[s("van-picker",{attrs:{"show-toolbar":"",title:"物流公司",columns:t.expressInfor},on:{cancel:function(e){t.showPicker=!1},confirm:t.onConfirm}})],1)],1),t._v(" "),s("div",{staticClass:"form_row"},[t._m(9),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.EXPRESSnum,expression:"EXPRESSnum"}],staticClass:"form_row_right",attrs:{type:"number",data:"required",name:"expressnumber",placeholder:"请输入"},domProps:{value:t.EXPRESSnum},on:{input:function(e){e.target.composing||(t.EXPRESSnum=e.target.value)}}})])]),t._v(" "),s("div",[s("div",{staticClass:"form_title"},[t._v("订单详情")]),t._v(" "),s("returndetail",{attrs:{ORDER:t.ORDER}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"部分退货"==t.RETURNTYPE,expression:"RETURNTYPE=='部分退货'"}]},[s("div",{staticClass:"form_title"},[t._v("退货产品")]),t._v(" "),s("returnadd",{attrs:{RETURNORDER:t.RETURNORDER,ORDER:t.ORDER,returnTotal:t.returnTotal,proList:t.proList}})],1),t._v(" "),s("div",{staticClass:"form_title"},[t._v("备注")]),t._v(" "),s("div",{staticClass:"form_div"},[t._m(10),t._v(" "),s("div",{staticClass:"padding-lr padding_bb"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.BZ,expression:"BZ"}],staticClass:"textarea",attrs:{name:"",rows:"1",cols:"38",placeholder:"请输入备注"},domProps:{value:t.BZ},on:{input:function(e){e.target.composing||(t.BZ=e.target.value)}}})])])],1),t._v(" "),s("div",{staticClass:"submitBtn"},[s("button",{staticClass:"mui-btn update mui-btn-block mui-btn-primary",staticStyle:{width:"80%",padding:"10px"},attrs:{type:"button",id:"update"},on:{click:t.mustFull}},[t._v("提交")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mui-bar mui-bar-nav back_title"},[e("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),e("h1",{staticClass:"mui-title"},[this._v("未开票订单退货")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"CLIENT"}},[this._v("\n            退货类型\n            "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filter-text"},[e("input",{staticClass:"filter-title",attrs:{type:"text",readonly:"",placeholder:"请选择"}}),this._v(" "),e("i",{staticClass:"icon icon-filter-arrow"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"CLIENT"}},[this._v("\n              收件客户名\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise"},[this._v("\n              收件人\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"CLIENT"}},[this._v("\n              联系电话\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"CLIENT"}},[this._v("\n              开票标准名\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"CLIENT"}},[this._v("\n              邮寄地址\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"section"}},[this._v("\n            物流公司\n            "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:"",id:"expressnumber"}},[this._v("\n            物流单号\n            "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"padding-lr"},[e("span",{staticClass:"form_row_height huise"},[this._v("\n              备注\n              "),e("span",{staticClass:"span_red"})])])}]},r=s("VU/8")(i.a,a,!1,null,null,null);e.default=r.exports},"Y/Sf":function(t,e,s){"use strict";(function(t){e.a={data:function(){return{list:this.RETURNORDER,topLayer:!1,returnShow:"",alertShow:!1,isEditReturn:!1,editShow:!1,checkData:[],allCheck:!1,selectPro:"",editReturn:{name:this.selectPro,num:"",returnNum:"",price:"",money:"",m_number:"",m_money:"",unit:"",index:""}}},props:["RETURNORDER","returnTotal","proList","ORDER"],watch:{selectPro:function(t,e){var s=this;""!=t&&(1==this.isEditReturn?t!=e&&console.log("值改变了"):this.ORDER.forEach(function(t,e){t.name==s.editReturn.name&&(s.editReturn.unit=s.ORDER[e].unit,s.editReturn.price=s.ORDER[e].price,s.editReturn.num=s.ORDER[e].num)}))},checkData:function(){this.checkData.length==this.list.length?this.allCheck=!0:this.allCheck=!1},deep:!0},mounted:function(){var e=this;t("#proSelect").selectFilter({callBack:function(s){t("#proSelect input").val(s),t("#proSelect input")[0].dispatchEvent(new Event("input")),e.editReturn.name=s}})},methods:{closeAlert:function(){this.topLayer=!1,this.alertShow=!1,this.returnShow=!1},returnAdd:function(){this.topLayer=!this.topLayer,this.returnShow=!this.returnShow,this.selectPro="",this.editReturn={name:"",num:"",returnNum:"",price:"",money:"",m_number:"",m_money:"",unit:"",index:""}},delReturn:function(){var t=this;if(0==t.checkData.length)return!1;mui.confirm("你确定要删除订单","提示",["取消","确定 "],function(e){1==e.index&&(t.list=t.list.filter(function(e,s){return 0==t.checkData.includes(e.name)}),t.checkData=[])})},changeReturn:function(){var t=this;if(0==this.checkData.length)return!1;this.isEditReturn=!0,this.list.forEach(function(e,s){-1!=e.name.indexOf(t.checkData[0])&&(t.editReturn=t.list[s],t.editReturn.index=s,t.selectPro=t.editReturn.name)}),this.topLayer=!0,this.returnShow=!0},checkAll:function(){var t=this;return this.allCheck=!this.allCheck,(this.allCheck=!1)?(this.checkData=[],!1):(this.checkData=[],this.list.forEach(function(e,s){t.checkData.push(e.name)}),!1)},saveReturn:function(){var t=this.editReturn.index;this.list[t]=this.editReturn,this.editReturn={name:"",num:"",returnNum:"",price:"",money:"",m_number:"",m_money:"",unit:"",index:""},this.topLayer=!1,this.returnShow=!1,this.isEditReturn=!1},keepReturn:function(){var t=this;if(""==this.editReturn.name)return mui.alert("请选择产品名称"),!1;if(""==this.editReturn.returnNum)return mui.alert("请输入退货数量"),!1;if(0==this.list.length)this.list.push(this.editReturn),this.editReturn={name:"",num:"",returnNum:"",price:"",money:"",m_number:"",m_money:"",unit:"",index:""},this.selectPro="",this.topLayer=!1,this.returnShow=!1;else{var e=!1;this.list.forEach(function(s,i){if(s.name==t.editReturn.name)return mui.alert("此产品已经退货，请重新选择"),e=!0,!1}),0==e&&(this.list.push(this.editReturn),this.editReturn={name:"",num:"",returnNum:"",price:"",money:"",m_number:"",m_money:"",unit:"",index:""},this.selectPro="",this.topLayer=!1,this.returnShow=!1)}}}}}).call(e,s("7t+N"))},"r+if":function(t,e,s){"use strict";(function(t){var i=s("zQ4B"),a=s("jMFT"),r=s("4T7m");e.a={data:function(){return{RETURNTYPE:"",ORDERCUSTOMERINFOR:{name:"平安医疗健康管理股份有限公司",person:"骆东堂",phone:"",ticketname:"",where:""},EXPRESS:"",EXPRESSnum:"",topLayer:!1,showPicker:!1,expressInfor:["申通快递","圆通快递","EMS快递","顺丰快递","天天快递","邮政快递"],clientName:[{text:"部分退货"},{text:"全部退货"}],showInfor:!1,COMPANY:"",companyArr:["泰恩康股份","马鞍山天福康","电商公司","安徽维泰利"],ORDER:[{name:"红花油",num:2,price:5,money:"",M_num:"",M_money:"",unit:"件"},{name:"和胃",num:30,price:150,money:"5",M_num:1e3,M_money:1e3,unit:"件"}],editOrder:{name:"红",num:12,price:6,money:"",M_num:"",M_money:"",unit:"件",index:""},RETURNORDER:[{name:"红花油",num:2,returnNum:3,price:5,money:10,m_number:"",m_money:"",unit:"件",index:""}],selectPro:"",BZ:""}},components:{returnadd:r.a,returndetail:a.a},computed:{proList:function(){return this.ORDER.map(function(t){return{text:t.name}})},total:function(){return 0==this.ORDER.length?0:this.ORDER.map(function(t){return t.money}).reduce(function(t,e){return parseFloat(e)+t})},returnTotal:function(){return 0==this.RETURNORDER.length?0:this.RETURNORDER.map(function(t){return t.money}).reduce(function(t,e){return parseFloat(e)+t})}},mounted:function(){var e=this;t("#RETURNTYPE").selectFilter({callBack:function(t){e.RETURNTYPE=t}})},methods:{onConfirm:function(t,e){this.EXPRESS=t,this.showPicker=!1},applyAjax:function(){axios.get(api).then(function(t){})},mustFull:function(){0==Object(i.e)().length&&console.log("hi")}}}}).call(e,s("7t+N"))}});