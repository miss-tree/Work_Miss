<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">开票申请列表</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<!--搜索框-->
			<div class="tableSearch justify_content">
				<!--<div style="width: 80%;">-->
					<!--<input type="text" name="" id="search" value="" placeholder="请输入关键字(代码联想)"/>-->
					<!--<i class="iconfont icon-sousuo3"></i>-->
					<inputcode @searchVal="getClientName"></inputcode>
				<!--</div>-->
				<!--<div class="searchBtn" @click="alert()">
						搜索
				</div>-->
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
			<list :ORDERLIST="ORDER" v-show="isPro==false"></list>
			<list :ORDERLIST="searchOrder" v-show="isPro"></list>
			<!--订单列表结束-->
	   		<!--分页-->
	   		<pages></pages>
	   		<!--分页结束-->
	    </div>
	</div>
</template>

<script>
	import {selectTime,getTime,getDate} from '../../../static/utils/public.js'
	import pages from "../assembly/pagination.vue"/*分页*/
	import list from "./views/my-ticket-List.vue"/*列表*/
	import inputcode from "./views/client-code.vue"/*联想搜索框*/
	import search from "./views/my-search.vue";/*搜索*/
	export default{
		data(){
			return {
				isPro:false,//是否是筛选后条件搜索
				alertShow:false,
				clientName:'',//客户名称
				showSection:false,//显示部门弹窗
				searchOrder:[],//筛选后条件搜索得到的订单
				sureTime:'',//获取的时间
				ORDER:[{name:'大参林dashenlin',orderNum:'29071233',money:28450,state:'已开票',person:'曾晓贤',dateTime:'2019-07-12',id:758961},
					{name:'康信药店',orderNum:'84621589',money:120000,state:'审核中',person:'张飞',dateTime:'2019-07-01',id:894355444},
				{name:'仁和堂药业(陈田药店)',orderNum:'84521698',money:8000,state:'待审核',person:'孙殿英',dateTime:'2017-07-01',id:98796331854},
				{name:"华润医药控股有限公司",orderNum:'98974556',price:"92.05",num:320,money:8000,pro:"六味地黄丸360丸",state:'已开票',person:'杨修',dateTime:'2017-07-01',id:65677},]
			}
		},
		components:{
			pages,list,search,inputcode
		},
		watch:{
			clientName(newVal,oldVal){//条件重新筛选后更新isPro
				if(newVal!=''){
					this.isPro=true
					this.searchOrder=this.ORDER.filter((row)=>{
						return row.name.indexOf(this.clientName)>-1
					})
				}else if(newVal==''){
					this.isPro=false
				}
			},
		},
		mounted(){
			this.$data.sureTime = getTime()
		},
		methods:{
			getClientName(V){//获取客户名称
				this.clientName=V
			},
			alert(){//弹出弹窗
				this.alertShow=!this.alertShow
			},
			closeAlert(){//点击蒙层关闭弹窗
				this.alertShow=false
			},
			getAlertShow(v){
				this.alertShow=v.msg
			}
		}
	}
</script>

<style>
</style>