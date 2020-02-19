<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">订单签收</h1>
    </header>
    <!--头部结束-->
    <div class="mui-content">
      <div class="formTable">
        <div class="form_title">客户信息</div>
        <div class="form_div">
          <div class="form_row">
            <label class="form_row_left huise" id="WHERE">
              	区域
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{WHERE}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="CLIENT">
              	客户名称
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{CLIENT}}</div>
          </div>

          <div class="form_row">
            <label class="form_row_left huise" for>
            	  订单号
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">TEK-5896545621</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for>
              	促销活动
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{isPlay}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="section">
              	部门
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{SECTION}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="company">
              	开票公司
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{COMPANY}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="company">
            	  物流公司
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">德邦物流</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="company">
            	  物流单号
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">SD-3487965475</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="company">
             	 运输方式
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">汽运</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="company">
             	 发货时间
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">2018-11-02</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="company">
             	 预计时间
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">2018-11-05</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="company">
             	签收状态
              <span class="span_red">*</span>
            </label>
            <div class="filter-box form_row_right" id="filter-box">
              <div class="filter-text">
                <input class="filter-title" type="text" readonly placeholder="请选择">
                <i class="icon icon-filter-arrow"></i>
              </div>
              <select name="filter" v-for="(item,index) in signStateCheck">
                <option>{{item.text}}</option>
              </select>
            </div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="company">
              	签收时间
              <span class="span_red">*</span>
            </label>
            <input
              type="text"
              id="signTime"
              data-options='{"type":"date"}'
              class="btn mui-btn mui-btn-block form_row_right"
              placeholder="选择日期 ..."
              v-model="SIGNTIME"
            >
          </div>
        </div>
        <!--选项卡-->
        <div>
          <div class="tabHead">
            <div @click="curIndex=0" :class="{'active':curIndex==0}">
              <span>订单详情</span>
            </div>
            <div @click="curIndex=1" v-show="SIGNSTATE=='破损签收'" :class="{'active':curIndex==1}">
              <span>破损签收</span>
            </div>
            <div @click="curIndex=2" v-show="SIGNSTATE=='拒绝签收'" :class="{'active':curIndex==2}">
              <span>拒绝签收</span>
            </div>
            <div @click="curIndex=3" :class="{'active':curIndex==3}">
              <span>收货信息</span>
            </div>
            <div @click="curIndex=4" :class="{'active':curIndex==4}">
              <span>资信额度</span>
            </div>
          </div>
          <!--客户订单-->
          <div v-show="curIndex==0">
            <lookdetail :ORDER="ORDER" :total="total"></lookdetail>
          </div>
          <!--客户订单完成-->
          <div v-show="SIGNSTATE=='破损签收'">
              <!--破损签收-->
            <div v-show="curIndex==1">
              <damagedsign :PMUSE="PMUSE" :ORDERPRO="ORDERPRO"></damagedsign>
            </div>
              <!--破损签收结束-->
          </div>
          <div v-show="SIGNSTATE=='拒绝签收'">
            <div v-show="curIndex==2">
              <!--拒绝收货-->
              <div v-show="SIGNSTATE=='拒绝签收'">
                <div class="form_div bottom_boder">
                  <div class="padding-lr">
                    <span class="form_row_height huise">
                      	拒绝收货备注
                      <span class="span_red"></span>
                    </span>
                  </div>
                  <div class="padding-lr padding_bb">
                    <textarea
                      class="textarea"
                      name
                      rows="1"
                      cols="38"
                      placeholder="请输入订单备注"
                      v-model="JJBZ"
                    ></textarea>
                  </div>
                </div>
              </div>
              <!--拒绝收货结束-->
            </div>
          </div>
            <!--收货信息-->
          <div v-show="curIndex==3">
            <orderwhere :REINFOR="REINFOR"></orderwhere>
          </div>
            <!--资信额度-->
          <div v-show="curIndex==4">
            <credit-line :KEHUINFOR="KEHUINFOR"></credit-line>
          </div>
        </div>
        <!--备注-->
        <div class="form_title">备注</div>
        <div class="form_div bottom_boder">
          <div class="padding-lr">
            <span class="form_row_height huise">
           	   备注
              <span class="span_red"></span>
            </span>
          </div>
          <div class="padding-lr padding_bb">
            <div class="detail_bz">{{BZ}}</div>
          </div>
        </div>
        <!--物流进度-->
        <div class="form_title">物流进度</div>
        <time-line :examInfor="pressInfor"></time-line>
        <div class="submitBtn">
	    			<button type="button" style="width: 80%; padding: 10px;" id="update"  @click="mustFull"
	    				class="mui-btn update mui-btn-block mui-btn-primary">提交</button>
	    		</div>
      </div>
    </div>
  </div>
</template>

