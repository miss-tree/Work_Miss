<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">药店流向详情</h1>
    </header>
    <!--头部结束-->
    <!--内容部分-->
    <div class="mui-content" id="toTop">
    	<!--回到顶部-->
    	<get-top></get-top>
    	<!--加载组件-->
    	<loading v-show="dataOver==false"></loading>
    	<!--申请详情-->
      <div class="formTable">
      	<div>
      		<div class="form_div">
	          <div class="form_row">
	            <label class="form_row_left huise" id="ticketType">
	             		 流向类型
	              <span class="span_red"></span>
	            </label>
	            <div class="filter-box form_row_right" id="FLOWTYPE">
	              <div class="filter-text">
	                <input class="filter-title" name="ticketType" data="required"
	                v-model="FLOWTYPE"	type="text" readonly placeholder="请选择">
	                <i class="icon icon-filter-arrow"></i>
	              </div>
	              <select name="filter" v-for="(item,index) in flowCheck">
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
          	<div v-if="FLOWTYPE=='一级商'">
	          	<div class="form_row">
	              <label class="form_row_left huise" id="isSend">
	             	一级商名称
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">
	                {{comA}}
	              </div>
	            </div>
	            <div class="form_row">
	              <label class="form_row_left huise" id="CLIENT">
	                	往来客户
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">{{cool}}</div>
	            </div>
	            <div class="form_row">
	              <label class="form_row_left huise">
	                	客户类型
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">{{khType}}</div>
	            </div>
          	</div>
            <div v-else-if="FLOWTYPE=='二级商'">
	          	<div class="form_row">
	              <label class="form_row_left huise" id="isSend">
	             	一级商名称
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">
	                {{comA}}
	              </div>
	            </div>
	            <div class="form_row">
	              <label class="form_row_left huise" id="CLIENT">
	                	二级商名称
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">{{comB}}</div>
	            </div>
	            <div class="form_row">
	              <label class="form_row_left huise">
	                	药店名称
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">{{store}}</div>
	            </div>
          	</div>
          	<div v-else-if="FLOWTYPE=='重要连锁'">
	          	<div class="form_row">
	              <label class="form_row_left huise" id="isSend">
	             	连锁名称
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">
	                {{comC}}
	              </div>
	            </div>
	            <div class="form_row">
	              <label class="form_row_left huise">
	                	药店名称
	                <span class="span_red"></span>
	              </label>
	              <div class="form_row_right">{{store}}</div>
	            </div>
          	</div>
            <detail :INFOR="INFOR"></detail>
          </div>
        </div>
       </div>
      </div>
      <div style="height: 50px;"></div>
    </div>
  </div>
</template>

<script>
//import "../../../static/utils/selectFilter.js"; /*自定义下拉框*/
//import "../../../static/css/selectFilter.css";
import getTop from "../../assembly/getTop.vue"; /*回到顶部*/
import loading from "../../assembly/loading.vue"; /*加载弹窗*/
import detail from "./flowViews/store-flow-detail.vue"; /*加载弹窗*/
export default {
  data() {
    return {
    	dataOver:false,//假装加载
    	TICKETTYPE:"",//流向类型
    	FLOWTYPE:"",
    	flowCheck: [{ text: "一级商" }, { text: "二级商" }, { text: "重要连锁" }],
    	comA:"国药控股股份有限公司",//一级商
    	comB:"同仁堂",//二级商
    	comC:"大参林dashenglin",//重要连锁
    	cool:"华润医药控股有限公司",//往来客户
    	khType:"一级",//客户类型
    	store:"益丰大药房华夏店",//药店名称
    	INFOR:{
    		name:"和胃整肠丸",
    		price: 35,
    		num: 138,
    		money:4830,
    		unit:"瓶",
    		norms:"50粒/瓶",
    		batch:"TEK-465496412",
    		otc:"刘波",
    		starTime:"2019-08-22",
    		upTime:"2019-08-23",
    	}
    };
  },
  components: {getTop,loading,detail},
  mounted() {
    var that = this;
    $("#FLOWTYPE").selectFilter({
      callBack: function(val) {
        that.FLOWTYPE = val;
      }
    });
    that.setLoading()
  },
  methods: {
    applyAjax() {//请求客户数据
      axios.get(api).then(res=>{})
    },
    setLoading(){//假装在加载
    	setTimeout(()=>{
    		this.dataOver=true;
    	},800)
    }
  }
};
</script>

<style lang="scss">
	
</style>