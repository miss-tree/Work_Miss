<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title"><!--<img src="../assets/logo.png" class="logo"/>-->模板</h1>
		</header>
		<!--内容-->
		<div class="mui-content">
			<div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/searchId'>
							<i class="iconfont icon-xinshenqing"></i>搜索模板
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/form'>
							<i class="iconfont icon-xinshenqing"></i>表单模板
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/tableList'>
							<i class="iconfont icon-xinshenqing"></i>列表样式
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/timeLine'>
							<i class="iconfont icon-xinshenqing"></i>时间线
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/moneyDetail'>
							<i class="iconfont icon-xinshenqing"></i>详情模板
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/dateTable'>
							<i class="iconfont icon-xinshenqing"></i>数据表格模板
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/mode_table'>
							<i class="iconfont icon-xinshenqing"></i>table数据表格模板
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/slideTable'>
							<i class="iconfont icon-xinshenqing"></i>可滑动表格模板
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/code'>
							<i class="iconfont icon-xinshenqing"></i>代码联想
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/uploadpic'>
							<i class="iconfont icon-xinshenqing"></i>图片上传
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/lookimg'>
							<i class="iconfont icon-xinshenqing"></i>图片查看
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/maps'>
							<i class="iconfont icon-xinshenqing"></i>百度地图
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/example'>
							<i class="iconfont icon-xinshenqing"></i>内容隐藏
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/alert'>
							<i class="iconfont icon-xinshenqing"></i>下边弹出窗
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/alertRight'>
							<i class="iconfont icon-xinshenqing"></i>查询右侧弹出
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/alertCenter'>
							<i class="iconfont icon-xinshenqing"></i>居中弹出
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/alertSearch'>
							<i class="iconfont icon-xinshenqing"></i>含搜索查询弹窗
						</router-link>
					</li>
				</ul>
				<div style="height: 80px;"></div>
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