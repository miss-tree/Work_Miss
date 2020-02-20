<template>
  <div>
    <div>
      <div class="form_div">
        <!--产品订单列表-->
        <table border="0" cellspacing cellpadding class="dataTable">
          <tr>
            <th class="col_10">
              <label class="bui-checkbox-label bui-checkbox-anim">
              </label>
            </th>
            <th class="col_20">项目编号</th>
            <th class="col_40">项目名称</th>
            <th class="col_15">折扣总金额</th>
          </tr>
          <tr v-for="(item,index) in DISCOUNTORDER">
            <td class="col_10">
              <label class="bui-checkbox-label bui-checkbox-anim">
                <input type="checkbox" name="isCheck" :value="item.name" v-model="checkData" @click="getInfor()">
                <i class="bui-checkbox"></i>
              </label>
            </td>
            <td class="col_20">
              <span>{{item.num}}</span>
            </td>
            <td class="col_40 text_algin">
              <span>{{item.name}}</span>
            </td>
            <td class="col_15 text_algin">
              <span>{{item.money}}</span>
            </td>
          </tr>
        </table>
        <!--产品订单列表结束-->
        <!--订单合计-->
        <div class="form_row">
          <label class="form_row_left huise" for>
            金额合计
            <span class="span_red"></span>
          </label>
          <div class="form_row_right span_red">{{discounTotal}}</div>
        </div>
        <!--订单合计结束-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCheck: false, //是否全选
      checkData:[],
      DISCOUNTINFOR:{
      	tatol:0,
      	arr:[]
      }
    };
  },
  props: ['DISCOUNTORDER'],
  watch: {
    checkData() {
      if(this.checkData==[]){
  			this.DISCOUNTINFOR={
	      	tatol:0,
	      	arr:[]
	      };
	      this.$emit('getDiscount',this.DISCOUNTINFOR)
  		}else{
  			this.DISCOUNTINFOR.arr=[]
				this.DISCOUNTORDER.forEach((el,index)=>{
					if(this.checkData.indexOf(el.name)>-1){
						this.DISCOUNTINFOR.arr.push(this.DISCOUNTORDER[index])
					}
				})
			 this.DISCOUNTINFOR.tatol=this.discounTotal
			 	console.log(this.DISCOUNTINFOR)
			 	this.$emit('getDiscount',this.DISCOUNTINFOR)
  		}
  	},	
    deep: true // 深度监视
  },
  computed: {
  	discounTotal(){
  		var checkArr=0;
  		this.DISCOUNTORDER.forEach((el,index)=>{
  			if(this.checkData.indexOf(el.name)>-1){
  				checkArr=checkArr+this.DISCOUNTORDER[index].money
  			}
  		})
  		return checkArr
  	}
  },
  methods: {
  	getInfor(){
  	}
  }
};
</script>