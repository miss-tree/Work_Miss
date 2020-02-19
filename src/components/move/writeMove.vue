<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">异动申请</h1>
    </header>
    <!--头部结束-->
    <div class="mui-content">
      <div class="formTable">
      	<div class="form_title">人员信息</div>	
        <div class="form_div">
          <div class="form_row">
            <label class="form_row_left huise" id="xm">
             	 姓名
              <span class="span_red">*</span>
            </label>
            <input type="text" class="form_row_right" data="required"
            	name="xm" v-model="PERSON" placeholder="请输入">
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="moveType">
             	 异动类型
              <span class="span_red">*</span>
            </label>
            <input
              type="text" name="moveType"
              class="form_row_right"
              data="required"
              @click="showMove = true"
              readonly="readonly"
              v-model="MOVETYPE"
              placeholder="请选择"
            >
            <van-popup v-model="showMove" position="bottom">
              <van-picker
                show-toolbar
                title="异动类型"
                :columns="moveArr"
                @cancel="showMove = false"
                @confirm="getMoveType"
              />
            </van-popup>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="section">
             	 一级部门
              <span class="span_red">*</span>
            </label>
            <input
              type="text"
              class="form_row_right"
              data="required"
              @click="showPart = true"
              readonly="readonly"
              v-model="MOVEPART"
              name="section"
              placeholder="请选择"
            >
            <van-popup v-model="showPart" position="bottom">
              <van-picker
                show-toolbar
                title="一级部门"
                :columns="movePart"
                @cancel="showPart = false"
                @confirm="getMovePart"
              />
            </van-popup>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="towPart">
             	二级部门
              <span class="span_red">*</span>
            </label>
            <input
              type="text"
              class="form_row_right"
              data="required"
              @click="showPartS = true"
              readonly="readonly"
              v-model="MOVEPARTS"
              name="towPart"
              placeholder="请选择"
            >
            <van-popup v-model="showPartS" position="bottom">
              <van-picker
                show-toolbar
                title="二级部门"
                :columns="movePartS"
                @cancel="showPartS = false"
                @confirm="getMovePartS"
              />
            </van-popup>
          </div>
           <div class="form_row">
            <label class="form_row_left huise" id="jobType">
             	职位类型
              <span class="span_red">*</span>
            </label>
            <input
              type="text"
              class="form_row_right"
              data="required"
              @click="showType = true"
              readonly="readonly"
              v-model="JOBTYPE"
              name="jobType"
              placeholder="请选择"
            >
            <van-popup v-model="showType" position="bottom">
              <van-picker
                show-toolbar
                title="职位类型"
                :columns="jobArr"
                @cancel="showType = false"
                @confirm="getJobType"
              />
            </van-popup>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="job">
             	 岗位
              <span class="span_red">*</span>
            </label>
            <input type="text" class="form_row_right" data="required" 
            	name="job" v-model="JOB" placeholder="请输入">
          </div>
           <div class="form_row">
              <label class="form_row_left huise" id="jobTime">
                	入职时间
                <span class="span_red">*</span>
              </label>
              <input
                type="text" data="required" 
                id="entryJob" name="jobTime"
                data-options='{"type":"date"}'
                class="btn mui-btn-block form_row_right"
                placeholder="选择日期 ..."
                v-model="STARTDATE"
              >
           </div>
            <div class="form_row">
              <label class="form_row_left huise" id="mixTime">
                交接时间
                <span class="span_red">*</span>
              </label>
              <input
                type="text" data="required" 
                id="connectDate" name="mixTime"
                data-options='{"type":"date"}'
                class="btn mui-btn-block form_row_right"
                placeholder="选择日期 ..."
                v-model="CONNECTDATE"
              >
        	</div>
        </div>
        <div> <!--v-show="MOVETYPE!=''"-->
        	<!--职位调整-->
        	<div v-show="MOVETYPE!='离职'">
		        <div class="form_title">职位调整</div>	
		        <moveto @setInfor="getInfor" ></moveto>
        	</div>
        	<div class="form_title">备注</div>
	        <div class="form_div" style="padding-top: 10px;">
	          <div class="padding-lr padding_bb">
	            <textarea class="textarea" name rows="2" cols="38" placeholder="请输入备注" v-model="bz"></textarea>
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
	        <div  class="submitBtn">
	          <button
	            type="button"
	            style="width: 80%; padding: 10px;"
	            id="update"
	            @click="mustFull"
	            class="mui-btn update mui-btn-block mui-btn-primary"
	          >提交</button>
	        </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
	import moveto from "./views/move-to-add.vue"
	import uploadpic from "../assembly/uploadpic.vue"
