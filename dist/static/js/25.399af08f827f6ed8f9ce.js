webpackJsonp([25],{"6+vm":function(t,e,a){"use strict";(function(t){var i=a("aSpE"),s=(a.n(i),a("zQ4B"));e.a={data:function(){return{province3:"",Switch:"",Radio:"",Checkbox:[],why:"",who:"",Travel:[{beginCity:"",endCity:"",wayDay:"",wayMoney:"",subsidyT:"",subsidyB:"",days:"",startTime:"",endTime:"",walkT:"",walkB:"",fare:"",homeStay:"",otherPay:"",tatol:0,bz:""}],travel:"",beginCity:"",endCity:"",wayDay:Number,wayMoney:Number,subsidyT:"",subsidyB:"",walkT:"",walkB:"",fare:"",homeStay:"",otherPay:"",isReturn:"",startTime:"",endTime:"",bz:"",sureTime:"",days:"",showWHER:!1,WHERE:"",columns:["董事长 叶文洁","总经理 艾AA","罗辑","云天明","史强","章北海","庄颜","关一帆","智子","歌者"]}},mounted:function(){Object(s.i)(),Object(s.a)("showCityPicker3"),this.getTime(),t(".textarea").on("input",function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"})},methods:{getWhere:function(t,e){this.WHERE=t,this.showWHER=!1},getTime:function(){var t=new Date;t=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),this.sureTime=t},addTravel:function(){Travel[0].this.Travel.push({beginCity:"",endCity:"",wayDay:"",wayMoney:"",subsidyT:"",subsidyB:"",startTime:"",endTime:"",walkT:"",walkB:"",fare:"",homeStay:"",otherPay:"",tatol:0})},removeTravel:function(t){this.Travel.splice(t,1)},mustFull:function(){Object(s.e)()}}}}).call(e,a("7t+N"))},ARiP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("6+vm"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"mui-content"},[a("div",{staticClass:"formTable"},[a("div",{staticClass:"form_title"},[t._v("\n    \t\t\t标题\n    \t\t")]),t._v(" "),a("div",{staticClass:"form_div"},[a("div",{staticClass:"form_row"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.why,expression:"why"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",name:"why",placeholder:"请输入"},domProps:{value:t.why},on:{input:function(e){e.target.composing||(t.why=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form_row"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],staticClass:"btn  mui-btn-block form_row_right",attrs:{type:"text",id:"demo4","data-options":'{"type":"date"}',placeholder:"选择日期 ..."},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form_title"},[t._v("\n    \t\t\t内容\n    \t\t")]),t._v(" "),t._l(t.Travel,function(e,i){return a("div",[a("div",{staticClass:"form_div"},[a("div",{staticClass:"form_row"},[t._m(3,!0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.WHERE,expression:"WHERE"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",name:"WHERE",readonly:"readonly",placeholder:"请选择",id:"ss"},domProps:{value:t.WHERE},on:{click:function(e){t.showWHER=!0},input:function(e){e.target.composing||(t.WHERE=e.target.value)}}}),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showWHER,callback:function(e){t.showWHER=e},expression:"showWHER"}},[a("van-picker",{attrs:{"show-toolbar":"",title:"区域",columns:t.columns},on:{cancel:function(e){t.showWHER=!1},confirm:t.getWhere}})],1)],1),t._v(" "),a("div",{staticClass:"form_row"},[t._m(4,!0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.beginCity,expression:"item.beginCity"}],staticClass:"form_row_right",attrs:{type:"text",name:"",placeholder:"请选择城市",id:"showCityPicker3"},domProps:{value:e.beginCity},on:{input:function(a){a.target.composing||t.$set(e,"beginCity",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form_row"},[t._m(5,!0),t._v(" "),a("div",{staticClass:"form_row_right"},[a("div",{staticClass:"float_right justify_content",staticStyle:{width:"170px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.wayDay,expression:"item.wayDay"}],attrs:{type:"number",pattern:"[0-9]*",name:"",placeholder:"请输入天数"},domProps:{value:e.wayDay},on:{input:function(a){a.target.composing||t.$set(e,"wayDay",a.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.wayMoney,expression:"item.wayMoney"}],attrs:{type:"number",pattern:"[0-9]*",name:"",placeholder:"请输入标准"},domProps:{value:e.wayMoney},on:{input:function(a){a.target.composing||t.$set(e,"wayMoney",a.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"form_row"},[t._m(6,!0),t._v(" "),a("div",{staticClass:"mui-input-row mui-radio form_row_right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Radio,expression:"Radio"}],attrs:{type:"radio",value:"否",name:"ra"},domProps:{checked:t._q(t.Radio,"否")},on:{change:function(e){t.Radio="否"}}})])]),t._v(" "),a("div",{staticClass:"form_row"},[t._m(7,!0),t._v(" "),a("div",{staticClass:"mui-input-row mui-radio form_row_right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Radio,expression:"Radio"}],attrs:{type:"radio",value:"是",name:"ra"},domProps:{checked:t._q(t.Radio,"是")},on:{change:function(e){t.Radio="是"}}})])]),t._v(" "),a("div",{staticClass:"form_row"},[t._m(8,!0),t._v(" "),a("div",{staticClass:"mui-input-row mui-checkbox form_row_right"},[a("label",[t._v("兴趣爱好等复选条件")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Checkbox,expression:"Checkbox"}],attrs:{type:"checkbox",value:"否",name:"CC"},domProps:{checked:Array.isArray(t.Checkbox)?t._i(t.Checkbox,"否")>-1:t.Checkbox},on:{change:function(e){var a=t.Checkbox,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r=t._i(a,"否");i.checked?r<0&&(t.Checkbox=a.concat(["否"])):r>-1&&(t.Checkbox=a.slice(0,r).concat(a.slice(r+1)))}else t.Checkbox=s}}})])]),t._v(" "),t._m(9,!0),t._v(" "),t._m(10,!0)])])}),t._v(" "),a("div",{staticClass:"form_title"},[t._v("\n    \t\t\t备注\n    \t\t")]),t._v(" "),a("div",{staticClass:"form_div"},[t._m(11),t._v(" "),a("div",{staticClass:"padding-lr padding_bb"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bz,expression:"bz"}],staticClass:"textarea",attrs:{name:"",rows:"1",cols:"38",placeholder:"请输入出差备注"},domProps:{value:t.bz},on:{input:function(e){e.target.composing||(t.bz=e.target.value)}}})])]),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"15px","margin-bottom":"15px"}},[a("button",{staticClass:"mui-btn update mui-btn-block mui-btn-primary",staticStyle:{width:"80%",padding:"10px"},attrs:{type:"button",id:"update"},on:{click:t.mustFull}},[t._v("提交")])])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mui-bar mui-bar-nav back_title"},[e("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),e("h1",{staticClass:"mui-title"},[this._v("出差")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:"",id:"why"}},[this._v("\n\t    \t\t\t\t左侧标题\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n\t    \t\t\t\t时间选择器\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n\t    \t\t\t\t一级选择\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n\t    \t\t\t\t三级联动\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n\t    \t\t\t\t在途补助\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n\t    \t\t\t\t单选按钮\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n\t    \t\t\t\t单选按钮\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n\t    \t\t\t\t复选按钮\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mui-input-row mui-checkbox mui-left form_row"},[e("label",[this._v("单击整行选中")]),this._v(" "),e("input",{attrs:{name:"checkbox",value:"Item 1",type:"checkbox"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mui-input-row mui-checkbox mui-left form_row"},[e("label",[this._v("单击整行或选择文字选中")]),this._v(" "),e("input",{attrs:{name:"checkbox",value:"Item 1",type:"checkbox"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"padding-lr"},[e("span",{staticClass:"form_row_height huise"},[this._v("\n\t\t\t\t\t\t备注\n\t\t\t\t\t\t"),e("span",{staticClass:"span_red"})])])}]};var r=function(t){a("JjDw")},n=a("VU/8")(i.a,s,!1,r,null,null);e.default=n.exports},JjDw:function(t,e){},aSpE:function(t,e){}});