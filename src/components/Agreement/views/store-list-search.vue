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
            <div class="form_title">寄送日期</div>
            <div class="form_div">
              <div class="alertRow">
                <input type="text" id="start856" data-options='{"type":"date"}'
                	class="btn mui-btn-block alertInput" 
                	placeholder="选择日期 ..." 
                	v-model="fromline.STARTDATE">
                <span>-</span>
                <input type="text" id="end978" data-options='{"type":"date"}'
                	class="btn mui-btn-block alertInput" 
                	placeholder="选择日期 ..." 
                	v-model="fromline.ENDDATE">
              </div>
              <!--<div class="alertRow" id="checkBox" style="padding-bottom: 5px;">
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
              </div>-->
            </div>
            <div class="form_title">协议级别</div>
            <div class="form_div padding_tb_5px">
              <div class="alertRow" id="checkBox">
                <div class="form_row_right flex justify_content">
                  <label>
                    <input type="radio" name="ISCHECK" value="一级" v-model="fromline.ISCHECK">
                    <div class="row_button">一级</div>
                  </label>
                  <label>
                    <input type="radio" name="ISCHECK" value="二级" v-model="fromline.ISCHECK">
                    <div class="row_button">二级</div>
                  </label>
                </div>
              </div>
            </div>
            <!--<div class="form_title">申请状态</div>
            <div class="form_div padding_tb_5px">
              <div class="alertRow">
                <div class="form_row_right flex justify_content">
                <label>
                    <input type="checkbox" name="CHECKSTATE" value="草稿" v-model="CHECKSTATE">
                    <div class="row_button">草稿</div>
                  </label>
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="待审" v-model="CHECKSTATE">
                    <div class="row_button">待审</div>
                  </label>
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="通过" v-model="CHECKSTATE">
                    <div class="row_button">通过</div>
                  </label>
                </div>
              </div>
              <div class="alertRow" style="margin-top: 8px;">
                <div class="form_row_right flex justify_content">
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="驳回" v-model="CHECKSTATE">
                    <div class="row_button">驳回</div>
                  </label>
                </div>
              </div>	
            </div>-->
            <div class="form_title">其他</div>
            <div class="form_div padding_tb_5px">
              <div class="form_row">
                <label class="form_row_left huise" id="COMPANY">
                  	所属公司
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  v-model="fromline.comPany"
                  name="company"
                  placeholder="请选择"
                  id="compony"
                >
              </div>
              <div class="form_row">
                <label class="form_row_left huise" id="COMPANY">
                  	客户类型
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  v-model="fromline.SECTION"
                  name="section"
                  placeholder="请选择"
                  id="part"
                >
              </div>
              <div class="alertRow">
                <label class="form_row_left huise" id="COMPANY">
                  	协议类型
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  v-model="fromline.TYPE"
                  name="section"
                  placeholder="请选择"
                  id="type"
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
				fromline:{
					STARTDATE: "", //开始时间
					ENDDATE: "", //结束时间
					ISCHECK: "", //是否活动
					SECTION: "", //选择的部门
					CHECKSTATE: [], //选择的状态
					TYPE:"",//协议类型
					comPany:'',
				},
				sureTime: "", //获取的时间
			      sectionArr: [
			        { text: "所有" },
			        { text: "商业" },
			        { text: "连锁" },
			        { text: "连锁(签约保量)" },
			      ],
			      msg:this.alertShow,
			      
			      comArr:[ { text: "天福康药业" },
			        { text: "股份有限公司" },
			        { text: "器械厂" },
			        { text: "制药厂" },],
			      typeArr:[{text:"和胃一级"},{text:"和胃二级"},{text:"三方协议"},
			      		{text:"一级经销商协议"},{text:"其他药品合作协议"},{text:"其他服务协议"},],
			      
			}
		},
		props:["alertShow"],
		mounted(){
			selectTime();
    		selecTion("part", this.sectionArr);
    		selecTion("compony", this.comArr);
    		selecTion("type", this.typeArr);
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
			Object.assign(this.$data.fromline, this.$options.data().fromline)
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