import {
  selectTime,
  mustFill
} from "../../../static/utils/public.js";
export default {
  data() {
    return {
      PERSON: "", //异动人员
      showMove:false,//异动类型选择
      moveArr:["升职","平调","降职","离职"],
      MOVETYPE:'',//异动类型
      showPart:false,//异动部门
      movePart:["电商部","销售部","OTC推广部","招商部","市场部","大KA部","财务组","计生事业部","人资组","助理团队"],
      MOVEPART:'',//一级部门
      showPartS:false,//异动部门
      movePartS:["北京市","上海市","广东省","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省",
      "江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广西壮族",
      "海南省","重庆","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","台湾省","香港","澳门","宁夏"],
      MOVEPARTS:'',//二级部门
      showType:false,//职位类型
      jobArr:["普通员工","技术员工","中级管理层","高级管理层"],
      JOBTYPE:'',//
      JOB:'',//岗位
      STARTDATE:'',//入职时间
      CONNECTDATE:'',//交接时间
      TOINFOR:{
      	toMovePart:'',//一级部门
     		toMoveParts:'',//二级部门
      	toMoveType:'',//
	  		toMoveJob:'',//岗位
      },
      bz: "",
      sureTime: "",
    };
  },
  components:{moveto,uploadpic},
  mounted() {
    selectTime();
    this.getTime();
  },
  methods: {
  	getMoveType(value,index){//获取选择的异动类型
  		this.MOVETYPE=value
  		this.showMove=false
  	},
  	getMovePart(value,index){//获取选择的一级部门
  		this.MOVEPART=value
  		this.showPart=false
  	},
  	getMovePartS(value,index){//获取选择的一级部门
  		this.MOVEPARTS=value
  		this.showPartS=false
  	},
  	getJobType(value,index){//获取选择的职位类型
  		this.JOBTYPE=value
  		this.showType=false
  	},
  	getInfor(v){//获取子组件传递的值
  		this.TOINFOR.toMovePart=v.toMovePart
  		this.TOINFOR.toMoveParts=v.toMoveParts
  		this.TOINFOR.toMoveType=v.toMoveType
  		this.TOINFOR.toMoveJob=v.toMoveJob
  	},
    getTime() {
      var d = new Date();
      d = `${d.getFullYear()}-${d.getMonth() +
        1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      this.sureTime = d;
    },
    mustFull() {//点击提交
    	if(this.MOVETYPE!="离职"&&this.MOVETYPE==""){
    		if(this.TOINFOR.toMovePart==''){
    			mui.alert("请选择职位调整的一级部门")
    			return false
    		}else if(this.TOINFOR.toMoveParts==''){
    			mui.alert("请选择职位调整的二级部门")
    			return false
    		}else if(this.TOINFOR.toMoveType==''){
    			mui.alert("请选择职位调整的职位类型")
    			return false
    		}else if(this.TOINFOR.toMoveJob==''){
    			mui.alert("请选择职位调整的岗位")
    			return false
    		}
    		var isSubmit=mustFill();
	      if(isSubmit.length==0){
	      	console.log('hi')
	      }
    	}else{
	      var isOk=mustFill();
	      if(isOk.length==0){
	      	console.log('hi')
	      }
    	}
    }
  }
};
</script>

<style>
</style>