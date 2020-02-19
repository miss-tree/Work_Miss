<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">药店信息详情</h1>
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
		            <div @click="curIndex=2" :class="{active:curIndex==2}">
		              <span>地理位置</span>
		            </div>
	            </div> 
	            <!--基本信息-->
	          <div v-show="curIndex==0">
	            <store-msg :INFOR="STOREINFOR"></store-msg>
	          </div>
	          <!--基本信息完成-->
	            <!--地理位置-->
	          <div v-show="curIndex==2">
	            <store-map2></store-map2>
	          </div>
	        </div>
	        <!--<div class="bottomOver"></div>-->
        </div>  
	</div>
</template>

<script>
	import getTop from "../../assembly/getTop.vue"; /*回到顶部*/
	import storeMsg from "./infoViews/store-detail.vue"
	import storeMap2 from "./infoViews/store-detail-map.vue"
	import timeLine from "../../assembly/timeLine.vue"; /*流程进度*/
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{
					name:"聚缘堂药店",storeAttr:"单体大店Vip",type:"商业中心店",isYB:"是",money:"12万",level:"c",otc:"宋佳",time:"2019-08-21",
					where:"广东省广州市荔湾区紫荆道90号102铺",person:"梁学萍",phone:"(020)81409480",bz:"从我公司进货量大，打款准时，是难得的优质客户",
				},
				EXAMINFOR:[{progress:'经理审核',opinion:'同意',bz:'',time:'2019-08-03 16:54'},
					{progress:'部门审核',opinion:'同意',bz:'',time:'2018-04-03 16:23'},
					{progress:'大区审核',opinion:'同意',bz:'',time:'2019-08-02 10:33'},
					{progress:'提交申请',opinion:'',bz:'',time:'2019-08-01 21:42'}],
			}
		},
		components:{getTop,storeMsg,storeMap2,timeLine},
		methods:{
		}
	}
</script>

<style>
</style>