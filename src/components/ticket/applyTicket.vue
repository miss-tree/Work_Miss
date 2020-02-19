<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">订单开票</h1>
    </header>
    <!--头部结束-->
    <!--内容部分-->
    <div class="mui-content">
      <div class="formTable">
      	<div v-show="checkType==false">
      		<div class="form_div">
	          <div class="form_row">
	            <label class="form_row_left huise" id="ticketType">
	              发票类型
	              <span class="span_red">*</span>
	            </label>
	            <div class="filter-box form_row_right" id="TICKETTYPE">
	              <div class="filter-text">
	                <input class="filter-title" name="ticketType" data="required"
	                v-model="TICKETTYPE"	type="text" readonly placeholder="请选择">
	                <i class="icon icon-filter-arrow"></i>
	              </div>
	              <select name="filter" v-for="(item,index) in ticketCheck">
	                <option>{{item.text}}</option>
	              </select>
	            </div>
	          </div>
      		</div>
          <!--<div v-show="TICKETTYPE=='折扣发票'" style="margin-top: 10px;">
          	<countadd :DISCOUNTORDER="DISCOUNTORDER" @getDiscount='getInfor'></countadd>
          </div>-->
      		<!--<div class="submitBtn">
	          <button
	            type="button"
	            style="width: 30%; padding: 10px;"
	            id="update"
	            @click="checkDiscount()"
	            class="mui-btn update mui-btn-block mui-btn-primary"
	          >确定</button>
	        </div>-->
      	</div>
      	<div><!-- v-show="checkType!=false"-->
      		<div class="form_title">客户信息</div>
        <div class="form_div">
          <div>
          	<div class="form_row">
              <label class="form_row_left huise" id="isSend">
                是否寄存
                <span class="span_red">*</span>
              </label>
              <div class="form_row_right">
                <label for="isPlay" >
                  <input
                    class="myRadio"
                    type="radio"
                    value="是"
                    name="isSend"
                    v-model="ISSEND"
                    id="isPlay"
                  >
                  是
                </label>
                <label for="noPlay" >
                  <input
                    class="myRadio"
                    type="radio"
                    value="否"
                    name="isSend"
                    v-model="ISSEND"
                    id="noPlay"
                  >
                  否
                </label>
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                收件客户名
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                class="form_row_right inputRed"
                v-model="ORDERCUSTOMERINFOR.name"
                placeholder="发票寄件时，不在快递单上打印填写"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise">
                收件人
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                class="form_row_right inputRed"
                v-model="ORDERCUSTOMERINFOR.person"
                placeholder="请输入"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                联系电话
                <span class="span_red">*</span>
              </label>
              <input
                type="number"
                class="form_row_right"
                pattern="[0-9]*"
                v-model="ORDERCUSTOMERINFOR.phone"
                placeholder="请输入"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                开票标准名
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                class="form_row_right"
                v-model="ORDERCUSTOMERINFOR.ticketname"
                placeholder="请输入"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                邮寄地址
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                class="form_row_right"
                v-model="ORDERCUSTOMERINFOR.where"
                placeholder="请输入"
              >
            </div>
          <div class="form_row">
            <label class="form_row_left huise" id="section">
              物流公司
              <span class="span_red">*</span>
            </label>
            <input
              type="text"
              class="form_row_right"
              data="required"
              @click="showPicker = true"
              readonly="readonly"
              v-model="EXPRESS"
              name="section"
              placeholder="请选择"
            >
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                title="物流公司"
                :columns="expressInfor"
                @cancel="showPicker = false"
                @confirm="onConfirm"
              />
            </van-popup>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="expressnumber">
              物流单号
              <span class="span_red">*</span>
            </label>
            <input
              type="number"
              class="form_row_right"
              data="required"
              v-model="EXPRESSNUM"
              name="expressnumber"
              placeholder="请输入"
            >
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="section">
              发票类型
              <span class="span_red">*</span>
            </label>
            <input
              type="text"
              class="form_row_right"
              data="required"
              @click="showType= true"
              readonly="readonly"
              v-model="EXPRESSTYPE"
              name="section"
              placeholder="请选择"
            >
            <van-popup v-model="showType" position="bottom">
              <van-picker
                show-toolbar
                title="发票类型"
                :columns="expressType"
                @cancel="showType = false"
                @confirm="offSelect"
              />
            </van-popup>
          </div>
          </div>
        </div>
       </div>
       <div><!--  v-show="checkType!=false"-->
          <div class="form_title">订单详情</div>
          <!--客户订单-->
          <orderdetail :ORDER="ORDER"></orderdetail>
          <!--客户订单完成-->
          <div v-show="TICKETTYPE=='折扣发票'">
            <!--折扣开始-->
            <div class="form_title">折扣项目</div>
          	<countadd :DISCOUNTORDER="DISCOUNTORDER" @getDiscount='getInfor'></countadd>
            <!--<countdetail :DISCOUNTINFOR="DISCOUNTINFOR"></countdetail>-->
	          <!--折扣结束-->
          </div>
          <div class="margin_top"></div>
          <div class="form_div">
	          <div class="form_row">
	              <label class="form_row_left huise" id="CLIENT">
	                开票金额
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">{{tatol-DISCOUNTINFOR.tatol}}</div>
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
              <textarea class="textarea" name rows="2" cols="38" placeholder="请输入订单备注" v-model="BZ"></textarea>
            </div>
          </div>
        <!--备注结束-->
        <div class="submitBtn">
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
  </div>
