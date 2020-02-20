import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式
Vue.use(Router)

const routerList = []  // 路由数组 - 存放所有路由

function importAll(routerArr){
    // 该函数用于将所有分区路由中的路由添加到路由数组
    routerArr.keys().forEach( key => {
        // console.log(key,routerArr(key).default)
        Array.prototype.push.apply(routerList,routerArr(key).default)
    })
}
importAll(require.context('.',true,/\.routes\.js/))//将所有的路由引进

let gloabelRoutes = [
    ...routerList
]

const newRouter= new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: gloabelRoutes
})
/*当路由进入前给每次进入新页面添加进度条*/
const sess = window.sessionStorage
newRouter.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  const toRoute = to.path
  const fromRoute = from.path
  let h = JSON.parse(sess.getItem(toRoute))
  console.log(h)
  if (h && h.history) {//如果有记录，后退不刷新页面，
    	sess.removeItem(toRoute)//去掉浏览记录
    	from.meta.keepAlive=false//将记录去掉后保证下次进来刷新
  	next()
  } else {
    sess.setItem(fromRoute || '/', JSON.stringify({
      history: true,
    }))
    from.meta.keepAlive=true
  }
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});
//当路由进入后：关闭进度条
newRouter.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})
export default newRouter
