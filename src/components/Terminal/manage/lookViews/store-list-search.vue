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
            <div class="form_title">签到日期</div>
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
            <div class="form_title">是否医保</div>
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
            <div class="form_title">其他</div>
            <div class="form_div padding_tb_5px">
              <div class="form_row" style="border: 0;">
                <label class="form_row_left huise" id="COMPANY">
                  	门店类型
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
            </div>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
import {selectTime,getTime,getDate,DateAdd,selecTion} from "../../../../../static/utils/public.js";
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
			        { text: "社区店" },
			        { text: "街边店" },
			        { text: "商业中心店" },
			        { text: "职业院校院区店" },
			        { text: "镇区中心店" },
			        { text: "偏僻" },
			        { text: "其他" }
			      ],
			      msg:this.alertShow,
			      comPany:'',
			      comArr:[ { text: "A" },
			        { text: "B" },
			        { text: "C" },
			        { text: "D" },]
			      
			}
		},
		props:["alertShow"],
		mounted(){
			selectTime();
    		selecTion("part", this.sectionArr);
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