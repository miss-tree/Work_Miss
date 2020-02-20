<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">搜索示例</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<div class="screen">
		    	<div class="screen_tab" style="width: 35%;">
		    		<div @click="changeOne" class="nowrap" style="overflow: hidden;">
		    			{{startVal}}
		    			<span class="mui-icon span_13px" 
		    				:class="select1?'mui-icon-arrowdown':'mui-icon-arrowup'" 
		    				></span>
		    		</div>
		    	</div>
		    	<div class="screen_tab" style="width: 35%;">
		    		<div @click="select2=!select2" class="nowrap" style="overflow: hidden;"> 
		    			{{modelVal}}
		    			<span class="mui-icon span_13px"
		    				:class="select2?'mui-icon-arrowdown':'mui-icon-arrowup'"  
		    				></span>
		    		</div>
		    	</div>
		    	<div class="screen_tab">
		    		<div @click="search=!search">
		    			<i class="iconfont icon-fenxiaosousuo" style="font-size: 20px;"></i>
		    		</div>
		    	</div>
		    	<div class="screen_tab">
		    		<div @click="look=!look">
		    			<i class="iconfont icon-sousuo3 span_13px"></i>
		    		</div>
		    	</div>
	    	</div>
	    	<div class="screen_show" v-show="select1==false">
	    		<ul class="mui-table-view mui-table-view-radio" @click="changeOne()">
					<li class="mui-table-view-cell" id="cao">
						<label class="mui-navigate-right" for="cao">
							草稿
						</label>
					</li>
					<li class="mui-table-view-cell mui-selected">
						<span class="mui-navigate-right">
							通过
						</span>
					</li>
					<li class="mui-table-view-cell">
						<span class="mui-navigate-right">
							驳回
						</span>
					</li>
				</ul>
	    	</div>
	    	<div class="screen_tab_over" v-show="select2==false">
	    		<inputcode @searchVal="getChange"></inputcode>	
	    	</div>
	    	<div class="screen_tab_over" v-show="search==true">
	    		<check @ssChange="getSearch"></check>	
	    	</div>
	    	<div class="screen_header" v-show="look==true">
	    		<lookView @lookChange="getlook"></lookView>	
	    	</div>
	    	<div style="margin-top: 10px;">
				<list :ORDERLIST="ORDER" @getCheck="getCheckInfor"></list>
			</div>
			<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;"><!-- v-show="checkData.length!=0"-->
				<div class="bottomWidth flex justify_content">
					<span class="span_15px">数量：XXX</span>
					<span class="span_15px" style="margin-left: 5px;">金额：XXX.XX元</span>
				</div>
			</div>
	    </div>
	</div>
</template>

<script>
	import inputcode from "./views/inputcode.vue"
	import check from "./views/check.vue"
	import lookView from "./views/lookView.vue"
	import list from "./views/store-visit-list.vue" /*列表*/
	export default{
		data(){
			return{
				select1:true,
				startVal:'审批状态',
				checkss:'',
				select2:true,	
				modelVal:'客户',
				search:false,
				look:false,
				ORDER: [{
						title: "聚缘堂药店",
						where: '广东省',
						person: '黎放',
						dateTime: '2019-08-13 10:23:14',
						id: 34534
					},
					{
						title: "倍宁医药(镇南路店)",
						where: '广西壮族自治区',
						person: '刘禅',
						dateTime: '2019-07-01 15:03:10',
						id: 34534534
					},
					{
						title: "仁和堂药业(陈田药店)",
						where: '内蒙古自治区',
						person: '吕布',
						dateTime: '2017-09-07 11:53:34',
						id: 534534534
					},
					{
						title: "康信药店",
						where: '浙江省',
						person: '李国梁',
						dateTime: '2019-07-12 17:13:14',
						id: 654
					},
					{
						title: "倍宁医药连锁(良口分店)",
						where: '安徽省',
						person: '张仲景',
						dateTime: '2019-08-26 11:07:07',
						id: 65768
					},
					{
						title: "温泉济康药店",
						where: '上海市',
						person: '貂蝉',
						dateTime: '2019-07-09 10:01:54',
						id: 65677
					},
				]
			}
		},
		components:{inputcode,check,lookView,list},
		mounted(){
			var that=this
			document.querySelector('.mui-table-view.mui-table-view-radio').addEventListener('selected',function(e){
				that.startVal=e.detail.el.innerText;
			});
		},
		methods:{
			getCheckInfor(checkData) { //获取选取的数据
				console.log(checkData)
				this.checkData = checkData
			},
			changeOne(){
				this.select1=!this.select1;
				this.select2=true;
				this.search=false;
				this.look=false;
			},
			getChange(v){
				this.select2=v.cancel
				this.modelVal=v.tl
			},
			getSearch(v){
				this.search=v
			},
			getlook(v){
				this.look=!v
			},
		}
	}
</script>

<style lang="scss">
	@import "../../../static/css/screen.scss";
</style>