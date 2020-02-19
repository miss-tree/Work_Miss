<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">药店信息列表</h1>
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
			<!--<div class="messageDiv" v-show="clientName==''">
				<div class="huise showMessage">请先选择客户名称搜索！</div>
			</div>-->
			<div>
				<list :ORDERLIST="ORDER" @getCheck="getCheckInfor"></list>
			</div>
			<!--订单列表结束-->
		</div>
	</div>
</template>

<script>
	import pages from "../../assembly/pagination.vue"; /*分页*/
	import search from "./infoViews/store-list-search.vue"; /*搜索*/
	import inputcode from "./infoViews/inputcode.vue" /*联想搜索框*/
	import list from "./infoViews/store-list.vue" /*列表*/
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
						title: "康信药店",
						level: 'B',
						isYb:"是",
						person: '黎放',
						dateTime: '2019-08-13',
						id: 34534
					},
					{
						title: "美加康药业(琶洲分店)",
						level: 'B',
						isYb:"是",
						person: '刘禅',
						dateTime: '2019-07-01',
						id: 34534534
					},
					{
						title: "东方红理想健康药房(林和西路店)",
						level: 'A',
						isYb:"否",
						person: '吕布',
						dateTime: '2017-07-01',
						id: 534534534
					},
					{
						title: "天鼎堂医药",
						level: 'C',
						isYb:"否",
						person: '黎放',
						dateTime: '2019-07-12',
						id: 654
					},
					{
						title: "倍宁医药连锁(良口分店)",
						level: 'D',
						isYb:"是",
						person: '刘禅',
						dateTime: '2019-07-01',
						id: 65768
					},
					{
						title: "东方红医药",
						level: 'B',
						isYb:"否",
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