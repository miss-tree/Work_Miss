<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">未开票订单退货</h1>
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
              <span class="span_red">*</span>
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
                <span class="span_red">*</span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.name}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise">
                收件人
                <span class="span_red">*</span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.person}}</div>
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
              v-model="EXPRESSnum"
              name="expressnumber"
              placeholder="请输入"
            >
          </div>
        </div>
        <div> <!--v-show="RETURNTYPE!=''"-->
          <div class="form_title">订单详情</div>
          <!--客户订单-->
          <returndetail :ORDER="ORDER"></returndetail>
          <!--客户订单完成-->
          <div v-show="RETURNTYPE=='部分退货'">
            <!--退货开始-->
            <div class="form_title">退货产品</div>
            <returnadd
              :RETURNORDER="RETURNORDER"
              :ORDER="ORDER"
              :returnTotal="returnTotal"
              :proList="proList"
            ></returnadd>
            <!--客户订单-->
          </div>
          <!--退货结束-->
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
              <textarea class="textarea" name rows="1" cols="38" placeholder="请输入备注" v-model="BZ"></textarea>
            </div>
          </div>
        </div>
        <!--备注结束-->
        <div  class="submitBtn">
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
        person: "骆东堂",
        phone: "",
        ticketname: "",
        where: ""
      }, //客户信息
      EXPRESS: "", //物流公司
      EXPRESSnum: "", //物流单号
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
      clientName: [{ text: "部分退货" }, { text: "全部退货" }], //退货下拉选项
      showInfor: false, //展示选择客户后显示编辑信息
      COMPANY: "", //开票公司
      companyArr: ["泰恩康股份", "马鞍山天福康", "电商公司", "安徽维泰利"],
      ORDER: [
        {
          name: "红花油",
          num: 2,
          price: 5,
          money: "",
          M_num: "",
          M_money: "",
          unit: "件"
        },
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
      RETURNORDER: [
        {
          name: "红花油",
          num: 2,
          returnNum: 3,
          price: 5,
          money: 10,
          m_number: "",
          m_money: "",
          unit: "件",
          index: ""
        }
      ], //退货产品单
      selectPro: "", //选择的退货产品
      //proList:{},//订单的产品列表
      BZ: "" //备注
    };
  },
  components: {
    returnadd,
    returndetail
  },
  computed: {
    proList() {//获取订单上的产品名称
      return this.ORDER.map(row => ({ text: row.name }));
    },
    total() {//订单金额
      if (this.ORDER.length == 0) {
        return 0;
      } else {
        return this.ORDER.map(row => row.money).reduce((acc, cur) => {
          return parseFloat(cur) + acc;
        });
      }
    },
    returnTotal() {//退货金额
      if (this.RETURNORDER.length == 0) {
        return 0;
      } else {
        return this.RETURNORDER.map(row => row.money).reduce((acc, cur) => {
          return parseFloat(cur) + acc;
        });
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
    onConfirm(value, index) {//vant的选择器=>选择物流公司
      (this.EXPRESS = value), (this.showPicker = false);
    },
    applyAjax() {//请求客户数据
      axios.get(api).then(res=>{})
    },
    mustFull() {//必填项
      //mustFill()
      var isOk = mustFill();
      if (isOk.length == 0) {
        console.log("hi");
      }
    }
  }
};
</script>