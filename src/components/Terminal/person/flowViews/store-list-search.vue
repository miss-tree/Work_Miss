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
            <div class="form_title">流向月份</div>
            <div class="form_div">
              <div class="alertRow">
                <input type="text" id="start856" data-options='{"type":"month"}'
                	class="btn mui-btn-block alertInput" 
                	placeholder="选择日期 ..." 
                	v-model="STARTDATE">
              </div>
            </div>
            <div class="form_title">其他</div>
            <div class="form_div padding_tb_5px">
              <div class="form_row" style="border: 0;">
                <label class="form_row_left huise" id="COMPANY">
                  	流向类型
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
              <!--<div class="alertRow">
                <label class="form_row_left huise" id="COMPANY">
                  	门店属性
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
              </div>-->
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
			      SECTION: "", //选择的流向
			      CHECKSTATE: [], //选择的状态
			      sureTime: "", //获取的时间
			      sectionArr: [
			        { text: "全部" },
			        { text: "一级商" },
			        { text: "二级商" },
			        { text: "重点连锁" },
			      ],
			      comPany:'',
			      backInfor:{
			      	msg:false,
			      	select:"",
			      },
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
//  		selecTion("compony", this.comArr);
		},
		methods:{
			closeAlert(){//点击关闭
				this.backInfor.msg = false;
				this.$emit('changShow',this.backInfor)
			},
		    addOrder() {//确定
		      this.backInfor.msg = false;
		      this.bus.$emit('message',this.SECTION)
				this.$emit('changShow',this.backInfor)
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