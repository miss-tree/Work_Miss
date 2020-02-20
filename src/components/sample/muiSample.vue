<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title"><!--<img src="../assets/logo.png" class="logo"/>-->mui模板</h1>
		</header>
		<!--内容-->
		<div class="mui-content">
			<div id="tabbar" class="mui-control-content mui-active">
				<div>
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/picker'>
								<i class="iconfont icon-xinshenqing"></i>选择器
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/accordion'>
								<i class="iconfont icon-xinshenqing"></i>折叠面版
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/actionsheet'>
								<i class="iconfont icon-xinshenqing"></i>actionsheet
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/badge'>
								<i class="iconfont icon-xinshenqing"></i>badge
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/buttons'>
								<i class="iconfont icon-xinshenqing"></i>普通按钮
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/numbutton'>
								<i class="iconfont icon-xinshenqing"></i>数字按钮
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/iconbutton'>
								<i class="iconfont icon-xinshenqing"></i>icon按钮
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/loadbutton'>
								<i class="iconfont icon-xinshenqing"></i>加载按钮
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/card'>
								<i class="iconfont icon-xinshenqing"></i>卡片视图
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/dialog'>
								<i class="iconfont icon-xinshenqing"></i>dialog
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/icons'>
								<i class="iconfont icon-xinshenqing"></i>icons
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/iconsLight'>
								<i class="iconfont icon-xinshenqing"></i>icons扩展
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/inputs'>
								<i class="iconfont icon-xinshenqing"></i>输入框
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/MediaList'>
								<i class="iconfont icon-xinshenqing"></i>图文列表
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/numbox'>
								<i class="iconfont icon-xinshenqing"></i>数字输入框
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/slider'>
								<i class="iconfont icon-xinshenqing"></i>轮播图
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/sliderTable'>
								<i class="iconfont icon-xinshenqing"></i>图文表格
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/refresh'>
								<i class="iconfont icon-xinshenqing"></i>刷新加载
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/moneyList'>
								<i class="iconfont icon-xinshenqing"></i>location
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/formTable'>
								<i class="iconfont icon-xinshenqing"></i>Search
							</router-link>
						</li>
						<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/client'>
								<i class="iconfont icon-xinshenqing"></i>Phone
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
.mui-bar .mui-icon{
	padding: 0 5px;
}
</style>