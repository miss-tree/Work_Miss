<template>
  <div v-show="showDetail">
    <div class="mongolia"  @click="closeAlert"></div>
    <!--蒙层-->
    <div>
      <div class="form_div">
        <!--添加弹窗-->
        <div class="alert_div" >
          <div>
            <div class="form_title">活动详情</div>
            <div class="content" style="padding-bottom: 70px;">
              <div class="formTable">
              	 <div class="form_div">
	                <div class="form_row">
	                  <label class="form_row_left huise" for>
	                    	活动主题
	                    <span class="span_red"></span>
	                  </label>
	                  <div class="form_row_right">{{CONTACTINFOR.theme}}</div>
	                </div>
	                <div class="form_row">
	                  <label class="form_row_left huise" for>
	                  	申请人
	                    <span class="span_red"></span>
	                  </label>
	                  <div class="form_row_right">{{CONTACTINFOR.person}}</div>
	                </div>
	                <div class="form_row">
	                  <label class="form_row_left huise" for>
	                  	申请日期
	                    <span class="span_red"></span>
	                  </label>
	                  <div class="form_row_right">{{CONTACTINFOR.time}}</div>
	                </div>
	                <div class="form_row">
	                  <label class="form_row_left huise" for>
	                   	活动金额
	                    <span class="span_red"></span>
	                  </label>
	                  <div class="form_row_right">{{CONTACTINFOR.budget}}</div>
	                </div>
	                <div class="form_row">
	                  <label class="form_row_left huise" for>
	                   完整报销
	                    <span class="span_red"></span>
	                  </label>
	                  <div class="form_row_right" v-show="CONTACTINFOR.isCheck==true">是</div>
	                  <div class="form_row_right" v-show="CONTACTINFOR.isCheck==false">否</div>
	                </div>
	                <div class="form_row">
	                  <label class="form_row_left huise" for>
	                   	 活动备注
	                    <span class="span_red"></span>
	                  </label>
	                  <div class="form_row_right">{{CONTACTINFOR.bz}}</div>
	                </div>
                 </div>
              </div>
            </div>
            <div class="alertMidBottom">
              <button
                class="mui-btn mui-btn-block mui-btn-primary alertBtn"
                @click="saveOrder()"
              >关闭</button>
            </div>
          </div>
        </div>
        <!--添加弹窗结束-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    	isLook:this.showDetail,
    	newInfor:{},
      ORDER: [
		{
			id:"325451545",
			num: "9147082635",
			theme: "公司电脑配置",
			person: "兰冰真",
			time: "2019-06-12",
			bz: "人生恰似一场修行",
			budget:5000,
			isCheck: false,
		}]
    };
  },
  props: ["showDetail","CONTACTINFOR"],
  methods: {
    closeAlert() {//关闭蒙层
      this.isLook = false;
      this.$emit("setShowDet",this.isLook)
    },
    saveOrder() {//关闭
    	this.closeAlert()
    }
  }
};
</script>

<style>
</style>