webpackJsonp([3],{"Df+e":function(t,e){},NTZm:function(t,e){},dVwF:function(t,e,n){"use strict";(function(t){var a=n("zQ4B");e.a={data:function(){return{showAttr:!1,attrArr:["KA门店","连锁大店Vip","单体大店Vip","优质诊所Vip","小连锁","单体药店","诊所"],showType:!1,typeArr:["社区店","街边店","商业中心店","职业院校院区店","镇区中心店","偏僻","其他"],levelArr:[{text:"A"},{text:"B"},{text:"C"},{text:"D"}]}},props:["INFOR"],watch:{INFOR:function(t,e){t&&this.$emit("setInfor",t)}},mounted:function(){Object(a.a)("storeWhere");var e=this;t("#storeLevel").selectFilter({callBack:function(t){e.INFOR.level=t}})},methods:{getAttr:function(t,e){this.INFOR.storeAttr=t,this.showAttr=!1},getType:function(t,e){this.INFOR.type=t,this.showType=!1}}}}).call(e,n("7t+N"))},fbis:function(t,e){},o6Uk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("dVwF"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{},[n("div",{staticClass:"form_div"},[n("div",{staticClass:"form_row",staticStyle:{"border-top":"1px #E6E6E6 solid"}},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.name,expression:"INFOR.name"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",autocomplete:"off",name:"khmc",placeholder:"请输入"},domProps:{value:t.INFOR.name},on:{input:function(e){e.target.composing||t.$set(t.INFOR,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form_row"},[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.storeAttr,expression:"INFOR.storeAttr"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",readonly:"readonly",name:"storeAttr",placeholder:"请选择"},domProps:{value:t.INFOR.storeAttr},on:{click:function(e){t.showAttr=!0},input:function(e){e.target.composing||t.$set(t.INFOR,"storeAttr",e.target.value)}}}),t._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showAttr,callback:function(e){t.showAttr=e},expression:"showAttr"}},[n("van-picker",{attrs:{"show-toolbar":"",title:"门店属性",columns:t.attrArr},on:{cancel:function(e){t.showAttr=!1},confirm:t.getAttr}})],1)],1),t._v(" "),n("div",{staticClass:"form_row"},[t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.type,expression:"INFOR.type"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",readonly:"readonly",name:"storeAttr",placeholder:"请选择"},domProps:{value:t.INFOR.type},on:{click:function(e){t.showType=!0},input:function(e){e.target.composing||t.$set(t.INFOR,"type",e.target.value)}}}),t._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showType,callback:function(e){t.showType=e},expression:"showType"}},[n("van-picker",{attrs:{"show-toolbar":"",title:"门店类型",columns:t.typeArr},on:{cancel:function(e){t.showType=!1},confirm:t.getType}})],1)],1),t._v(" "),n("div",{staticClass:"form_row"},[t._m(3),t._v(" "),n("div",{staticClass:"form_row_right"},[n("label",{attrs:{for:"isPlay"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.isYB,expression:"INFOR.isYB"}],staticClass:"myRadio",attrs:{type:"radio",value:"是",name:"isPlay",id:"isPlay"},domProps:{checked:t._q(t.INFOR.isYB,"是")},on:{change:function(e){t.$set(t.INFOR,"isYB","是")}}}),t._v("\n\t    \t\t\t\t\t是\n\t\t    \t\t\t")]),t._v(" "),n("label",{attrs:{for:"noPlay"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.isYB,expression:"INFOR.isYB"}],staticClass:"myRadio",attrs:{type:"radio",value:"否",name:"isPlay",id:"noPlay"},domProps:{checked:t._q(t.INFOR.isYB,"否")},on:{change:function(e){t.$set(t.INFOR,"isYB","否")}}}),t._v("\n\t    \t\t\t\t\t否\n\t\t    \t\t\t")])])]),t._v(" "),n("div",{staticClass:"form_row"},[t._m(4),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.money,expression:"INFOR.money"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",name:"money",placeholder:"请输入"},domProps:{value:t.INFOR.money},on:{input:function(e){e.target.composing||t.$set(t.INFOR,"money",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form_row"},[t._m(5),t._v(" "),n("div",{staticClass:"filter-box form_row_right",attrs:{id:"storeLevel"}},[t._m(6),t._v(" "),t._l(t.levelArr,function(e,a){return n("select",{attrs:{name:"filter"}},[n("option",[t._v(t._s(e.text))])])})],2)]),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"form_row"},[t._m(8),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.where,expression:"INFOR.where"}],staticClass:"form_row_right",attrs:{type:"text",name:"where",placeholder:"请选择",id:"storeWhere"},domProps:{value:t.INFOR.where},on:{input:function(e){e.target.composing||t.$set(t.INFOR,"where",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form_row"},[t._m(9),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.person,expression:"INFOR.person"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",autocomplete:"off",name:"person",placeholder:"请输入"},domProps:{value:t.INFOR.person},on:{input:function(e){e.target.composing||t.$set(t.INFOR,"person",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form_row"},[t._m(10),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.phone,expression:"INFOR.phone"}],staticClass:"form_row_right",attrs:{type:"text",data:"required",pattern:"/\\d{3}-\\d{8}|\\d{4}-\\d{7}/",autocomplete:"off",name:"phone",placeholder:"请输入"},domProps:{value:t.INFOR.phone},on:{input:function(e){e.target.composing||t.$set(t.INFOR,"phone",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form_title"},[t._v("备注")]),t._v(" "),n("div",{staticClass:"form_div bottom_boder"},[t._m(11),t._v(" "),n("div",{staticClass:"padding-lr padding_bb"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.INFOR.bz,expression:"INFOR.bz"}],staticClass:"textarea",attrs:{name:"",rows:"1",cols:"38",placeholder:"请输入订单备注"},domProps:{value:t.INFOR.bz},on:{input:function(e){e.target.composing||t.$set(t.INFOR,"bz",e.target.value)}}})])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"khmc"}},[this._v("\n\t    \t\t\t\t客户名称\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"storeAttr"}},[this._v("\n\t    \t\t\t\t门店属性\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"storeAttr"}},[this._v("\n\t    \t\t\t\t门店类型\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise"},[this._v("\n\t    \t\t\t\t医保情况\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"money"}},[this._v("\n\t    \t\t\t\t月营业额\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{for:"",id:"level"}},[this._v("\n\t    \t\t\t\t门店级别\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filter-text"},[e("input",{staticClass:"filter-title",attrs:{type:"text",readonly:"",placeholder:"请选择"}}),this._v(" "),e("i",{staticClass:"icon icon-filter-arrow"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form_row"},[e("div",{staticClass:"huise",staticStyle:{"font-size":"12px"}},[this._v("\n\t    \t\t\t\tA:30万/月以上、B:15万-30万/月、C:5万-15万/月、D:5万/月以下\n\t    \t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"where"}},[this._v("\n\t              \t  省市区\n\t                "),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"person"}},[this._v("\n\t    \t\t\t\t联系人\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form_row_left huise",attrs:{id:"phone"}},[this._v("\n\t    \t\t\t\t电话\n\t    \t\t\t\t"),e("span",{staticClass:"span_red"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"padding-lr"},[e("span",{staticClass:"form_row_height huise"},[this._v("\n\t           \t   备注\n\t              "),e("span",{staticClass:"span_red"})])])}]};var o=function(t){n("sycP")},r=n("VU/8")(a.a,i,!1,o,null,null).exports,s=n("yXhr"),l={data:function(){return{location:"广州",keyword:"",initLocation:!1,circlePath:{center:{lng:113.3831,lat:23.13013},radius:300},x:"",y:"",place:""}},mounted:function(){var t=new s.a("allmap");t.basic(),t.getPosition(),t.getClickPoint()},methods:{getin:function(t){console.log(t)},getLocation:function(){(new BMap.LocalCity).get(function(t){var e=t.name;console.log("当前定位城市:"+e)})},updateCirclePath:function(t){this.circlePath.center=t.target.getCenter()}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticStyle:{"font-size":"15px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticStyle:{width:"100%"},attrs:{type:"text",id:"txtAddress",placeholder:"请输入搜索地址"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),n("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"allmap"}}),t._v(" "),n("input",{attrs:{name:"hidpoint",type:"hidden",id:"hidpoint",value:"113.276343,23.133093"}}),t._v(" "),t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.place,expression:"place"}],attrs:{type:"hidden",id:"lastAddress"},domProps:{value:t.place},on:{input:function(e){e.target.composing||(t.place=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"hidden",id:"lastAddress"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"hidpoint",id:"hidpoint",value:"113.383385,23.129537"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"hidden",id:"coordinate_x"},domProps:{value:t.x},on:{input:function(e){e.target.composing||(t.x=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],attrs:{type:"hidden",id:"coordinate_y"},domProps:{value:t.y},on:{input:function(e){e.target.composing||(t.y=e.target.value)}}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{border:"1px solid #ccc",width:"150px",height:"auto",display:"none"},attrs:{id:"searchResultPanel"}},[this._v("\n\t\t\tonconfirm"),e("br"),this._v("index = 4"),e("br"),this._v("myValue = 广州市越秀区广卫商务大厦(在点击时获取点击的地址)\n\t\t")])}]};var d=n("VU/8")(l,c,!1,function(t){n("NTZm")},null,null).exports,u={data:function(){return{points:[{center:{lng:115.89,lat:28.68},label:"我爱北京天安门"},{center:{lng:113.3831,lat:23.13013},label:"天安门"}],reFresh:!0,changIcon:!1,opacity:.5,location:"桂林",keyword:"",center:{lng:115.89,lat:28.68},initLocation:!1,circlePath:{center:{lng:113.3831,lat:23.13013},radius:200}}},watch:{center:function(t,e){var n=this;this.reFresh=!1,this.circlePath.center=this.center,console.log(this.circlePath,t),this.$nextTick(function(){n.reFresh=!0})}},mounted:function(){},methods:{setNewIcon:function(t){console.log(t),this.center={lng:t.point.lng,lat:t.point.lat}},handlerBaiduMapReady:function(t){var e=this,n=t.BMap;t.map;(new n.Geolocation).getCurrentPosition(function(t){console.log(t),e.location=t.address.city,e.center={lng:t.longitude,lat:t.latitude},e.circlePath.center=e.center,console.log(e.circlePath),e.autoLocationPoint={lng:t.longitude,lat:t.latitude},e.initLocation=!0,console.log("center:",e.center)},{enableHighAccuracy:!0})},getlocationPoint:function(t){console.log(t.point),this.center={lng:t.point.lng,lat:t.point.lat}},getNewPoint:function(t){this.center={lng:t.point.lng,lat:t.point.lat}},getResult:function(t){console.log(t)},updateCirclePath:function(t){}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticStyle:{"font-size":"15px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticStyle:{width:"100%"},attrs:{type:"text",id:"txtAddress",placeholder:"请输入搜索地址"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),a("baidu-map",{attrs:{center:t.center,zoom:15},on:{ready:t.handlerBaiduMapReady,click:t.setNewIcon}},[a("bm-scale",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),t._v(" "),a("bm-view",{staticClass:"map"}),t._v(" "),t.initLocation?a("bm-marker",{directives:[{name:"show",rawName:"v-show",value:0==t.changIcon,expression:"changIcon==false"}],staticClass:"mapMark",attrs:{position:t.center,dragging:!0,icon:{url:n("9USz"),size:{width:25,height:25}},animation:"BMAP_ANIMATION_BOUNCE"},on:{dragend:t.getNewPoint}}):t._e(),t._v(" "),a("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!1,icon:{url:n("9USz"),size:{width:25,height:25}}},on:{locationSuccess:t.getlocationPoint}}),t._v(" "),a("bm-local-search",{attrs:{keyword:t.keyword,"auto-viewport":!0,location:t.location,forceLocal:!0,icon:null},on:{click:function(e){t.changIcon},searchcomplete:t.getResult}}),t._v(" "),t.reFresh?a("bm-circle",{attrs:{center:t.circlePath.center,radius:t.circlePath.radius,"stroke-color":"blue",fillColor:"blue",fillOpacity:.4,"stroke-weight":2,massClear:!0,editing:!0},on:{lineupdate:t.updateCirclePath}}):t._e()],1)],1)},staticRenderFns:[]};var v=n("VU/8")(u,p,!1,function(t){n("fbis")},null,null).exports,m=n("zQ4B"),h={data:function(){return{curIndex:0,STOREINFOR:{name:"",storeAttr:"",type:"",isYB:"",money:"",level:"",where:"",person:"",phone:"",bz:""}}},components:{storeMsg:r,storeMap:d,storeMap2:v},methods:{getinfor:function(t){this.STOREINFOR=t},mustFull:function(){if(0==Object(m.e)().length){if(""==this.STOREINFOR.isYB)return mui.alert("请选择医保"),!1;if(!/^1[3456789]\d{9}$/.test(this.STOREINFOR.phone))return mui.alert("请输入正确的电话号码"),!1;console.log("hi")}}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"mui-content"},[n("div",[n("div",{staticClass:"tabHead",attrs:{id:"tabHead"}},[n("div",{class:{active:0==t.curIndex},on:{click:function(e){t.curIndex=0}}},[n("span",[t._v("基本信息")])]),t._v(" "),n("div",{class:{active:2==t.curIndex},on:{click:function(e){t.curIndex=2}}},[n("span",[t._v("地理位置")])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.curIndex,expression:"curIndex==0"}]},[n("store-msg",{attrs:{INFOR:t.STOREINFOR},on:{setInfor:t.getinfor}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2==t.curIndex,expression:"curIndex==2"}]},[n("store-map2")],1)]),t._v(" "),n("div",{staticClass:"submitBtn"},[n("button",{staticClass:"mui-btn update mui-btn-block mui-btn-primary",staticStyle:{width:"80%",padding:"10px"},attrs:{type:"button",id:"update"},on:{click:t.mustFull}},[t._v("提交")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mui-bar mui-bar-nav back_title"},[e("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),e("h1",{staticClass:"mui-title"},[this._v("药店登记")])])}]};var _=n("VU/8")(h,f,!1,function(t){n("Df+e")},null,null);e.default=_.exports},sycP:function(t,e){},yXhr:function(t,e,n){"use strict";(function(t){class n{constructor(t,e,n,a,i){this.id=t,this.areaValue=e,this.signValue=n,this.BADZ=a,this.QDDZ=i;var o=new BMap.Map(this.id),r=(new BMap.Point(113.721713,34.774855),new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT})),s=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT});o.addControl(r),o.addControl(s),o.addControl(new BMap.GeolocationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT})),o.centerAndZoom("广州",18),o.enableScrollWheelZoom(!0)}basic(){}getPosition(){(new BMap.Geolocation).getCurrentPosition(function(t){if(console.log(t.point),this.getStatus()==BMAP_STATUS_SUCCESS){var e=new BMap.Marker(t.point);n.addOverlay(e),n.panTo(t.point);var a=new BMap.Point(t.point.lng,t.point.lat);(new BMap.Geocoder).getLocation(a,function(t){t.addressComponents;console.log(t.address),alert(t.address)})}else alert("failed"+this.getStatus())},{enableHighAccuracy:!0})}getLocation(){var t=new BMap.Map(this.id);(new BMap.LocalCity).get(function(e){var n=e.name;t.setCenter(n)})}getClickPoint(){var t="",e="";n.addEventListener("touchend",function(a){if(t=a.point.lng,e=a.point.lat,""!=t&&""!=e){document.getElementById("hidpoint").value=t+","+e,n.clearOverlays();var i=new BMap.Point(t,e);n.centerAndZoom(i),marker=new BMap.Marker(i),n.addOverlay(marker)}else n.centerAndZoom("北京",12);document.querySelector("#coordinate_x").value=t,document.querySelector("#coordinate_y").value=e})}search(){var t=new BMap.Map(this.id),e="",n="",a=new BMap.Geocoder;function i(t){return document.getElementById(t)}t.addEventListener("touchend",function(t){var i=t.point;a.getLocation(i,function(t){t.surroundingPois.length>0?(e=t.surroundingPois[0].point.lng+","+t.surroundingPois[0].point.lat,n=t.address+t.surroundingPois[0].title):(e=t.point.lng+","+t.point.lat,n=t.address),document.getElementById("hidpoint").value=e,document.getElementById("txtAddress").value=n})});var o,r=new BMap.Autocomplete({input:"txtAddress",location:t});r.addEventListener("onhighlight",function(t){var e="",n=t.fromitem.value,a="";t.fromitem.index>-1&&(a=n.province+n.city+n.district+n.street+n.business),e="FromItem<br />index = "+t.fromitem.index+"<br />value = "+a,a="",t.toitem.index>-1&&(a=(n=t.toitem.value).province+n.city+n.district+n.street+n.business),e+="<br />ToItem<br />index = "+t.toitem.index+"<br />value = "+a,i("searchResultPanel").innerHTML=e}),r.addEventListener("onconfirm",function(e){var n=e.item.value;o=n.province+n.city+n.district+n.street+n.business,i("searchResultPanel").innerHTML="onconfirm<br />index = "+e.item.index+"<br />myValue = "+o,function(){t.clearOverlays();var e=new BMap.LocalSearch(t,{onSearchComplete:function(){var n=e.getResults().getPoi(0).point;document.getElementById("hidpoint").value=n.lng+","+n.lat,t.centerAndZoom(n,25),t.addOverlay(new BMap.Marker(n))}});e.search(o)}();var a=i("searchResultPanel").innerText.split("=");document.querySelector("#lastAddress").value=a[2]})}}e.a=n,t(function(){window.markMapArr=function(e){e=t.extend({id:"",mapArr:[],baseurl:""},e);var n=new BMap.Map(e.id,{}),a=new BMap.Point(113.382029,23.312903);n.centerAndZoom(a,11);var i=new BMap.Marker(a),o=e.mapArr,r=0;function s(t,e,a){var i=new BMap.Marker(t);n.addOverlay(i),i.setLabel(e),i.addEventListener("click",function(e){console.log("0001"),n.openInfoWindow(a,t)})}for(n.addOverlay(i),n.enableScrollWheelZoom(!0);r<o.length;r++){var l=new BMap.Point(o[r].y,o[r].x),c={width:250,height:100,title:o[r].title};s(l,new BMap.Label(o[r].con,{offset:new BMap.Size(20,5)}),new BMap.InfoWindow(o[r].branch,c))}var d=new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}),u=new BMap.NavigationControl;n.addControl(d),n.addControl(u)};window.mapSearch=function(e){e=t.extend({id:"",mapArr:[],baseurl:""},e);var n=new BMap.Map(e.id),a=new BMap.Point(116.331398,39.897445);n.centerAndZoom(a,28),n.addTileLayer(new BMap.PanoramaCoverageLayer);var i=new BMap.PanoramaControl;i.setOffset(new BMap.Size(20,20)),n.addControl(i),n.enableScrollWheelZoom(),n.enableContinuousZoom(),(new BMap.LocalCity).get(function(t){var e=t.name;n.setCenter(e)});var o=new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}),r=new BMap.NavigationControl;n.addControl(o),n.addControl(r);var s="",l="",c=new BMap.Geocoder;function d(t){return document.getElementById(t)}n.addEventListener("click",function(t){var e=t.point;c.getLocation(e,function(t){t.surroundingPois.length>0?(s=t.surroundingPois[0].point.lng+","+t.surroundingPois[0].point.lat,l=t.address+t.surroundingPois[0].title):(s=t.point.lng+","+t.point.lat,l=t.address),document.getElementById("hidpoint").value=s,document.getElementById("txtAddress").value=l})});var u,p=new BMap.Autocomplete({input:"txtAddress",location:n});p.addEventListener("onhighlight",function(t){var e="",n=t.fromitem.value,a="";t.fromitem.index>-1&&(a=n.province+n.city+n.district+n.street+n.business),e="FromItem<br />index = "+t.fromitem.index+"<br />value = "+a,a="",t.toitem.index>-1&&(a=(n=t.toitem.value).province+n.city+n.district+n.street+n.business),e+="<br />ToItem<br />index = "+t.toitem.index+"<br />value = "+a,d("searchResultPanel").innerHTML=e}),p.addEventListener("onconfirm",function(t){var e=t.item.value;u=e.province+e.city+e.district+e.street+e.business,d("searchResultPanel").innerHTML="onconfirm<br />index = "+t.item.index+"<br />myValue = "+u,function(){n.clearOverlays();var t=new BMap.LocalSearch(n,{onSearchComplete:function(){var e=t.getResults().getPoi(0).point;document.getElementById("hidpoint").value=e.lng+","+e.lat,n.centerAndZoom(e,25),n.addOverlay(new BMap.Marker(e))}});t.search(u)}();var a=d("searchResultPanel").innerText.split("=");document.querySelector("#lastAddress").value=a[2]});var v="",m="";n.addEventListener("click",function(t){if(v=t.point.lng,m=t.point.lat,""!=v&&""!=m){document.getElementById("hidpoint").value=v+","+m,n.clearOverlays();var e=new BMap.Point(v,m);n.centerAndZoom(e),marker=new BMap.Marker(e),n.addOverlay(marker)}else n.centerAndZoom("北京",12);document.querySelector("#coordinate_x").value=v,document.querySelector("#coordinate_y").value=m})};window.mapBasic=class{constructor(t,e,n,a,i){this.id=t,this.areaValue=e,this.signValue=n,this.BADZ=a,this.QDDZ=i}basic(){var t=new BMap.Map(this.id),e=new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}),n=new BMap.NavigationControl;t.addControl(e),t.addControl(n),t.centerAndZoom("广州",18),t.enableScrollWheelZoom(!0)}AddPointLine(){var t=null,e=document.getElementById(this.areaValue).value,n=new BMap.Map(this.id,{});if("0,0"==e)t=new BMap.Point(113.383394,23.129441);else{var a=e.split(","),i=(t=new BMap.Point(parseFloat(a[0]),parseFloat(a[1])),new BMap.Marker(new BMap.Point(parseFloat(a[0]),parseFloat(a[1]))));n.addOverlay(i);var o=new BMap.Label("备案地址:"+this.BADZ,{offset:new BMap.Size(20,-10)});o.setStyle({background:"#fff",color:"black",fontSize:"12px",height:"20px",lineHeight:"20px",fontFamily:"微软雅黑"});var r=new BMap.Icon("../../assets/img/map-1.png",new BMap.Size(20,40));i.setIcon(r),i.setLabel(o);var s=new BMap.Circle(t,300,{fillColor:"blue",strokeWeight:1,fillOpacity:.3,strokeOpacity:.3,enableEditing:!0});n.addOverlay(s);var l=document.getElementById(this.signValue).value;if("0,0"!=l){a=l.split(",");var c=new BMap.Marker(new BMap.Point(parseFloat(a[0]),parseFloat(a[1])));n.addOverlay(c);var d=new BMap.Label("签到地址:"+this.QDDZ,{offset:new BMap.Size(20,-10)});r=new BMap.Icon("../../assets/img/map-2.png",new BMap.Size(20,40)),c.setIcon(r),c.setLabel(d);var u=new BMap.Point(parseFloat(a[0]),parseFloat(a[1])),p=new BMap.Polyline([t,u],{strokeColor:"red",strokeWeight:3,strokeOpacity:.5});n.addOverlay(p)}}n.centerAndZoom(t,18),n.enableScrollWheelZoom(!0)}AddToPoint(){var t=new BMap.Map(this.id),e=null,n=document.getElementById(this.areaValue).value;if("0,0"==n)e=new BMap.Point(113.383394,23.129441);else{var a=n.split(",");e=new BMap.Point(parseFloat(a[0]),parseFloat(a[1]));var i=new BMap.Marker(new BMap.Point(parseFloat(a[0]),parseFloat(a[1])));t.addOverlay(i);var o=new BMap.Label("备案地址:"+this.BADZ,{offset:new BMap.Size(20,-10)});o.setStyle({background:"#fff",color:"black",fontSize:"12px",height:"20px",lineHeight:"20px",fontFamily:"微软雅黑"});var r=new BMap.Icon("../../assets/img/map-1.png",new BMap.Size(20,40));i.setIcon(r),i.setLabel(o);var s=new BMap.Circle(e,300,{fillColor:"blue",strokeWeight:1,fillOpacity:.3,strokeOpacity:.3,enableEditing:!0});t.addOverlay(s);var l=document.getElementById(this.signValue).innerText;if("0,0"!=l){a=l.split(",");var c=new BMap.Marker(new BMap.Point(parseFloat(a[0]),parseFloat(a[1])));t.addOverlay(c);var d=new BMap.Label("当前地址",{offset:new BMap.Size(20,-10)});r=new BMap.Icon("../../assets/img/map-2.png",new BMap.Size(20,40)),c.setIcon(r),c.setLabel(d);var u=new BMap.Point(parseFloat(a[0]),parseFloat(a[1])),p=new BMap.Polyline([e,u],{strokeColor:"red",strokeWeight:3,strokeOpacity:.8});t.addOverlay(p)}}t.centerAndZoom(e,16),t.enableScrollWheelZoom(!0)}}}())}).call(e,n("7t+N"))}});