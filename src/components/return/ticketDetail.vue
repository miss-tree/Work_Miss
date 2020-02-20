<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">订单退货</h1>
    </header>
    <!--头部结束-->
    <!--内容部分-->
    <div class="mui-content">
      <div class="formTable">
        <!--头部信息-->
        <div class="form_div">
          <div class="form_row">
            <label class="form_row_left huise" id="CLIENT">
              客户名称
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{ORDERCUSTOMERINFOR.name}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="CLIENT">
              开票公司
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{ORDERCUSTOMERINFOR.ticketCom}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="CLIENT">
              发票号码
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{ORDERCUSTOMERINFOR.ticketNum}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise">
              开票日期
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{ORDERCUSTOMERINFOR.ticketDate}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="CLIENT">
              部门
              <span class="span_red">*</span>
            </label>
              <div class="form_row_right">{{SELECTPART}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="section">
              发票类型
              <span class="span_red">*</span>
            </label>
              <div class="form_row_right">{{TICKETTYPE}}</div>
          </div>
          <div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                是否退货
                <span class="span_red">*</span>
              </label>
              <div class="form_row_right">
                <label for="isPlay" @click="curIndex=1">
                  <input
                    class="myRadio"
                    type="radio"
                    value="是"
                    name="ISRETURN"
                    v-model="ISRETURN"
                    id="isPlay"
                  >
                  是
                </label>
                <label for="noPlay" @click="curIndex=0">
                  <input
                    class="myRadio"
                    type="radio"
                    value="否"
                    name="ISRETURN"
                    v-model="ISRETURN"
                    id="noPlay"
                  >
                  否
                </label>
              </div>
            </div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="expressnumber">
              退票类型
              <span class="span_red">*</span>
            </label>
              <div class="form_row_right">{{RETURNTICKET}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="expressnumber">
              退货原因
              <span class="span_red">*</span>
            </label>
              <div class="form_row_right">{{RETURNWHY}}</div>
          </div>
        </div>
        <!--选项卡-->
        <div>
          <div class="tabHead">
            <div @click="curIndex=0" :class="{'active':curIndex==0}">
              <span>订单详情</span>
            </div>
            <div @click="curIndex=1" v-show="ISRETURN=='是'" :class="{'active':curIndex==1}">
              <span>退货产品</span>
            </div>
          </div>
          <!--客户订单-->
          <div v-show="curIndex==0">
            <!--订单详情组件-->
            <listdetail :ORDER="ORDER"></listdetail>
          </div>
          <!--客户订单完成-->
          <div v-show="ISRETURN=='是'">
            <!--退货开始-->
            <div v-show="curIndex==1">
            <listdetail :ORDER="RETURNORDER"></listdetail>
            </div>
            <!--退货结束-->
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
import listdetail from "./views/order-list-detail.vue"; /*订单详情*/
import addreturn from "./views/order-list-add-return.vue"; /*添加退货*/
export default {
  data() {
    return {
      topLayer: false, //显示蒙层
      curIndex: 0,
      RETURNTYPE: "", //退货数量类型
      ORDERCUSTOMERINFOR: {
        name: "平安医疗健康管理股份有限公司",
        person: "枭龙",
        ticketDate: "2019-07-19",
        ticketCom: "泰恩康股份",
        ticketNum: "TEK20190719"
      }, //客户信息
      SELECTPART: "市场部", //选择的部门
      ISRETURN: "", //是否退货
      TICKETTYPE: "原发票", //发票类型
      RETURNTICKET: "退货退票", //退票类型
      RETURNWHY: "自提发现破损", //退货原因
      returnReason: ["近效期", "自提发现破损", "入库后破损", "转仓", "其他"],
      companyArr: ["泰恩康股份", "马鞍山天福康", "电商公司", "安徽维泰利"],
      ORDER: [{name: "红花油",num: 2,price: 5,money: "",M_num: "",M_money: "",unit: "件"},
        {name: "和胃",num: 30,price: 150,money: "5",M_num: 1000,M_money: 1000, unit: "件" }], //订单
      editOrder: {name: "红",num: 12,price: 6,money: "",M_num: "",M_money: "",unit: "件",index: ""}, //订单查看
      RETURNORDER: [{name: "红花油",num: 2,returnNum: 3,price: 5,money: 10,m_number: "",m_money: "",unit: "件",index: ""}], //退货产品单
      selectPro: "", //选择的退货产品
      editReturn: { name: this.selectPro,num: "",returnNum: "",price: "",money: "", m_number: "", m_money: "",unit: "",index: ""}, //退货添加、编辑
      BZ: "" ,//备注
      EXAMINFOR:[{progress:'总监审核',opinion:'驳回',bz:'明细不清',time:'2018-04-03 16:50'},
				{progress:'复审',opinion:'驳回',bz:'明细不清明细不清明细不清明细不清',time:'2018-04-03 16:23'},
				{progress:'人资审核',opinion:'同意',bz:'明细不清',time:'2018-04-02 09:16'},
				{progress:'提交申请',opinion:'',bz:'',time:'2018-04-01 20:42'}],
    };
  },
  components: {
    listdetail,addreturn
  },
  watch: {
    ISRETURN(newVal, oldVal) {
      //监听改变curIndex的下标
      if (newVal == "否") {
        this.curIndex = 0;
      }
    }
  },
  computed: {
    proList() {
      //获取订单上的产品名称
      return this.ORDER.map(row => ({
        text: row.name
      }));
    }
  },
  mounted() {},
  methods: {
    applyAjax() {//请求客户数据
      axios.get(api).then(res => {
        this.ORDERCUSTOMERINFOR = res.data.data;
      });
    },
  }
};
</script>