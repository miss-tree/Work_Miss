<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">药店签到列表</h1>
		</header>
		<!--头部结束-->
		<div class="mui-content">
			<!--搜索-->
			<div class="tableSearch justify_content">
				<inputcode @searchVal="getClientName" style="width: 85%;"></inputcode>
				<div @click="alertShow=!alertShow">
					<i class="iconfont icon-fenxiaosousuo lookAlert"></i>
				</div>
				<!--弹出搜索框-->
				<search :alertShow="alertShow" @changShow="getAlertShow($event)"></search>
				<!--搜索框结束-->
			</div>
			<!--地图-->
			<store-map :IPINFOR="IPINFOR"></store-map>
			<div>
				<div class="huise" style="text-align: center;font-size: 15px;margin-top: 30px;">请先选择搜索区域！</div>
			</div>
		</div>
	</div>
</template>

<script>
	import inputcode from "./lookViews/inputcode.vue" /*联想搜索框*/
	import search from "./views/position-search.vue"; /*搜索*/
	import storeMap from "./views/store-map.vue"; /*搜索*/
	export default{
		data(){
			return{
				alertShow: false,
				IPINFOR:{
					view:{lng: 113.3831,lat: 23.13013},
					point:[{center:{lng: 113.3831,lat: 23.1273},label:"康信药店"},
					{center:{lng: 113.3931,lat: 23.1473},label:"美加康药业(琶洲分店)"},
					{center:{lng: 113.3631,lat: 23.1573},label:"金康药房(广州友谊商店店)"},
					{center:{lng: 113.3801,lat: 23.1299},label:"天鼎堂医药"},
					{center:{lng: 113.3891,lat: 23.1203},label:"东方红理想健康药房(林和西路店)"},
					{center:{lng: 113.3731,lat: 23.1333},label:"金康药房(正佳广场店)"},
					{center:{lng: 113.3861,lat: 23.1323},label:"东方红医药"},
					{center:{lng: 113.3931,lat: 23.1373},label:"国医大药房(兴民路分店)"},]
				}
			}
		},
		components:{inputcode,storeMap,search},
	    watch:{
	    },
	    methods:{
			getClientName(V) { //获取客户名称
				this.clientName = V
			},
			getAlertShow(msg) {//获取赛选条件信息
				this.alertShow = msg
			},
	    }
	}
</script>

<style>
</style>