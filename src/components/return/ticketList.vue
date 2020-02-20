<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">已开票订单列表</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<!--搜索框-->
			<div class="tableSearch">
				<div style="width: 70%;">
					<input type="text" name="" id="search" value="" placeholder="请输入关键字(代码联想)"/>
				</div>
				<div class="searchBtn" @click="alert()">
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
			<list :ORDERLIST="ORDER"></list>
			<!--订单列表结束-->
	   		<!--分页-->
	   		<pages></pages>
	   		<!--分页结束-->
	    </div>
	</div>
</template>

<script>
	import {selectTime,getTime,getDate,mustFill} from '../../../static/utils/public.js'
	import list from "./order-List.vue"/*列表*/
	import search from "./views/order-list-search.vue";/*搜索*/
	export default{
		data(){
			return {
				alertShow:false,
				showSection:false,//显示部门弹窗
				columns:['销售部','电商部','OTC推广部','大KA部','财务部','市场部','财务组'],
				sureTime:'',//获取的时间
				ORDER:[{name:'国药控股股份有限公司',orderNum:'TEK190712HW33',money:'￥28450',state:'已开票',person:'黎放',dateTime:'2019-07-12',id:758961},
					{name:'华润医药控股有限公司',orderNum:'TEK190701WG451',money:'￥120000',state:'已开票',person:'刘禅',dateTime:'2019-07-01',id:894355444},
				{name:'华润医药控股有限公司',orderNum:'TEK170701XX658',money:'￥8000',state:'已开票',person:'吕布',dateTime:'2017-07-01',id:98796331854},]
			}
		},
		components:{
			list,search
		},
		computed:{
			spanColor(){
			 	this.ORDERLIST.forEach((el,index)=>{
			 		if(el.state=='通过'){
			 			return 'span_green'
			 		}else if(el.state=='未通过'){
			 			return 'span_red'
			 		}else{
			 			return
			 		}
			 	})
			}
		},
		mounted(){
			this.$data.sureTime = getTime()
		},
		methods:{
			rouerTo(item,index){//页面跳转
				if(item.state=='已签收'){
					this.$router.push({path:"/signOrder",query:{id:item.id}})
				}
			},
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

<style>
	.form_row_right label {
		width: 30%;
		position: relative;	
		display: inline-block;
		padding: 8px 0;
	}
</style>