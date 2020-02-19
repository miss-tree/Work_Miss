<template>
  <div>
    <div class="mongolia" v-show="topLayer" @click="closeAlert"></div>
    <!--蒙层-->
    <div>
      <!--<div class="form_title">破损记录</div>-->
      <div class="form_div">
        <div class="form_row">
          <label class="form_row_left huise" for>
            破损列表
            <span class="span_red"></span>
          </label>
          <div class="form_row_right">
            <div class="mui-btn mui-btn-primary" @click="addPsList()">添加</div>
            <button type="button" class="mui-btn" @click="delOrder()">删除</button>
            <span class="mui-btn mui-btn-success" @click="editPs()">编辑</span>
          </div>
        </div>
        <!--破损列表-->
        <table border="0" cellspacing cellpadding class="dataTable">
          <tr>
            <th class="col_10">
              <label class="bui-checkbox-label bui-checkbox-anim">
                <input type="checkbox" @click="checkAll" v-model="allCheck">
                <i class="bui-checkbox"></i>
              </label>
            </th>
            <th class="col_60">产品名称</th>
            <th class="col_20">数量</th>
          </tr>
          <tr v-for="(item,index) in list">
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
              <span>{{item.Pnumber}}</span>
            </td>
          </tr>
        </table>
        <!--破损列表结束-->
      </div>
      <!--添加弹窗-->
      <div class="alert_div" v-show="PsShow">
        <div>
          <div class="form_title">记录破损</div>
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
                      <input class="filter-title" type="text" readonly placeholder="请选择">
                      <i class="icon icon-filter-arrow"></i>
                    </div>
                    <select name="filter" v-for="(item,index) in PMUSE">
                      <option>{{item.text}}</option>
                    </select>
                  </div>
                </div>
                <div class="form_row">
                  <label class="form_row_left huise" for>
                    数量
                    <span class="span_red">*</span>
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    class="form_row_right"
                    placeholder="0"
                    v-model="damageList.Pnumber"
                  >
                </div>
                <div class="border_bottom">
                  <div class="padding-lr">
                    <span class="form_row_height huise">
                      备注
                      <span class="span_red"></span>
                    </span>
                  </div>
                  <!--<input type="text" class="form_row_right" name="WHERE"  v-model="damageList.bz"/>-->
                  <div class="padding-lr padding_bb">
                    <textarea
                      class="textarea"
                      name
                      rows="1"
                      cols="38"
                      placeholder="请输入订单备注"
                      v-model="damageList.bz"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="alertMidBottom">
            <button
              v-show="editShow==true"
              class="mui-btn mui-btn-block mui-btn-primary alertBtn"
              @click="keepPs()"
            >保存编辑</button>
            <button
              v-show="editShow==false"
              class="mui-btn mui-btn-block mui-btn-primary alertBtn"
              @click="addPs()"
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
    	list:this.ORDERPRO,
      topLayer: false, //蒙层是否显示
      PsShow: false, //破损弹窗显示
      editShow: false, //切换添加和编辑按钮
      allCheck: false, //是否全选
      checkData: [], //勾选的破损产品
      damageList: { name: "", Pnumber: "", bz: "", index: "" } //破损列表编辑
    };
  },
  props: ["PMUSE", "ORDERPRO"],
  mounted() {
    var that = this;
    $("#proSelect").selectFilter({
      //获取破损的产品
      callBack: function(val) {
        //返回选择的值
        console.log(val + "-是返回的值");
        that.damageList.name = val;
      }
    });
  },
  watch: {
    checkData() {
      //监看点击选项
      if (this.checkData.length == this.list.length) {
        this.allCheck = true;
      } else {
        this.allCheck = false;
      }
    },
    deep: true // 深度监视
  },
  methods: {
    closeAlert() {
      //关闭蒙层
      this.topLayer = false;
      this.PsShow = false; //关闭破损弹窗
    },
    addPsList() {
      //添加破损记录按钮
      this.topLayer = !this.topLayer;
      this.PsShow = true;
    },
    delOrder() {//删除勾选的破损产品
    	var that=this;
      if (that.checkData.length == 0) {
        return false;
      } else {
        mui.confirm("你确定要删除订单", "提示", ["取消", "确定 "], e => {
          if (e.index == 1) {
//          this.ORDERPRO.forEach((el, index) => {
//            if (this.checkData.indexOf(el.name) != -1) {
//              this.checkData = this.checkData.filter(row => {
//                return row != el.name;
//              });
//              this.ORDERPRO.splice(index, 1);
//            }
//          });
						that.list=that.list.filter((el,index)=>{
								return that.checkData.includes(el.name)==false
							})
							that.checkData=[]
          }
        });
      }
    },
    editPs() {//勾选破损列表后点击编辑按钮弹出弹窗
      if (this.checkData.length == 0) {
        return false;
      } else {
        this.editShow = true;
        this.list.forEach((el, index) => {
          if (el.name.indexOf(this.checkData[0]) != -1) {
            this.damageList = this.list[index];
            console.log("hi");
            this.damageList.index = index;
          }
        });
        this.topLayer = true;
        this.PsShow = true;
      }
    },
    checkAll() {// 点击全选事件
      this.allCheck = !this.allCheck;
      if ((this.allCheck = false)) {
        this.checkData = [];
        return false;
      } else {// 全不选选则清空绑定的数组
        this.checkData = [];
        this.list.forEach((el, index) => {
          this.checkData.push(el.name);
        });
        return false;
      }
    },
    keepPs() {//保存编辑的破损数据
      var curIndex = this.damageList.index;
      this.list[curIndex] = this.damageList;
      this.damageList = { name: "", Pnumber: "", bz: "", index: "" };
      this.topLayer = false;
      this.PsShow = false;
    },
    addPs() {//添加破损到破损列表
      if (this.damageList.name == "") {
        mui.alert("请选择产品名称");
        return false;
      }else if (this.damageList.Pnumber == "") {
        mui.alert("请输入破损数量");
        return false;
      }else{
        if (this.list.length == 0) {
          this.list.push(this.damageList);
          //this.selectPro = "";
          this.topLayer = false;
          this.PsShow = false;
        } else {
          this.list.forEach((el, index) => {
            if (el.name == this.damageList.name) {
              //确保没有重复
              mui.alert("此产品已经退货，请重新选择");
              return false;
            } else {
              this.list.push(this.damageList);
              //this.selectPro = "";
              this.damageList = {
                name: "",
                Pnumber: "",
                bz: "",
                index: ""
              },
                this.topLayer = false;
              this.PsShow = false;
            }
          });
        }
      }
    }
  }
};
</script>

<style>
</style>