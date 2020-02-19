<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">药店签到详情</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
			<!--选项卡-->
	        <div>
	            <div class="tabHead" id="tabHead">
		            <div @click="curIndex=0" :class="{active:curIndex==0}">
		              <span>地理位置</span>
		            </div>
		            <div @click="curIndex=2" :class="{active:curIndex==2}">
		              <span>基本信息</span>
		            </div>
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
	import storeMsg from "./signViews/store-sign-detail.vue"
	import storeMap2 from "./signViews/store-sign-detail-map.vue"
	import timeLine from "../../assembly/timeLine.vue"; /*流程进度*/
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{
					name:"聚缘堂药店",storeAttr:"单体大店Vip",type:"商业中心店",isYB:"是",money:"12万",level:"c",
					where:"广东省广州市荔湾区紫荆道90号102铺",person:"梁学萍",phone:"(020)81409480",bz:"从我公司进货量大，打款准时，是难得的优质客户",
				},
				STOREIP:{mapInfo:{},
				where:"广东省广州市天河区科韵路东方商业广场",
				lng:"113.3831",
				lat:"23.13013",
				num:0,
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