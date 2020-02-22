<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">申请详情</h1>
	    </header>
	    <!--头部结束-->
	    <!--内容部分-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
	    	<div class="formTable">
	    			客户信息
	    		<div class="form_div">
	    			<div class="form_row">
		    			<label class="form_row_left huise"  id="xm">
		    				姓名
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{NAME}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="PART1">
		    				一级部门
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{PARTONE}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="PARTTOW">
		    				二级部门
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{PARTTOW}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="jobType">
		    				职位类型
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{JOBTYPE}}</div>
		    		</div>
		    		<div class="form_row">
			            <label class="form_row_left huise" id="job">
			             	 岗位
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{JOB}}</div>
			        </div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="type">
		    				请假类型
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{LEAVETYPE}}</div>
		    		</div>
			        <div class="form_row">
		              <label class="form_row_left huise" id="start">
		               	 请假时间
		                <span class="span_red"></span>
		              </label>
		    			<div class="form_row_right">{{STARTDATE}}</div>
		            </div>
		            <div class="form_row">
		              <label class="form_row_left huise" id="end">
		               	 结束时间
		                <span class="span_red"></span>
		              </label>
		    			<div class="form_row_right">{{ENDDATE}}</div>
		        	</div>
		    		<div class="form_row">
			            <label class="form_row_left huise" id="days">
			             	 请假天数
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{DAYS}}</div>
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="leader">
			             	 上级领导
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{LEADER}}</div>
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
						<div class="detail_bz">{{BZ}}</div>
					</div>
					<div class="bottomOver"></div>
				</div>
				<!--图片上传-->
	        	<div class="form_title">附件</div>
	        	<div class="form_div" style="padding: 15px 0;">																																				
		        	<lookimg :images="IMAGES"></lookimg>
	        	</div>
	        	<div class="bottomOver"></div>
	        	<div class="form_title">
		    		审核进度
			    </div>
		       	 <time-line :examInfor="EXAMINFOR"></time-line>
		        </div>
	        	<!--图片上传结束-->
				<div style="height: 50px"></div>
		    </div>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				NAME:'林冲',//姓名
				LEAVETYPE:'年假',//请假类型
				leaveType:[{text:'事假'},{text:'病假'},{text:'产假'},{text:'年假'},{text:'其他'},],
				PARTONE:'财务部',//一级部门
				PARTTOW:'上海市',//二级部门
				partArr2:["北京市","上海市","广东省","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省",
			      "江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广西壮族",
			      "海南省","重庆","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","台湾省","香港","澳门","宁夏"],
			    JOBTYPE:'中级管理层',//职位类型
			    jobArr:["普通员工","技术员工","中级管理层","高级管理层"],
			    JOB:'财务部长',
			    STARTDATE:'2019-08-07',//开始时间
			    ENDDATE:'2019-08-09',//结束时间
			    DAYS:3,
			    LEADER:'宋江',//上级领导
				BZ:'请备注上是带薪休假',//备注
				IMAGES:["https://gw.alicdn.com/bao/uploaded/i3/117202952/TB25lckX_AX61Bjy0FcXXaSlFXa_!!117202952.jpg_400x400q90.jpg?t=1565258803189",
				"https://gw.alicdn.com/bao/uploaded/i4/TB1XzupNFXXXXcpXXXXXXXXXXXX_!!0-item_pic.jpg_400x400q90.jpg?t=1565258803189",
				"https://dn-wenjuan-com.qbox.me/1559123692022_%E9%AB%98%E8%80%83@2x.png",
				"https://dn-wenjuan-com.qbox.me/1560310291724_%E7%A6%81%E6%AF%92@2x.png",
				"https://gw.alicdn.com/bao/uploaded/i4/69476562/TB2htq4XTka61BjSszfXXXN8pXa_!!69476562.jpg_400x400q90.jpg?t=1565258803189"],
				EXAMINFOR:[{progress:'经理审核',opinion:'同意',bz:'',time:'2019-08-03 16:54'},
					{progress:'复审',opinion:'同意',bz:'',time:'2018-04-03 16:23'},
					{progress:'人事审核',opinion:'同意',bz:'注意做好交接工作',time:'2019-08-02 10:33'},
					{progress:'提交申请',opinion:'',bz:'',time:'2019-08-01 21:42'}],
				params:'',	
			}
		},
		created(){//获取传入的参数
          //如果使用query方式传入的参数使用this.$route.query 接收     $route只读
          //如果使用params方式传入的参数使用this.$router.params接收 		$router可操作
          var param = this.$route.query;
          // var param = this.$route.params;
          this.params = param
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
		}
	}
</script>