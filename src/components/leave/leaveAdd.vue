<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">请假申请</h1>
	    </header>
	    <!--头部结束-->
	    <!--内容部分-->
	    <div class="mui-content">
	    	<div class="formTable">
	    		<!--<div class="form_title">
	    			客户信息
	    		</div>-->
	    		<div class="form_div">
	    			<div class="form_row">
		    			<label class="form_row_left huise"  id="xm">
		    				姓名
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" name="xm" data="required" v-model="NAME"/>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="PART1">
		    				一级部门
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" name="PART1" @click="showPART1 = true"
		    				readonly="readonly" v-model="PARTONE" placeholder="请选择"/>
		    			<van-popup v-model="showPART1" position="bottom">
						  <van-picker
						    show-toolbar
						    title="一级部门"
						    :columns="partArr"
						    @cancel="showPART1 = false"
						    @confirm="getPart1"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="PARTTOW">
		    				二级部门
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" name="PARTTOW" @click="showPART2 = true"
		    				readonly="readonly" v-model="PARTTOW" placeholder="请选择"/>
		    			<van-popup v-model="showPART2" position="bottom">
						  <van-picker
						    show-toolbar
						    title="二级部门"
						    :columns="partArr2"
						    @cancel="showPART2 = false"
						    @confirm="getPart2"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="jobType">
		    				职位类型
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" name="jobType" @click="showJobType = true"
		    				readonly="readonly" v-model="JOBTYPE" placeholder="请选择"/>
		    			<van-popup v-model="showJobType" position="bottom">
						  <van-picker
						    show-toolbar
						    title="职位类型"
						    :columns="jobArr"
						    @cancel="showJobType = false"
						    @confirm="getJobType"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
			            <label class="form_row_left huise" id="job">
			             	 岗位
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" autocomplete="off"
			            	 data="required" name="job" v-model="JOB" placeholder="请输入">
			        </div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="type">
		    				请假类型
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="filter-box form_row_right" id="orderClient">
							<div class="filter-text" >
								<input class="filter-title" type="text" data="required" name="type" readonly placeholder="请选择" />
								<i class="icon icon-filter-arrow"></i>
							</div>
								<select name="filter" v-for="(item,index) in leaveType">
									<option>{{item.text}}</option>
								</select>
						</div>
		    		</div>
			        <div class="form_row">
		              <label class="form_row_left huise" id="start">
		               	 请假时间
		                <span class="span_red">*</span>
		              </label>
		              <input
		                type="text" name="start"
		                id="startTime" data="required" 
		                data-options='{"type":"date"}'
		                class="btn mui-btn-block form_row_right"
		                placeholder="选择日期 ..."
		                v-model="STARTDATE"
		              >
		            </div>
		            <div class="form_row">
		              <label class="form_row_left huise" id="end">
		               	 结束时间
		                <span class="span_red">*</span>
		              </label>
		              <input
		                type="text"  name="end"
		                id="endTime" data="required" 
		                data-options='{"type":"date"}'
		                class="btn mui-btn-block form_row_right"
		                placeholder="选择日期 ..."
		                v-model="ENDDATE"
		              >
		        	</div>
		    		<div class="form_row">
			            <label class="form_row_left huise" id="days">
			             	 请假天数
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" data="required" name="days" v-model="DAYS" placeholder="请输入">
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="leader">
			             	 上级领导
			              <span class="span_red"></span>
			            </label>
			            <input type="text" class="form_row_right" name="leader" v-model="LEADER" placeholder="请输入">
			        </div>
	    		</div>
	    		<!--备注-->
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
						<textarea class="textarea" name="" rows="2" cols="38" placeholder="请输入备注" v-model="BZ"></textarea>
					</div>
					<div class="bottomOver"></div>
				</div>
				<!--图片上传-->
	        	<div class="form_title">附件</div>
	        	<div class="form_div" style="padding: 15px 0;">																																				
		        	<uploadpic></uploadpic>
	        	</div>
	        	<div class="bottomOver"></div>
	        	<!--图片上传结束-->
				<!--备注结束-->
	    		<div class="submitBtn">
	    			<button type="button" style="width: 80%; padding: 10px;" id="update"  @click="mustFull"
	    				class="mui-btn update mui-btn-block mui-btn-primary">提交</button>
	    		</div>
		    </div>
	    </div>
	</div>
</template>

<script>
	import uploadpic from "./views/uploadpic.vue"
	import {selectTime,mustFill,selecTion} from '../../../static/utils/public.js'
	export default{
		data(){
			return{
				NAME:'',//姓名
				LEAVETYPE:'',//请假类型
				leaveType:[{text:'事假'},{text:'病假'},{text:'产假'},{text:'年假'},{text:'其他'},],
				PARTONE:'',//一级部门
				showPART1:false,//一级部门选择
				partArr:["销售部","电商部","OTC推广部","大KA部","财务部","市场部","财务组","助理团队","计生事业部"],//
				PARTTOW:'',//二级部门
				showPART2:false,
				partArr2:["北京市","上海市","广东省","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省",
			      "江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广西壮族",
			      "海南省","重庆","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","台湾省","香港","澳门","宁夏"],
			    JOBTYPE:'',//职位类型
			    showJobType:false,
			    jobArr:["普通员工","技术员工","中级管理层","高级管理层"],
			    JOB:'',//结束时间
			    STARTDATE:'',//开始时间
			    ENDDATE:'',
			    DAYS:'',
			    LEADER:'',//上级领导
				BZ:'',//备注
			}
		},
		components:{uploadpic},
		mounted(){
			selectTime();
			var that=this
			$('#orderClient').selectFilter({
				callBack: function(val) {
					that.LEAVETYPE = val
				}
			});
		},
		methods:{
			getPart1(value, index){//选择部门
		    	this.PARTONE=value,
		    	this.showPART1=false
			},
			getPart2(value, index){//选择区域
		    	this.PARTTOW=value,
		    	this.showPART2=false
			},
		  	getJobType(value,index){//获取选择的职位类型
		  		this.JOBTYPE=value
		  		this.showJobType=false
		  	},
		    onConfirm(value, index){//vant的选择器=>选择部门
		    	this.SECTION=value,
		    	this.showPicker=false
		    },
			applyAjax(){//请求客户数据
				axios.get().then()
			},
			mustFull(){
				var isOk=mustFill();
				if(isOk.length==0){
					console.log('hi')
				}
			},
		}
	}
</script>

<style>
</style>