<script>
	import "../../../static/utils/selectFilter.js"; /*下拉选择框*/
	import "../../../static/css/selectFilter.css";
	import {
	  selectTime,
	  PopPicker,
	  mustFill,
	  selecTion
	} from "../../../static/utils/public.js";
	import timeLine from "../assembly/timeLine.vue"; /*加载时间进程组件*/
	import creditLine from "./views/credit-line.vue"; /*资信额度*/
	import lookdetail from "./views/look-order-detail.vue"; /*订单信息*/
	import damagedsign from "./views/order-damaged-sign.vue"; /*破损签收*/
	import orderwhere from "./views/order-where.vue"; /*订单收货信息*/
	export default {
	  data() {
	    return {
	      topLayer: false, //蒙层是否显示
	      CLIENT: "大参林dashenlin", //客户名称
	      showPicker: false,
	      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
	      showInfor: false, //展示选择客户后显示编辑信息
	      isPlay: "是", //是否促销活动
	      WHERE: "广东", //区域
	      SECTION: "销售部", //选择的部门
	      COMPANY: "泰恩康股份", //开票公司
	      curIndex: 0,
	      ORDER: [
	        {
	          name: "红花油",
	          num: 12,
	          price: 5,
	          money: 60,
	          M_num: 10,
	          M_money: 100,
	          unit: "箱"
	        },
	        {
	          name: "和胃整肠丸",
	          num: 35,
	          price: 55,
	          money: 1925,
	          M_num: 35,
	          M_money: 3500,
	          unit: "件"
	        }
	      ], //订单
	      SIGNSTATE: "", //订单状态
	      signStateCheck: [
	        { text: "正常签收" },
	        { text: "破损签收" },
	        { text: "拒绝签收" }
	      ], //签收选择
	      ORDERPRO: [{ name: "红花油", Pnumber: "5", bz: "", index: "" }], //破损列表
	      //editOrder:{name:'红',num:12,price:6,money:'',M_num:'',M_money:'',unit:'件',index:''},//订单添加编辑
	      BZ: "客户要求提供产品最新批次", //备注
	      //editShow:false,//切换添加和编辑按钮
	      KEHUINFOR: {
	        PART: "销售部", //部门
	        LIMIT: "50000", //固定额度
	        TEMPORARY: "2000", //临时额度
	        RECEVIE: "18800", //应收款
	        WAITmoney: "3800", //待核销金额
	        GOODSmoney: "15000", //发货金额
	        BALANCE: "50000"
	      }, //余额
	      REINFOR: [
	        {
	          person: "黎放",
	          phone: 15699874568,
	          where: "广州市天河区棠下336号",
	          otc: "袁芳",
	          otcPhone: 15894652388,
	          bz: ""
	        }
	      ],
	      //whereShow:false,//收货弹窗显示
	      JJBZ: "", //拒绝收货备注
	      SIGNTIME: "", //签收时间
	      editInfor: {
	        person: "",
	        phone: "",
	        where: "",
	        otc: "",
	        otcPhone: "",
	        bz: "",
	        index: ""
	      }, //收货信息编辑
	      pressInfor: [
	        { progress: "物流签收", opinion: "", bz: "", time: "2018-04-07 16:57" },
	        { progress: "物流配送", opinion: "", bz: "", time: "2018-04-03 16:23" },
	        { progress: "仓库配货", opinion: "", bz: "", time: "2018-04-02 09:16" },
	        { progress: "配货准备", opinion: "", bz: "", time: "2018-04-01 20:42" }
	      ], //物流进程
	      params: "" //获取传递的参数
	    };
	  },
	  components: {
	    timeLine,
	    creditLine,
	    lookdetail,
	    damagedsign,
	    orderwhere
	  },
	  watch: {
	    SIGNSTATE(newVal, oldVal) {
	      if (newVal == "破损签收") {
	        this.curIndex = 1;
	      } else if (newVal == "拒绝签收") {
	        this.curIndex = 2;
	      } else if (newVal == "正常签收") {
	        this.curIndex = 0;
	      }
	    }
	  },
	  computed: {
	    PMUSE() {
	      //获取订单的产品
	      var obj = {},
	        arr = [];
	      this.ORDER.forEach((el, index) => {
	        var obj = {};
	        obj.text = el.name;
	        arr.push(obj);
	      });
	      /*方法二:arr = this.ORDER.map(item =>({text: item.name}))*/
	      return arr;
	    },
	    total() {
	      //计算总价
	      if (this.ORDER.length == 0) {
	        return 0;
	      } else {
	        return this.ORDER.map(row => row.money).reduce((acc, cur) => {
	          return parseFloat(cur) + acc;
	        });
	      }
	    }
	  },
	  created() {
	    //获取传入的参数
	    //如果使用query方式传入的参数使用this.$route.query 接收
	    //如果使用params方式传入的参数使用this.$router.params接收
	    var param = this.$route.query;
	    // var param = this.$route.params;
	    this.params = param;
	  },
	  mounted() {
	    var that = this;
	    selectTime();
	    $("#filter-box").selectFilter({
	      //获取签收状态
	      callBack: function(val) {
	        //返回选择的值
	        console.log(val + "-是返回的值");
	        that.SIGNSTATE = val;
	      }
	    });
	  },
	  methods: {
	    applyAjax() {//请求客户数据
	      return new Promise((resolve, reject) => {
	        var xhr = new XMLHttpRequest();
	        xhr.open("get", basurl);
	        xhr.send();
	        xhr.addEventListener("readystatechange", function() {
	            if (xhr.readyState == 4 && xhr.status == 200) {
	              resolve(xhr.response);
	            }
	         }).then(res => {
	            this.KEHUINFOR = JSON.parse(res).data;
	          });
	      });
	    },
	    mustFull() {//必填
	      var isOk = mustFill();
	      if (isOk.length == 0) {
	        console.log("hi");
	      }
	    }
	  }
	};
</script>

<style>
</style>