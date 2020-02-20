<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">订单列表</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<!--搜索框弹窗-->
      		<search :alertShow="alertShow"  @setInfor="getInfor"></search>
      		<!--搜索框弹窗结束-->
			<div class="tableSearch">
				<div style="width: 70%;">
					<input type="text" name="" id="search" value="" placeholder="请输入关键字(代码联想)"/>
				</div>
				<div class="searchBtn" @click="alert()">
						搜索
				</div>
				<div style="margin-left: 15px;" @click="alert()">
					<i class="iconfont icon-fenxiaosousuo" style="color: #fff;display: inline-block; font-size: 30px;margin-top: 5px;"></i>
				</div>
			</div>
	    	<!--搜索框结束-->
			<div style="height: 51px;"></div>
			<!--头部选项卡-->
				<div class="tabHead " id="singList">
					<ul>
						<li v-for="(item,index) in list" :class="{'active':curIndex==index}"
							v-on:click="setIndex(index)">
							<span>{{item.title}}</span>
						</li>
					</ul>
				</div>
			<!--头部选项卡结束-->
			<div v-show="curIndex==0">
				1
				<!--订单列表-->
				<div class="listRow" v-for="(item,index) in ORDERLIST" @click="rouerTo(item.id,index)">
					<div>
						<div class="huise">{{item.name}}</div>
						<div class="huise">{{item.orderNum}}</div>
						<div class="huise">{{item.person}}</div>
					</div>
					<div>
						<div class="textRight span_green" v-show="item.state=='已签收'">{{item.state}}</div>
						<div class="textRight span_red" v-show="item.state=='物流中'">{{item.state}}</div>
						<div class="textRight" v-show="item.state=='未发货'">{{item.state}}</div>
						<div class="textRight">{{item.money}}</div>
						<div class="textRight huise">{{item.dateTime}}</div>
					</div>
				</div>
				<!--订单列表结束-->
			</div>
			<div v-show="curIndex==1">
				2
				<list :ORDERLIST="ORDERLIST2"></list>
			</div>
			<div v-show="curIndex==2">
				3
				<list :ORDERLIST="ORDERLIST3"></list>
			</div>
	   		<!--分页-->
	   		<pages></pages>
	   		<!--分页结束-->
	    </div>
	</div>
</template>

<script>
	import list from "./views/order-List.vue"	/*列表*/
import search from "./views/order-list-search.vue"/*搜索弹框*/
	import {selectTime,getTime,getDate,DateAdd,mustFill,selecTion} from '../../../static/utils/public.js'
	export default{
		data(){
			return {
				alertShow:false,
				STARTDATE:'',//开始时间
				ENDDATE:'',//结束时间
				ISCHECK:'',//是否活动
				CHECKTIME:'',//选择的时间
				sectionArr:[{text:'销售部'},{text:'电商部'},{text:'OTC推广部'},{text:'大KA部'},{text:'财务部'},{text:'市场部'},{text:'财务组'}],
				SECTION:'',//选择的部门
				CHECKSTATE:[],//选择的状态
				curIndex: 0,
				sureTime:'',//获取的时间
				list: [{title: '物流中'}, {title: '未发货'}, {title: '已签收'}],
				ORDERLIST:[{name:'国药控股股份有限公司',orderNum:'TEK190712HW33',money:'￥28450',state:'物流中',person:'黎放',dateTime:'2019-07-12',id:758961},
					{name:'华润医药控股有限公司',orderNum:'TEK190701WG451',money:'￥120000',state:'物流中',person:'刘禅',dateTime:'2019-07-01',id:894355444},
				{name:'华润医药控股有限公司',orderNum:'TEK170701XX658',money:'￥8000',state:'物流中',person:'吕布',dateTime:'2017-07-01',id:98796331854},],
				ORDERLIST2:[{name:'国药控股股份有限公司',orderNum:'TEK190712HW33',money:'￥28450',state:'未发货',person:'黎放',dateTime:'2019-07-12',id:758961},
					{name:'华润医药控股有限公司',orderNum:'TEK190701WG451',money:'￥120000',state:'未发货',person:'刘禅',dateTime:'2019-07-01',id:894355444},
				{name:'华润医药控股有限公司',orderNum:'TEK170701XX658',money:'￥8000',state:'未发货',person:'吕布',dateTime:'2017-07-01',id:98796331854},],
				ORDERLIST3:[{name:'国药控股股份有限公司',orderNum:'TEK190712HW33',money:'￥28450',state:'已签收',person:'黎放',dateTime:'2019-07-12',id:758961},
					{name:'华润医药控股有限公司',orderNum:'TEK190701WG451',money:'￥120000',state:'已签收',person:'刘禅',dateTime:'2019-07-01',id:894355444},
				{name:'华润医药控股有限公司',orderNum:'TEK170701XX658',money:'￥8000',state:'已签收',person:'吕布',dateTime:'2017-07-01',id:98796331854},],
			    comArr:[ { text: "泰恩康股份" },
			        { text: "马鞍山天福康" },
			        { text: "电商公司" },
			        { text: "安徽维泰利" },]
			}
		},
		components:{list,search },
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
			selectTime();
			selecTion("part",this.sectionArr)
			selecTion("compony",this.comArr)
		},
		methods:{
			alert(){//弹出弹窗
				this.alertShow=!this.alertShow
			},
			setIndex(i) {//tab获取点击的下标
				this.curIndex = i
			},
			getInfor(v){//父子传值
				this.alertShow=v
			},
			rouerTo(item,index){
				this.$router.push({path:"/signOrder",query:{id:item.id}})
			},
			closeAlert(){//点击蒙层关闭弹窗
				this.alertShow=false
			},
		}
	}
</script>