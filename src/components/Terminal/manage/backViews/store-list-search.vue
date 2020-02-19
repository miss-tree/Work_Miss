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
            <div class="form_title">反馈日期</div>
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
            <div class="form_title">申请状态</div>
            <div class="form_div padding_tb_5px">
              <div class="alertRow">
                <div class="form_row_right flex justify_content">
                <label>
                    <input type="checkbox" name="CHECKSTATE" value="未确认" v-model="CHECKSTATE">
                    <div class="row_button">未确认</div>
                  </label>
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="已确认" v-model="CHECKSTATE">
                    <div class="row_button">已确认</div>
                  </label>
                  <label>
                    <input type="checkbox" name="CHECKSTATE" value="无须修正" v-model="CHECKSTATE">
                    <div class="row_button">无须修正</div>
                  </label>
                </div>
              </div>
            </div>
            <div class="form_title">其他</div>
            <div class="form_div padding_tb_5px">
               <div class="form_row">
                <label class="form_row_left huise" id="COMPANY">
                  	区域
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  v-model="WHERE"
                  name="section"
                  placeholder="请选择"
                  id="part"
                >
              </div>
              <div class="form_row" style="border: 0;">
                <label class="form_row_left huise" style="flex-grow: 1;">
                  	OTC人员
                  <span class="span_red"></span>
                </label>
                <div class="alertRow" id="checkPower" style="margin-top: 5px;width: fit-content;">
	                <div class="form_row_right flex " style="flex-wrap: wrap;">
	                	<label v-for="(item,index) in second">
			                <input type="checkbox" name="powerData" :value="item.text" v-model="CHECKPERSON">
			                <button type="button" class="row_button">{{item.text}}</button>
			            </label>
	                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
	import {selectTime,getTime,getDate,DateAdd,selecTion} from "../../../../../static/utils/public.js";
	import {OTCData} from "../../../../../static/utils/data/OTCdata.js";
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
			      WHERE:'',//选择的区域
			      CHECKPERSON:[],//选择的人
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
			        { text: "D" },],
				checkWhere:[],
		        second:[],   
			      
			}
		},
		props:["alertShow"],
		watch:{
			WHERE(newVal,oldVal){
				if(newVal!=''){
	        		OTCData.forEach((el,index)=>{
	        			if(el.text==newVal){
	        				this.second=OTCData[index].children
	        			}
	        		})
	        	}
			}
		},
		mounted(){
			selectTime();
			this.checkWhere= OTCData.map(row=>({text:row.text}))
    		selecTion("part", this.checkWhere);
//  		selecTion("compony", this.comArr);
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
		      this.WHERE = "";
		      this.CHECKPERSON=[];
		      this.comPany="";
		      this.second=[]
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