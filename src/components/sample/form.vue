<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">出差</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<!--<extend-code v-bind="provinceList1" @collect="collectProvince1"></extend-code>-->
	    	<div class="formTable">
	    		<div class="form_title">
	    			标题
	    		</div>
	    		<div class="form_div">
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="" id="why">
		    				左侧标题
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" v-model="why" name="why" placeholder="请输入" />
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				时间选择器
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" id='demo4' data-options='{"type":"date"}' class="btn  mui-btn-block form_row_right"
			    				placeholder="选择日期 ..." v-model="startTime">
		    		</div>
	    		</div>
	    		<!--<div class="margin_top"></div>-->
	    		<div class="form_title">
	    			内容
	    		</div>
	    		<!--出差整个行程-->
	    		<div v-for="(item,index) in Travel">
	    		<div class="form_div">
		    		<!--<div class="form_row">
		    			<label class="form_row_left" for="">
		    				交通工具单选
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">
		    				<label ><input type="radio" name="travel" value="飞机" v-model="travel"/>
		    				<button type="button" class="row_button">飞机</button>
		    				</label>
		    				<label ><input type="radio" name="travel" value="火车" v-model="travel" />
		    				<button type="button" class="row_button">火车</button>
		    				</label>
		    				<label ><input type="radio" name="travel" value="汽车" v-model="travel" />
		    				<button type="button" class="row_button">汽车</button>
		    				</label>
		    				<label ><input type="radio" name="travel" value="其他" v-model="travel" />
		    				<button type="button" class="row_button">其他</button>
		    				</label>
		    			</div>
		    		</div>-->
		    		<!--<div class="form_row">
		    			<label class="form_row_left" for="">
		    				switch开关
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">
		    				<div class="testswitch">
								<input class="testswitch-checkbox" id="onoffswitch" type="checkbox" v-model="Switch">
								<label class="testswitch-label" for="onoffswitch">
									<span class="testswitch-inner" data-on="ON" data-off="OFF"></span>
									<span class="testswitch-switch"></span>
								</label>
							</div>
		    			</div>
		    		</div>-->
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				一级选择
		    				<span class="span_red">*</span>
		    			</label>
		    			
		    			<input type="text" class="form_row_right" data="required" name="WHERE" @click="showWHER = true"
		    				readonly="readonly" v-model="WHERE" placeholder="请选择" id="ss"/>
		    			<van-popup v-model="showWHER" position="bottom">
						  <van-picker
						    show-toolbar
						    title="区域"
						    :columns="columns"
						    @cancel="showWHER = false"
						    @confirm="getWhere"
						  />
						</van-popup>
		    		</div>
			    	<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				三级联动
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" name="" placeholder="请选择城市" id="showCityPicker3"  v-model="item.beginCity"/>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				在途补助
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">
			    			<div class="float_right justify_content" style="width: 170px;">
			    				<input type="number" pattern="[0-9]*" name="" placeholder="请输入天数" v-model="item.wayDay"/>
				    			<input type="number" pattern="[0-9]*" name="" placeholder="请输入标准" v-model="item.wayMoney"/>
			    			</div>
		    			</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				单选按钮
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="mui-input-row mui-radio form_row_right">
			    			<input type="radio" value="否" name="ra"  v-model="Radio"/>
		    			</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				单选按钮
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="mui-input-row mui-radio form_row_right">
			    			<input type="radio" value="是" name="ra" v-model="Radio"/>
		    			</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				复选按钮
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="mui-input-row mui-checkbox form_row_right">
		    				<label>兴趣爱好等复选条件</label>
			    			<input type="checkbox" value="否" name="CC"  v-model="Checkbox"/>
		    			</div>
		    		</div>
		    		<div class="mui-input-row mui-checkbox mui-left form_row">
						<label>单击整行选中</label>
						<input name="checkbox" value="Item 1" type="checkbox">
					</div>
					<div class="mui-input-row mui-checkbox mui-left form_row">
						<label>单击整行或选择文字选中</label>
						<input name="checkbox" value="Item 1" type="checkbox">
					</div>
		    	</div>
		    		
	    	</div>	
	    		<!--行程结束-->
	    		<div class="form_title">
	    			备注
	    		</div>
				<div class="form_div">
					<div class="padding-lr">
						<span class="form_row_height huise">
							备注
							<span class="span_red"></span>
						</span>
					</div>
					<div class="padding-lr padding_bb">
						<textarea class="textarea" name="" rows="1" cols="38" placeholder="请输入出差备注" v-model="bz"></textarea>
					</div>
				</div>
	    		<div style="text-align: center;margin-top: 15px; margin-bottom: 15px;">
	    			<button type="button" style="width: 80%; padding: 10px;" id="update"  @click="mustFull"
	    				class="mui-btn update mui-btn-block mui-btn-primary">提交</button>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import '../../../static/css/smartInput.css'
	import {selectTime,PopPicker,mustFill,selecTion} from '../../../static/utils/public.js'
	export default{
		data(){
			return{
            	province3: '',
				Switch:'',
				Radio:'',
				Checkbox:[],
				why:'',//出差原因
				who:'',//实际报销人
				Travel:[{beginCity:'',endCity:'',wayDay:'',wayMoney:'',subsidyT:'',subsidyB:'',days:'',
				startTime:'',endTime:'',walkT:'',walkB:'',fare:'',homeStay:'',otherPay:'',tatol:0,bz:''}],
				travel:'',//交通工具
				beginCity:'',//出发城市
				endCity:'',//目的城市
				wayDay:Number,//在途时间天数
				wayMoney:Number,//在途补助标准
				subsidyT:'',//住勤补助天数
				subsidyB:'',//住勤补助标准
				walkT:'',//步行补助天数
				walkB:'',//步行补助标准
				fare:'',//车船费
				homeStay:'',//住宿费
				otherPay:'',//其他费用
				isReturn:'',//是否往返
				startTime:'',//开始时间
				endTime:'',//结束时间
				bz:'',
				sureTime:'',
				days:'',
				showWHER:false,//显示一级选择
				WHERE:'',
				columns:['董事长 叶文洁', '总经理 艾AA','罗辑','云天明','史强','章北海','庄颜','关一帆','智子','歌者']
			}
		},
		mounted(){
			/*var that=this*/
			selectTime();
			PopPicker("showCityPicker3");
			this.getTime();
			$(".textarea").on('input', function(){  
			    this.style.height = 'auto';  
			    this.style.height = this.scrollHeight + "px";  
			}); 
		},
		methods:{
			getWhere(value, index){//选择区域
		    	this.WHERE=value,
		    	this.showWHER=false
			},
			getTime(){//获取时分秒
				var d=new Date();
				d = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
				this.sureTime=d
			},
			addTravel(){//添加旅途
				var obj={beginCity:'',endCity:'',wayDay:'',wayMoney:'',subsidyT:'',subsidyB:'',
				startTime:'',endTime:'',walkT:'',walkB:'',fare:'',homeStay:'',otherPay:'',tatol:0}
				Travel[0].
				this.Travel.push(obj)
			},
			removeTravel(index){//删除旅途
				this.Travel.splice(index,1)
			},
			mustFull(){//必填
				mustFill()
			}
		}
	}
