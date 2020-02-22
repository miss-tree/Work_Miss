import Vue from 'vue'
import App from './App'
import store from './store';
import axios from "axios"	/* 异步请求*/
//Vue.use(axios)

/*
加载的组件/插件
*/

import { Tree, Button } from 'element-ui';/*饿了么ui*/
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Tree);/*使用树控件*/
Vue.use(Button);

import Cookies from 'js-cookie';/*轻量级的处理cookies的js*/


import BaiduMap from 'vue-baidu-map'/*百度地图*/
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'izKslMWQG7sLmlaG4UjUV90Z'
})
import { BmlMarkerClusterer } from 'vue-baidu-map'/*百度第三方插件*/
Vue.component('bml-marker-cluster', BmlMarkerClusterer)

import preview from '../node_modules/vant/lib/image-preview';/*图片预览*/
import '../node_modules/vant/lib/image-preview/style';
Vue.use(preview)
import Uploader from '../node_modules/vant/lib/uploader';/*图片上传*/
import '../node_modules/vant/lib/uploader/style';
Vue.use(Uploader)
import Popup from '../node_modules/vant/lib/popup';/*选择器*/
import '../node_modules/vant/lib/popup/style';
Vue.use(Popup);
import Picker from '../node_modules/vant/lib/picker';/*选择器*/
import '../node_modules/vant/lib/picker/style';
Vue.use(Picker);
import router from './router'  /*建议将router引用放到最后*/


import global from './components/assembly/globalComponent'


import '../static/utils/selectFilter.js'		/*下拉选择框*/
import '../static/css/selectFilter.css'



/*设置全局守卫*/
// register global progress.
//const whiteList = ['/login','/401','404'];// 不重定向白名单
//router.beforeEach((to, from, next) => {
//	NProgress.start(); // 开启Progress
//	//获取先获取用户信息，从用户信息中拿权限，判断是否手敲
//	//console.log(from,'路由---->',to )
//	if(store.getters.token) { // 判断是否有token。接口会有延迟
//		if(to.path === '/login') {
//			next({path: '/'});
//		} else if(to.path == '/401') {
//			next();
//		} else if(to.path == '/404') {
//			next();
//		} else {
//			//避免F5刷新时，vex数据全无，所以需要重新获取一次数据
//			if(!store.getters.userInfo) { //判断是否有用户信息 把token换成userInfo
//				console.log('未获取到用户信息', store.getters.userInfo)
//				store.dispatch('GetInfo').then(res => { // 拉取user_info
//					// console.log('已获取到用户信息',store.getters.userInfo)
//					next();
//				}).catch(err => {
//					console.log(err);
//				});
//			} else {
//				if(store.getters.permission_routers[to.path] == undefined) {
//					next({path: '/404'}); //
//					NProgress.done();
//				} else if(store.getters.permission_routers[to.path] == false) {
//					next({path: '/401'}); //
//					NProgress.done();
//				} else {
//					next(); //
//				}
//				//next();//
//			}
//		}
//	} else {
//		if(whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//			next()
//		} else {
//			next('/login'); // 否则全部重定向到登录页
//			NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
//		}
//	}
//	NProgress.done();
//});

Vue.prototype.bus = new Vue()
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
