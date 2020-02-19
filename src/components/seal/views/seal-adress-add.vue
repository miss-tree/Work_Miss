<template>
  <div v-show="showAct">
    <!--蒙层-->
    <div class="mongolia"  @click="closeAlert"></div>
    <div>
      <div class="form_div">
        <!--添加弹窗-->
        <div class="alert_div" >
          <div>
            <div class="form_title">联系人关联</div>
            <div class="content" style="padding-bottom: 60px;">
              <div class="formTable">
                <div class="form_div">
                	<!--搜索框-->
                	 <!--活动列表-->
                	<div id="dateTable">
                		<div class="Row">
                			<div class="col_5"></div>
                			<div class="col_20">姓名</div>
				            <div class="col_20">电话</div>
				            <div class="col_50">地址</div>
                		</div>
                		<div style="height: 250px" id="changeRadio">
	                		<div class="row" v-for="(item,index) in ORDER">
					            <div class="col_5 text_algin" @click="setIsCheck(index)">
						    		<input class="myRadio" type="radio"   name="isPlay"/>
					            </div>
					            <div>
					            	<span>{{item.person}}</span>
					            </div>
					            <div class="col_25">
					              <div >
					            	{{item.phone}}
					              </div>
					            </div>
	                			<div class="col_50" style="text-align: left;">
					              <span>{{item.where}}</span>
					            </div>
	                		</div>
                		</div>
                	</div> 
                </div>
              </div>
            </div>
            <div class="alertMidBottom">
              <button
                class="mui-btn mui-btn-block mui-btn-primary alertBtn"
                @click="getActInfor()" style="margin-top: 0;"
              >添加</button>
            </div>
          </div>
        </div>
        <!--添加弹窗结束-->
      </div>
    </div>
  </div>
</template>

<script>
	import "../../../../static/css/dateTable.css"
	export default {
	  data() {
	    return {
	    	message:{
		    	showInfor:this.showAct,
		    	newInfor:{},
	    	}
	    };
	  },
	  props: ["showAct","ORDER"],
	  methods: {
	    closeAlert() {//关闭蒙层
	      this.message.showInfor = false;
	      this.$emit("getInfor",this.message)
	    },
	    getActInfor(index){//
	        this.message.showInfor = false;
	        this.$emit("getInfor",this.message)
	    },
	    setIsCheck(index){//点击选择收货信息
	    	this.message.newInfor=this.ORDER[index]
	    },
	  }
	};
</script>

<style>
</style>