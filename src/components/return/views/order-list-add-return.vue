<template>
  <div>
    <div class="mongolia" v-show="topLayer" @click="closeAlert"></div>
    <div class="form_div">
      <div class="form_row">
        <label class="form_row_left huise" for>
          退货列表
          <span class="span_red"></span>
        </label>
        <div class="form_row_right">
          <div class="mui-btn mui-btn-primary" @click="returnAdd()">添加</div>
          <button type="button" class="mui-btn" @click="delReturn()">删除</button>
          <span class="mui-btn mui-btn-success" @click="changeReturn()">编辑</span>
        </div>
      </div>
      <!--产品订单列表-->
      <table border="0" cellspacing cellpadding class="dataTable">
        <tr>
          <th class="col_10">
            <label class="bui-checkbox-label bui-checkbox-anim">
              <input type="checkbox" @click="checkAll" v-model="allCheck">
              <i class="bui-checkbox"></i>
            </label>
          </th>
          <th class="col_40">产品名称</th>
          <th class="col_20">退货数量</th>
          <th class="col_15">单价</th>
          <th class="col_15">金额</th>
        </tr>
        <tr v-for="(item,index) in RETURNORDER">
          <td class="col_10">
            <label class="bui-checkbox-label bui-checkbox-anim">
              <input type="checkbox" name="isCheck" :value="item.name" v-model="checkData">
              <i class="bui-checkbox"></i>
            </label>
          </td>
          <td class="col_40">
            <span>{{item.name}}</span>
          </td>
          <td class="col_20 text_algin">
            <span>{{item.returnNum}}</span>
          </td>
          <td class="col_15 text_algin">
            <span>{{item.price}}</span>
          </td>
          <td class="col_15 text_algin">
            <span>{{item.money}}</span>
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
        <div class="form_row_right span_red">{{returnTotal}}</div>
      </div>
      <!--订单合计结束-->
      <!--<!--添加弹窗-->
      <div class="alert_div" v-show="returnShow">
        <div>
          <div class="form_title">产品退货</div>
          <div class="content">
            <div class="formTable">
              <div class="form_div">
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    产品名称
                    <span class="span_red">*</span>
                  </label>
                  <div class="filter-box form_row_right" id="proSelect">
                    <div class="filter-text">
                      <input
                        class="filter-title"
                        type="text"
                        v-model="selectPro"
                        readonly
                        placeholder="请选择"
                      >
                      <i class="icon icon-filter-arrow"></i>
                    </div>
                    <select name="filter" v-for="(item,index) in proList">
                      <option>{{item.text}}</option>
                    </select>
                  </div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    退货数量
                    <span class="span_red"></span>
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    class="form_row_right"
                    placeholder="0"
                    v-model="editReturn.returnNum"
                  >
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    单位
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editReturn.unit}}</div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    单价
                    <span class="span_red"></span>
                  </label>
                  <div class="form_row_right">{{editReturn.price}}</div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    金额
                    <span class="span_red"></span>
                  </label>
                  <div
                    class="form_row_right"
                  >{{editReturn.money=editReturn.returnNum*editReturn.price}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="alertMidBottom">
            <button
              v-show="isEditReturn==true"
              class="mui-btn mui-btn-block mui-btn-primary alertBtn"
              @click="saveReturn()"
            >保存编辑</button>
            <button
              v-show="isEditReturn==false"
              class="mui-btn mui-btn-block mui-btn-primary alertBtn"
              @click="keepReturn()"
            >添加</button>
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
      returnShow: false,
      checkData: [], //选中的数据
      allCheck: false, //是否全选
      selectPro: "",
      isEditReturn: false, //是否是编辑退货
      editShow: false, //切换添加和编辑按钮
      isEditReturn: false, //是否是编辑退货
      editReturn: {
        name: this.selectPro,
        num: "",
        returnNum: "",
        price: "",
        money: "",
        m_number: "",
        m_money: "",
        unit: "",
        index: ""
      }
    };
  },
  props: ["RETURNORDER", "ORDER", "proList"],
  watch: {
    selectPro(newVal, oldVal) {
      //监听退货选择的产品
      if (newVal == "") {
        return;
      } else {
        this.ORDER.forEach((el, index) => {
          if (el.NAME == newVal) {
            this.editReturn.name = this.ORDER[index].NAME;
            this.editReturn.unit = this.ORDER[index].UNIT;
            this.editReturn.price = this.ORDER[index].PRICE;
            this.editReturn.num = this.ORDER[index].NUMBER;
          }
        });
      }
    },
    checkData() {
      //监看点击选项
      if (this.checkData.length == this.RETURNORDER.length) {
        this.allCheck = true;
      } else {
        this.allCheck = false;
      }
    },
    deep: true // 深度监视
  },
  computed: {
    returnTotal() {
      //退货金额
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
    $("#proSelect").selectFilter({
      callBack: function(val) {
        $("#proSelect input").val(val);
        /*再次触发，让selectPro得到值*/
        $("#proSelect input")[0].dispatchEvent(new Event("input"));
        that.editReturn.name = val;
      }
    });
  },
  methods: {
    closeAlert() {
      //关闭蒙层
      this.topLayer = false;
      this.returnShow = false; //关闭退货弹窗
    },
    returnAdd() {
      //弹出退货添加弹窗
      this.topLayer = !this.topLayer;
      this.returnShow = !this.returnShow;
      this.editReturn = {
        name: "",
        num: "",
        returnNum: "",
        price: "",
        money: "",
        m_number: "",
        m_money: "",
        unit: "",
        index: ""
      };
    },
    delReturn() {
      //删除
      if (this.checkData.length == 0) {
        return false;
      } else {
        mui.confirm("你确定要删除订单", "提示", ["取消", "确定 "], e => {
          if (e.index == 1) {
            this.RETURNORDER.forEach((el, index) => {
              if (this.checkData.indexOf(el.name) != -1) {
                this.checkData = this.checkData.filter(item => {
                  //去除选择的数据
                  return item != el.name;
                });
                this.RETURNORDER.splice(index, 1);
              }
            });
          }
        });
      }
    },
    changeReturn() {
      //退货编辑弹窗
      if (this.checkData.length == 0) {
        return false;
      } else {
        this.isEditReturn = true;
        this.RETURNORDER.forEach((el, index) => {
          if (el.name.indexOf(this.checkData[0]) != -1) {
            this.editReturn = this.RETURNORDER[index];
            this.editReturn.index = index;
            this.selectPro = this.editReturn.name;
          }
        });
        this.topLayer = true;
        this.returnShow = true;
      }
    },
    saveReturn() {
      //退货编辑后保存
      var curIndex = this.editReturn.index;
      this.RETURNORDER[curIndex] = this.editReturn;
      (this.editReturn = {
        name: "",
        num: "",
        returnNum: "",
        price: "",
        money: "",
        m_number: "",
        m_money: "",
        unit: "",
        index: ""
      }),
        (this.topLayer = false);
      this.returnShow = false;
      this.isEditReturn = false;
    },
    checkAll() {
      // 点击全选事件
      this.allCheck = !this.allCheck;
      if ((this.allCheck = false)) {
        //之前全选则清空
        this.checkData = [];
        return false;
      } else {
        //之前不全选则现在全选
        this.checkData = [];
        this.RETURNORDER.forEach((el, index) => {
          this.checkData.push(el.NAME);
        });
        return false;
      }
    },
    keepReturn() {
      //添加退货产品
      if (this.editReturn.name == "") {
        mui.alert("请选择产品名称");
        return false;
      } else if (this.editReturn.returnNum == "") {
        mui.alert("请输入退货数量");
        return false;
      } else {
        if (this.RETURNORDER.length == 0) {
          this.RETURNORDER.push(this.editReturn);
          this.selectPro = "";
          this.topLayer = false;
          this.returnShow = false;
        } else {
          this.RETURNORDER.forEach((el, index) => {
            console.log("hi");
            if (el.name == this.editReturn.name) {
              //确保没有重复
              mui.alert("此产品已经退货，请重新选择");
              return false;
            } else {
              this.RETURNORDER.push(this.editReturn);
              this.selectPro = "";
              (this.editReturn = {
                name: "",
                num: "",
                returnNum: "",
                price: "",
                money: "",
                m_number: "",
                m_money: "",
                unit: "",
                index: ""
              }),
                (this.topLayer = false);
              this.returnShow = false;
            }
          });
        }
      }
    }
  }
};
</script>
