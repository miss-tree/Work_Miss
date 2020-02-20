<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <h1 class="mui-title">设置</h1>
    </header>
    <!--底部 选项卡-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="bottom-bar" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="bottom-bar" to="/newsTable">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="bottom-bar active" to="/setUp">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
      <router-link class="bottom-bar" to="/PersonCenter">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">个人中心</span>
      </router-link>
    </nav>
    <!--内容部分-->
    <div class="mui-content">
      <div class="formTable">
        <div class="form_div">
          <div class="form_row">
            <label class="form_row_left huise" id="company">
             	 角色
              <span class="span_red"></span>
            </label>
            <div class="filter-box form_row_right" id="Role">
              <div class="filter-text">
                <input class="filter-title" type="text" readonly placeholder="请选择">
                <i class="icon icon-filter-arrow"></i>
              </div>
              <select name="filter" v-for="(item,index) in roleArr">
                <option>{{item.text}}</option>
              </select>
            </div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="type">
            	  权限
              <span class="span_red"></span>
            </label>
            <div class="alertRow" style="margin-top: 5px;">
            	<div class="form_row_right flex justify_content" style="flex-wrap: wrap;" id="checkPower">
	              <label>
	                <input type="checkbox" name="powerData" value="订单申请" v-model="POWERDATA">
	                <button type="button" class="row_button">订单申请</button>
	              </label>
	              <label>
	                <input type="checkbox" name="powerData" value="报销管理" v-model="POWERDATA">
	                <button type="button" class="row_button">报销</button>
	              </label>
	              <label>
	                <input type="checkbox" name="powerData" value="薪资" v-model="POWERDATA">
	                <button type="button" class="row_button">薪资</button>
	              </label>
	              <label>
	                <input type="checkbox" name="powerData" value="请假" v-model="POWERDATA">
	                <button type="button" class="row_button">请假</button>
	              </label>
	              <label>
	                <input type="checkbox" name="powerData" value="异动管理" v-model="POWERDATA">
	                <button type="button" class="row_button">异动</button>
	              </label>
	              <label>
	                <input type="checkbox" name="powerData" value="退货申请" v-model="POWERDATA">
	                <button type="button" class="row_button">退货</button>
	              </label>
	              <label>
	                <input type="checkbox" name="powerData" value="开票申请" v-model="POWERDATA">
	                <button type="button" class="row_button">开票</button>
	              </label>
	              <label>
	                <input type="checkbox" name="powerData" value="终端管理" v-model="POWERDATA">
	                <button type="button" class="row_button">终端</button>
	              </label>
	              <label>
	                <input type="checkbox" name="powerData" value="印章管理" v-model="POWERDATA">
	                <button type="button" class="row_button">印章</button>
	              </label>
	            </div>
            </div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="part">
              	事业部
              <span class="span_red"></span>
            </label>
            <div class="form_row_right"></div>
          </div>
          <div class="form_row">
            <label class="form_row_left huise" id="title">
              	标题
              <span class="span_red"></span>
            </label>
            <div class="form_row_right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ROLE: "",
      roleArr: [
        { text: "员工" },
        { text: "中级管理员" },
        { text: "高层管理员" },
        { text: "超级管理员" }
      ],
      POWERDATA:[],
    };
  },
    watch:{
    	POWERDATA(newVal,oldVal){
    		var USERINFOR=this.$store.state.USER_ROLE
    		if(oldVal.length>newVal.length){
    			oldVal.forEach((el,index)=>{
    				if(newVal.indexOf(el)<0){//选出去掉的模块
    					var delMoudle=oldVal[index]
    					USERINFOR.forEach((el,index)=>{
    						if(el.title==delMoudle){
    							el.title=''
    						}
    					})
    					this.$store.commit("setUSER_ROLE",{
    						USER_ROLE:USERINFOR
    					})
    				}
    			})
    		}else{
    			newVal.forEach((el,index)=>{
    				if(oldVal.indexOf(el)<0){//选出增加的模块
    					//console.log(newVal[index])
    					var addMoudle=newVal[index]
    					USERINFOR.forEach((el,index)=>{
    						if(el.name==addMoudle){
    							el.title=addMoudle
    						}
    					})
    					this.$store.commit("setUSER_ROLE",{
    						USER_ROLE:USERINFOR
    					})
    				}
    			})
    		}
    	}
    },
  mounted() {
    var that = this;
    $("#Role").selectFilter({
      callBack: function(val) {
        that.ROLE = val;
      }
    });
    this.POWERDATA=that.getPower()
  },
  methods:{
    	getPower(){
    		var powerArr=[]
    		this.$store.state.USER_ROLE.forEach((el,index)=>{
    			return powerArr.push(el.title)
    		})
    		return powerArr
    	},
  	setPower(){
  	}
  }
};
</script>
