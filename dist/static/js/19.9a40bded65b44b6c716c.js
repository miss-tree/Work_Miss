webpackJsonp([19],{"+9/V":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("10tH"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"formTable"},t._l(t.Travel,function(e,a){return s("div",[s("div",{staticClass:"form_title"},[s("span",{staticClass:"span_15px"},[t._v("报销项目("+t._s(a+1)+")")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.Travel.length>1,expression:"Travel.length>1"}],on:{click:t.removeTravel}},[t._v("删除")])]),t._v(" "),s("div",{staticClass:"form_div"},[s("div",{staticClass:"form_row"},[t._m(0,!0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.cost,expression:"item.cost"}],staticClass:"form_row_right",attrs:{type:"text",placeholder:"请输入"},domProps:{value:e.cost},on:{input:function(s){s.target.composing||t.$set(e,"cost",s.target.value)}}})]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(1,!0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.numSheets,expression:"item.numSheets"}],staticClass:"form_row_right",attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入"},domProps:{value:e.numSheets},on:{input:function(s){s.target.composing||t.$set(e,"numSheets",s.target.value)}}})]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(2,!0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.money,expression:"item.money"}],staticClass:"form_row_right",attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入"},domProps:{value:e.money},on:{input:function(s){s.target.composing||t.$set(e,"money",s.target.value)}}})]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(3,!0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"item.subject"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",readonly:"readonly",name:"section",placeholder:"请选择"},domProps:{value:e.subject},on:{click:function(e){t.showPicker=!0},input:function(s){s.target.composing||t.$set(e,"subject",s.target.value)}}}),t._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[s("van-picker",{attrs:{"show-toolbar":"",title:"一级科目",columns:t.subjectInfor},on:{cancel:function(e){t.showPicker=!1},confirm:t.getSubject}})],1)],1),t._v(" "),s("div",{staticClass:"form_row"},[t._m(4,!0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.useType,expression:"item.useType"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",readonly:"readonly",name:"section",placeholder:"请选择"},domProps:{value:e.useType},on:{click:function(e){t.showUse=!0},input:function(s){s.target.composing||t.$set(e,"useType",s.target.value)}}}),t._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showUse,callback:function(e){t.showUse=e},expression:"showUse"}},[s("van-picker",{attrs:{"show-toolbar":"",title:"用途说明",columns:t.useInfor},on:{cancel:function(e){t.showUse=!1},confirm:t.getUseType}})],1)],1),t._v(" "),s("div",{staticClass:"form_row"},[t._m(5,!0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.bz,expression:"item.bz"}],staticClass:"form_row_right",attrs:{type:"text",placeholder:"请输入"},domProps:{value:e.bz},on:{input:function(s){s.target.composing||t.$set(e,"bz",s.target.value)}}})]),t._v(" "),s("div",{staticClass:"form_row"},[t._m(6,!0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.bxmoney,expression:"item.bxmoney"}],staticClass:"form_row_right",attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入"},domProps:{value:e.bxmoney},on:{input:function(s){s.target.composing||t.$set(e,"bxmoney",s.target.value)}}})])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n              费用项目\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n              \t张数\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n              \t金额\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n              \t一级科目\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n              \t用途说明\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n              备注\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n              \t实际报销金额\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])}]};var i=s("VU/8")({data:function(){return{showPicker:!1,subjectInfor:["广告","租金","进场","业务","提成","销售"],showUse:!1,useInfor:["广告","租金","进场","业务","提成","销售"]}},props:["Travel"],computed:{},mounted:function(){},methods:{getSubject:function(t,e){this.Travel[0].subject=t,this.showPicker=!1},getUseType:function(t,e){this.Travel[0].useType=t,this.showUse=!1},addTravel:function(){this.Travel.push({cost:"",numSheets:"",subject:"",money:"",useType:"",bxmoney:"",tatol:0,bz:""})},removeTravel:function(t){this.Travel.splice(t,1)}}},r,!1,function(t){s("5wdY")},null,null).exports,n=s("zQ4B"),o={data:function(){return{COMNUMBER:"TEK2156584455",BXR:"",testArr:[{name:"实际报销人",isisMust:!0,inpt:""}],BXTIME:"",Travel:[{cost:"",numSheets:"",subject:"",money:"",useType:"",bxmoney:"",tatol:0,bz:""}],bz:"",sureTime:"",days:""}},components:{formbase:a.a,comform:i},computed:{add_tatol:function(){return console.log(this.Travel.map(function(t){return t.tatol})),this.Travel.map(function(t){return t.tatol}).reduce(function(t,e){return parseFloat(e)+t},0)}},mounted:function(){Object(n.i)(),this.getTime()},methods:{getTime:function(){var t=new Date;t=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),this.sureTime=t},mustFull:function(){0==Object(n.e)().length&&console.log("输入完成")}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"mui-content"},[s("div",{staticClass:"formTable"},[s("div",{staticClass:"form_div"},[s("div",{staticClass:"form_row"},[t._m(1),t._v(" "),s("div",{staticClass:"form_row_right"},[t._v(t._s(t.COMNUMBER))])]),t._v(" "),s("formbase",{attrs:{list:t.testArr}}),t._v(" "),s("div",{staticClass:"form_row"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.BXTIME,expression:"BXTIME"}],staticClass:"btn mui-btn-block form_row_right",attrs:{type:"text",id:"comBX","data-options":'{"type":"date"}',placeholder:"选择日期 ..."},domProps:{value:t.BXTIME},on:{input:function(e){e.target.composing||(t.BXTIME=e.target.value)}}})])],1),t._v(" "),s("comform",{attrs:{Travel:t.Travel}}),t._v(" "),s("div",{staticClass:"form_div margin_top"},[s("div",{staticClass:"form_row"},[t._m(3),t._v(" "),s("div",{staticClass:"form_row_right"},[s("span",{staticClass:"float_right"},[t._v(t._s(t.add_tatol.toFixed(2))+"(元)")])])]),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"padding-lr padding_bb"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bz,expression:"bz"}],staticClass:"textarea",attrs:{name:"",rows:"2",cols:"38",placeholder:"请输入出差备注"},domProps:{value:t.bz},on:{input:function(e){e.target.composing||(t.bz=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"bottomOver"})]),t._v(" "),s("div",{staticClass:"submitBtn"},[s("button",{staticClass:"mui-btn update mui-btn-block mui-btn-primary",staticStyle:{width:"80%",padding:"10px"},attrs:{type:"button",id:"update"},on:{click:t.mustFull}},[t._v("提交")])])],1)]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mui-bar mui-bar-nav back_title"},[e("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),e("h1",{staticClass:"mui-title"},[this._v("普通报销")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n            报销编号\n            "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n              报销时间\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left",attrs:{for:""}},[this._v("\n            总计\n            "),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"padding-lr"},[e("span",{staticClass:"form_row_height huise"},[this._v("\n            出差备注\n            "),e("span",{staticClass:"span_red"})])])}]},c=s("VU/8")(o,l,!1,null,null,null);e.default=c.exports},"10tH":function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.list,function(e,a){return s("div",{staticClass:"form_row"},[s("label",{staticClass:"form_row_left huise",attrs:{for:""}},[t._v("\n              "+t._s(e.name)+"\n              "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.isMust,expression:"item.isMust"}],staticClass:"span_red"},[t._v("*")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.inpt,expression:"item.inpt"}],staticClass:"form_row_right",attrs:{type:"text",placeholder:"请输入"},domProps:{value:e.inpt},on:{input:function(s){s.target.composing||t.$set(e,"inpt",s.target.value)}}})])}),0)},staticRenderFns:[]};var r=s("VU/8")({data:function(){return{}},props:["list"]},a,!1,function(t){s("lm91")},null,null);e.a=r.exports},"5wdY":function(t,e){},lm91:function(t,e){}});