<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">请假申请列表</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<!--搜索框-->
			<div class="tableSearch">
				<div style="width: 70%;">
					<input type="text" name="" id="search" value="" placeholder="请输入申请人姓名"/>
				</div>
				<div class="searchBtn">
						搜索
				</div>
				<div style="margin-left: 15px;" @click="alert()">
					<i class="iconfont icon-fenxiaosousuo" 
						style="color: #fff;display: inline-block; font-size: 30px;margin-top: 5px;"></i>
				</div>
			</div>
			<div style="height: 51px;"></div>
		    <!--弹出搜索框-->
		    <search :alertShow="alertShow"  @changShow="getAlertShow($event)"></search>
		    <!--搜索框结束-->
			<!--订单列表-->
			<list :MOVELIST="MOVELIST"></list>
			<!--订单列表结束-->
	   		<!--分页-->
	   		<pages></pages>
	   		<!--分页结束-->
	    </div>
	</div>
</template>

<script>
	import {selectTime,getTime,getDate} from '../../../static/utils/public.js'
	import list from "./views/my-leave-List.vue"/*列表*/
	import search from "./views/leave-list-search.vue";/*搜索*/
	export default{
		data(){
			return {
				alertShow:false,
				showSection:false,//显示部门弹窗
				columns:['销售部','电商部','OTC推广部','大KA部','财务部','市场部','财务组'],
				sureTime:'',//获取的时间
				MOVELIST:[{name:'曹植',part1:'销售部',part2:'广西',job:'销售组长',state:'事假',dateTime:'2019-08-12',days:3,id:66485216},
					{name:'杨白劳',part1:'电商部',part2:'广东',job:'天猫店长',state:'年假',dateTime:'2019-07-23',days:7,id:45896578},
				{name:'鲁迅',part1:'OTC部',part2:'江浙',job:'OTC经理',state:'病假',dateTime:'2018-11-01',days:1,id:35618546},]
			}
		},
		components:{
			list,
			search
		},
		mounted(){
			this.$data.sureTime = getTime()
		},
		methods:{
			alert(){//弹出弹窗
				this.alertShow=!this.alertShow
			},
			closeAlert(){//点击蒙层关闭弹窗
				this.alertShow=false
			},
			getAlertShow(msg){
				this.alertShow=msg
			}
		}
	}
</script>
