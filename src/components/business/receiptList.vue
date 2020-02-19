<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">收款单查询列表</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<div class="screen">
		    	<div class="screen_tab" style="width: 35%;">
		    		<div @click="changeOne" class="nowrap">
		    			{{startVal}}
		    			<span class="mui-icon span_13px" 
		    				:class="select1?'mui-icon-arrowdown':'mui-icon-arrowup'" 
		    				></span>
		    		</div>
		    	</div>
		    	<div class="screen_tab" style="width: 35%;">
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
						<span class="span_15px">数量：{{ORDER.length}}</span>
						<span class="span_15px" style="margin-left: 5px;">金额：{{MONEY.toFixed(2)}}元</span>
					</div>
				</div>
			</div>
	    </div>
	</div>
</template>

<script>
	import inputcode from "./receiptViews/inputcode.vue"
	import check from "./receiptViews/check.vue"
	import lookView from "./receiptViews/lookView.vue" /*查看*/
	import list from "./receiptViews/rece-list.vue" /*列表*/
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
				ORDER: [{
						title: "聚缘堂药店",
						proName:"双花藤",
						where: '广东省',
						person: '黎放',
						dateTime: '2019-08-13',
						num:23,
						money:68652,
						id: 34534
					},
					{
						title: "倍宁医药(镇南路店)",
						proName:"一次性使用医用口罩(10个/盒)-粉红色",
						where: '广西壮族自治区',
						person: '刘禅',
						dateTime: '2019-07-01',
						num:689,
						money:987979,
						id: 34534534
					},
					{
						title: "仁和堂药业(陈田药店)",
						proName:"排卵(LH)检测试纸简装(100条)",
						where: '内蒙古自治区',
						person: '吕布',
						dateTime: '2017-09-07',
						num:23,
						money:68652,
						id: 534534534
					},
					{
						title: "康信药店",
						proName:"双花藤",
						where: '浙江省',
						person: '李国梁',
						dateTime: '2019-07-12',
						num:200,
						money:68652,
						id: 654
					},
					{
						title: "倍宁医药连锁(良口分店)",
						proName:"双氯芬酸钠缓释片(IV) 400盒",
						where: '安徽省',
						person: '张仲景',
						dateTime: '2019-08-26',
						num:250,
						money:68652,
						id: 65768
					},
					{
						title: "温泉济康药店",
						proName:"麝香祛风湿膏(简)",
						where: '上海市',
						person: '貂蝉',
						dateTime: '2019-07-08',
						num:2510,
						money:68652,
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
