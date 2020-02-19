<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">出差报销审核</h1>
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
            <span class="form_row_right">{{why}}</span>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for>
              实际报销人
              <span class="span_red">*</span>
            </label>
            <span class="form_row_right">{{BXR}}</span>
          </div>
        </div>
        <!--出差整个行程-->
        <div v-for="(item,index) in Travel">
          <div class="form_title">
            <span class="span_15px">日期</span>
          </div>
          <div class="form_div">
            <div class="form_row">
              <label class="form_row_left huise" for>
                开始时间
                <span class="span_red">*</span>
              </label>
              <span class="form_row_right">{{item.startTime}}</span>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                结束时间
                <span class="span_red">*</span>
              </label>
              <span class="form_row_right">{{item.endTime}}</span>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                时长 (天)
                <span class="span_red"></span>
              </label>
              <span class></span>
              <span class="form_row_right">{{item.days}}</span>
            </div>
          </div>
          <div class="form_title">行程({{index+1}})</div>
          <div class="form_div">
            <div class="form_row">
              <label class="form_row_left huise" for>
                出发城市
                <span class="span_red">*</span>
              </label>
              <span class="form_row_right">{{item.beginCity}}</span>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                目的城市
                <span class="span_red">*</span>
              </label>
              <span class="form_row_right">{{item.beginCity}}</span>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                在途补助
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">
                <div class="float_right justify_content" style="width: 250px;">
                  <span>{{item.wayDay}}天</span> *
                  <span>{{item.wayMoney}}元/天</span>
                </div>
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                住勤补助
                <span class="span_red huise"></span>
              </label>
              <div class="form_row_right">
                <div class="float_right justify_content" style="width: 250px;">
                  <span>{{item.subsidyT}}天</span> *
                  <span>{{item.subsidyB}}元/天</span>
                </div>
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="walkT">
                步行补助
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">
                <div class="float_right justify_content" style="width: 250px;">
                  <span>{{item.walkT}}天</span> *
                  <span>{{item.walkB}}元/天</span>
                </div>
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for id="fare">
                车船费
                <span class="span_red">*</span>
              </label>
              <span class="form_row_right">{{item.fare}}</span>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                住宿费
                <span class="span_red"></span>
              </label>
              <span class="form_row_right">{{item.homeStay}}</span>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                其他费用
                <span class="span_red"></span>
              </label>
              <span class="form_row_right">{{item.otherPay}}</span>
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
        <div class="form_div margin_top bottom_boder">
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
          <div class="padding-lr">
            <div class="detail_bz">{{bz}}</div>
          </div>
        </div>
        <div class="form_title">审核</div>
        <div class="mui-card">
          <form class="mui-input-group">
            <div class="mui-input-row mui-radio">
              <label class="span_green">同意</label>
              <input name="radio1" type="radio" value="同意">
            </div>
            <div class="mui-input-row mui-radio">
              <label class="span_red">驳回</label>
              <input name="radio1" type="radio" value="驳回">
            </div>
          </form>
        </div>
        <div class="mui-card">
          <div class="padding-lr">
            <span class="form_row_height">
              审核备注
              <span class="span_red"></span>
            </span>
          </div>
          <div class="padding-lr padding_bb">
            <textarea name class="textarea" cols="48" placeholder="请输入意见"></textarea>
          </div>
        </div>
        <div style="text-align: center;margin-top: 15px; margin-bottom: 15px;">
          <button
            type="button"
            style="width: 80%; padding: 10px;"
            id="update"
            class="mui-btn update mui-btn-block mui-btn-primary"
          >提交</button>
        </div>
        <!--审核进度-->
        <div class="form_title">审核进度</div>
        <time-line :examInfor="examInfor"></time-line>
      </div>
    </div>
  </div>
</template>

<script>
import timeLine from "../assembly/timeLine.vue"; /*加载时间进程组件*/
export default {
  data() {
    return {
      why: "与客户洽谈", //出差原因
      BXR: "刘烨", //实际报销人
      Travel: [
        {
          beginCity: "北京市 北京市 朝阳区",
          endCity: "江苏省 南京市 秦淮区",
          wayDay: "",
          wayMoney: "",
          subsidyT: "",
          subsidyB: "",
          days: "16",
          startTime: "2016-10-26",
          endTime: "2016-11-10",
          walkT: "3",
          walkB: "230",
          fare: "1352.25",
          homeStay: "3250",
          otherPay: "",
          tatol: 0,
          bz: ""
        }
      ],
      examInfor: [
        {
          progress: "复审",
          opinion: "驳回",
          bz: "明细不清明细不清明细不清明细不清",
          time: "2018-04-03 16:46"
        },
        {
          progress: "人资审核",
          opinion: "同意",
          bz: "明细不清",
          time: "2018-04-02 09:46"
        },
        { progress: "提交申请", opinion: "", bz: "", time: "2018-04-01 20:46" }
      ],
      bz: "地区商业空白，发展空间很大",
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
  components: {
    timeLine
  },
  mounted() {
    /*var that=this*/
    this.getTime();
  },
  methods: {
    getTime() {
      var d = new Date();
      d = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
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
      this.Travel.push(obj);
    }
  }
};
</script>

<style>
.bottom_boder {
  padding-bottom: 10px;
  border-bottom: 1px #c8c7cc solid;
}
.mui-card {
  margin: 0 0 10px 0;
}
.detail_bz {
  font-size: 13px;
  color: #999;
}
.timeline_ul .timeline_li:nth-child(2) .line_icon {
  background-color: #0bbd87;
}
</style>