<template>
  <div>
    <div>
      <div class="formTable">
        <!--报销-->
        <div v-for="(item,curIndex) in ACTINFOR">
          <div class="form_title">
            <span class="span_15px">报销项目({{curIndex+1}})</span>
            <span v-show="ACTINFOR.length>1" @click="removeTravel">删除</span>
          </div>
          <div class="form_div">
            
            <div class="form_row">
              <label class="form_row_left huise" for>
                	费用项目
                <span class="span_red">*</span>
              </label>
              <input
                type="text"
                class="form_row_right"
                placeholder="请输入"
                v-model="item.cost"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                	张数
                <span class="span_red">*</span>
              </label>
              <input
                type="number"
                pattern="[0-9]*"
                class="form_row_right"
                placeholder="请输入"
                v-model="item.numSheets"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                	有无发票
                <span class="span_red">*</span>
              </label>
              <input
              type="text"
              class="form_row_right"
              data="required"
              @click="showPicker = true"
              readonly="readonly"
              v-model="item.subject"
              name="section"
              placeholder="请选择"
            >
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                title="有无发票"
                :columns="subjectInfor"
                @cancel="showPicker = false"
                @confirm="getSubject"
              />
            </van-popup>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                	实际报销
                <span class="span_red">*</span>
              </label>
              <input
                type="number"
                pattern="[0-9]*"
                class="form_row_right"
                placeholder="请输入"
                v-model="item.bxmoney"
              >
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                	用途说明
                <span class="span_red">*</span>
              </label>
              <input
              type="text"
              class="form_row_right"
              data="required"
              @click="showUse = true"
              readonly="readonly"
              v-model="item.useType"
              name="section"
              placeholder="请选择"
            >
            <van-popup v-model="showUse" position="bottom">
              <van-picker
                show-toolbar
                title="用途说明"
                :columns="useInfor"
                @cancel="showUse = false"
                @confirm="getUseType"
              />
            </van-popup>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                	原预算
                <span class="span_red"></span>
              </label>
              <div class="form_row_right">{{CONTACTINFOR.budget}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
                	余额
                <span class="span_red"></span>
              </label>
              <div class="form_row_right span_red" v-show="item.money<0">{{item.money=CONTACTINFOR.budget-item.bxmoney}}</div>
              <div class="form_row_right" v-show="item.money>0">{{item.money=CONTACTINFOR.budget-item.bxmoney}}</div>
            </div>
            <div class="form_row">
              <label class="form_row_left huise" for>
              	  备注
                <span class="span_red"></span>
              </label>
              <input
                type="text"
                class="form_row_right"
                placeholder="请输入"
                v-model="item.bz"
              >
            </div>
            <!--<div class="form_row">
              <label class="form_row_left" for>
              	  合计
                <span class="span_red"></span>
              </label>
              <span
                class="form_row_right span_red"
              >{{item.tatol=item.bxmoney*1}}</span>
            </div>-->
          </div>
        </div>
        <!--行程结束-->
        <div class="form_div margin_top">
          <!--<div class="form_row" style="justify-content: center;">
            <span class="addBtn text_algin" @click="addTravel">十添加行程</span>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import "../../../../static/css/form.css"
export default {
  data(){
    return {
    	showPicker:false,//是否显示一级科目下拉框
    	subjectInfor:["有","无"],
    	showUse:false,//用途说明
    	useInfor:["广告","租金","进场","业务","提成","销售"],
    };
  },
  props:["ACTINFOR","CONTACTINFOR"],
  computed: {
//  add_tatol() {
//    if (this.Travel.map(row => row.tatol) == "NaN") {
//      return 0;
//    } else {
//      return this.Travel.map(row => row.tatol).reduce(
//        (acc, cur) =>{return parseFloat(cur) + acc},
//        0
//      );
//    }
//  }
  },
  mounted() {
  },
  methods: {
  	getSubject(value,index){//获取有无发票
  		this.ACTINFOR[index].subject=value
  		this.showPicker=false
  	},
  	getUseType(value,index){//获取使用用途
  		this.ACTINFOR[0].useType=value
  		this.showUse=false
  	},
    addTravel() {
      var obj = {
          cost: "",
          numSheets: "",
          subject: "",
          money: "",
          useType: '',
          bxmoney:'',
          tatol:0,
          bz: ""
        };
      this.ACTINFOR.push(obj);
    },
    removeTravel(index) {
      this.ACTINFOR.splice(index, 1);
    }
  }
};
</script>

<style>

</style>