<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title"><!--<img src="../assets/logo.png" class="logo"/>-->报销管理</h1>
		</header>
		<!--内容-->
		<div class="mui-content">
			<div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/comBX">
							<i class="iconfont icon-shuru"></i>普通报销填写
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/formTable">
							<i class="iconfont icon-baishitong_chuchabaoxiao"></i>出差报销填写
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/actBX">
							<i class="iconfont icon-shuru"></i>活动报销填写
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/examTravel'>
							<i class="iconfont icon-ico_kufangguanli_caigoushenqingdanshenhe"></i>表单审核
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/travelDetail'>
							<i class="iconfont icon-ZHicon_"></i>出差报销详情
						</router-link>
					</li>
				</ul>
				<div style="height: 80px;"></div>
			</div>
		</div>
	</div>
</template>

<script>
//	import formTable from "../sample/formTable.vue"
	export default {
	data() {
		return {
			curIndex: 0
		}
	},
	}
</script>

<style>
.mui-bar .mui-icon{
	padding: 0 5px;
}
</style>