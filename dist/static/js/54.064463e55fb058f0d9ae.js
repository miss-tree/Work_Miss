webpackJsonp([54],{s433:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={mounted:function(){mui.init({swipeBack:!0}),mui(document.body).on("tap",".mui-btn",function(t){mui(this).button("loading"),setTimeout(function(){mui(this).button("reset")}.bind(this),2e3)})}},u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("header",{staticClass:"mui-bar mui-bar-nav"},[n("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),t._v(" "),n("h1",{staticClass:"mui-title"},[t._v("加载中按钮插件")])]),t._v(" "),n("div",{staticClass:"mui-content"},[n("div",{staticClass:"mui-content-padded"},[n("p",{staticStyle:{"margin-bottom":"25px"}},[t._v("当用户点击按钮后，需要向服务端提交数据或等待服务端响应时， 常常需要提示“正在提交”，并将按钮设置为disabled，避免用户重复点击、重复提交； mui的加载中按钮就实现了类似效果，点击如下按钮体验：\n\t\t\t")]),t._v(" "),n("h5",[t._v("左侧loading图标：")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button"}},[t._v("确认")]),t._v(" "),n("h5",[t._v("右侧loading图标：")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button","data-loading-text":"提交中","data-loading-icon-position":"right"}},[t._v("确认")]),t._v(" "),n("h5",[t._v("无loading图标：")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button","data-loading-icon":""}},[t._v("确认")]),t._v(" "),n("h5",[t._v("自定义loading图标：")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button","data-loading-icon":"mui-spinner mui-spinner-custom"}},[t._v("确认")]),t._v(" "),n("h5",[t._v("其他button效果")]),t._v(" "),n("button",{staticClass:"mui-btn",attrs:{type:"button"}},[t._v("确认")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-outlined mui-btn-primary",attrs:{type:"button"}},[t._v("确认")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button"}},[t._v("确认 "),n("span",{staticClass:"mui-badge mui-badge-primary"},[t._v("2")])]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-block mui-btn-primary",attrs:{type:"button"}},[t._v("确认")])])])])}]};var s=n("VU/8")(a,u,!1,function(t){n("uJN4")},"data-v-abc79026",null);i.default=s.exports},uJN4:function(t,i){}});