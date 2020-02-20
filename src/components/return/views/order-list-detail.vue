<template>
  <div>
    <div class="mongolia" v-show="topLayer" @click="closeAlert"></div>
    <div class="form_div">
      <!--产品订单列表-->
      <table border="0" cellspacing cellpadding class="dataTable">
        <tr>
          <th class="col_40">产品名称</th>
          <th class="col_20">数量</th>
          <th class="col_15">单价</th>
          <th class="col_15">金额</th>
        </tr>
        <tr v-for="(item,index) in ORDER" @click="lookGoods(index)">
          <td class="col_40" style="padding-left: 15px;">
            <span>{{item.name}}</span>
          </td>
          <td class="col_20 text_algin">
            <span>{{item.num}}</span>
          </td>
          <td class="col_15 text_algin">
            <span>{{item.price}}</span>
          </td>
          <td class="col_15 text_algin">
            <span>{{item.money=item.num*item.price}}</span>
          </td>
        </tr>
      </table>
      <!--产品订单列表结束-->
      <!--订单合计-->
      <div class="form_row">
        <label class="form_row_left huise" for>
          金额合计
          <span class="span_red"></span>
        </label>
        <div class="form_row_right span_red">{{total}}</div>
      </div>
      <!--订单合计结束-->
      <!--添加弹窗-->
      <div class="alert_div" v-show="alertShow">
        <div>
          <div class="form_title">产品详情</div>
          <div class="content">
            <div class="formTable">
              <div class="form_div">
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    产品名称
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editOrder.name}}</div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    数量
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editOrder.num}}</div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    单位
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editOrder.unit}}</div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    单价
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editOrder.price}}</div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    金额
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editOrder.money=editOrder.num*editOrder.price}}</div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    应收件数
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editOrder.M_num}}</div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    产品应收款
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editOrder.M_money}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="alertMidBottom">
            <button class="mui-btn mui-btn-block mui-btn-primary alertBtn" @click="closeOrder()">关闭</button>
          </div>
        </div>
      </div>
      <!--添加弹窗结束-->
    </div>
  </div>
</template>

<script>
	import "../../../../static/css/alert.css"
export default {
  data() {
    return {
      topLayer: false,
      alertShow: false,
      editOrder: {
        name: "红",
        num: 12,
        price: 6,
        money: "",
        M_num: "",
        M_money: "",
        unit: "件",
        index: ""
      } //订单查看
    };
  },
  props: ["ORDER"],
  computed: {
    total() {
      //订单金额
      if (this.ORDER.length == 0) {
        return 0;
      } else {
        return this.ORDER.map(row => row.money).reduce((acc, cur) => {
          return parseFloat(cur) + acc;
        });
      }
    }
  },
  methods: {
    closeAlert() {
      //关闭蒙层
      this.topLayer = false;
      this.alertShow = false; //关闭详情弹窗
      this.returnShow = false; //关闭退货弹窗
    },
    closeOrder() {
      //关闭订单详情
      this.topLayer = false;
      this.alertShow = false;
    },
    lookGoods(index) {
      //查看订单详情
      this.editOrder = this.ORDER[index];
      this.editOrder.index = index;
      this.topLayer = true;
      this.alertShow = true;
    }
  }
};
</script>