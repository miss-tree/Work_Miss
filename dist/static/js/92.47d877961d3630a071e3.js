webpackJsonp([92],{IlMw:function(t,s,i){"use strict";(function(t){s.a={data:function(){return{beginDate:"选择日期 ...",endDate:"选择日期 ...",d:2}},mounted:function(){t("#demo1").click(function(){var t=this;new mui.DtPicker({type:"date",beginDate:2018,endDate:2022,labels:["年","月","日"]}).show(function(s){t.innerText=s.text;new Date(s.value).getTime()})}),t("#demo2").click(function(){var t=this;new mui.DtPicker({type:"date",beginDate:2018,endDate:2022,labels:["年","月","日"]}).show(function(s){t.innerText=s.text})})}}}).call(s,i("7t+N"))},RZoo:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("IlMw"),e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"mui-content"},[i("ul",{staticClass:"mui-table-view"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),i("li",{staticClass:"mui-table-view-cell"},[t._m(6),t._v(" "),i("span",{staticClass:"margin-lr"},[i("div",{staticClass:"mui-content-padded"},[i("button",{staticClass:"btn mui-btn mui-btn-block",attrs:{id:"demo2","data-options":'{"type":"date","beginYear":2018,\n\t\t\t\t\t\t\t\t\t"endYear":2022}'}},[t._v("\n\t\t\t\t\t\t\t\t\t "+t._s(t.endDate)+"\n\t\t\t\t\t\t\t\t")])])])])])]),t._v(" "),t._m(7)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"mui-bar mui-bar-nav"},[s("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),s("h1",{staticClass:"mui-title"},[this._v("招聘申请")]),this._v(" "),s("span",{staticClass:"top-left"},[this._v("提交")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"mui-table-view-cell"},[s("label",{staticClass:"text-justify"},[this._v("部门"),s("span",{staticClass:"span-justify"})]),this._v(" "),s("span",{staticClass:"margin-lr"},[s("select",{attrs:{name:""}},[s("option",{attrs:{value:""}},[this._v("电商")]),this._v(" "),s("option",{attrs:{value:""}},[this._v("行政")]),this._v(" "),s("option",{attrs:{value:""}},[this._v("研发")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"mui-table-view-cell"},[s("label",{staticClass:"text-justify"},[this._v("职位"),s("span",{staticClass:"span-justify"})]),this._v(" "),s("span",{staticClass:"margin-lr"},[this._v("服务专员")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"mui-table-view-cell"},[s("label",{staticClass:"text-justify"},[this._v("区域负责"),s("span",{staticClass:"span-justify"})]),this._v(" "),s("span",{staticClass:"margin-lr"},[s("select",{attrs:{name:""}},[s("option",{attrs:{value:""}},[this._v("黎XX")]),this._v(" "),s("option",{attrs:{value:""}},[this._v("张X")]),this._v(" "),s("option",{attrs:{value:""}},[this._v("刘XX")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"mui-table-view-cell"},[s("label",{staticClass:"text-justify"},[this._v("申请人"),s("span",{staticClass:"span-justify"})]),this._v(" "),s("span",{staticClass:"margin-lr"},[this._v("\n\t\t\t\t\t \t\t张三\n\t\t\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"mui-table-view-cell"},[s("label",{staticClass:"text-justify"},[this._v("招聘人数"),s("span",{staticClass:"span-justify"})]),this._v(" "),s("span",{staticClass:"margin-lr"},[s("span",{staticStyle:{color:"red"}},[this._v("3")]),this._v("人\n\t\t\t\t\t \t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"text-justify"},[this._v("申请时间"),s("span",{staticClass:"span-justify"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"margin-t padding-lr"},[s("span",[this._v("备注")]),this._v(" "),s("textarea",{staticStyle:{width:"100%"},attrs:{name:"",rows:"2",cols:"28"}},[this._v("在广州黄埔区上班")])])}]},n=i("VU/8")(a.a,e,!1,null,null,null);s.default=n.exports}});