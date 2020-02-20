<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">订单退货详情</h1>
    </header>
    <!--头部结束-->
    <!--内容部分-->
    <div class="mui-content">
      <div class="formTable">
        <div class="form_title">客户信息</div>
        <div class="form_div">
          <div class="form_row">
            <label class="form_row_left huise" id="CLIENT">
              退货类型
              <span class="span_red"></span>
            </label>
            <div class="filter-box form_row_right" id="RETURNTYPE">
              <div class="filter-text">
                <input class="filter-title" type="text" readonly placeholder="请选择">
                <i class="icon icon-filter-arrow"></i>
              </div>
              <select name="filter" v-for="(item,index) in clientName">
                <option>{{item.text}}</option>
              </select>
            </div>
          </div>
          <div v-show="RETURNTYPE=='部分退货'">
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                收件客户名
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.name}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise">
                收件人
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.person}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                联系电话
                <span class="span_red"></span>
              </label>
            <div class="form_row_right">{{ORDERCUSTOMERINFOR.phone}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                开票标准名
                <span class="span_red"></span>
              </label>
            <div class="form_row_right">{{ORDERCUSTOMERINFOR.ticketname}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                邮寄地址
                <span class="span_red"></span>
              </label>
            <div class="form_row_right">{{ORDERCUSTOMERINFOR.where}}</div>
            </div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="section">
              物流公司
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{EXPRESS}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="expressnumber">
              物流单号
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{EXPRESSnum}}</div>
          </div>
        </div>
        <div >
          	<div>
          	<div class="tabHead">
	            <div @click="tabIndex=0" :class="{'active':tabIndex==0}">
	              <span>订单详情</span>
	            </div>
	            <div v-show="RETURNTYPE=='部分退货'" @click="tabIndex=1" :class="{'active':tabIndex==1}">
	              <span>退货产品</span>
	            </div>
          	</div>
          <div v-show="tabIndex==0">
	          <!--客户订单-->
	          <returndetail :ORDER="ORDER"></returndetail>
	          <!--客户订单完成-->
          </div>
          <div v-show="RETURNTYPE=='部分退货'">
	          <div v-show="tabIndex==1">
	            <!--退货产品-->
	          <returndetail :ORDER="RETURNORDER"></returndetail>
	          </div>
          </div>
          </div>
          <!--备注-->
          <div class="form_title">备注</div>
          <div class="form_div">
            <div class="padding-lr">
              <span class="form_row_height huise">
                备注
                <span class="span_red"></span>
              </span>
            </div>
            <div class="padding-lr padding_bb">
              <textarea class="textarea" name rows="1" cols="38" placeholder="请输入订单备注" v-model="BZ"></textarea>
            </div>
          </div>
        </div>
        <!--备注结束-->
        <div class="form_title">
	    	审核进度
	    </div>
        <time-line :examInfor="EXAMINFOR"></time-line>
      </div>
    </div>
  </div>
</template>

<script>
import { mustFill } from "../../../static/utils/public.js";
import returndetail from "./views/order-list-detail.vue"; /*退货订单详情*/
import returnadd from "./views/order-return-add.vue"; /*添加退货*/
export default {
  data() {
    return {
      RETURNTYPE: "", //退货数量类型
      ORDERCUSTOMERINFOR: {
        name: "平安医疗健康管理股份有限公司",
        person: "肖龙",
        phone: 15898764589,
        ticketname: "平安医疗健康管理广州分公司",
        where: "广州市天河区林和西路"
      }, //客户信息
      EXPRESS: "EMS快递", //物流公司
      EXPRESSnum: "EMS2019072458TS4", //物流单号
      tabIndex:0,
      curIndex:0,
      expressInfor: ["申通快递","圆通快递","EMS快递","顺丰快递","天天快递","邮政快递"], //选择物流公司选项
      clientName: [{ text: "部分退货" }, { text: "全部退货" }], //退货下拉选项
      COMPANY: "", //开票公司
      companyArr: ["泰恩康股份", "马鞍山天福康", "电商公司", "安徽维泰利"],
      ORDER: [
        {name: "红花油",num: 2,price: 5,money: "", M_num: "",M_money: "",unit: "件"},
        {name: "和胃", num: 30,price: 150,money: "5",M_num: 1000,M_money: 1000,unit: "件" }], //订单
      RETURNORDER: [{name: "红花油",num: 2,returnNum: 3,price: 5,money: 10,m_number: "",m_money: "",unit: "件",index: ""}], //退货产品单
      BZ: "产品有破损", //备注
	  EXAMINFOR:[{progress:'总监审核',opinion:'驳回',bz:'明细不清',time:'2018-04-03 16:50'},
				{progress:'复审',opinion:'驳回',bz:'明细不清明细不清明细不清明细不清',time:'2018-04-03 16:23'},
				{progress:'人资审核',opinion:'同意',bz:'明细不清',time:'2018-04-02 09:16'},
				{progress:'提交申请',opinion:'',bz:'',time:'2018-04-01 20:42'}],
    };
  },
  components: {
    returnadd, returndetail
  },
  watch:{
  	RETURNTYPE(newVal,oldVal){
  		if(newVal==''||newVal=='全部退货'){
  			this.tabIndex=0
  		}
  	}
  },
  mounted() {
    var that = this;
    $("#RETURNTYPE").selectFilter({
      callBack: function(val) {
        that.RETURNTYPE = val;
      }
    });
  },
  methods: {
    applyAjax() {//请求客户数据
      axios.get(api).then(res=>{})
    },
  }
};
</script>