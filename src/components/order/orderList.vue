<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">订单申请列表</h1>
    </header>
    <!--头部结束-->
    <div class="mui-content">
      <!--搜索框-->
      <div class="tableSearch">
        <div style="width: 70%;">
          <input type="text" name id="search" value placeholder="请输入关键字(代码联想)">
          <!--<i class="iconfont icon-sousuo3"></i>-->
        </div>
        <div class="searchBtn" @click="alert()" style="width: 60px;">搜索</div>
        <div style="margin-left: 15px;" @click="alert()">
          <i
            class="iconfont icon-fenxiaosousuo"
            style="color: #fff;display: inline-block; font-size: 30px;margin-top: 5px;"
          ></i>
        </div>
      </div>
      <div style="height: 51px;"></div>
      <!--弹出搜索框-->
      <search :alertShow="alertShow" @setInfor="getInfor"></search>
      <!--搜索框结束-->
      <!--订单列表-->
      <div class="listRow" v-for="(item,index) in ORDERLIST" @click="rouerTo(item.id,index)">
        <div>
          <div class="huise">{{item.name}}</div>
          <div class="huise">{{item.orderNum}}</div>
          <div class="huise">{{item.person}}</div>
        </div>
        <div>
        	<div class="textRight " :class="{span_green:item.state=='通过',span_red:item.state=='未通过'}">{{item.state}}</div>
          <div class="textRight">{{item.money}}</div>
          <div class="textRight huise">{{item.dateTime}}</div>
        </div>
      </div>
      <!--订单列表结束-->
    </div>
  </div>
</template>

<script>
import {selectTime,getTime,getDate,DateAdd, mustFill,selecTion} from "../../../static/utils/public.js";
import search from "./views/order-list-search.vue"
export default {
  data() {
    return {
      alertShow: false,
      STARTDATE: "", //开始时间
      ENDDATE: "", //结束时间
      ISCHECK: "", //是否活动
      CHECKTIME: "", //选择的时间
      sectionArr: [
        { text: "销售部" },
        { text: "电商部" },
        { text: "OTC推广部" },
        { text: "大KA部" },
        { text: "财务部" },
        { text: "市场部" },
        { text: "财务组" }
      ],
      SECTION: "", //选择的部门
      CHECKSTATE: [], //选择的状态
      sureTime: "", //获取的时间
      ORDERLIST: [
        {
          name: "国药控股股份有限公司",
          orderNum: "TEK190712HW33",
          money: "￥28450",
          state: "通过",
          person: "黎放",
          dateTime: "2019-07-12",
          id: 758961
        },
        {
          name: "华润医药控股有限公司",
          orderNum: "TEK190701WG451",
          money: "￥120000",
          state: "未通过",
          person: "刘禅",
          dateTime: "2019-07-01",
          id: 894355444
        },
        {
          name: "华润医药控股有限公司",
          orderNum: "TEK170701XX658",
          money: "￥8000",
          state: "待审核",
          person: "吕布",
          dateTime: "2017-07-01",
          id: 98796331854
        }
      ],
      comArr:[ { text: "泰恩康股份" },
        { text: "马鞍山天福康" },
        { text: "电商公司" },
        { text: "安徽维泰利" },]
    };
  },
  components: {
  	search,
  },
  mounted() {
    //var that=this
    this.$data.sureTime = getTime();
    selectTime();
    selecTion("part", this.sectionArr);
    selecTion("compony", this.comArr);
  },
  methods: {
    rouerTo(id, index) {//页面跳转
      this.$router.push({ path: "/orderDetail", query: {id: id}});
		},
		alert() { //弹出弹窗
			this.alertShow = !this.alertShow;
		},
		getInfor(v){
			this.alertShow=v
		}
  }
};
</script>

<style>
.form_row_right label {
  width: 30%;
  position: relative;
}
</style>