<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">退货查询列表</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<div class="screen">
		    	<!--<div class="screen_tab" style="width: 35%;">
		    		<div @click="changeOne" class="nowrap">
		    			{{startVal}}
		    			<span class="mui-icon span_13px" 
		    				:class="select1?'mui-icon-arrowdown':'mui-icon-arrowup'" 
		    				></span>
		    		</div>
		    	</div>-->
		    	<div class="screen_tab" style="width: 75%;">
		    		<div @click="changeTwo" class="nowrap"> 
		    			{{modelVal}}
		    			<span class="mui-icon span_13px"
		    				:class="select2?'mui-icon-arrowdown':'mui-icon-arrowup'"  
		    				></span>
		    		</div>
		    	</div>
		    	<div class="screen_tab">
		    		<div @click="changeTree">
		    			<span class="hidden">多选</span>
		    			<i class="iconfont icon-fenxiaosousuo" style="font-size: 20px;"></i>
		    		</div>
		    	</div>
		    	<!--<div class="screen_tab">
		    		<div @click="changeFour">
		    			<i class="iconfont icon-sousuo3 span_13px"></i>
		    		</div>
		    	</div>-->
	    	</div>
	    	<!--选择弹出-->
	    	<div>
		    	<div class="screen_show" v-show="curIndex==1">
		    		<ul class="mui-table-view mui-table-view-radio" @click="changeOne()">
		    			<li class="mui-table-view-cell mui-selected">
							<label class="mui-navigate-right">
								全部
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="mui-navigate-right" >
								待核销
							</label>
						</li>
						<li class="mui-table-view-cell">
							<span class="mui-navigate-right">
								已核销
							</span>
						</li>
					</ul>
		    	</div>
		    	<div class="screen_tab_over" v-show="curIndex==2">
		    		<inputcode :inputVal="modelVal" @searchVal="getChange"></inputcode>	
		    	</div>
		    	<div class="screen_tab_over" v-show="curIndex==3">
		    		<check @ssChange="getSearch"></check>	
		    	</div>
		    	<div class="screen_header" v-show="curIndex==4">
		    		<lookView @lookChange="getlook"></lookView>	
		    	</div>
	    	</div>
	    	<div class="messageDiv" v-show="hasSearch==false">
				<div class="huise showMessage">请先选择条件搜索！</div>
			</div>
			
	    	<div style="margin-top: 10px;" v-show="hasSearch!=false">
				<list :ORDERLIST="ORDER" @getCheck="getCheckInfor"></list>
				<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;">
					<div class="bottomWidth flex justify_content">
						<!--<span class="span_15px">数量：{{ORDER.length}}</span>-->
						<span class="span_15px" style="margin-left: 5px;">退货金额：{{MONEY.toFixed(2)}}元</span>
					</div>
				</div>
			</div>
	    </div>
	</div>
</template>

<script>
	import inputcode from "./returnViews/inputcode.vue"
	import check from "./returnViews/check.vue"
	import lookView from "./returnViews/lookView.vue" /*查看*/
	import list from "./returnViews/return-list.vue" /*列表*/
	export default{
		data(){
			return{
				select1:true,
				curIndex:0,
				startVal:'核销状态',
				checkss:'',
				select2:true,	
				modelVal:'客户',
				search:false,
				look:false,
				hasSearch:false,//只有搜索条件后才能显示数据
				ORDER: [
				{title:'广州泰瑞医药有限公司',proName:'风油精6ml',money:1248.000,num:416,time:'2019-08-27'},
				{title:'甘肃德生堂医药批发有限公司',proName:'创口贴7cm*10cm5片',money:960.000,num:480,time:'2019-08-27'},
				{title:'广东创美药业有限公司',proName:'藿香正气丸240丸',money:5166.000,num:416,time:'2019-09-06'},
				{title:'广州泰瑞医药有限公司',proName:'香砂养胃丸240丸',money:4094.000,num:416,time:'2019-08-27'},
				{title:'广州泰瑞医药有限公司',proName:'风油精6ml',money:4731.000,num:416,time:'2019-08-27'},
				{title:'内蒙古天力药业有限公司',proName:'附子理中丸240丸',money:12900.000,num:416,time:'2019-08-27'},
				{title:'普宁市立丰药业有限公司',proName:'六味地黄丸240丸',money:4997.000,num:416,time:'2018-12-21'},
				{title:'广东家之和药业有限公司',proName:'逍遥丸240丸',money:5301.000,num:416,time:'2019-08-27'},
				{title:'康泽药业连锁有限公司',proName:'知柏地黄丸240丸',money:4997.000,num:416,time:'2018-08-17'},
				{title:'广州泰瑞医药有限公司',proName:'和胃整肠丸300丸',money:8543.000,num:416,time:'2019-08-27'},
				]
			}
		},
		components:{inputcode,check,lookView,list},
		computed:{
			AMOUNT(){
				return	this.ORDER.map(row=>row.num).reduce((cur,ace)=>parseFloat(cur)+ace)
			},
			MONEY(){//合计金额
				return	this.ORDER.map(row=>row.money).reduce((cur,ace)=>{ return parseFloat(cur)+ace},0)
			}
		},
		watch:{
			startVal(newVal,oldVal){
				if(newVal){
					this.hasSearch=true
				}
			},
			modelVal(newVal,oldVal){
				if(newVal){
					this.hasSearch=true
				}
			},
			curIndex(newVal,oldVal){
				if(newVal==0){
					this.select1=true
					this.select2=true
				}
			},
			deep:true,
		},
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
			changeOne(){/*点击第一个，其他几个关闭*/
				this.select1=!this.select1;
				if(this.select1==false){
					this.curIndex=1
				}else{
					this.curIndex=0
				}
			},
			changeTwo(){/*点击第二个，其他几个关闭*/
				this.select2=!this.select2;
				if(this.select2==false){
					this.curIndex=2
				}else{
					this.curIndex=0
				}
			},
			changeTree(){/*点击第三个，其他几个关闭*/
				this.look=!this.look;
				this.curIndex=3
			},
			changeFour(){/*点击第四个，其他几个关闭*/
				this.search=!this.search;
				this.curIndex=4
			},
			getChange(v){
				this.select2=v.cancel
				this.modelVal=v.tl
				this.curIndex=0
			},
			getSearch(v){
				this.search=v
				this.curIndex=0
			},
			getlook(v){
				this.look=!v
				this.curIndex=0
			},
		}
	}
</script>
