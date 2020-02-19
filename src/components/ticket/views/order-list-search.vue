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
            <div class="form_title">发货日期</div>
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
            <div class="form_title">开票状态</div>
            <div class="form_div padding_tb_5px">
              <div class="alertRow" id="checkBox">
                <div class="form_row_right flex justify_content">
                  <label>
                    <input type="radio" name="ISCHECK" value="未开票" v-model="ISCHECK">
                    <div class="row_button">未开票</div>
                  </label>
                  <label>
                    <input type="radio" name="ISCHECK" value="已开票" v-model="ISCHECK">
                    <div class="row_button">已开票</div>
                  </label>
                </div>
              </div>
            </div>
            <div class="form_title"></div><!--搜索必填-->
            <div class="form_div padding_tb_5px">
            	<div class="form_row">
                <label class="form_row_left huise" id="COMPANY">
                  	产品名称
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  data="required"
                  v-model="clientName"
                  name="client"
                  placeholder="请选择"
                  id="client"
                >
              </div>
              <div class="form_row">
                <label class="form_row_left huise" id="COMPANY">
                  	开单公司
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  data="required"
                  v-model="comPany"
                  name="company"
                  placeholder="请选择"
                  id="company"
                >
              </div>
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
                  	地区
                  <span class="span_red"></span>
                </label>
                <input
                  type="text"
                  class="form_row_right"
                  data="required"
                  v-model="where"
                  name="where"
                  placeholder="请选择"
                  id="where"
                >
              </div>
            </div>
            <!--<div class="form_title">订单状态</div>
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
            </div>-->
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
			      clientName:'',
			      clientArr:[{ text: "和胃整肠丸" },
			        { text: "红花油" },
			        { text: "一次性口罩" },
			        { text: "六味地黄丸" },
			        { text: "板蓝根颗粒" },
			        { text: "藿香正气丸" },
			        { text: "乌鸡白凤丸"}],
			      sectionArr: [
			        { text: "销售部" },
			        { text: "电商部" },
			        { text: "OTC推广部" },
			        { text: "大KA部" },
			        { text: "财务部" },
			        { text: "市场部" },
			        { text: "财务组" }
			      ],
			      INFOR:{msg:this.alertShow,showMsg:false},   
			      comPany:'',
			      comArr:[ { text: "泰恩康股份" },
			        { text: "马鞍山天福康" },
			        { text: "电商公司" },
			        { text: "安徽维泰利" },],
			      where:'',
			      whereArr:[{text:"全国"},{text:"广东"},{text:"广西"},{text:"福建"},{text:"上海"},{text:"浙江"},{text:"江苏"},{text:"湖南"},{text:"湖北"},{text:"山东"},]
			}
		},
		props:["alertShow",],
		mounted(){
			selectTime();
    		selecTion("client", this.clientArr);
    		selecTion("company", this.comArr);
    		selecTion("part", this.sectionArr);
    		selecTion("where", this.whereArr);
		},
		methods:{
			closeAlert(){//点击关闭
				this.INFOR.msg = false;
				this.$emit('changShow',this.INFOR)
			},
		    addOrder() {//确定
//		    	if(this.clientName==''){
//		    		mui.alert("请选择客户")
//		    		return false
//		    	}else if (this.comPany==''){
//		    		mui.alert("请选择开票公司")
//		    		return false
//		    	}else if (this.SECTION==''){
//		    		mui.alert("请选择部门")
//		    		return false
//		    	}
		      	this.INFOR.msg = false;
		      	this.INFOR.showMsg = true;
				this.$emit('changShow',this.INFOR)
		    },
		    resetCkeck() {//重置
		      this.CHECKTIME = "";
		      this.CHECKSTATE = [];
		      this.STARTDATE = "";
		      this.ENDDATE = "";
		      this.ISCHECK = "";
		      this.SECTION = "";
		      this.comPany = "";
		      this.clientName = "";
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