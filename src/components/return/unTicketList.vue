<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">未开票订单列表</h1>
    </header>
    <!--头部结束-->
    <div class="mui-content">
    	<div v-show="isFirst">
    		<div class="mongolia"></div>
    		<div @click="setGuide()">
	    		<img src="../../../static/assets/guide1.png" style="position: fixed;z-index: 39;top: 50px;left: 20px;width: 230px;height: 230px;"/>
    		</div>
    	</div>
      <!--搜索框-->
      <div class="tableSearch justify_content">
      	<inputcode @searchVal="getClientName" style="width: 85%;"></inputcode>
        <!--<div style="width: 70%;">-->
          <!--<input type="text" name id="search" value placeholder="请输入关键字(代码联想)">-->
          <!--<i class="iconfont icon-sousuo3"></i>-->
        <!--</div>-->
        <!--<div class="searchBtn" @click="alertShow=!alertShow">搜索</div>-->
        <div  @click="alertShow=!alertShow">
						<i class="iconfont icon-fenxiaosousuo lookAlert" ></i>
				</div>
        <!--<div style="margin-left: 15px;" @click="alertShow=!alertShow">
          <i
            class="iconfont icon-fenxiaosousuo"
            style="color: #fff;display: inline-block; font-size: 30px;margin-top: 5px;"
          ></i>
        </div>-->
      </div>
      <div style="height: 51px;"></div>
      <!--弹出搜索框-->
      <search :alertShow="alertShow"  @changShow="getAlertShow($event)"></search>
      <!--搜索框结束-->
      <!--订单列表-->
      <div class="messageDiv" v-show="clientName==''">
				<div class="huise showMessage">请先选择客户名称搜索！</div>
			</div>
			<div v-show="clientName!=''">
				<list :ORDERLIST="ORDER" @getCheck="getCheckInfor"></list>
				<!--显示申请-->
				<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;"><!-- v-show="checkData.length!=0"-->
					<div class="bottomWidth">
						<span class="span_15px">产品数量：{{checkData.length}}</span>
						<!--<span class="span_15px" style="margin-left: 5px;">开票金额：{{APPLYMONEY}}</span>-->
					</div>
					<div class="mui-btn mui-btn-primary applyBtn" @click="routerTo">申请</div>
				</div>
			</div>
      <!--订单列表结束-->
      <!--分页-->
      <!--<pages></pages>-->
      <!--分页结束-->
    </div>
  </div>
</template>

<script>
import pages from "../assembly/pagination.vue";/*分页*/
import search from "./views/order-list-search.vue";/*搜索*/
	import inputcode from "../assembly/inputcode.vue"/*联想搜索框*/
	import list from "./views/table-List.vue"/*列表*/
import {selectTime,getTime, getDate,selecTion} from "../../../static/utils/public.js";
//import list from "./order-List.vue";
export default {
  data() {
    return {
    	isFirst:true,//是否第一次进入这个页面
      alertShow: false,
      clientName:'',//客户名称
      checkData:[],//选取的产品
      APPLYMONEY:0,//合计金额
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
      ORDER:[{name:"国药控股股份有限公司",orderNum:"'订单号'TEK190712HW33",pro:"新生儿脐带结扎保护带新生儿脐带结扎保护带",price:"2.5",num:200,money:'28450',state:'已签收',person:'黎放',dateTime:'2019-07-12',id:34534},
					{name:"民信药业(信建分店)",orderNum:'TEK190701WG451',price:"1.25",num:20000,money:'120000',pro:"红花油",state:'已签收',person:'刘禅',dateTime:'2019-07-01',id:34534534},
				{name:"康信药店",orderNum:'TEK170701XX658',price:"2.58",num:100,money:'8000',pro:"口罩",state:'已签收',person:'吕布',dateTime:'2017-07-01',id:534534534},
				{name:"国药控股限公司",orderNum:'TEK190712HW33',pro:"一次性棉签",price:"12.35",num:500,money:'28450',state:'已签收',person:'黎放',dateTime:'2019-07-12',id:654},
					{name:"仁和堂药业(陈田药店)",orderNum:'TEK190701WG451',price:"27.15",num:780,money:'120000',pro:"乌鸡白凤丸",state:'已签收',person:'刘禅',dateTime:'2019-07-01',id:65768},
				{name:"华润医药控股有限公司",orderNum:'TEK17665458',price:"92.05",num:320,money:'8000',pro:"六味地黄丸360丸",state:'已签收',person:'吕布',dateTime:'2017-07-01',id:65677},]
    };
  },
  components: {
    pages,search,inputcode,
    list
  },
  computed: {
    spanColor() {
      this.ORDERLIST.forEach((el, index) => {
        if (el.state == "通过") {
          return "span_green";
        } else if (el.state == "未通过") {
          return "span_red";
        } else {
          return;
        }
      });
    }
  },
  created(){
  	const getStorage=localStorage.getItem("IS_FIRST_LOGIN")
  	if(getStorage){
  		this.isFirst=false
  		console.log("已经登陆过一次了")
  	}
  },
  mounted() {
    this.$data.sureTime = getTime();
  },
  methods: {
  		setGuide(){//点击指引
  			this.isFirst=false
  			localStorage.setItem("IS_FIRST_LOGIN",true)
  		},
			getClientName(V){//获取客户名称
				this.clientName=V
			},
			getCheckInfor(checkData){//获取选取的数据
				console.log(checkData)
				this.checkData=checkData
			},
			getAlertShow(msg){
				this.alertShow=msg
			},
			routerTo(){
				var that=this
				if(this.checkData.length==0){
					mui.alert("请选择退货产品")
				}else{
					that.$router.push({path:"/unTicketReturn"})
				}
			}
  }
};
</script>

<style>
.form_row_right label {
  width: 30%;
  position: relative;
}
</style>