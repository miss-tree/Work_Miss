<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">异动申请详情</h1>
    </header>
    <!--头部结束-->
    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
      <div class="formTable">
      	<div class="form_title">人员信息</div>	
        <div class="form_div">
          <div class="form_row">
            <label class="form_row_left huise" for>
             	 姓名
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{PERSON}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for>
             	 异动类型
              <span class="span_red"></span>
            </label>
            <input
              type="text"
              class="form_row_right"
              data="required"
              @click="showMove = true"
              readonly="readonly"
              v-model="MOVETYPE"
              name="section"
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
            <label class="form_row_left huise" for>
             	 一级部门
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{MOVEPART}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for>
             	二级部门
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{MOVEPARTS}}</div>
          </div>
           <div class="form_row">
            <label class="form_row_left huise" for>
             	职位类型
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{JOBTYPE}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for>
             	 岗位
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{JOB}}</div>
          </div>
           <div class="form_row">
              <label class="form_row_left huise" for>
               	 入职时间
                <span class="span_red"></span>
              </label>
            <div class="form_row_right">{{STARTDATE}}</div>
           </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
               	 交接时间
                <span class="span_red"></span>
              </label>
            <div class="form_row_right">{{CONNECTDATE}}</div>
        	</div>
        </div>
        <div> <!--v-show="MOVETYPE!=''"-->
        	<!--职位调整-->
        	<div v-show="MOVETYPE!='离职'">
		        <div class="form_title">职位调整</div>	
		        <moveto :TOINFOR="TOINFOR"></moveto>
        	</div>
        	<div class="form_title">备注</div>
	        <div class="form_div" style="padding-top: 10px;">
	          <div class="padding-lr padding_bb span_15px">
	            {{BZ}}
	          </div>
	          <div class="bottomOver"></div>
	        </div>
	        <!--图片上传-->
        	<div class="form_title">附件</div>
        	<div class="form_div" style="padding: 15px 0;">																																				
        	<lookimg :images="IMAGES"></lookimg>
        	</div>
        	<div class="bottomOver"></div>
					<!--图片上传结束-->
			 	<div class="form_title">
	    		审核进度
		    </div>
	       	 <time-line :examInfor="EXAMINFOR"></time-line>
	        </div>
				<div style="height: 50px;"></div>        	
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import getTop from "../assembly/getTop.vue"; /*回到顶部*/
	import moveto from "./views/move-to-detail.vue"/*职位调整组件*/
	import lookimg from "../assembly/lookimg.vue"/*图片查看*/
	import timeLine from "../assembly/timeLine.vue"; /*流程进度*/
	import {
		getTime,
	} from "../../../static/utils/public.js";
	export default {
		data() {
			return {
				PERSON: "鲁迅", //异动人员
				showMove: false, //异动类型选择
				moveArr: ["升职", "平调", "降职", "离职"],
				MOVETYPE: '', //异动类型
				MOVEPART: '销售部', //一级部门
				MOVEPARTS:'广东', //二级部门
				JOBTYPE: '高级管理层', //
				JOB: '销售总监', //岗位
				STARTDATE: '2016-05-28', //入职时间
				CONNECTDATE: '2019-08-31', //交接时间
				TOMOVEPART: '招商部', //一级部门
				TOMOVEPARTS: '江浙', //二级部门
				TOJOBTYPE: '高级管理层', //
				TOJOB: '公关总监', //岗位
				BZ: "职位变迁需要迅速交接",
				sureTime: "",
				TOINFOR:{
	      	toMovePart:'大KA部',//一级部门
	     		toMoveParts:'浙江',//二级部门
	      	toMoveType:'高级管理层',//
		  		toMoveJob:'公关总监',//岗位
	      },
				IMAGES:["https://cdn1.wenjuan.com/5cab151e92beb555330060fa/3c1ac66e-61be-11e9-a44d-44a8420c29f3.jpg?imageView2/2/w/815/",
				"https://dn-wenjuan-com.qbox.me/1560310291724_%E7%A6%81%E6%AF%92@2x.png",
				"https://dn-wenjuan-com.qbox.me/1559123692022_%E9%AB%98%E8%80%83@2x.png",
				"https://dn-wenjuan-com.qbox.me/1560310291724_%E7%A6%81%E6%AF%92@2x.png",
				"https://dn-wenjuan-com.qbox.me/1560310144652_%E5%A4%A7%E5%AD%A6@2x.png"],
				EXAMINFOR:[{progress:'总监审核',opinion:'同意',bz:'同意升职',time:'2019-08-03 16:54'},
					{progress:'复审',opinion:'同意',bz:'',time:'2018-04-03 16:23'},
					{progress:'人事审核',opinion:'同意',bz:'工作能力突出，特邀升职',time:'2019-08-02 10:33'},
					{progress:'提交申请',opinion:'',bz:'',time:'2019-08-01 21:42'}],
			};
		},
		components: {
			getTop,moveto,timeLine,
			lookimg
		},
		mounted() {
			this.sureTime=getTime();
		},
		methods: {
			getMoveType(value, index) { //获取选择的异动类型
				this.MOVETYPE = value
				this.showMove = false
			},
			getMovePart(value, index) { //获取选择的一级部门
				this.MOVEPART = value
				this.showPart = false
			},
			getMovePartS(value, index) { //获取选择的一级部门
				this.MOVEPARTS = value
				this.showPartS = false
			},
			getJobType(value, index) { //获取选择的职位类型
				this.JOBTYPE = value
				this.showType = false
			},
			mustFull() {
				var isOk = mustFill();
			}
		}
	};
</script>

<style>
</style>
