<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">终端管理</h1>
		</header>
		<!--内容-->
		<div class="mui-content">
			<div>
				<div class="form_title">终端信息管理</div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/storeAdd">
							<i class="iconfont icon-shuru"></i>药店登记
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/storeAddList'>
							<i class="iconfont icon-liebiao1"></i>登记列表
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/storeSignList'>
							<i class="iconfont icon-liebiao1"></i>药店签到查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/storeVistList">
							<i class="iconfont icon-liebiao1"></i>药店拜访查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/storeFlowList'>
							<i class="iconfont icon-liebiao1"></i>药店流向查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/LookSignList'>
							<i class="iconfont icon-liebiao1"></i>签到明细查询
						</router-link>
					</li>
				</ul>
				<div class="form_title">终端管理</div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/storePosition'>
							<!--<a class="mui-navigate-right" @click="routerTo()">-->
							<i class="iconfont icon-liebiao1"></i>药店地图定位
							<!--</a>-->
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/storeBackList'>
							<i class="iconfont icon-liebiao1"></i>药店定位反馈
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/storeInfo">
							<i class="iconfont icon-liebiao1"></i>查询药店信息
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/OTCsignList'>
							<i class="iconfont icon-liebiao1"></i>查询OTC签到
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/OTCvisitList'>
							<i class="iconfont icon-liebiao1"></i>查询OTC拜访
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/visitList'>
							<i class="iconfont icon-liebiao1"></i>查询协同拜访
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/storeCensus">
							<i class="iconfont icon-liebiao1"></i>终端档案统计
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/storeCodeList'>
							<i class="iconfont icon-liebiao1"></i>店员扫码查询
						</router-link>
					</li>
				</ul>
				<div style="height: 50px;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import NProgress from "nprogress"
	export default{
		methods:{
			routerTo(){
				NProgress.start()
				this.$router.push({path:'/storePosition'})
				NProgress.done()
			}
		}
	}
</script>

<style>
</style>