</script>

<style>
	.form_row_right label{
		width: inherit;
	}
	.testswitch {
		position: relative;
		float: right;
		width: 60px;
		margin: 0;
		margin-top: 7px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
	
	.testswitch-checkbox {
		display: none;
	}
	
	.testswitch-label {
		display: block;
		overflow: hidden;
		cursor: pointer;
		border: 1px solid #ddd;
		border-radius: 20px;
	}
	
	.testswitch-inner {
		display: block;
		width: 200%;
		margin-left: -100%;
		transition: margin 0.3s ease-in 0s;
	}
	
	.testswitch-inner::before,
	.testswitch-inner::after {
		display: block;
		float: right;
		width: 50%;
		height: 25px;
		padding: 0;
		line-height: 30px;
		font-size: 14px;
		color: white;
		text-align: left;
		font-family: Trebuchet, Arial, sans-serif;
		font-weight: bold;
		box-sizing: border-box;
	}
	
	.testswitch-inner::after {
		content: attr(data-on);
		padding-left: 5px;
		background-color: #00e500;
		margin-top: -2px;
		color: #FFFFFF;
	}
	
	.testswitch-inner::before {
		content: attr(data-off);
		padding-right: 0px;
		background-color: #fff;
		margin-top: -2px;
		color: #999999;
		text-align: right;
	}
	
	.testswitch-switch {
		position: absolute;
		display: block;
		width: 25px;
		height: 25px;
		margin: 1px;
		background: #FFFFFF;
		top: -2px;
		bottom: 0;
		right: 31px;
		box-shadow: 2px 1px 2px #666;
		border: 1px solid #ddd;
		border-radius: 20px;
		transition: all 0.3s ease-in 0s;
	}
	
	.testswitch-checkbox:checked+.testswitch-label .testswitch-inner {
		margin-left: 0;
	}
	
	.testswitch-checkbox:checked+.testswitch-label .testswitch-switch {
		right: 0px;
	}
</style>