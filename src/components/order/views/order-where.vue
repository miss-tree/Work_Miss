<template>
  <div>
    <div class="mongolia" v-show="topLayer" @click="closeAlert"></div>
    <!--蒙层-->
    <!--收货信息-->
    <!--<div class="form_title">收货人</div>-->
    <div class="form_div">
      <ul class="ul_List">
        <li class="tableList" v-for="(item,index) in REINFOR" @click="changeInfor(index)">
          <div class="li_flex" id="where">
            <div></div>
            <div class="flex_grow">
              <div class="message_div_title">
                <span class="span_title huise">收货人</span>
                <span class="right_time">{{item.person}}</span>
              </div>
              <div class="message_div_title">
                <span class="span_title huise">电话</span>
                <span class="right_time">{{item.phone}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!--添加弹窗-->
      <div class="alert_div" v-show="whereShow">
        <!--:class="whereShow?'alertOut':'alertIn'"-->
        <div>
          <div class="form_title">收货信息</div>
          <div class="content">
            <div class="formTable">
              <div class="form_div">
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    	收货人
                    <span class="span_red">*</span>
                  </label>
                  <input
                    type="text"
                    class="form_row_right"
                    placeholder="请输入（联想代码）"
                    v-model="editInfor.person"
                  >
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    	电话
                    <span class="span_red">*</span>
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    class="form_row_right"
                    placeholder="请输入"
                    v-model="editInfor.phone"
                  >
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    	地址
                    <span class="span_red">*</span>
                  </label>
                  <input
                    type="text"
                    class="form_row_right"
                    placeholder="请输入"
                    v-model="editInfor.where"
                  >
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    	跟单业务员
                    <span class="span_red">*</span>
                  </label>
                  <input
                    type="text"
                    class="form_row_right"
                    placeholder="请输入"
                    v-model="editInfor.otc"
                  >
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    	业务员电话
                    <span class="span_red">*</span>
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    class="form_row_right"
                    placeholder="请输入"
                    v-model="editInfor.otcPhone"
                  >
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                   	 备注
                    <span class="span_red">*</span>
                  </label>
                  <input
                    type="text"
                    class="form_row_right"
                    placeholder="请输入"
                    v-model="editInfor.bz"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="alertMidBottom">
            <button
              v-show="editShow==true"
              class="mui-btn mui-btn-block mui-btn-primary alertBtn"
              @click="saveWhere()"
            >关闭</button>
            <button
              v-show="editShow==false"
              class="mui-btn mui-btn-block mui-btn-primary alertBtn"
              @click="addWhere()"
            >添加</button>
          </div>
        </div>
      </div>
      <!--添加弹窗结束-->
    </div>
    <!--<div class="form_div" style="margin-top: 5px;">
		<div class="form_row " style="justify-content: center;" @click="whereAlert()">
		    <span class=" addBtn text_algin">十添加收货信息</span>
		</div>
    </div>-->
    <!--收货信息结束-->
  </div>
</template>

<script>
	import "../../../../static/css/alert.css"
export default {
  data() {
    return {
      topLayer: false,
      whereShow: false,
      editShow: false,
      editInfor: {
        person: "",
        phone: "",
        where: "",
        otc: "",
        otcPhone: "",
        bz: "",
        index: ""
      } //收货信息编辑
    };
  },
  props: ["REINFOR"],
  methods: {
    closeAlert() {
      //关闭蒙层
      this.topLayer = false;
      this.alertShow = false;
      this.whereShow = false;
    },
    changeInfor(index) {
      //编辑或查看收货信息
      console.log(index);
      this.whereShow = true;
      this.editInfor = this.REINFOR[index];
      var curIndex = index;
      this.editInfor.index = curIndex;
      this.topLayer = true;
      this.editShow = true;
    },
    saveWhere() {
      //保存编辑后的收货信息
      this.topLayer = false;
      this.whereShow = false;
      this.editShow = false;
      var curIndex = this.editInfor.index;
      this.REINFOR[curIndex] = this.editInfor;
      this.editInfor = {
        name: "",
        num: "",
        price: "",
        money: "",
        M_num: "",
        M_money: "",
        unit: "件",
        index: ""
      };
    },
    addWhere() {
      //添加收货人
      if (this.editInfor.person == "") {
        mui.alert("请输入收货人姓名");
        return false;
      } else if (this.editInfor.phone == "") {
        mui.alert("请输入收货人电话");
        return false;
      } else if (this.editInfor.where == "") {
        mui.alert("请输入地址");
        return false;
      } else if (this.editInfor.otc == "") {
        mui.alert("请输入跟单业务员");
        return false;
      } else if (this.editInfor.otcPhone == "") {
        mui.alert("请输入业务员电话");
        return false;
      }
      this.REINFOR.push(this.editInfor);
      this.editInfor = {
        person: "",
        phone: "",
        where: "",
        otc: "",
        otcPhone: "",
        bz: "",
        index: ""
      };
      this.whereShow = !this.whereShow;
      this.topLayer = false;
    },
    whereAlert() {
      //弹出添加收货信息
      this.editShow = false;
      this.topLayer = !this.topLayer;
      this.whereShow = !this.whereShow;
      this.editInfor = {
        person: "",
        phone: "",
        where: "",
        otc: "",
        otcPhone: "",
        bz: "",
        index: ""
      };
    }
  }
};
</script>

<style>
</style>