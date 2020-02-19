<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">出差报销详情</h1>
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
            <span class="form_row_right">{{who}}</span>
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
                <div class="float_right justify_content">
                  <span>{{item.wayDay}}天</span> *
                  <span>{{item.wayMoney}}元/天</span>
                </div>
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                住勤补助
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">
                <div class="float_right justify_content">
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
                <div class="float_right justify_content">
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
        <!--<div class="mui-card">
					<form class="mui-input-group">
						<div class="mui-input-row mui-radio">
							<label class="span_green">同意</label>
							<input name="radio1" type="radio">
						</div>
						<div class="mui-input-row mui-radio">
							<label  class="span_red">驳回</label>
							<input name="radio1" type="radio">
						</div>
					</form>
				</div>
	    		<div style="text-align: center;margin-top: 15px; margin-bottom: 15px;">
	    			<button type="button" style="width: 80%; padding: 10px;" id="update"
	    				class="mui-btn update mui-btn-block mui-btn-primary">提交</button>
        </div>-->
        <!--审核进度-->
        <div class="form_title">审核进度</div>
        <div class="time_line_div" style="margin-bottom: 30px;">
          <ul class="timeline_ul">
            <li class="timeline_li" v-for="(item,index) in examInfor">
              <div class="line"></div>
              <div class="line_icon line_icon--large" :class="index==0?'line_icon--primary':''">
                <i class="timeline_li__icon el-icon-more" v-show="index==0"></i>
              </div>
              <div class="line_right">
                <div class="line_content">
                  {{item.progress}}
                  <span class v-show="item.bz!=''">
                    审核意见：
                    <span :class="item.opinion=='同意'?'span_green':'span_red'">{{item.opinion}}</span>
                  </span>
                  <span class v-show="item.bz!=''">审核备注：{{item.bz}}</span>
                </div>
                <div class="timeline_li__timestamp is-bottom">{{item.time}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//	import {selectTime,progress,refresh} from '../../../static/utils/public.js'
export default {
  data() {
    return {
      why: "与客户洽谈", //出差原因
      who: "刘烨", //实际报销人
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
      bz:
        "地区商业空白，发展空间很大,地区商业空白，发展空间很大地区商业空白，发展空间很大地区商业空白，发展空间很大",
      examInfor: [
        {
          progress: "总监审核",
          opinion: "驳回",
          bz: "明细不清",
          time: "2018-04-03 16:50"
        },
        {
          progress: "复审",
          opinion: "驳回",
          bz: "明细不清明细不清明细不清明细不清",
          time: "2018-04-03 16:23"
        },
        {
          progress: "人资审核",
          opinion: "同意",
          bz: "明细不清",
          time: "2018-04-02 09:16"
        },
        { progress: "提交申请", opinion: "", bz: "", time: "2018-04-01 20:42" }
      ],
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
  created() {//获取传入的参数
    //如果使用query方式传入的参数使用this.$route.query 接收
    //如果使用params方式传入的参数使用this.$router.params接收
    var param = this.$route.query;
    // var param = this.$route.params;
    this.params = param;
  },
  mounted() {
    /*var that=this*/
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
      this.Travel.push(obj);
    }
  }
};
</script>

<style>
</style>