</template>

<script>
import "../../../static/utils/selectFilter.js"; /*自定义下拉框*/
import "../../../static/css/selectFilter.css";
import { mustFill } from "../../../static/utils/public.js";
import orderdetail from "./views/order-list-detail.vue"; /*退货订单详情*/
import countadd from "./views/order-discount.vue"; /*折扣添加*/
import countdetail from "./views/apply-detail.vue"; /*折扣添加*/
export default {
  data() {
    return {
    	checkType:false,//是否选择了发票类型
      TICKETTYPE: "", //退货数量类型
      //checkData:[],
      ISSEND:'',//是否寄存
      ORDERCUSTOMERINFOR: {
        name: "",
        person: "",
        phone: "",
        ticketname: "",
        where: ""
      }, //客户信息
      EXPRESS: "", //物流公司
      EXPRESSNUM: "", //物流单号
      topLayer: false, //显示蒙层
      showPicker: false, //物流公司弹窗
      expressInfor: [
        "申通快递",
        "圆通快递",
        "EMS快递",
        "顺丰快递",
        "天天快递",
        "邮政快递"
      ], //选择物流公司选项
      ticketCheck: [{ text: "普通发票" }, { text: "折扣发票" }], //退货下拉选项
      showInfor: false, //展示选择客户后显示编辑信息
      COMPANY: "", //开票公司
      companyArr: ["泰恩康股份", "马鞍山天福康", "电商公司", "安徽维泰利"],
      showType:false,//发票类型
      expressType:["普通发票","增值发票"],
      EXPRESSTYPE:'',//发票类型
      ORDER: [
        {name: "红花油",num: 2,price: 5,money: "",M_num: "",M_money: "",unit: "件"},
        {
          name: "和胃",
          num: 30,
          price: 150,
          money: "5",
          M_num: 1000,
          M_money: 1000,
          unit: "件"
        }
      ], //订单
      editOrder: {
        name: "红",
        num: 12,
        price: 6,
        money: "",
        M_num: "",
        M_money: "",
        unit: "件",
        index: ""
      }, //订单查看
      DISCOUNTORDER: [{name: "红花油",num: 598787884, money: 1000,type:'项目费用'},
      {name: "和胃整肠丸",num: 560336564, money: 3500,type:'项目费用'}], //折扣产品单
      selectPro: "", //选择的退货产品
      DISCOUNTINFOR:{tatol:0,arr:[]},
      BZ: "" //备注
    };
  },
  components: {
    countadd, orderdetail,countdetail
  },
  computed: {
    tatol() {//订单金额
      if (this.ORDER.length == 0) {
        return 0;
      } else {
        return this.ORDER.map(row => row.money).reduce((acc, cur) => {
          return parseFloat(cur) + acc;
        });
      }
    },
  },
  mounted() {
    var that = this;
    $("#TICKETTYPE").selectFilter({
      callBack: function(val) {
        that.TICKETTYPE = val;
      }
    });
  },
  methods: {
  	getInfor(DISCOUNTINFOR){
  		this.DISCOUNTINFOR=DISCOUNTINFOR
  	},
  	checkDiscount(){//点击确定选择的发票类型
  		if(this.TICKETTYPE==''){
  			mui.alert('请选择发票类型')
  			return false
  		}else if(this.TICKETTYPE=='折扣发票'){
  			if(this.DISCOUNTINFOR.tatol==0){
  				mui.alert('请选择折扣项目')
    				return false
  			}
  		}
  			this.checkType=true
  	},
    onConfirm(value, index) {//vant的选择器=>选择物流公司
      this.EXPRESS = value,
      this.showPicker = false;
    },
    offSelect(value, index) {//选择发票类型
      this.EXPRESSTYPE = value, 
      this.showType = false;
    },
    applyAjax() {//请求客户数据
      axios.get(api).then(res=>{})
    },
    mustFull() {//必填项
      var isOk = mustFill();
      if (isOk.length == 0) {
        console.log("hi");
      }
    }
  }
};
</script>

<style lang="scss">
	.inputRed input:-webkit-input-placeholder{
		color: red;
	}
	.submitBtn{
		text-align: center;
		margin-top: 15px; 
		margin-bottom: 15px;
	}
</style>