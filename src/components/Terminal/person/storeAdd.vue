<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">药店登记</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
			<!--选项卡-->
	        <div>
	            <div class="tabHead" id="tabHead">
		            <div @click="curIndex=0" :class="{active:curIndex==0}">
		              <span>基本信息</span>
		            </div>
		            <!--<div @click="curIndex=1" :class="{active:curIndex==1}">
		              <span>地理位置</span>
		            </div>-->
		            <div @click="curIndex=2" :class="{active:curIndex==2}">
		              <span>地理位置</span>
		            </div>
	            </div> 
	            <!--基本信息-->
	          <div v-show="curIndex==0">
	            <store-msg :INFOR="STOREINFOR" @setInfor="getinfor"></store-msg>
	          </div>
	          <!--基本信息完成-->
	            <!--地理位置-->
	          <!--<div v-show="curIndex==1">
	            <store-map></store-map>
	          </div>-->
	          <div v-show="curIndex==2">
	            <store-map2></store-map2>
	          </div>
	        </div>
	        <div class="submitBtn">
	    			<button type="button" style="width: 80%; padding: 10px;" id="update"  @click="mustFull"
	    				class="mui-btn update mui-btn-block mui-btn-primary">提交</button>
	    		</div>
	        </div>
        </div>  
	</div>
</template>

<script>
	import storeMsg from "./views/store-add-msg.vue"
	import storeMap from "./views/store-add-map.vue"
	import storeMap2 from "./views/store-add-map2.vue"
	import {mustFill} from "../../../../static/utils/public.js";
	export default{
		data(){
			return{
				curIndex:0,
				STOREINFOR:{
					name:"",storeAttr:"",type:"",isYB:"",money:"",level:"",
					where:"",person:"",phone:"",bz:"",
				}
			}
		},
		components:{storeMsg,storeMap,storeMap2},
		methods:{
			getinfor(v){
				this.STOREINFOR=v
			},
			mustFull(){
				var isOk=mustFill();
				var pn=/^1[3456789]\d{9}$/;
				if(isOk.length==0){
					if(this.STOREINFOR.isYB==""){
						mui.alert("请选择医保")
						return false
					}else if(!(pn.test(this.STOREINFOR.phone))){
						mui.alert("请输入正确的电话号码")
						return false
					}
					console.log("hi")
				}
			}
		}
	}
</script>

<style>
#tabHead{
	height: 30px;
}
#tabHead>div{
	height: inherit;
	line-height: 30px;
}
</style>