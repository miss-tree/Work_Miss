webpackJsonp([75],{"2ABt":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("zQ4B"),s={data:function(){return{tableData:[{where:"杭州",id:458876,title:"产品A",type:"一类配置",isCheck:!0},{where:"常州",id:8446645,title:"产品B",type:"二类配置",isCheck:!1},{where:"广州",id:7854532,title:"产品C",type:"C类配置",isCheck:!1}],editShow:!1,addShow:!1,checkModel:[],checkAll:!1}},watch:{checkModel:{handler:function(){this.checkModel.length==this.tableData.length?this.checkAll=!0:this.checkAll=!1},deep:!0}},mounted:function(){Object(a.b)()},methods:{addCheck:function(){var t=this;this.addShow=!this.addShow,1==this.addShow&&mui.confirm("增加项目？",["是","否"],function(i){1==i.index&&(mui.toast("增加项目"),t.addShow=!1)})},allCheck:function(){this.tableData.forEach(function(t,i){if(1!=t.isCheck)return t.isCheck=!0,!1})},checkBack:function(){this.tableData.forEach(function(t,i){t.isCheck=!t.isCheck})},editCheck:function(){this.editShow=!this.editShow},editTable:function(t){console.log(t),this.tableData.splice(t,1)},delate:function(){mui.confirm("是否确认删除","提示",["否","是"],function(t){1==t.index&&setTimeout(function(){mui.toast("已经删除")},1e3)})}}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"mui-content"},[e("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.editShow,expression:"editShow!=false"}],staticStyle:{padding:"0 10px"}},[e("div",{staticClass:"flex flex_between"},[e("div",{staticClass:"span_green text_algin line_25_ft_15",on:{click:t.allCheck}},[t._v("全选")]),t._v(" "),e("div",{staticClass:"span_green text_algin line_25_ft_15",on:{click:t.checkBack}},[t._v("取反")]),t._v(" "),e("div",{staticClass:"span_green text_algin line_25_ft_15",on:{click:t.editCheck}},[t._v("完成")])])]),t._v(" "),e("div",{staticClass:"content_padding"},[t._m(1),t._v(" "),e("table",{staticClass:"dataTable",attrs:{border:"0",cellspacing:"",cellpadding:""}},[t._m(2),t._v(" "),t._l(t.tableData,function(i,a){return e("tr",[e("td",{staticClass:"col_10"},[e("label",{staticClass:"bui-checkbox-label bui-checkbox-anim"},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.isCheck,expression:"item.isCheck"}],attrs:{type:"checkbox",name:"isCheck"},domProps:{checked:i.isCheck,value:i.title,checked:Array.isArray(i.isCheck)?t._i(i.isCheck,i.title)>-1:i.isCheck},on:{change:function(e){var a=i.isCheck,s=e.target,c=!!s.checked;if(Array.isArray(a)){var l=i.title,n=t._i(a,l);s.checked?n<0&&t.$set(i,"isCheck",a.concat([l])):n>-1&&t.$set(i,"isCheck",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(i,"isCheck",c)}}}),t._v(" "),e("i",{staticClass:"bui-checkbox"})])]),t._v(" "),e("td",{staticClass:"col_30"},[e("span",{},[t._v(t._s(i.title))])]),t._v(" "),e("td",{staticClass:"col_20"},[e("span",{staticClass:"span_green"},[t._v(t._s(i.id))])]),t._v(" "),e("td",{staticClass:"col_30"},[e("span",{},[t._v(t._s(i.type))])]),t._v(" "),e("td",{staticClass:"col_10"},[e("span",[t._v(t._s(i.where))])])])})],2)]),t._v(" "),e("div",{staticClass:"mui-bar mui-bar-tab bottom_tab"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"tab_div active",staticStyle:{width:"50%","line-height":"40px"},on:{click:t.addCheck}},[t._v("\n          \t\t\t新增\n          \t\t")]),t._v(" "),e("div",{staticClass:"tab_div tab_line",staticStyle:{width:"50%","line-height":"40px"},on:{click:t.editCheck}},[t._v("\n          \t\t\t编辑\n          \t\t")])])]),t._v(" "),e("div",{staticClass:"bottom_div_alert mui-bar-tab",class:t.editShow?"trans_move":"trans_down"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"tab_div active",staticStyle:{width:"50%","line-height":"40px"},on:{click:t.delate}},[t._v("\n          \t\t\t删除\n          \t\t")]),t._v(" "),e("div",{staticClass:"tab_div tab_line",staticStyle:{width:"50%","line-height":"40px"}},[t._v("\n          \t\t\t更多\n          \t\t")])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("header",{staticClass:"mui-bar mui-bar-nav back_title"},[i("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),i("h1",{staticClass:"mui-title"},[this._v("可滑动表格模板")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"overRight"},[e("div",{staticClass:"dataTitle"},[e("div",[e("label",{staticClass:"bui-checkbox-label bui-checkbox-anim"},[e("input",{attrs:{type:"checkbox",name:"isCheck"}}),e("i",{staticClass:"bui-checkbox"})])]),t._v(" "),e("div",[t._v("\n          \t\t\t\t编号\n          \t\t\t")]),t._v(" "),e("div",[t._v("\n          \t\t\t\t名称\n          \t\t\t")]),t._v(" "),e("div",[t._v("\n          \t\t\t\t单位\n          \t\t\t")]),t._v(" "),e("div",[t._v("\n          \t\t\t\t数量\n          \t\t\t")]),t._v(" "),e("div",[t._v("\n          \t\t\t\t单价\n          \t\t\t")]),t._v(" "),e("div",[t._v("\n          \t\t\t\t金额\n          \t\t\t")]),t._v(" "),e("div",[t._v("\n          \t\t\t\t应收件数\n          \t\t\t")]),t._v(" "),e("div",[t._v("\n          \t\t\t\t应收款\n          \t\t\t")]),t._v(" "),e("div",[t._v("\n          \t\t\t\t备注\n          \t\t\t")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("tr",[e("th",{staticClass:"col_10"},[e("label",{staticClass:"bui-checkbox-label bui-checkbox-anim"},[e("input",{attrs:{type:"checkbox",name:"isCheck",disabled:"disabled"}}),e("i",{staticClass:"bui-checkbox"})])]),t._v(" "),e("th",{staticClass:"col_30"},[t._v("标题")]),t._v(" "),e("th",{staticClass:"col_20"},[t._v("编号")]),t._v(" "),e("th",{staticClass:"col_30"},[t._v("属性")]),t._v(" "),e("th",{staticClass:"col_10"},[t._v("地区")])])}]};var l=e("VU/8")(s,c,!1,function(t){e("kUYZ")},null,null);i.default=l.exports},kUYZ:function(t,i){}});