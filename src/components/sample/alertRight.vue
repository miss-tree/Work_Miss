<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">弹窗示例</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<div class="mui-btn mui-btn-primary" @click="alert()">
	    		点击弹出弹窗(从右边弹出)
	    	</div>
	    	<div class="mongolia" v-show="alertShow" @click="closeAlert"></div><!--蒙层-->
	    	<div class="alertRight" :class="alertShow?'alertOut':'outToleft'">
	    		<div class="content">
		    		<div class="alert_bottom_div">
		    			<div class="flex">
		    				<div @click="resetCkeck()">重置</div>
		    				<div @click="addOrder()">确定</div>
		    			</div>
		    		</div>
	    			<div class="formTable">
			    		<div class="form_title">
			    			订单日期
			    		</div>
			    		<div class="form_div">
				    		<div class="alertRow">
				    			<input type="text" id='start856' data-options='{"type":"date"}' class="btn  mui-btn-block alertInput"
					    				placeholder="选择日期 ..." v-model="STARTDATE">
				    			<span> - </span>
				    			<input type="text" id='end978' data-options='{"type":"date"}' class="btn  mui-btn-block alertInput"
					    				placeholder="选择日期 ..." v-model="ENDDATE">
				    		</div>
				    		<div class="alertRow" id="checkBox">
				    			<div class="form_row_right flex justify_content">
				    				<label @click="today()"><input type="radio" name="CHECKTIME" value="今天" v-model="CHECKTIME"/>
				    				<div class="row_button">今天</div>
				    				</label>
				    				<label @click="yesterday()"><input type="radio" name="CHECKTIME" value="昨天" v-model="CHECKTIME"/>
				    				<div class="row_button" >昨天</div>
				    				</label>
				    				<label @click="weekly()"><input type="radio" name="CHECKTIME" value="近七天" v-model="CHECKTIME" />
				    				<div class="row_button">近七天</div>
				    				</label>
				    			</div>
				    		</div>
			    		</div>
			    		<div class="form_title">
			    			促销活动
			    		</div>
			    		<div class="form_div">
				    		<div class="alertRow" id="checkBox">
				    			<div class="form_row_right flex justify_content">
				    				<label ><input type="radio" name="ISCHECK" value="是" v-model="ISCHECK"/>
				    				<div class="row_button">是</div>
				    				</label>
				    				<label ><input type="radio" name="ISCHECK" value="否" v-model="ISCHECK" />
				    				<div class="row_button">否</div>
				    				</label>
				    			</div>
				    		</div>
			    		</div>
			    		<div class="form_title">
			    			订单状态
			    		</div>
			    		<div class="form_div">
				    		<div class="alertRow" >
				    			<div class="form_row_right flex justify_content">
				    				<label ><input type="checkbox" name="CHECKSTATE" value="草稿" v-model="CHECKSTATE"/>
				    					<div class="row_button">草稿</div>
				    				</label>
				    				<label ><input type="checkbox" name="CHECKSTATE" value="通过" v-model="CHECKSTATE" />
				    					<div class="row_button">通过</div>
				    				</label>
				    				<label ><input type="checkbox" name="CHECKSTATE" value="未通过" v-model="CHECKSTATE" />
				    					<div class="row_button">未通过</div>
				    				</label>
				    			</div>
				    		</div>
			    		</div>
			    		<div class="form_title">
			    			区域
			    		</div>
			    		<div class="form_div">
				    		<div class="alertRow" >
				    			<label class="form_row_left huise" id="COMPANY">
				    				部门
				    				<span class="span_red"></span>
				    			</label>
				    			<input type="text" class="form_row_right" data="required" v-model="SECTION" name="section" placeholder="请选择" id="part"/>
				    		</div>
			    		</div>
		    		</div>
	    		</div>
	    	</div>
	    </div>	
	</div>
</template>

<script>
	import {selectTime,getTime,getDate,DateAdd,mustFill,selecTion} from '../../../static/utils/public.js'
	export default{
		data(){
			return {
				alertShow:false,
				STARTDATE:'',//开始时间
				ENDDATE:'',//结束时间
				ISCHECK:'',//是否活动
				CHECKTIME:'',//选择的时间
				sectionArr:[{text:'销售部'},{text:'电商部'},{text:'OTC推广部'},{text:'大KA部'},{text:'财务部'},{text:'市场部'},{text:'财务组'}],
				SECTION:'',//选择的部门
				CHECKSTATE:[],//选择的状态
				sureTime:'',//获取的时间
			}
		},
		mounted(){
//			var that=this
			this.$data.sureTime = getTime()
			this.ENDDATE=getDate()
			this.STARTDATE=this.ENDDATE
			selectTime();
			selecTion("part",this.sectionArr)
		},
		methods:{
			today(){//点击默认时间
				this.ENDDATE=getDate()
				this.STARTDATE=getDate()
			},
			yesterday(){//点击获取昨天时间
				var now = new Date();
				var newDate=now.setDate(now.getDate() + (-1));
				var 	d=new Date(newDate)
				d=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
				this.STARTDATE=d	
			},
			weekly(){//获取一周前的时间
				var now = new Date();
				var newDate=now.setDate(now.getDate() + (-7));
				var d=new Date(newDate)
				d=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
				this.STARTDATE=d
			},
			alert(){//弹出弹窗
				this.alertShow=!this.alertShow
			},
			closeAlert(){//点击蒙层关闭弹窗
				this.alertShow=false
			},
			addOrder(){//确定
				this.alertShow=false
			},
			resetCkeck(){//重置
				this.CHECKTIME='';
				this.CHECKSTATE=[];
				this.STARTDATE='';
				this.ENDDATE='';
				this.ISCHECK='';
				this.SECTION=''
			}
		}
	}
</script>

<style>
	.form_row_right label {
		width: 30%;
		position: relative;	
	}
</style>