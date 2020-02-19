<template>
	<div>
      <div class="mongolia" v-show="alertShow" @click="closeAlert()"></div><!--蒙层-->
		<div class="alertRight" id="rightAlert"  :class="alertShow?'alertOut':'outToleft'">
        <div class="content">
          <div class="alert_bottom_div height_40px">
            <div class="flex">
              <div @click="resetCkeck()">重置</div>
              <div @click="addOrder()">确定</div>
            </div>
          </div>
          <div class="formTable">
            <div class="form_title">订单日期</div>
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
            </div>
           <div class="form_title">区域选择</div>
            <div class="form_div padding_tb_5px">
              <div class="alertRow">
                <div class="form_row_right flex justify_content">
                <label>
                    <input type="checkbox" name="CHECKSTATE" value="营销部" v-model="CHECKSTATE">
                    <div class="row_button">营销部</div>
                  </label>
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="代工" v-model="CHECKSTATE">
                    <div class="row_button">代工</div>
                  </label>
                  <!--<label>
                    <input type="checkbox" name="CHECKSTATE" value="通过" v-model="CHECKSTATE">
                    <div class="row_button">通过</div>
                  </label>-->
                </div>
              </div>
              <!--<div class="alertRow" style="margin-top: 8px;">
                <div class="form_row_right flex justify_content">
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="驳回" v-model="CHECKSTATE">
                    <div class="row_button">驳回</div>
                  </label>
                </div>
              </div>	-->
            </div>
            <div class="form_title">其他</div>
            <div class="form_div padding_tb_5px">
              <div class="form_row">
                <label class="form_row_left huise" id="COMPANY">
                  	经营性质
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  v-model="SECTION"
                  name="section"
                  placeholder="请选择"
                  id="part"
                >
              </div>
              <div class="alertRow">
                <label class="form_row_left huise" id="COMPANY">
                  	开单公司
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  v-model="comPany"
                  name="company"
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
			      sureTime: "", //获取的时间
			      sectionArr: [
			        { text: "批发" },
			        { text: "连锁" },
			        { text: "单体药店" },
			        { text: "门诊社区" },
			        { text: "电商客户" },
			        { text: "特殊客户" },
			      ],
			      msg:this.alertShow,
			      comPany:'',
			      comArr:[ { text: "泰恩康股份" },
			        { text: "器械厂" },
			        { text: "制药厂" },
			        { text: "设备厂" },
			        { text: "天福康药业" },
			        { text: "安徽维泰利" },
			        { text: "电商公司" },]
			      
			}
		},
		props:["alertShow"],
		mounted(){
			selectTime();
    		selecTion("part", this.sectionArr);
    		selecTion("compony", this.comArr);
		},
		methods:{
			closeAlert(){//点击关闭
				this.msg = false;
				this.$emit('changShow',this.msg)
			},
		    addOrder() {//确定
		      this.msg = false;
				this.$emit('changShow',this.msg)
		    },
		    resetCkeck() {//重置
		      this.CHECKTIME = "";
		      this.CHECKSTATE = [];
		      this.STARTDATE = "";
		      this.ENDDATE = "";
		      this.ISCHECK = "";
		      this.SECTION = "";
		      this.comPany=""
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
		}
	}
</script>

<style>
</style>