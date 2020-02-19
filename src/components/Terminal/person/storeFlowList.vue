<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">药店流向列表</h1>
		</header>
		<!--头部结束-->
		<div class="mui-content">
			<!--搜索框-->
			<div class="tableSearch justify_content">
				<inputcode @searchVal="getClientName" style="width: 85%;"></inputcode>
				<div @click="alertShow=!alertShow">
					<i class="iconfont icon-fenxiaosousuo lookAlert"></i>
				</div>
				<!--弹出搜索框-->
				<search :alertShow="alertShow" @changShow="getAlertShow($event)"></search>
				<!--搜索框结束-->
			</div>
			<div style="height: 51px;"></div>
			<!--订单列表-->
			<div>
				<list :ORDERLIST="ORDER" @getCheck="getCheckInfor"></list>
			</div>
			<!--显示提成-->
			<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;z-index: 1;"><!-- v-show="checkData.length!=0"-->
				<div class="bottomWidth flex justify_content">
					<span class="span_15px">流向数量：{{NUMBER}}</span>
					<span class="span_15px" style="margin-left: 5px;">流向金额：{{MONEY}}</span>
				</div>
				<!--<div class="mui-btn mui-btn-primary applyBtn" @click="routerTo">申请</div>-->
			</div>
			<!--订单列表结束-->
			<!--<pages></pages>-->
			<!--分页结束-->
		</div>
	</div>
</template>

<script>
	import pages from "../../assembly/pagination.vue"; /*分页*/
	import search from "./flowViews/store-list-search.vue"; /*搜索*/
	import inputcode from "./flowViews/inputcode.vue" /*联想搜索框*/
	import list from "./flowViews/store-visit-list.vue" /*列表*/
	export default {
		data() {
			return {
				isFirst: true, //是否第一次进入这个页面
				alertShow: false,
				clientName: '', //客户名称
				checkData: [], //选取的产品
				SECTION: "", //选择的部门
				CHECKSTATE: [], //选择的状态
				sureTime: "", //获取的时间
				ORDER: [{
						title: "聚缘堂药店",
						name:"一次性口罩",
						num:65,
						price:37.5,
						dateTime: '2019-08-13',
						id: 34534
					},
					{
						title: "倍宁医药(镇南路店)",
						name:"和胃整肠丸",
						num:200,
						price:98,
						dateTime: '2019-07-01',
						id: 34534534
					},
					{
						title: "仁和堂药业(陈田药店)",
						name:"乌鸡白凤丸",
						num:1500,
						price:49,
						dateTime: '2017-07-01',
						id: 534534534
					},
					{
						title: "康信药店",
						name:"医用棉签",
						num:25000,
						price:3.5,
						dateTime: '2019-07-12',
						id: 654
					},
					{
						title: "倍宁医药连锁(良口分店)",
						name:"红花油",
						num:200,
						price:3.7,
						dateTime: '2019-07-01',
						id: 65768
					},
					{
						title: "温泉济康药店",
						name:"999感冒灵",
						num:150,
						price:13.5,
						dateTime: '2017-07-01',
						id: 65677
					},
				]
			};
		},
		components: {
			pages,
			search,
			inputcode,
			list
		},
		created() {
			const getStorage = localStorage.getItem("IS_FIRST_LOGIN")
			if(getStorage) {
				this.isFirst = false
				console.log("已经登陆过一次了")
			}
		},
		computed:{
			NUMBER(){/*进货数量*/
				return this.ORDER.map(row=>row.num).reduce((acc,cur)=>parseFloat(cur)+acc);
			},
			MONEY(){/*提成金额*/
				return this.ORDER.map(row=>row.num*row.price).reduce((acc,cur)=>parseFloat(cur)+acc);
			}
		},
		methods: {
			setGuide() { //点击指引
				this.isFirst = false
				localStorage.setItem("IS_FIRST_LOGIN", true)
			},
			getClientName(V) { //获取客户名称
				this.clientName = V
			},
			getCheckInfor(checkData) { //获取选取的数据
				console.log(checkData)
				this.checkData = checkData
			},
			getAlertShow(v) {
				this.alertShow = v.msg
			},
			routerTo() {
				/*随机产生[0,10)的数*/
				var success = ~~(Math.random() * 10)
				if(success % 2 == 0) {
					console.log(success)
					mui.alert("提交成功")
				} else {
					console.log(success)
					mui.alert("提交失败，请重新提交")
				}
			}
		}
	};
</script>

<style>

</style>