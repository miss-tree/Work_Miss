<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">收款详情</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
			<!--选项卡-->
	        <div>
	            <div class="tabHead" id="tabHead">
		            <div @click="curIndex=0" :class="{active:curIndex==0}">
		              <span>概要信息</span>
		            </div>
		            <div @click="curIndex=1" :class="{active:curIndex==1}">
		              <span>产品信息</span>
		            </div>
	            </div> 
	            <!--基本信息-->
	          <div v-show="curIndex==0">
	          	<store-msg :INFOR="STOREINFOR"></store-msg>
	          </div>
	          <!--产品-->
	          <div v-show="curIndex==1">
	          	<proName :INFOR="PROINFOR"></proName>
	      		<div style="height: 60px;"></div>
	          </div>
	          <!--基本信息完成-->
	        </div>
        </div>  
	</div>
</template>

<script>
	import storeMsg from "./receiptViews/rece-detail.vue"
	import proName from "./receiptViews/rece-pro-detail.vue"
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{company:"股份有限公司",orderNum:"M-H20190800017",part:"销售部、电商部",
					bank:"广大银行",level:"一级",billNum:'25283166',debt:2350,
					where:"普宁市流沙广达东路金丰园A栋16-18号",name:"聚缘堂药店",type:"电汇",
					outCom:"马鞍山天福康",billDate:'2019-09-04',payMony:"50000",
					person:"梁学萍",bz:"还差部分核销未完成",phone:'0663-2918255',
					staff:"王检平",sendNum:"TEK-YB20190600635",EMS:'SF1010636691396',
				},
				PROINFOR:[{name:"和胃整肠丸",norms:"300粒/瓶",price:75,num:2000,unit:"瓶",money:0,exam:"审核通过",
				ph:"20180703",beginTime:"2018-07-12",endTime:"2020-07-11",picNum:10,orderNum:'2019072342'},
				{name:"板蓝根颗粒25袋",norms:"每袋装10克",price:4.15,num:600,unit:"包",money:0,exam:"审核通过",
				ph:"TH65962156",beginTime:"2019-08-27",endTime:"2021-08-26",picNum:0,orderNum:'2019072342'},],
			}
		},
		components:{storeMsg,proName},
	}
</script>