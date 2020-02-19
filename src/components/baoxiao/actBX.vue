<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">活动报销</h1>
    </header>
    <!--头部结束-->
    <div class="mui-content">
      <div class="formTable">
        <div class="form_div">
          <div class="form_row">
            <label class="form_row_left huise" for>
              报销编号
              <span class="span_red"></span>
            </label>
            <div class="form_row_right">{{COMNUMBER}}</div>
          </div>
          <formbase :list='testArr'></formbase>
          <div class="form_row">
              <label class="form_row_left huise" for>
                报销时间
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                id="comBX"
                data-options='{"type":"date"}'
                class="btn mui-btn-block form_row_right"
                placeholder="选择日期 ..."
                v-model="BXTIME"
              >
            </div>
            <div class="form_row">
	            <label class="form_row_left huise" for>
	              活动
	              <span class="span_red">*</span>
	            </label>
	            <div class="form_row_right" id="rightBtn">
	            	<div class="mui-btn mui-btn-primary" @click="alertActivity">关联活动</div>
	            </div>
	        </div>
	        <!--活动关联弹出-->
	        <addactivity :showAct="showAct" @getShowAct="getShowAct" @setInfor="getINFOR"></addactivity>
	        <div class="form_row">
	            <label class="form_row_left huise" for>
	              关联活动
	              <span class="span_red"></span>
	            </label>
	            <div class="form_row_right" >
	            	<div style="color: #ddd;" v-show="isGetInfor==false">
	            		请先关联活动
	            	</div>
	            	<div  v-show="isGetInfor!=false" @click="lookAct">
	            		活动主题：{{CONTACTINFOR.theme}}
	            	</div>
	            </div>
	        </div>
	        <!--活动详情-->
	        <actdetail  :showDetail="showDetail" :CONTACTINFOR="CONTACTINFOR" @setShowDet="getShowDetail"></actdetail>
        </div>
       <div>
        <!--整个报销项目-->
        <comform :ACTINFOR="ACTINFOR" :CONTACTINFOR="CONTACTINFOR"></comform>
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

        <div class="submitBtn">
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
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
	import formbase from "./views/form-module"/*form的input模板*/
	import addactivity from "./views/alert-activity.vue"/*弹出活动列表*/
	import actdetail from "./views/alert-activity-detail"/*弹出活动列表*/
	import comform from "./views/activity-BX.vue"/*报销模板*/
import {
  selectTime,
  getTime,
  mustFill
} from "../../../static/utils/public.js";
export default {
  data(){
    return {
      COMNUMBER: "TEK2156584455", //报销编号
      BXR: "", //实际报销人
      testArr:[{name:'实际报销人',isisMust:true,inpt:''}],
      BXTIME:'',//报销时间
      showAct:false,//弹出活动关联
      getAct:false,//是否选择了关联的活动
      showDetail:false,//弹出关联活动详情
      isGetInfor:false,//是否选择了活动
      CONTACTINFOR:{num:'',theme:'',person:'',time:'',bz:'',isCheck:'',budget:'',},//关联 的活动
      ACTINFOR: [
        {
          cost: "",
          numSheets: "",
          subject: "",
          money: "",
          useType: '',
          bxmoney:'',
          tatol:0,
          bz: ""
        }
      ],
      bz: "",
      sureTime: "",
      days: ""
    };
  },
  components:{formbase,comform,addactivity,actdetail},
  watch:{
  	CONTACTINFOR(newVal,oldVal){
  		console.log(newVal.theme)
  		if(newVal.theme!=''){
  			this.isGetInfor=true
  		}
  	}
  },
  computed: {
    add_tatol() {
        return this.ACTINFOR.map(row => row.tatol).reduce(
        	(acc, cur) => parseFloat(cur) + acc,0);
    }
  },
  mounted() {
    selectTime();
  },
  methods: {
    alertActivity(){//关联活动弹出
    	this.showAct=true
    },
    lookAct(){
    	this.showDetail=true
    },
    getShowAct(showInfor){
    	this.showAct=showInfor
    },
    getINFOR(newInfor){
    	this.CONTACTINFOR=newInfor
    },
    getShowDetail(isLook){
    	this.showDetail=isLook
    },
    mustFull() {
      var isOk=mustFill();
      if(isOk.length==0){
      	console.log('输入完成')
      	this.sureTime=getTime()
      }
    }
  }
};
</script>

<style>
#rightBtn .mui-btn{
	line-height: 32px;
	/*vertical-align: baseline;*/
	color: #fff;
    border: 1px solid #6596cc;
    background-color: #6596cc;
}
</style>