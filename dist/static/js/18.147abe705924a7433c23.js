webpackJsonp([18],{"6vax":function(t,s){},Q7qT:function(t,s){},c7T4:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("oSBY"),a={data:function(){return{show:!1,index:1,fileList:[]}},props:["images","fileArr"],methods:{downloadFile:function(t,s){var i=document.createElement("iframe");i.src=t.fileUrl,i.style.display="none",document.body.appendChild(i)},testMobileDownload:function(){fetch("https://www.lilnong.top/static/pdf/%E6%89%AB%E6%8F%8F0015.pdf").then(function(t){return t.blob()}).then(function(t){return URL.createObjectURL(t)}).then(function(t){return console.log(t),t}).then(function(t){var s=document.createElement("a");s.href="https://www.lilnong.top/static/pdf/%E6%89%AB%E6%8F%8F0015.pdf",s.download="test",s.click()})},changeShow:function(t){this.show=!0,this.index=t},onChange:function(t){this.index=t}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"padding-lr"},[i("div",{staticClass:"vant_upload_div"},[i("div",{staticClass:"van-uploader__wrapper"},[i("div",{staticClass:"vant_upload_img_div",staticStyle:{display:"flex"}},t._l(t.fileArr,function(s,e){return i("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.fileArr.length,expression:"fileArr.length!=0"}],staticClass:"van-uploader__preview",on:{click:function(i){t.downloadFile(s,e)}}},[i("div",{staticClass:"van-image van-uploader__preview-image"},[i("div",{staticClass:"van-image__error"},[i("i",{staticClass:"van-icon van-icon-description van-uploader__file-icon"}),t._v(" "),i("div",{staticClass:"van-uploader__file-name van-ellipsis"},[t._v(t._s(s.name))])])])])}),0)]),t._v(" "),i("span",[t._v("非img/png文件,点击下载")]),t._v(" "),i("div",{staticClass:"vant_upload_img_div"},[i("div",{staticClass:"van-lookView"},[t._l(t.images,function(s,e){return i("div",{staticClass:"van-uploader__wrapper"},[i("div",{staticClass:"van-uploader__preview",on:{click:function(s){t.changeShow(e)}}},[i("div",{staticClass:"van-image van-uploader__preview-image"},[i("img",{staticStyle:{"object-fit":"cover"},attrs:{src:s}})])])])}),t._v(" "),i("van-image-preview",{attrs:{images:t.images,startPosition:t.index},on:{change:t.onChange},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}})],2)])])])])},staticRenderFns:[]};var r=i("VU/8")(a,n,!1,function(t){i("6vax")},null,null).exports,l={data:function(){return{SEALTYPE:"财务部",COMPANY:"股份公司",PART:"电商部",TITLE:"协议资料变更",OBJ:"聚缘堂药店",USE:"协议变更",SOMEBODY:"刘备",APPLYTIME:"2019-08-13",PERSON:"赵芳洲",PHONE:"15546258936",WHERE:"广州市从化区良口镇新街30号101房",BZ:"麻烦安照附件的要求准备文件，整理好发给诸葛亮",SURETIME:"",FILEARR:[{fileUrl:"https://pm.myapp.com/invc/xfspeed/qqpcmgr/download/PS_PCDownload1584.exe",name:"管家安全下载"},{fileUrl:"https://pm.myapp.com/invc/xfspeed/qqsoftmgr/PCSoftDownloader_v1.1_webnew_3216@.exe",name:"普通下载"}],EXAMINFOR:[{progress:"经理审核",opinion:"同意",bz:"",time:"2019-08-03 16:54"},{progress:"部门审核",opinion:"同意",bz:"",time:"2018-04-03 16:23"},{progress:"大区审核",opinion:"同意",bz:"",time:"2019-08-02 10:33"},{progress:"提交申请",opinion:"",bz:"",time:"2019-08-01 21:42"}],IMAGES:["http://pic.sc.chinaz.com/Files/pic/pic9/201406/apic4453_s.jpg","http://pic.sc.chinaz.com/Files/pic/pic9/201309/apic823_s.jpg","http://pic.sc.chinaz.com/Files/pic/pic9/201311/apic1847_s.jpg","http://pic.sc.chinaz.com/Files/pic/pic8/xpic1946_s.jpg"],ORDER:[{where:"广州市荔湾区紫荆道90号102铺",person:"兰冰真",phone:1568987463},{where:"广州市白云区黄石街陈田中街72号",person:"姜从冬",phone:15865423654},{where:"广州市增城区荔城街荔乡路95号首层101铺位",person:"赵芳洲",phone:15546258936},{where:"广州市从化区良口镇新街30号101房",person:"林丰雅",phone:13956224862},{where:"广州市增城区永宁街翟洞新村一街4号",person:"沙骏伟",phone:13764892315},{where:"广州市白云区华成路216-220号",person:"溥之桃",phone:13465842698},{where:"广州市白云区鹤龙六路248号首层",person:"梁和昶",phone:18856248652},{where:"碧泉路3号",person:"粟如冰",phone:13864852658}]}},components:{uploadpic:e.a,lookimg:r},mounted:function(){},methods:{}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"mui-content"},[i("get-top"),t._v(" "),i("div",{staticClass:"formTable"},[i("div",{staticClass:"form_div"},[i("div",{staticClass:"form_row"},[t._m(1),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.COMPANY))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(2),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.SEALTYPE))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(3),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.PART))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(4),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.TITLE))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(5),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.OBJ))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(6),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.USE))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(7),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.SOMEBODY))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(8),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.APPLYTIME))])])]),t._v(" "),t._m(9),t._v(" "),i("div",{staticClass:"form_div"},[i("div",{staticClass:"form_row"},[t._m(10),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.PERSON))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(11),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.PHONE))])]),t._v(" "),i("div",{staticClass:"form_row"},[t._m(12),t._v(" "),i("div",{staticClass:"form_row_right"},[t._v(t._s(t.WHERE))])])]),t._v(" "),i("div",{staticClass:"form_title"},[t._v("\n    \t\t\t备注\n    \t\t")]),t._v(" "),i("div",{staticClass:"form_div"},[t._m(13),t._v(" "),i("div",{staticClass:"padding-lr padding_bb"},[i("div",{staticClass:"detail_bz"},[t._v(t._s(t.BZ))])])]),t._v(" "),i("div",{staticClass:"bottomOver"}),t._v(" "),i("div",{staticClass:"form_title"},[t._v("\n\t    \t\t审核进度\n\t\t    ")]),t._v(" "),i("time-line",{attrs:{examInfor:t.EXAMINFOR}})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"mui-bar mui-bar-nav back_title"},[s("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),s("h1",{staticClass:"mui-title"},[this._v("印章申请详情")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"company"}},[this._v("\n\t    \t\t\t\t所属公司\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"type"}},[this._v("\n\t    \t\t\t\t印章类型\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"part"}},[this._v("\n\t    \t\t\t\t事业部\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"title"}},[this._v("\n\t    \t\t\t\t标题\n\t    \t\t\t\t"),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"obj"}},[this._v("\n\t\t             \t 对象\n\t\t              "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"use"}},[this._v("\n\t\t             \t 用途\n\t\t              "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"somebody"}},[this._v("\n\t\t             \t 申请人\n\t\t              "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"applytime"}},[this._v("\n\t\t             \t 日期\n\t\t              "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form_title"},[s("span",[this._v("联系人")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"person"}},[this._v("\n\t\t             \t 收件人\n\t\t              "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"phone"}},[this._v("\n\t\t             \t 电话\n\t\t              "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"form_row_left huise",attrs:{id:"where"}},[this._v("\n\t\t             \t 地址\n\t\t              "),s("span",{staticClass:"span_red"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"padding-lr"},[s("span",{staticClass:"form_row_height huise"},[this._v("\n\t\t\t\t\t\t备注\n\t\t\t\t\t\t"),s("span",{staticClass:"span_red"})])])}]},_=i("VU/8")(l,o,!1,null,null,null);s.default=_.exports},oSBY:function(t,s,i){"use strict";var e={data:function(){return{fileList:[]}},mounted:function(){},methods:{afterRead:function(t){console.log(t.file.name)},deletIMG:function(){}}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"padding-lr"},[i("div",{staticClass:"vant_upload_div"},[i("div",{staticClass:"vant_upload_img_div"},[i("van-uploader",{attrs:{accept:"*","after-read":t.afterRead,multiple:"",delete:t.deletIMG()},model:{value:t.fileList,callback:function(s){t.fileList=s},expression:"fileList"}})],1)])])])},staticRenderFns:[]};var n=i("VU/8")(e,a,!1,function(t){i("Q7qT")},null,null);s.a=n.exports}});