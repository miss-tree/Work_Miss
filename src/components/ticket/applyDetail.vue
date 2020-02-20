<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">开票详情</h1>
    </header>
    <!--头部结束-->
    <!--内容部分-->
    <div class="mui-content" id="toTop">
    	<!--回到顶部-->
    	<get-top></get-top>
    	<!--加载组件-->
    	<loading v-show="dataOver==false"></loading>
    	<!--申请详情-->
      <div class="formTable"><!-- v-show="dataOver"-->
      	<div>
      		<div class="form_div">
	          <div class="form_row">
	            <label class="form_row_left huise" id="ticketType">
	              发票类型
	              <span class="span_red">*</span>
	            </label>
	            <div class="filter-box form_row_right" id="TICKETTYPE">
	              <div class="filter-text">
	                <input class="filter-title" name="ticketType" data="required"
	                v-model="TICKETTYPE"	type="text" readonly placeholder="请选择">
	                <i class="icon icon-filter-arrow"></i>
	              </div>
	              <select name="filter" v-for="(item,index) in ticketCheck">
	                <option>{{item.text}}</option>
	              </select>
	            </div>
	          </div>
      		</div>
      	</div>
      	<div>
      		<div class="form_title">客户信息</div>
        <div class="form_div">
          <div>
          	<div class="form_row">
              <label class="form_row_left huise" id="isSend">
                是否寄存
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">
                {{ISSEND}}
              </div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                收件客户名
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.name}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise">
                收件人
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.person}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                联系电话
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.phone}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                开票标准名
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.ticketname}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" id="CLIENT">
                邮寄地址
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">{{ORDERCUSTOMERINFOR.where}}</div>
            </div>
          <div class="form_row">
            <label class="form_row_left huise" id="section">
              物流公司
              <span class="span_red"></span>
            </label>
              <div class="form_row_right">{{EXPRESS}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" for id="expressnumber">
              物流单号
              <span class="span_red"></span>
            </label>
              <div class="form_row_right">{{EXPRESSNUM}}</div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="section">
              发票类型
              <span class="span_red"></span>
            </label>
              <div class="form_row_right">{{EXPRESSTYPE}}</div>
          </div>
          </div>
        </div>
       </div>
       <div>
          <div class="form_title">订单详情</div>
          <!--客户订单-->
          <orderdetail :ORDER="ORDER"></orderdetail>
          <!--客户订单完成-->
          <div v-show="TICKETTYPE=='折扣发票'">
            <!--折扣开始-->
            <div class="form_title">折扣项目</div>
            <countdetail :DISCOUNTINFOR="DISCOUNTINFOR"></countdetail>
	          <!--折扣结束-->
          </div>
          
          <div class="margin_top"></div>
          <div class="form_div">
	          <div class="form_row">
	              <label class="form_row_left huise" id="CLIENT">
	                开票金额
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">{{tatol-DISCOUNTINFOR.tatol}}</div>
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
            <div class="bottomOver"></div>
          </div>
        <!--备注结束-->
        <div class="form_title">
	    	审核进度
	    </div>
        <time-line :examInfor="EXAMINFOR"></time-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderdetail from "./views/order-list-detail.vue"; /*退货订单详情*/
import countadd from "./views/order-discount.vue"; /*折扣添加*/
import countdetail from "./views/apply-detail.vue"; /*折扣添加*/
export default {
  data() {
    return {
    	scrollTop:0,//滚动条的高度
      TICKETTYPE: "", //退货数量类型
      ISSEND:'是',//是否寄存
      dataOver:false,//是否加载完数据
      ORDERCUSTOMERINFOR: {
        name: "",
        person: "",
        phone: "",
        ticketname: "",
        where: ""
      }, //客户信息
      EXPRESS: "EMS快递", //物流公司
      EXPRESSNUM: "EMS201905083478T5", //物流单号
      topLayer: false, //显示蒙层
      ticketCheck: [{ text: "普通发票" }, { text: "折扣发票" }], //退货下拉选项
      COMPANY: "泰恩康股份", //开票公司
      EXPRESSTYPE:'普通发票',//发票类型
      ORDER: [
        {name: "红花油",num: 2,price: 5,money: "",M_num: "",M_money: "",unit: "件"},
        {
          name: "和胃",
          num: 30,
          price: 150,
          money: "5",
          M_num: 1000,
          M_money: 1000,
          unit: "件"
        }
      ], //订单
      editOrder: {
        name: "红",
        num: 12,
        price: 6,
        money: "",
        M_num: "",
        M_money: "",
        unit: "件",
        index: ""
      }, //订单查看
      DISCOUNTORDER: [{name: "红花油",num: 598787884, money: 1000,type:'项目费用'},
      {name: "和胃整肠丸",num: 560336564, money: 3500,type:'项目费用'}], //折扣产品单
      selectPro: "", //选择的退货产品
      DISCOUNTINFOR:{tatol:1000,arr:[{name: "红花油",num: 598787884, money: 1000,type:'项目费用'}]},
      BZ: "请尽快审批，客户月底报销完就能立即回款，", //备注
      EXAMINFOR:[{progress:'总监审核',opinion:'同意',bz:'同意开票',time:'2018-04-03 16:50'},
				{progress:'复审',opinion:'同意',bz:'',time:'2018-04-03 16:23'},
				{progress:'财务审核',opinion:'同意',bz:'',time:'2018-04-02 09:16'},
				{progress:'提交申请',opinion:'',bz:'',time:'2018-04-01 20:42'}],
    };
  },
  components: {countadd,orderdetail,countdetail  },
  computed: {
    tatol() {//订单金额
      if (this.ORDER.length == 0) {
        return 0;
      } else {
        return this.ORDER.map(row => row.money).reduce((acc, cur) => {
          return parseFloat(cur) + acc;
        });
      }
    },
  },
  mounted() {
    var that = this;
    $("#TICKETTYPE").selectFilter({
      callBack: function(val) {
        that.TICKETTYPE = val;
      }
    });
    that.setLoading()
    window.addEventListener('scroll', that.getScrollTop)
  },
  methods: {
    applyAjax() {//请求客户数据
      axios.get(api).then(res=>{})
    },
    setLoading(){//假装在加载
    	setTimeout(()=>{
    		this.dataOver=true;
    		this.ORDERCUSTOMERINFOR= {
        name: "华润医药控股有限公司",
        person: "翁绮梅",
        phone: "15846925899",
        ticketname: "北京华润医药控股",
        where: "北京王府井"
      }
    	},3000)
    },
    getToTop(){//回到顶部
    	const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 50)
    },
    getScrollTop(){//获取滚动高度
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    }
  }
};
</script>
