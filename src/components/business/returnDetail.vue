<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">退货详情</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
			<!--选项卡-->
	        <div>
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
	import storeMsg from "./returnViews/return-detail.vue"
	import proName from "./billViews/bill-pro-detail.vue"
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{company:"股份有限公司",orderNum:"M-H20190800017",part:"销售部",
					outType:"公司对客户出货",proName:'一次性使用医用口罩(10个/包)-蓝色',price:1.700,
					where:"普宁市流沙广达东路金丰园A栋16-18号",name:"	普宁市立丰药业有限公司",clienType:"连锁",
					outCom:"马鞍山天福康",time:'2019-09-06',payMony:50000,num:3000,batch:'70支/袋',
					person:"梁学萍",bz:"客户需要提前报销发票",type:'客户退回公司'
				},
				PROINFOR:[{name:"和胃整肠丸",norms:"300粒/瓶",price:75,num:2000,unit:"瓶",money:0,
				ph:"20180703",beginTime:"2018-07-12",endTime:"2020-07-11",picNum:10,orderNum:'2019072342'},
				{name:"板蓝根颗粒25袋",norms:"每袋装10克",price:4.15,num:600,unit:"包",money:0,
				ph:"TH65962156",beginTime:"2019-08-27",endTime:"2021-08-26",picNum:0,orderNum:'2019072342'},],
				STOREIMG:["http://image.360kad.com/group2/M00/01/3B/CgAgFVmxFpmAV3tFAAHbVlkQVCg841.jpg_180x180.jpg",
					"http://image.360kad.com/group2/M00/35/7A/CgAgFVpxioCAdE1tAAF0JkkEcvk444.jpg_180x180.jpg",
					"http://image.360kad.com/group1/M00/6A/09/CgAgEFgSGX6ATNYrAABjsH9g2zs845.jpg",
					"http://image.360kad.com/group2/M00/B1/C5/CgAgFFzTcLKAHM41AAGK1Z0X4Sk502.jpg_180x180.jpg",
					"http://image.360kad.com/group2/M00/1A/17/CgAgFFoOjTuAbio5AAFDlE3nx3Q788.jpg_180x180.jpg",
				],
			}
		},
		components:{storeMsg,proName},
		computed:{
			changeVal(){
				console.log('hi')
			}
		},
		methods:{
		}
	}
</script>
