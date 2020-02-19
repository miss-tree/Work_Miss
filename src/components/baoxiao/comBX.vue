<template>
  <div>
    <!--头部-->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">普通报销</h1>
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
        </div>
        <!--整个报销项目-->
        <comform :Travel="Travel"></comform>
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

        <div  class="submitBtn">
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
    <router-view></router-view>
  </div>
</template>

<script>
	import formbase from "./views/form-module"/*form的input模板*/
	import comform from "./views/common-BX.vue"/*报销模板*/
import {
  selectTime,
  progress,
  refresh,
  PopPicker,
  mustFill
} from "../../../static/utils/public.js";
export default {
  data(){
    return {
        COMNUMBER: "TEK2156584455", //报销编号
      BXR: "", //实际报销人
      testArr:[{name:'实际报销人',isisMust:true,inpt:''}],
      BXTIME:'',//报销时间
      Travel: [
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
  components:{formbase,comform},
  computed: {
    add_tatol() {
      	console.log(this.Travel.map(row => row.tatol))
//    if (this.Travel.map(row => row.tatol) == "NaN") {
//      return 0;
//    } else {
        return this.Travel.map(row => row.tatol).reduce(
        	(acc, cur) => parseFloat(cur) + acc,0);
//    }
    }
  },
  mounted() {
    selectTime();
    this.getTime();
  },
  methods: {
    getTime() {
      var d = new Date();
      d = `${d.getFullYear()}-${d.getMonth() +
        1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      this.sureTime = d;
    },
    mustFull() {
      var isOk=mustFill();
      if(isOk.length==0){
      	console.log('输入完成')
      }
    }
  }
};
</script>

<style>

</style>