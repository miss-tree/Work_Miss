<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">应收款详情</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
			<!--选项卡-->
	        <div id="test">
	            <div class="tabHead" id="tabHead">
		            <div @click="curIndex=0" :class="{active:curIndex==0}">
		              <span>概要信息</span>
		            </div>
		            <div @click="curIndex=1" :class="{active:curIndex==1}">
		              <span>产品信息</span>
		            </div>
		            <div @click="curIndex=2" :class="{active:curIndex==2}">
		              <span>最近收款信息</span>
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
	          <!--最近收款信息-->
	          <div v-show="curIndex==2">
	          	<record :INFOR="HISTORY"></record>
	      		<div style="height: 60px;"></div>
	          </div>
	        </div>
        </div>  
	</div>
</template>

<script> 
	import storeMsg from "./reViews/money-detail.vue"
	import proName from "./reViews/--pro-detail.vue"
	import record from "./reViews/history-detail.vue"
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{company:"股份有限公司",orderNum:"M-H20190800017",part:"销售部、电商部",
					outType:"公司对客户出货",level:"一级",billNum:'25283166',examMoney:0.00,
					where:"普宁市流沙广达东路金丰园A栋16-18号",name:"广州中山医医药有限公司",clienType:"连锁",
					outCom:"马鞍山天福康",billDate:'2019-09-04',payMony:84500.00,priceMoney:5000.00,
					person:"梁学萍",bz:"客户需要提前报销发票",phone:'0663-2918255',realMoney:5000.00,
					staff:"王检平",sendNum:"TEK-YB20190600635",EMS:'SF1010636691396',
				},
				PROINFOR:[{name:"和胃整肠丸",norms:"300粒/瓶",price:3475,real:2000,sale:2486,com:"器械厂",
				payfor:201807.03,beginTime:"2018-07-12",endTime:"2020-07-11",picNum:10,orderNum:'2019072342',part:"销售部"},
				{name:"板蓝根颗粒25袋",norms:"每袋装10克",price:64980,real:60000,sale:65452,com:"股份公司",
				payfor:659621.56,beginTime:"2019-08-27",endTime:"2021-08-26",picNum:0,orderNum:'2019072342',part:"电商部"},],
				HISTORY:[{num:'20180108174',tatol:437342.400,money:437342.400,person:'刘烨',com:'股份公司',time:'2018-09-13'},
				{num:'20150528102F',tatol:5100.00,money:3732.00,person:'郑夏婷',com:'股份公司',time:'2015-12-02'},
				{num:'20150522125F',tatol:1297.00,money:373.0,person:'宋佳',com:'制药厂',time:'2019-09-06'},
				{num:'2009071717',tatol:437342.00,money:4342.00,person:'宋佳',com:'器械厂',time:'2018-07-22'},
				{num:'2009063021',tatol:1297.00,money:437342.00,person:'潘长江',com:'天福康',time:'2017-01-17'},
				{num:'200906099',tatol:10376.10,money:42.400,person:'郑夏婷',com:'股份公司',time:'2019-03-12'},
				],
			}
		},
		components:{storeMsg,proName,record},
		methods:{
			 onScroll() {
        //可滚动容器的高度
        let innerHeight = document.querySelector('#test').clientHeight;
        //屏幕尺寸高度
        let outerHeight = document.documentElement.clientHeight;
        //可滚动容器超出当前窗口显示范围的高度
        let scrollTop = document.documentElement.scrollTop;
        //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
        console.log(innerHeight + " " + outerHeight + " " + scrollTop);
        if (innerHeight < (outerHeight + scrollTop)) {
            //加载更多操作
            console.log("loadmore");
        }
			}
		}	 
	}
</script>