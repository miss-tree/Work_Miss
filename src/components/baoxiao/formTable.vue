<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">出差报销</h1>
    </header>
    <!--头部结束-->
    <div class="mui-content">
      <div class="formTable">
        <div class="form_div">
          <div class="form_row">
            <label class="form_row_left huise" for>
              出差事由
              <span class="span_red">*</span>
            </label>
            <input type="text" class="form_row_right" v-model="why" name="why" placeholder="请输入事由">
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for>
              实际报销人
              <span class="span_red">*</span>
            </label>
            <input type="text" class="form_row_right" v-model="who" name="who" placeholder="请输入">
          </div>
        </div>
        <!--出差整个行程-->
        <div v-for="(item,index) in Travel">
          <div class="form_title">
            <span class="span_15px">日期</span>
            <span v-show="Travel.length>1" @click="removeTravel">删除</span>
          </div>
          <div class="form_div">
            <div class="form_row">
              <label class="form_row_left huise" for>
                开始时间
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                id="demo4"
                data-options='{"type":"date"}'
                class="btn mui-btn-block form_row_right"
                placeholder="选择日期 ..."
                v-model="item.startTime"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                结束时间
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                id="demo5"
                data-options='{"type":"date"}'
                class="btn mui-btn-block form_row_right"
                placeholder="选择日期 ..."
                v-model="item.endTime"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                时长 (天)
                <span class="span_red"></span>
              </label>
              <span class></span>
              <input
                type="number"
                pattern="[0-9]*"
                class="form_row_right"
                placeholder="请输入天数"
                v-model="item.days"
              >
            </div>
          </div>
          <div class="form_title">行程({{index+1}})</div>
          <div class="form_div">
            <div class="form_row">
              <label class="form_row_left huise" for>
                出发城市
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                class="form_row_right"
                name
                placeholder="请选择城市"
                id="showCityPicker3"
                v-model="item.beginCity"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                目的城市
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                class="form_row_right"
                name
                placeholder="请选择城市"
                id="cityPicker3"
                v-model="item.endCity"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                在途补助
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">
                <div class="float_right justify_content" style="width: 200px;">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    name
                    placeholder="请输入天数"
                    v-model="item.wayDay"
                  >
                  <input
                    type="number"
                    pattern="[0-9]*"
                    name
                    placeholder="请输入标准"
                    v-model="item.wayMoney"
                  >
                </div>
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                住勤补助
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">
                <div class="float_right justify_content" style="width: 200px;">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    name
                    placeholder="请输入天数"
                    v-model="item.subsidyT"
                  >
                  <input
                    type="number"
                    pattern="[0-9]*"
                    name
                    placeholder="请输入标准"
                    v-model="item.subsidyB"
                  >
                </div>
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="walkT">
                步行补助
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">
                <div class="float_right justify_content" style="width: 200px;">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    data="required"
                    name="walkT"
                    placeholder="请输入天数"
                    v-model="item.walkT"
                  >
                  <input
                    type="number"
                    pattern="[0-9]*"
                    data="required"
                    name="walkB"
                    placeholder="请输入标准"
                    v-model="item.walkB"
                  >
                </div>
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for id="fare">
                车船费
                <span class="span_red">*</span>
              </label>
              <input
                type="number"
                pattern="[0-9]*"
                class="form_row_right"
                name="fare"
                data="required"
                placeholder="请输入"
                v-model="item.fare"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                住宿费
                <span class="span_red"></span>
              </label>
              <input
                type="number"
                pattern="[0-9]*"
                class="form_row_right"
                name
                placeholder="请输入"
                v-model="item.homeStay"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                其他费用
                <span class="span_red"></span>
              </label>
              <input
                type="number"
                pattern="[0-9]*"
                class="form_row_right"
                name
                placeholder="请输入"
                v-model="item.otherPay"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left" for>
                合计
                <span class="span_red"></span>
              </label>
              <span
                class="form_row_right span_red"
              >{{item.tatol=item.wayDay*item.wayMoney+item.subsidyT*item.subsidyB+item.walkT*item.walkB+item.fare*1+item.homeStay*1+item.otherPay*1}}</span>
            </div>
          </div>
        </div>
        <!--行程结束-->
        <div class="form_div margin_top">
          <div class="form_row" style="justify-content: center;">
            <span class="addBtn text_algin" @click="addTravel">十添加行程</span>
          </div>
        </div>
        <div class="form_div margin_top">
          <div class="form_row">
            <label class="form_row_left" for>
              总计
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">
              <span class="float_right">{{add_tatol.toFixed(2)}}(元)</span>
            </div>
          </div>
          <div class="padding-lr">
            <span class="form_row_height huise">
              出差备注
              <span class="span_red"></span>
            </span>
          </div>
          <div class="padding-lr padding_bb">
            <textarea class="textarea" name rows="2" cols="38" placeholder="请输入出差备注" v-model="bz"></textarea>
          </div>
          <div class="bottomOver"></div>
        </div>

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
    <router-view></router-view>
  </div>
</template>

<script>
import {
  selectTime,
  progress,
  refresh,
  PopPicker,
  mustFill
} from "../../../static/utils/public.js";
export default {
  data() {
    return {
      why: "", //出差原因
      who: "", //实际报销人
      Travel: [
        {
          beginCity: "",
          endCity: "",
          wayDay: "",
          wayMoney: "",
          subsidyT: "",
          subsidyB: "",
          days: "",
          startTime: "",
          endTime: "",
          walkT: "",
          walkB: "",
          fare: "",
          homeStay: "",
          otherPay: "",
          tatol: 0,
          bz: ""
        }
      ],
      travel: "", //交通工具
      beginCity: "", //出发城市
      endCity: "", //目的城市
      wayDay: Number, //在途时间天数
      wayMoney: Number, //在途补助标准
      subsidyT: "", //住勤补助天数
      subsidyB: "", //住勤补助标准
      walkT: "", //步行补助天数
      walkB: "", //步行补助标准
      fare: "", //车船费
      homeStay: "", //住宿费
      otherPay: "", //其他费用
      isReturn: "", //是否往返
      startTime: "", //开始时间
      endTime: "", //结束时间
      bz: "",
      sureTime: "",
      days: ""
    };
  },
  computed: {
    add_tatol() {
      if (this.Travel.map(row => row.tatol) == "NaN") {
        return 0;
      } else {
        return this.Travel.map(row => row.tatol).reduce(
          (acc, cur) => parseFloat(cur) + acc,
          0
        );
      }
    }
  },
  mounted() {
    /*var that=this*/
    selectTime();
    //progress();
    //refresh();
    PopPicker("showCityPicker3");
    PopPicker("cityPicker3");
    this.getTime();
  },
  methods: {
    getTime() {
      var d = new Date();
      d = `${d.getFullYear()}-${d.getMonth() +
        1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      this.sureTime = d;
    },
    addTravel() {
      var obj = {
        beginCity: "",
        endCity: "",
        wayDay: "",
        wayMoney: "",
        subsidyT: "",
        subsidyB: "",
        startTime: "",
        endTime: "",
        walkT: "",
        walkB: "",
        fare: "",
        homeStay: "",
        otherPay: "",
        tatol: 0
      };
      //Travel[0].
      this.Travel.push(obj);
    },
    removeTravel(index) {
      this.Travel.splice(index, 1);
    },
    mustFull() {
      mustFill();
    }
  }
};
</script>

<style>
</style>