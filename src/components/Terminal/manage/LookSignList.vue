<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">签到查询列表</h1>
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
			<!--订单列表结束-->
			<!--<pages></pages>-->
			<!--分页结束-->
		</div>
	</div>
</template>

<script>
	import pages from "../../assembly/pagination.vue"; /*分页*/
	import search from "./lookViews/store-list-search.vue"; /*搜索*/
	import inputcode from "./lookViews/inputcode.vue" /*联想搜索框*/
	import list from "./lookViews/store-visit-list.vue" /*列表*/
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
						where: '广东省',
						person: '黎放',
						dateTime: '2019-08-13 10：23：14',
						id: 34534
					},
					{
						title: "倍宁医药(镇南路店)",
						where: '广西壮族自治区',
						person: '刘禅',
						dateTime: '2019-07-01',
						id: 34534534
					},
					{
						title: "仁和堂药业(陈田药店)",
						where: '内蒙古自治区',
						person: '吕布',
						dateTime: '2017-07-01',
						id: 534534534
					},
					{
						title: "康信药店",
						where: '浙江省',
						person: '李国梁',
						dateTime: '2019-07-12',
						id: 654
					},
					{
						title: "倍宁医药连锁(良口分店)",
						where: '安徽省',
						person: '张仲景',
						dateTime: '2019-07-01',
						id: 65768
					},
					{
						title: "温泉济康药店",
						where: '上海市',
						person: '貂蝉',
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
			getAlertShow(msg) {//获取赛选条件信息
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