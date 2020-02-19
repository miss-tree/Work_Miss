<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<!--<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>-->
			<h1 class="mui-title"><!--<img src="../assets/logo.png" class="logo"/>-->消息</h1>
		</header>
		<!--选项卡-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="bottom-bar" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="bottom-bar active" to="/newsTable">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="bottom-bar" to="/setUp">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
			<router-link class="bottom-bar" to="/PersonCenter">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
		</nav>
		<!--选项卡结束-->
		<!--内容-->
		
	</div>
</template>

<script>
</script>

<style>
.mui-bar .mui-icon{
	padding: 0 5px;
}
</style>