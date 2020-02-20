<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">协议详情</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
			<!--选项卡-->
	        <div>
	            <div class="tabHead" id="tabHead">
		            <div @click="curIndex=0" :class="{active:curIndex==0}">
		              <span>基本信息</span>
		            </div>
		            <div @click="curIndex=1" :class="{active:curIndex==1}">
		              <span>产品名称</span>
		            </div>
		            <div @click="curIndex=2" :class="{active:curIndex==2}">
		              <span>附件</span>
		            </div>
	            </div> 
	            <!--基本信息-->
	          <div v-show="curIndex==0">
	          	<store-msg :INFOR="STOREINFOR"></store-msg>
	          </div>
	          <!--产品-->
	          <div v-show="curIndex==1">
	          	<proName :INFOR="PROINFOR"></proName>
	          </div>
	            <!--附件-->
	          <div v-show="curIndex==2">
	          	<div class="form_div" style="padding: 15px 0;">																																				
		        	<lookimg :images="STOREIMG"></lookimg>
	        	</div>
	        	<div class="bottomOver"></div>
	          </div>
	          <!--基本信息完成-->
	        </div>
        </div>  
	</div>
</template>

<script>
	import storeMsg from "./views/agree-detail.vue"
	import proName from "./views/agree-pro-detail.vue"
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{company:"股份有限公司",priceRecord:"需要价格备案",part:"销售部、电商部",agreeType:"一级经销商协议",level:"一级",
					where:"广东",name:"聚缘堂药店",isChain:"是",clienType:"连锁",outCom:"马鞍山天福康",whereClient:"全国",payType:"实销实结",
					payMony:"50000",redate:"季度返利",beginYear:"2018",duringTime:"2018-0903",timeTo:"2021-08-26",num:"一式两份",seal:"已盖章",
					person:"梁学萍",bz:"产品热卖，销售一片良好",
				},
				PROINFOR:[{name:"和胃整肠丸",supplyPrice:2.35,price:2.5,balance:0.15,task:20000,scale:0.05,during:"季度",bz:"供货实销时结"},],
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

<style>
</style>