<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">OTC拜访详情</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
			<!--选项卡-->
	        <div>
	            <div class="tabHead" id="tabHead">
		            <div @click="curIndex=0" :class="{active:curIndex==0}">
		              <span>拜访信息</span>
		            </div>
		            <div @click="curIndex=1" :class="{active:curIndex==1}">
		              <span>店内宣传</span>
		            </div>
	            </div> 
	            <!--地理位置-->
	          <div v-show="curIndex==0">
	          	<store-msg :INFOR="STOREINFOR"></store-msg>
	          </div>
	            <!--基本信息-->
	          <div v-show="curIndex==1">
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
	import getTop from "../../assembly/getTop.vue"; /*回到顶部*/
	import storeMsg from "./visitViews/store-visit-detail.vue"
	import lookimg from "../../assembly/lookimg.vue"
	import timeLine from "../../assembly/timeLine.vue"; /*流程进度*/
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{
					name:"聚缘堂药店",time:"2019-8-22 11:35:25",shopAdd:"和胃整肠丸",shopTrain:"和胃整肠丸产品知识分享",
					contest:"正露丸",medicine:"正露丸",same:"正露丸",where:"广东省广州市荔湾区紫荆道90号102铺",
					person:"梁学萍",hot:"无",bz:"产品热卖，销售一片良好",
				},
				STOREIMG:["http://image.360kad.com/group2/M00/01/3B/CgAgFVmxFpmAV3tFAAHbVlkQVCg841.jpg_180x180.jpg",
					"http://image.360kad.com/group2/M00/35/7A/CgAgFVpxioCAdE1tAAF0JkkEcvk444.jpg_180x180.jpg",
					"http://image.360kad.com/group1/M00/6A/09/CgAgEFgSGX6ATNYrAABjsH9g2zs845.jpg",
					"http://image.360kad.com/group2/M00/B1/C5/CgAgFFzTcLKAHM41AAGK1Z0X4Sk502.jpg_180x180.jpg",
					"http://image.360kad.com/group2/M00/1A/17/CgAgFFoOjTuAbio5AAFDlE3nx3Q788.jpg_180x180.jpg",
				],
			}
		},
		components:{getTop,storeMsg,lookimg,timeLine},
		methods:{
		}
	}
</script>

<style>
</style>