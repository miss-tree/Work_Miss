webpackJsonp([77],{MNtW:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"form_div"},[o("div",{staticClass:"form_row"},[t._m(0),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.TOMOVEPART,expression:"TOMOVEPART"}],staticClass:"form_row_right",attrs:{type:"text",readonly:"readonly",name:"topp",placeholder:"请选择"},domProps:{value:t.TOMOVEPART},on:{click:function(e){t.showToPart=!0},input:function(e){e.target.composing||(t.TOMOVEPART=e.target.value)}}}),t._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showToPart,callback:function(e){t.showToPart=e},expression:"showToPart"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"一级部门",columns:t.movePart},on:{cancel:function(e){t.showToPart=!1},confirm:t.getToMovePart}})],1)],1),t._v(" "),o("div",{staticClass:"form_row"},[t._m(1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.TOMOVEPARTS,expression:"TOMOVEPARTS"}],staticClass:"form_row_right",attrs:{type:"text",readonly:"readonly",name:"tott",placeholder:"请选择"},domProps:{value:t.TOMOVEPARTS},on:{click:function(e){t.showToPartS=!0},input:function(e){e.target.composing||(t.TOMOVEPARTS=e.target.value)}}}),t._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showToPartS,callback:function(e){t.showToPartS=e},expression:"showToPartS"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"二级部门",columns:t.moveToPartS},on:{cancel:function(e){t.showToPartS=!1},confirm:t.getToMovePartS}})],1)],1),t._v(" "),o("div",{staticClass:"form_row"},[t._m(2),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.TOJOBTYPE,expression:"TOJOBTYPE"}],staticClass:"form_row_right",attrs:{type:"text",readonly:"readonly",name:"toty",placeholder:"请选择"},domProps:{value:t.TOJOBTYPE},on:{click:function(e){t.showToType=!0},input:function(e){e.target.composing||(t.TOJOBTYPE=e.target.value)}}}),t._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showToType,callback:function(e){t.showToType=e},expression:"showToType"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"职位类型",columns:t.toJobArr},on:{cancel:function(e){t.showToType=!1},confirm:t.getToJobType}})],1)],1),t._v(" "),o("div",{staticClass:"form_row"},[t._m(3),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.TOJOB,expression:"TOJOB"}],staticClass:"form_row_right",attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.TOJOB},on:{input:function(e){e.target.composing||(t.TOJOB=e.target.value)}}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"topp"}},[this._v("\n             \t 一级部门\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"tott"}},[this._v("\n             \t二级部门\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"toty"}},[this._v("\n             \t职位类型\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:""}},[this._v("\n             \t 岗位\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])}]},a=o("VU/8")({data:function(){return{showToPart:!1,movePart:["电商部","销售部","OTC推广部","招商部","市场部","大KA部","财务组","计生事业部","人资组","助理团队"],TOMOVEPART:"",showToPartS:!1,moveToPartS:["北京市","上海市","广东省","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广西壮族","海南省","重庆","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","台湾省","香港","澳门","宁夏"],TOMOVEPARTS:"",showToType:!1,toJobArr:["普通员工","技术员工","中级管理层","高级管理层"],TOINFOR:{toMovePart:"",toMoveParts:"",toMoveType:"",toMoveJob:""},TOJOBTYPE:"",TOJOB:""}},watch:{TOJOB:function(t,e){t&&(this.TOINFOR.toMoveJob=t,this.$emit("setInfor",this.TOINFOR))}},methods:{getToMovePart:function(t,e){this.TOMOVEPART=t,this.showToPart=!1,this.TOINFOR.toMovePart=this.TOMOVEPART,this.$emit("setInfor",this.TOINFOR)},getToMovePartS:function(t,e){this.TOMOVEPARTS=t,this.showToPartS=!1,this.TOINFOR.toMoveParts=this.TOMOVEPARTS,this.$emit("setInfor",this.TOINFOR)},getToJobType:function(t,e){this.TOJOBTYPE=t,this.showToType=!1,this.TOINFOR.toMoveType=this.TOJOBTYPE,this.$emit("setInfor",this.TOINFOR)}}},s,!1,null,null,null).exports,i=o("SBrE"),r=o("zQ4B"),n={data:function(){return{PERSON:"",showMove:!1,moveArr:["升职","平调","降职","离职"],MOVETYPE:"",showPart:!1,movePart:["电商部","销售部","OTC推广部","招商部","市场部","大KA部","财务组","计生事业部","人资组","助理团队"],MOVEPART:"",showPartS:!1,movePartS:["北京市","上海市","广东省","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广西壮族","海南省","重庆","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","台湾省","香港","澳门","宁夏"],MOVEPARTS:"",showType:!1,jobArr:["普通员工","技术员工","中级管理层","高级管理层"],JOBTYPE:"",JOB:"",STARTDATE:"",CONNECTDATE:"",TOINFOR:{toMovePart:"",toMoveParts:"",toMoveType:"",toMoveJob:""},bz:"",sureTime:""}},components:{moveto:a,uploadpic:i.default},mounted:function(){Object(r.i)(),this.getTime()},methods:{getMoveType:function(t,e){this.MOVETYPE=t,this.showMove=!1},getMovePart:function(t,e){this.MOVEPART=t,this.showPart=!1},getMovePartS:function(t,e){this.MOVEPARTS=t,this.showPartS=!1},getJobType:function(t,e){this.JOBTYPE=t,this.showType=!1},getInfor:function(t){this.TOINFOR.toMovePart=t.toMovePart,this.TOINFOR.toMoveParts=t.toMoveParts,this.TOINFOR.toMoveType=t.toMoveType,this.TOINFOR.toMoveJob=t.toMoveJob},getTime:function(){var t=new Date;t=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),this.sureTime=t},mustFull:function(){if("离职"!=this.MOVETYPE&&""==this.MOVETYPE){if(""==this.TOINFOR.toMovePart)return mui.alert("请选择职位调整的一级部门"),!1;if(""==this.TOINFOR.toMoveParts)return mui.alert("请选择职位调整的二级部门"),!1;if(""==this.TOINFOR.toMoveType)return mui.alert("请选择职位调整的职位类型"),!1;if(""==this.TOINFOR.toMoveJob)return mui.alert("请选择职位调整的岗位"),!1;0==Object(r.e)().length&&console.log("hi")}else{0==Object(r.e)().length&&console.log("hi")}}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"mui-content"},[o("div",{staticClass:"formTable"},[o("div",{staticClass:"form_title"},[t._v("人员信息")]),t._v(" "),o("div",{staticClass:"form_div"},[o("div",{staticClass:"form_row"},[t._m(1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.PERSON,expression:"PERSON"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",name:"xm",placeholder:"请输入"},domProps:{value:t.PERSON},on:{input:function(e){e.target.composing||(t.PERSON=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form_row"},[t._m(2),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.MOVETYPE,expression:"MOVETYPE"}],staticClass:"form_row_right",attrs:{type:"text",name:"moveType",data:"required",readonly:"readonly",placeholder:"请选择"},domProps:{value:t.MOVETYPE},on:{click:function(e){t.showMove=!0},input:function(e){e.target.composing||(t.MOVETYPE=e.target.value)}}}),t._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showMove,callback:function(e){t.showMove=e},expression:"showMove"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"异动类型",columns:t.moveArr},on:{cancel:function(e){t.showMove=!1},confirm:t.getMoveType}})],1)],1),t._v(" "),o("div",{staticClass:"form_row"},[t._m(3),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.MOVEPART,expression:"MOVEPART"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",readonly:"readonly",name:"section",placeholder:"请选择"},domProps:{value:t.MOVEPART},on:{click:function(e){t.showPart=!0},input:function(e){e.target.composing||(t.MOVEPART=e.target.value)}}}),t._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showPart,callback:function(e){t.showPart=e},expression:"showPart"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"一级部门",columns:t.movePart},on:{cancel:function(e){t.showPart=!1},confirm:t.getMovePart}})],1)],1),t._v(" "),o("div",{staticClass:"form_row"},[t._m(4),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.MOVEPARTS,expression:"MOVEPARTS"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",readonly:"readonly",name:"towPart",placeholder:"请选择"},domProps:{value:t.MOVEPARTS},on:{click:function(e){t.showPartS=!0},input:function(e){e.target.composing||(t.MOVEPARTS=e.target.value)}}}),t._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showPartS,callback:function(e){t.showPartS=e},expression:"showPartS"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"二级部门",columns:t.movePartS},on:{cancel:function(e){t.showPartS=!1},confirm:t.getMovePartS}})],1)],1),t._v(" "),o("div",{staticClass:"form_row"},[t._m(5),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.JOBTYPE,expression:"JOBTYPE"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",readonly:"readonly",name:"jobType",placeholder:"请选择"},domProps:{value:t.JOBTYPE},on:{click:function(e){t.showType=!0},input:function(e){e.target.composing||(t.JOBTYPE=e.target.value)}}}),t._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showType,callback:function(e){t.showType=e},expression:"showType"}},[o("van-picker",{attrs:{"show-toolbar":"",title:"职位类型",columns:t.jobArr},on:{cancel:function(e){t.showType=!1},confirm:t.getJobType}})],1)],1),t._v(" "),o("div",{staticClass:"form_row"},[t._m(6),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.JOB,expression:"JOB"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",name:"job",placeholder:"请输入"},domProps:{value:t.JOB},on:{input:function(e){e.target.composing||(t.JOB=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form_row"},[t._m(7),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.STARTDATE,expression:"STARTDATE"}],staticClass:"btn mui-btn-block form_row_right",attrs:{type:"text",data:"required",id:"entryJob",name:"jobTime","data-options":'{"type":"date"}',placeholder:"选择日期 ..."},domProps:{value:t.STARTDATE},on:{input:function(e){e.target.composing||(t.STARTDATE=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form_row"},[t._m(8),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.CONNECTDATE,expression:"CONNECTDATE"}],staticClass:"btn mui-btn-block form_row_right",attrs:{type:"text",data:"required",id:"connectDate",name:"mixTime","data-options":'{"type":"date"}',placeholder:"选择日期 ..."},domProps:{value:t.CONNECTDATE},on:{input:function(e){e.target.composing||(t.CONNECTDATE=e.target.value)}}})])]),t._v(" "),o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:"离职"!=t.MOVETYPE,expression:"MOVETYPE!='离职'"}]},[o("div",{staticClass:"form_title"},[t._v("职位调整")]),t._v(" "),o("moveto",{on:{setInfor:t.getInfor}})],1),t._v(" "),o("div",{staticClass:"form_title"},[t._v("备注")]),t._v(" "),o("div",{staticClass:"form_div",staticStyle:{"padding-top":"10px"}},[o("div",{staticClass:"padding-lr padding_bb"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bz,expression:"bz"}],staticClass:"textarea",attrs:{name:"",rows:"2",cols:"38",placeholder:"请输入备注"},domProps:{value:t.bz},on:{input:function(e){e.target.composing||(t.bz=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"bottomOver"})]),t._v(" "),o("div",{staticClass:"form_title"},[t._v("附件")]),t._v(" "),o("div",{staticClass:"form_div",staticStyle:{padding:"15px 0"}},[o("uploadpic")],1),t._v(" "),o("div",{staticClass:"bottomOver"}),t._v(" "),o("div",{staticClass:"submitBtn"},[o("button",{staticClass:"mui-btn update mui-btn-block mui-btn-primary",staticStyle:{width:"80%",padding:"10px"},attrs:{type:"button",id:"update"},on:{click:t.mustFull}},[t._v("提交")])])])])]),t._v(" "),o("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mui-bar mui-bar-nav back_title"},[e("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),e("h1",{staticClass:"mui-title"},[this._v("异动申请")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"xm"}},[this._v("\n             \t 姓名\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"moveType"}},[this._v("\n             \t 异动类型\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"section"}},[this._v("\n             \t 一级部门\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"towPart"}},[this._v("\n             \t二级部门\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"jobType"}},[this._v("\n             \t职位类型\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"job"}},[this._v("\n             \t 岗位\n              "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"jobTime"}},[this._v("\n                \t入职时间\n                "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"mixTime"}},[this._v("\n                交接时间\n                "),e("span",{staticClass:"span_red"},[this._v("*")])])}]};var c=o("VU/8")(n,l,!1,function(t){o("ZJmU")},null,null);e.default=c.exports},ZJmU:function(t,e){}});