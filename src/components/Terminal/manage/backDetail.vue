<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">反馈详情</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
			<!--选项卡-->
	        <div>
	            <div class="tabHead" id="tabHead">
		            <div @click="curIndex=0" :class="{active:curIndex==0}">
		              <span>签到信息</span>
		            </div>
		            <!--<div @click="curIndex=2" :class="{active:curIndex==2}">
		              <span>基本信息</span>
		            </div>-->
	            </div> 
	            <!--地理位置-->
	          <div v-show="curIndex==0">
	            <store-map2 :IPINFOR="STOREIP"></store-map2>
	          </div>
	            <!--基本信息-->
	          <div v-show="curIndex==2">
	            <store-msg :INFOR="STOREINFOR"></store-msg>
	          </div>
	          <!--基本信息完成-->
	        </div>
	        <!--<div class="bottomOver"></div>-->
	        	<!--<div class="form_title">
		    		审核进度
			    </div>
		       	 <time-line :examInfor="EXAMINFOR"></time-line>
		        </div>-->
        </div>  
	</div>
</template>

<script>
	import getTop from "../../assembly/getTop.vue"; /*回到顶部*/
	import storeMsg from "./backViews/store-sign-detail.vue"
	import storeMap2 from "./backViews/store-sign-detail-map.vue"
	import timeLine from "../../assembly/timeLine.vue"; /*流程进度*/
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{
					name:"聚缘堂药店",storeAttr:"单体大店Vip",type:"商业中心店",isYB:"是",money:"12万",level:"c",
					where:"广东省广州市荔湾区紫荆道90号102铺",person:"梁学萍",phone:"(020)81409480",bz:"从我公司进货量大，打款准时，是难得的优质客户",
				},
				STOREIP:{mapInfo:{
						label:"药店地址：广东省广州市海珠区万胜围绿洲花场南门",
						content:"签到位置：药店就在我这里",
						view: {lng:113.392881,lat: 23.10456},/*在缩放比例为15的情况下：lng偏移-0.015，lat偏移+0.01*/
						center: {lng:113.392881,lat: 23.10456},//药店位置
						position:{lng:113.388713,lat: 23.102898},//签到位置
						way:[{lng:113.392881,lat: 23.10456},
							{lng:113.388713,lat: 23.102898},],
						initLocation: false,
						circlePath: { //圆形区域
							center: {lng:113.392881,lat: 23.10456},
							radius: 200},
						},
					name:"大参林dashenglin",
					time:"2019-08-21 09:45:42",
					where:"广州海珠区天港东路58号",
					lng:"113.392881",
					lat:"23.10456",
					codeNum:2,
					num:1,
					position:"广东省广州市海珠区万胜围绿洲花场南门",
					away:"1.55",
					state:"异常",
					bz:"药店就在我旁边",
				},
			}
		},
		components:{getTop,storeMsg,storeMap2,timeLine},
		methods:{
		}
	}
</script>

<style>
</style>