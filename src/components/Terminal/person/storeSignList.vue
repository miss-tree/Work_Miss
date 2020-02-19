<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">药店签到列表</h1>
		</header>
		<!--头部结束-->
		<div class="mui-content">
			<!--指引-->
			<!--<div v-show="isFirst">
    		<div class="mongolia"></div>
    		<div @click="setGuide()">
	    		<img src="../../../static/assets/guide1.png" style="position: fixed;z-index: 39;top: 50px;left: 20px;width: 230px;height: 230px;"/>
    		</div>
    		</div>-->
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
			<!--<div class="messageDiv" v-show="clientName==''">
				<div class="huise showMessage">请先选择客户名称搜索！</div>
			</div>-->
			<div>
				<list :ORDERLIST="ORDER" @getCheck="getCheckInfor"></list>
				<!--<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;z-index: 1;">
					<div class="bottomWidth">
						<span class="span_15px">申请数量：{{checkData.length}}</span>
					</div>
					<div class="mui-btn mui-btn-primary applyBtn" @click="routerTo">申请</div>
				</div>-->
			</div>
			<!--订单列表结束-->
			<!--<pages></pages>-->
			<!--分页结束-->
		</div>
	</div>
</template>

<script>
	import pages from "../../assembly/pagination.vue"; /*分页*/
	import search from "./signViews/store-list-search.vue"; /*搜索*/
	import inputcode from "./signViews/inputcode.vue" /*联想搜索框*/
	import list from "./signViews/store-sign-list.vue" /*列表*/
	//import {getTime,getDate} from "../../../static/utils/public.js";
	export default {
		data() {
			return {
				isFirst: true, //是否第一次进入这个页面
				alertShow: false,
				clientName: '', //客户名称
				checkData: [], //选取的产品
				showSection: false, //显示部门弹窗
				columns: [
					"销售部",
					"电商部",
					"OTC推广部",
					"大KA部",
					"财务部",
					"市场部",
					"财务组"
				],
				SECTION: "", //选择的部门
				CHECKSTATE: [], //选择的状态
				sureTime: "", //获取的时间
				ORDER: [{
						title: "聚缘堂药店",
						state: '0',
						person: '黎放',
						dateTime: '2019-08-13 10：23：14',
						id: 34534
					},
					{
						title: "倍宁医药(镇南路店)",
						state: '0',
						person: '刘禅',
						dateTime: '2019-07-01',
						id: 34534534
					},
					{
						title: "仁和堂药业(陈田药店)",
						state: '1',
						person: '吕布',
						dateTime: '2017-07-01',
						id: 534534534
					},
					{
						title: "康信药店",
						state: '1',
						person: '黎放',
						dateTime: '2019-07-12',
						id: 654
					},
					{
						title: "倍宁医药连锁(良口分店)",
						state: '1',
						person: '刘禅',
						dateTime: '2019-07-01',
						id: 65768
					},
					{
						title: "温泉济康药店",
						state: '1',
						person: '吕布',
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
		mounted() {
			//  this.$data.sureTime = getTime();
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
			getAlertShow(msg) {
				this.alertShow = msg
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