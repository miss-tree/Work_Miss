<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">开票列表</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<!--搜索框-->
			<div class="tableSearch justify_content">
				<!--<div style="width: 85%;">
					<input type="text"  id="search" v-model="clientName" placeholder="请先选择客户名称"/>
					<i class="iconfont icon-sousuo3"></i>
				</div>-->
				<inputcode @searchVal="getClientName"></inputcode>
				<!--<div class="searchBtn" @click="getPro()">
						搜索
				</div>-->
				<div  @click="alert()">
						<i class="iconfont icon-fenxiaosousuo lookAlert" ></i>
				</div>
			</div>
			<div style="height: 51px;"></div>
		    <!--弹出搜索框-->
		    <search :alertShow="alertShow" @changShow="getAlertShow($event)"></search>
		    <!--搜索框结束-->
			<!--订单列表-->
			<div class="messageDiv" v-show="clientName==''">
				<div class="huise showMessage">请先选择客户名称搜索！</div>
			</div>
			<div v-show="clientName!=''">
				<list :ORDERLIST="ORDER" @getCheck="getCheckInfor"></list>
				<!--<tablist :ORDERLIST="ORDER" @getCheck="getCheckInfor" v-show="isPro==false"></tablist>-->
				<!--<tablist :ORDERLIST="searchOrder" @getCheck="getCheckInfor" v-show="isPro"></tablist>-->
				<!--订单列表结束-->
				<!--显示申请-->
				<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;"><!-- v-show="checkData.length!=0"-->
					<div class="bottomWidth">
						<span class="span_15px">订单数量：{{checkData.length}}</span>
						<span class="span_15px" style="margin-left: 5px;">开票金额：{{APPLYMONEY}}</span>
					</div>
					<div class="mui-btn mui-btn-primary applyBtn" @click="routerTo">申请</div>
				</div>
		   		<!--分页-->
		   		<!--<pages></pages>-->
		   		<!--分页结束-->
			</div>
	    </div>
	</div>
</template>

<script>
	import {selectTime,getTime,getDate,mustFill} from '../../../static/utils/public.js'
	import pages from "../assembly/pagination.vue"/*分页*/
	import list from "./views/table-List.vue"/*列表*/
	import tablist from "./views/apply-List.vue"/*列表*/
	import inputcode from "./views/client-code.vue"/*联想搜索框*/
	import search from "./views/order-list-search.vue";/*搜索*/
	export default{
		data(){
			return {
				isCheck:false,//是否先选择了条件搜索
				alertShow:false,
				clientName:'',//搜索的产品
				showSection:false,//显示部门弹窗
				columns:['销售部','电商部','OTC推广部','大KA部','财务部','市场部','财务组'],
				isPro:false,//是否是筛选后条件搜索
				searchOrder:[],//筛选后条件搜索得到的产品
				sureTime:'',//获取的时间
				APPLYMONEY:'',//开票金额
				checkData:[],
				ORDER:[{name:"国药控股股份有限公司",orderNum:"'订单号'TEK190712HW33",pro:"新生儿脐带结扎保护带新生儿脐带结扎保护带",price:"2.5",num:200,money:'28450',state:'已签收',person:'黎放',dateTime:'2019-07-12',id:34534},
					{name:"民信药业(信建分店)",orderNum:'TEK190701WG451',price:"1.25",num:20000,money:'120000',pro:"红花油",state:'已签收',person:'刘禅',dateTime:'2019-07-01',id:34534534},
				{name:"康信药店",orderNum:'TEK170701XX658',price:"2.58",num:100,money:'8000',pro:"口罩",state:'已签收',person:'吕布',dateTime:'2017-07-01',id:534534534},
				{name:"国药控股限公司",orderNum:'TEK190712HW33',pro:"一次性棉签",price:"12.35",num:500,money:'28450',state:'已签收',person:'黎放',dateTime:'2019-07-12',id:654},
					{name:"仁和堂药业(陈田药店)",orderNum:'TEK190701WG451',price:"27.15",num:780,money:'120000',pro:"乌鸡白凤丸",state:'已签收',person:'刘禅',dateTime:'2019-07-01',id:65768},
				{name:"华润医药控股有限公司",orderNum:'TEK17665458',price:"92.05",num:320,money:'8000',pro:"六味地黄丸360丸",state:'已签收',person:'吕布',dateTime:'2017-07-01',id:65677},]
			}
		},
		components:{
			pages,list,search,tablist,inputcode
		},
		watch:{
			ORDER(newVal,oldVal){//条件重新筛选后更新isPro
				if(newVal){
					this.isPro=false
				}
			},
			checkData(newVal,oldVal){
				if(newVal.length!=0){
					this.APPLYMONEY=newVal.map(row=>row.money).reduce((acc,cur)=>{return parseFloat(cur)+parseFloat(acc)})
				}else{
					this.APPLYMONEY=0
				}
			}
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
			getAlertShow(INFOR){//弹窗信息获取
				this.alertShow=INFOR.msg
				this.isCheck=INFOR.showMsg
			},
			getCheckInfor(checkData){//获取选取的数据
				this.checkData=checkData
			},
			getPro(){//搜索筛选后的产品
				if(this.isCheck==false){
					mui.alert("请先筛选条件")
				}else{
					this.searchOrder=this.ORDER.filter((row)=>{
						return row.pro.indexOf(this.clientName)>-1
					})
					this.isPro=true
				}
			},
			routerTo(){
				var that=this
				if(this.checkData.length==0){
					mui.alert("请选择订单")
				}else{
//					mui.alert("通过对比数据判断是否同一客户后跳转",function(){
						that.$router.push({path:"/applyTicket"})
//					})
				}
			}
		}
	}
</script>

<style>
	/*.iconRight{
		position: absolute;
		top: 0;
		right: 15px;
	}*/
</style>