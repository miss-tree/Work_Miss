<template>
	<div>
      <div class="mongolia" v-show="alertShow" @click="closeAlert"></div><!--蒙层-->
		<div class="alertRight" id="rightAlert"  :class="alertShow?'alertOut':'outToleft'">
        <div class="content">
          <div class="alert_bottom_div height_40px">
            <div class="flex">
              <div @click="resetCkeck()">重置</div>
              <div @click="addOrder()">确定</div>
            </div>
          </div>
          <div class="formTable">
            <div class="form_title">申请日期</div>
            <div class="form_div">
              <div class="alertRow">
                <input type="text" id="start856" data-options='{"type":"date"}'
                	class="btn mui-btn-block alertInput" 
                	placeholder="选择日期 ..." 
                	v-model="STARTDATE">
                <span>-</span>
                <input type="text" id="end978" data-options='{"type":"date"}'
                	class="btn mui-btn-block alertInput" 
                	placeholder="选择日期 ..." 
                	v-model="ENDDATE">
              </div>
              <div class="alertRow" id="checkBox" style="padding-bottom: 5px;">
                <div class="form_row_right flex justify_content">
                  <label @click="today()">
                    <input type="radio" name="CHECKTIME" value="今天" v-model="CHECKTIME">
                    <div class="row_button">今天</div>
                  </label>
                  <label @click="yesterday()">
                    <input type="radio" name="CHECKTIME" value="昨天" v-model="CHECKTIME">
                    <div class="row_button">昨天</div>
                  </label>
                  <label @click="weekly()">
                    <input type="radio" name="CHECKTIME" value="近七天" v-model="CHECKTIME">
                    <div class="row_button">近七天</div>
                  </label>
                </div>
              </div>
            </div>
            <div class="form_title">促销活动</div>
            <div class="form_div padding_tb_5px">
              <div class="alertRow" id="checkBox">
                <div class="form_row_right flex justify_content">
                  <label>
                    <input type="radio" name="ISCHECK" value="是" v-model="ISCHECK">
                    <div class="row_button">是</div>
                  </label>
                  <label>
                    <input type="radio" name="ISCHECK" value="否" v-model="ISCHECK">
                    <div class="row_button">否</div>
                  </label>
                </div>
              </div>
            </div>
            <div class="form_title">订单状态</div>
            <div class="form_div padding_tb_5px">
              <div class="alertRow">
                <div class="form_row_right flex justify_content">
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="草稿" v-model="CHECKSTATE">
                    <div class="row_button">草稿</div>
                  </label>
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="通过" v-model="CHECKSTATE">
                    <div class="row_button">通过</div>
                  </label>
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="未通过" v-model="CHECKSTATE">
                    <div class="row_button">未通过</div>
                  </label>
                </div>
              </div>
            </div>
            <div class="form_title"></div>
            <div class="form_div padding_tb_5px">
              <div class="form_row">
                <label class="form_row_left huise" id="COMPANY">
                  	部门
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  data="required"
                  v-model="SECTION"
                  name="section"
                  placeholder="请选择"
                  id="part"
                >
              </div>
              <div class="alertRow">
                <label class="form_row_left huise" id="COMPANY">
                  	开票公司
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  data="required"
                  v-model="comPany"
                  name="kpgs"
                  placeholder="请选择"
                  id="compony"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
	import "../../../../static/css/alert.css"
import {selectTime,getTime,getDate,DateAdd,selecTion} from "../../../../static/utils/public.js";
	export default{
		data(){
			return{
			      STARTDATE: "", //开始时间
			      ENDDATE: "", //结束时间
			      ISCHECK: "", //是否活动
			      CHECKTIME: "", //选择的时间
			      SECTION: "", //选择的部门
			      CHECKSTATE: [], //选择的状态
			      comPany:'',//开票公司
			      sureTime: "", //获取的时间
			      isShow:this.alertShow
			}
		},
		props:["alertShow"],
		methods:{
		    addOrder() {//确定
		      this.isShow = false;
		      this.$emit('setInfor', this.isShow)
		    },
		    resetCkeck() {//重置
		      this.CHECKTIME = "";
		      this.CHECKSTATE = [];
		      this.STARTDATE = "";
		      this.ENDDATE = "";
		      this.ISCHECK = "";
		      this.SECTION = "";
		      this.comPany = "";
		    },
		    today() {//点击默认时间
		      this.ENDDATE = getDate();
		      this.STARTDATE = getDate();
		    },
		    yesterday() {//点击获取昨天时间
		      var now = new Date();
		      var newDate = now.setDate(now.getDate() + -1);
		      var d = new Date(newDate);
		      d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
		      this.STARTDATE = d;
		      this.ENDDATE = getDate();
		    },
		    weekly() {//获取一周前的时间
		      var now = new Date();
		      var newDate = now.setDate(now.getDate() + -7);
		      var d = new Date(newDate);
		      d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
		      this.STARTDATE = d;
		      this.ENDDATE = getDate();
		    },
		    closeAlert() {//点击蒙层关闭弹窗
		      this.isShow = false;
		      this.$emit('setInfor',this.isShow)
		    },
		}
	}
</script>

<style>
	.padding_tb_5px{
		padding: 5px 0;
	}
</style>