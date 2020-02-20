<template>
  <div class="home">
  	<div>
  		<!--头部-->
  		<header class="mui-bar mui-bar-nav back_title">
		  	    <h1 class="mui-title"><!--<img src="../assets/logo.png" class="logo"/>-->企业工作台</h1>
		  		</header>
  		<!--选项卡-->
			<nav class="mui-bar mui-bar-tab">
				<router-link class="bottom-bar  active" to="/Home">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">首页</span>
				</router-link>
				<router-link class="bottom-bar" to="/newsTable">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
					<span class="mui-tab-label">消息</span>
				</router-link>
				<router-link class="bottom-bar" to="/setUp">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">权限设置</span>
			</router-link>
				<router-link class="bottom-bar" to="/PersonCenter">
					<span class="mui-icon mui-icon-contact"></span>
					<span class="mui-tab-label">个人中心</span>
				</router-link>
			</nav>
			<!--选项卡结束-->
			<div class="mui-content">
				<div class="margin_top" style="margin-top: 5px;">
						<ul class="mui-table-view mui-grid-view mui-grid-9 back_theme">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<span class="span_red">5</span>
									<div class="mui-media-body">紧急任务</div>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<span class="">0</span>
									<div class="mui-media-body">已完成</div>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<span class="">0</span>
									<div class="mui-media-body">未完成</div>
							</li>
						</ul>
					</div>
					
					<!--轮播图-->
				<div id="Gallery" class="mui-slider" style="margin-top: 5px;">
					<div class="title_div"> <span>工具栏</span></div>
				<div class="mui-slider-group">
					<div class="mui-slider-item">
						<ul class="mui-table-view mui-grid-view mui-grid-9 backg">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" v-for="(item,index) in USER_ROLE" v-show="item.title!=''">
								<router-link  :to='item.to'>
									<span class="iconfont" :class="item.icon"></span>
									<div class="mui-media-body">{{item.title}}</div>
								</router-link>
							</li>
						</ul>
					</div>
					<div class="mui-slider-item">
						<ul class="mui-table-view mui-grid-view mui-grid-9 backg">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<router-link  to='/advance'>
									<span class="iconfont icon-jiekuan"></span>
									<div class="mui-media-body">预借款</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<router-link  to='/agreeList'>
									<span class="iconfont icon-xuanzemoban"><!--<span class="mui-badge"></span>--></span>
									<div class="mui-media-body">客户协议</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<router-link  to='/busyList'>
									<span class="iconfont icon-shuju2"></span>
									<div class="mui-media-body">业务数据</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<router-link  to='/template'>
									<span class="mui-icon mui-icon-chatbubble"></span>
									<div class="mui-media-body">模板</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<router-link  to='/muiSample'>
									<span class="mui-icon mui-icon-location"></span>
									<div class="mui-media-body">mui模板</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<a href="#">
									<span class="mui-icon mui-icon-search"></span>
									<div class="mui-media-body">icons扩展</div>
									</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<!--<router-link  to='/inputs'>-->
									<a href="#">
									<span class="mui-icon mui-icon-phone"></span>
									<div class="mui-media-body">输入框</div>
									</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<a href="#">
									<span class="mui-icon mui-icon-gear"></span>
									<div class="mui-media-body">图文列表</div>
									</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<a href="#">
									<span class="mui-icon mui-icon-info"></span>
									<div class="mui-media-body">数字输入框</div>
									</a>
							</li>
						</ul>
					</div>
					<div class="mui-slider-item">
						<ul class="mui-table-view mui-grid-view mui-grid-9 backg">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<a href="#">
									<span class="mui-icon mui-icon-home"></span>
									<div class="mui-media-body">图文表格</div>
									</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<a href="#">
									<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
									<div class="mui-media-body">悬浮标题</div>
									</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<a href="#">
									<span class="mui-icon mui-icon-chatbubble"></span>
									<div class="mui-media-body">刷新加载</div>
									</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<a href="#">
									<span class="mui-icon mui-icon-location"></span>
									<div class="mui-media-body">location</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<a href="#">
									<span class="mui-icon mui-icon-search"></span>
									<div class="mui-media-body">Search</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<a href="#">
									<span class="mui-icon mui-icon-phone"></span>
									<div class="mui-media-body">Phone</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<a href="#">
									<span class="mui-icon mui-icon-gear"></span>
									<div class="mui-media-body">Setting</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<a href="#">
									<span class="mui-icon mui-icon-info"></span>
									<div class="mui-media-body">about</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
								<a href="#">
									<span class="mui-icon mui-icon-more"></span>
									<div class="mui-media-body">more</div>
								</a>
							</li>
						</ul>
					</div>

				</div>
				<div class="mui-slider-indicator">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
				</div>
			</div>
				<!--轮播结束-->
				
			</div>
		</div>
  </div>
</template>
<script>
	import "../../static/css/changeMui.css"
//	引入轮播图js
	import {swiper} from '../../static/utils/public.js'
export default {
	data(){
		return{
			hello:'hello',
			USER_ROLE:[],
		}
	},
	mounted(){
		swiper()
		this.USER_ROLE=this.$store.state.USER_ROLE
	},
}
</script>
<style >
	#Gallery .mui-slider-item .mui-media>a>.iconfont{
		font-size: 35px;
		line-height: 1;
		color: #999;
	}
	#Gallery .mui-media{
		height: 106px;
	}
	.back_theme {
    background-color: #616367 !important;
	}
	.margin_top>.mui-grid-view.mui-grid-9>.mui-table-view-cell{
		border: 0;
		color: #fff;
	}
	.margin_top>.mui-grid-view.mui-grid-9>.mui-table-view-cell>.mui-media-body{
		color: #fff;
	}
	.mui-bar .mui-icon{
		padding: 0;
	}
	* { touch-action: pan-y; } 
	#Gallery .mui-slider-group .mui-slider-item{
		height: inherit;
	}
</style>
