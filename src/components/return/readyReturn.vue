<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">退货列表</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<!--搜索框弹窗-->
      		<search :alertShow="alertShow" @changShow="getAlertShow($event)"></search>
      		<!--搜索框弹窗结束-->
			<div class="tableSearch justify_content">
				<inputcode @searchVal="getClientName" style="width: 85%;"></inputcode>
				<div style="margin-left: 15px;" @click="alertShow=!alertShow">
					<i class="iconfont icon-fenxiaosousuo" style="color: #fff;display: inline-block; font-size: 30px;margin-top: 5px;"></i>
				</div>
			</div>
	    	<!--搜索框结束-->
			<div style="height: 51px;"></div>
			<!--头部选项卡-->
				<div class="tabHead " id="singList">
					<ul>
						<li :class="{'active':curIndex==0}"
							@click="curIndex=0">
							<span>未开票</span>
						</li>
						<li :class="{'active':curIndex==1}"
							@click="curIndex=1">
							<span>已开票</span>
						</li>
					</ul>
				</div>
			<!--头部选项卡结束-->
			<div v-show="curIndex==0">
				1
				<!--订单列表-->
				<div class="messageDiv" v-show="clientName==''">
					<div class="huise showMessage">请先选择客户名称搜索！</div>
				</div>
				<div v-show="clientName!=''" class="dateRow" v-for="(item,index) in UNORDERLIST" @click="routerTo(item.id,index)">
					<div class="dateRowGrow">
						<div class="dateRowRight">
							<div class="huise dateRow_left">{{item.name}}</div>
							<div class="dateRow_right" :class="{span_green:item.state=='通过',span_red:item.state=='驳回'}">{{item.state}}</div>
						</div>
						<div class="dateRowRight">
							<div class="huise dateRow_left">数量：{{item.num}}</div>
							<div class="dateRow_right ">{{item.money}}</div>
						</div>
						<div class="dateRowRight">
							<div class="huise dateRow_left">单价：￥{{item.price}}</div>
							<div class="dateRow_right huise ">{{item.dateTime}}</div>
						</div>
					</div>
				</div>
				<!--订单列表结束-->
			</div>
			<div v-show="curIndex==1">
				2
				<div class="listRow" v-for="(item,index) in ORDERLIST" @click="jumpTo(item.id,index)">
					<div>
						<div class="huise">{{item.name}}</div>
						<div class="huise">{{item.orderNum}}</div>
						<div class="huise">{{item.person}}</div>
					</div>
					<div>
						<div class="textRight" :class="{span_green:item.state=='通过',span_red:item.state=='驳回'}">{{item.state}}</div>
						<div class="textRight">{{item.money}}</div>
						<div class="textRight huise">{{item.dateTime}}</div>
					</div>
				</div>
			</div>
	   		<!--分页-->
	   		<pages></pages>
	   		<!--分页结束-->
	    </div>
	</div>
</template>

<script>
	import list from "./order-List.vue"	/*列表*/
	import search from "./views/order-list-search.vue"/*搜索弹框*/
	import {selectTime,getTime,getDate,DateAdd,mustFill,selecTion} from '../../../static/utils/public.js'
	export default{
		data(){
			return {
				isCheck:false,//是否先选择了条件搜索
				alertShow:false,
				clientName:'',//客户名称
				sectionArr:[{text:'销售部'},{text:'电商部'},{text:'OTC推广部'},{text:'大KA部'},{text:'财务部'},{text:'市场部'},{text:'财务组'}],
				curIndex: 0,
				sureTime:'',//获取的时间
				list: [{title: '物流中'}, {title: '未发货'}, {title: '已签收'}],
				UNORDERLIST:[{name:'新生儿脐带结扎保护带新生儿脐带结扎保护带',orderNum:'TEK190712HW33',price:"1.25",num:1200,money:'￥28450',state:'通过',person:'黎放',dateTime:'2019-07-12',id:758961},
					{name:'一次性棉签',orderNum:'TEK190701WG451',price:"1.25",num:354,money:'￥120000',state:'待审',person:'刘禅',dateTime:'2019-07-01',id:894355444},
				{name:'口罩',orderNum:'TEK170701XX658',price:"1.25",num:3546,money:'￥8000',state:'通过',person:'吕布',dateTime:'2017-07-01',id:98796331854},],
				ORDERLIST:[{name:'国药控股股份有限公司',orderNum:'TEK190712HW33',money:'￥28450',state:'待审',person:'黎放',dateTime:'2019-07-12',id:758961},
					{name:'华润医药控股有限公司',orderNum:'TEK190701WG451',money:'￥120000',state:'通过',person:'刘禅',dateTime:'2019-07-01',id:894355444},
				{name:'华润医药控股有限公司',orderNum:'TEK170701XX658',money:'￥8000',state:'驳回',person:'吕布',dateTime:'2017-07-01',id:98796331854},]
			}
		},
		components:{
      list,search
		},
		mounted(){
			this.$data.sureTime = getTime()
		},
		methods:{
			getClientName(V){//获取客户名称
				this.clientName=V
			},
			routerTo(id,index){//页面跳转
				this.$router.push({path:"/unTicketDetail",query:{id:id}})
			},
			jumpTo(id,index){//页面跳转
				this.$router.push({path:"/ticketDetail",query:{id:id}})
			},
			getAlertShow(msg){
				this.alertShow=msg
			}
		}
	}
</script>
