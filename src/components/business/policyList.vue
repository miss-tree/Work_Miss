<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">产品政策查询列表</h1>
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
								股份公司 
							</label>
						</li>
						<li class="mui-table-view-cell">
							<span class="mui-navigate-right">
								天福康
							</span>
						</li>
						<li class="mui-table-view-cell">
							<label class="mui-navigate-right">
								器械厂
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="mui-navigate-right" >
								设备厂 
							</label>
						</li>
						<li class="mui-table-view-cell">
							<span class="mui-navigate-right">
								制药厂
							</span>
						</li>
						<li class="mui-table-view-cell">
							<span class="mui-navigate-right">
								安徽维泰利
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
				<!--<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;">
					<div class="bottomWidth flex justify_content">
						<span class="span_15px">数量：{{ORDER.length}}</span>
						<span class="span_15px" style="margin-left: 5px;">金额：{{MONEY.toFixed(2)}}元</span>
					</div>
				</div>-->
			</div>
	    </div>
	</div>
</template>

<script>
	import inputcode from "./policyViews/inputcode.vue"
	import check from "./policyViews/check.vue"
	import lookView from "./policyViews/lookView.vue" /*查看*/
	import list from "./policyViews/policy-list.vue" /*列表*/
	export default{
		data(){
			return{
				select1:true,
				curIndex:0,
				startVal:'全部',
				checkss:'',
				select2:true,	
				modelVal:'产品名称',
				search:false,
				look:false,
				hasSearch:false,//只有搜索条件后才能显示数据
				ORDER: [{
						title: "聚缘堂药店",
						proName:"和胃整肠丸120丸",
						unit: '瓶/箱',
						person: '黎放',
						lowPrice:17.98,
						price: 19.80,
						num:23,
						time:'2019-05-04',
						id: 34534
					},
					{
						title: "倍宁医药(镇南路店)",
						proName:"一次性使用医用口罩(10个/盒)-粉红色",
						unit: '盒/箱',
						person: '刘禅',
						lowPrice:2.05,
						price: 2.30,
						num:689,
						time:'2019-07-06',
						id: 34534534
					},
					{
						title: "仁和堂药业(陈田药店)",
						proName:"排卵(LH)检测试纸简装(100条)",
						unit: '支/箱',
						person: '吕布',
						lowPrice:4.65,
						price: 5.84,
						num:23,
						money:68652,
						time:'2019-09-06',
						id: 534534534
					},
					{
						title: "康信药店",
						proName:"复方醋酸地塞米松乳膏10g",
						unit: '盒/箱',
						person: '李国梁',
						lowPrice:19.15,
						price: 22.05,
						num:200,
						time:'2019-09-09',
						money:68652,
						id: 654
					},
					{
						title: "倍宁医药连锁(良口分店)",
						proName:"双氯芬酸钠缓释片(IV) 400盒",
						unit: '盒/箱',
						person: '张仲景',
						lowPrice:28.35,
						price: 32.5,
						num:250,
						time:'2019-08-07',
						id: 65768
					},
					{
						title: "温泉济康药店",
						proName:"麝香祛风湿膏(简)",
						unit: '支/箱',
						person: '貂蝉',
						lowPrice:2.15,
						price: 2.38,
						num:2510,
						time:'2019-09-05',
						id: 65677
					},
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
