<template>
  <div>
    <!--<div class="form_title">订单详情</div>-->
    <!--客户订单-->
    <div>
	  <div class="mongolia" v-show="topLayer" @click="closeAlert"></div><!--蒙层-->
      <div class="form_div">
        <div class="form_row">
          <label class="form_row_left huise" for>
           		 产品列表
            <span class="span_red"></span>
          </label>
          <div class="form_row_right">
            <div class="mui-btn mui-btn-primary" @click="alert()">
              <!--<span class="mui-icon mui-icon-plus"></span>-->
              	添加
            </div>
            <button type="button" class="mui-btn" @click="delOrder()">
              <!--<span class="mui-icon mui-icon-minus"></span>-->
              	删除
            </button>
            <span class="mui-btn mui-btn-success" @click="editGoods()">
              <!--<span class="mui-icon mui-icon-more"></span>-->
            	  编辑
            </span>
          </div>
        </div>
        <!--产品订单列表-->
        <table border="0" cellspacing cellpadding class="dataTable">
          <tr>
            <th class="col_10">
              <label class="bui-checkbox-label bui-checkbox-anim">
                <input type="checkbox" @click="checkAll" v-model="allCheck">
                <i class="bui-checkbox"></i>
              </label>
            </th>
            <th class="col_40">产品名称</th>
            <th class="col_20">数量</th>
            <th class="col_15">单价</th>
            <th class="col_15">金额</th>
          </tr>
          <tr v-for="(item,index) in list">
            <td class="col_10">
              <label class="bui-checkbox-label bui-checkbox-anim">
                <input type="checkbox" name="isCheck" :value="item.name" v-model="checkData">
                <i class="bui-checkbox"></i>
              </label>
            </td>
            <td class="col_40">
              <span>{{item.name}}</span>
            </td>
            <td class="col_20 text_algin">
              <span>{{item.num}}</span>
            </td>
            <td class="col_15 text_algin">
              <span>{{item.price}}</span>
            </td>
            <td class="col_15 text_algin">
              <span>{{item.money=item.num*item.price}}</span>
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
          <div class="form_row_right span_red">{{total}}</div>
        </div>
        <!--订单合计结束-->
        <!--<!--添加弹窗-->
        <!--:class="alertShow?'alertOut':'alertIn'"-->
        <div class="alert_div" v-show="alertShow">
          <div>
            <div class="form_title">产品添加</div>
            <div class="content">
              <div class="formTable">
                <div class="form_div">
                  <div class="form_row">
                    <label class="form_row_left huise" for>
                      	产品名称
                      <span class="span_red">*</span>
                    </label>
                    <input class="filter-title form_row_right" type="text" v-model="editOrder.name"
                    	v-show="editShow==true" readonly placeholder="请选择">
                    <div class="filter-box form_row_right" id="proSelect" v-show="editShow==false">
                      <div class="filter-text">
                        <input class="filter-title" type="text" v-model="editOrder.name" readonly placeholder="请选择">
                        <i class="icon icon-filter-arrow"></i>
                      </div>
                      <select name="filter" v-for="(item,index) in PROLIST">
                        <option>{{item.text}}</option>
                      </select>
                    </div>
                    <!--<input type="text" class="form_row_right" placeholder="请输入（联想代码）" v-model="editOrder.name"/>-->
                  </div>
                  <div class="form_row">
                    <label class="form_row_left huise" for>
                      	数量
                      <span class="span_red">*</span>
                    </label>
                    <input
                      type="number"
                      pattern="[0-9]*"
                      class="form_row_right"
                      placeholder="0"
                      v-model="editOrder.num"
                    >
                  </div>
                  <div class="form_row">
                    <label class="form_row_left huise" for>
                      	单位
                      <span class="span_red">*</span>
                    </label>
                    <input
                      type="text"
                      class="form_row_right"
                      placeholder="请输入"
                      v-model="editOrder.unit"
                    >
                  </div>
                  <div class="form_row">
                    <label class="form_row_left huise" for>
                      	单价
                      <span class="span_red">*</span>
                    </label>
                    <!--<div class="form_row_right" >-->
                    <!--<van-button @touchstart.stop="showNumber = true">
						 弹出默认键盘
                    </van-button>-->
                    <!--<input type="number" @focus="showNumber=true" readonly="readonly" id="" v-model="editOrder.price" />
						<van-number-keyboard
						:show="showNumber"
						theme="custom"
						extra-key="."
						close-button-text="完成"
						@blur="showNumber = false"
						@input="onInput"
						@delete="onDelete"
                    />-->
                    <!--</div>-->
                    <input
                      type="number"
                      pattern="/[^\d^\.]+/g"
                      class="form_row_right"
                      placeholder="0"
                      v-model="editOrder.price"
                    >
                  </div>
                  <div class="form_row">
                    <label class="form_row_left huise" for>
                     	 金额
                      <span class="span_red">*</span>
                    </label>
                    <div class="form_row_right">{{editOrder.money=editOrder.num*editOrder.price}}</div>
                    <!--<input type="text" class="form_row_right" placeholder="请输入" v-model="money=num*price"/>-->
                  </div>
                  <div class="form_row">
                    <label class="form_row_left huise" for>
                      	应收件数
                      <span class="span_red">*</span>
                    </label>
                    <input
                      type="number"
                      pattern="[0-9]*"
                      class="form_row_right"
                      placeholder="0"
                      v-model="editOrder.M_num"
                    >
                  </div>
                  <div class="form_row">
                    <label class="form_row_left huise" for>
                      	产品应收款
                      <span class="span_red">*</span>
                    </label>
                    <input
                      type="number"
                      pattern="/[^\d^\.]+/g"
                      class="form_row_right"
                      placeholder="0"
                      v-model="editOrder.M_money"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="alertMidBottom">
              <button
                v-show="editShow==true"
                class="mui-btn mui-btn-block mui-btn-primary alertBtn"
                @click="saveOrder()"
              >保存编辑</button>
              <button
                v-show="editShow==false"
                class="mui-btn mui-btn-block mui-btn-primary alertBtn"
                @click="addOrder()"
              >添加</button>
            </div>
          </div>
        </div>
        <!--添加弹窗结束-->
      </div>
      <!--客户订单完成-->
    </div>
  </div>
</template>

<script>
	import "../../../../static/css/alert.css"
	import '../../../../static/utils/selectFilter.js'			/*自定义下拉框*/
	import '../../../../static/css/selectFilter.css'
	export default{
		data(){
			return{
				topLayer:false,
				list:this.ORDER,
				alertShow:false,
				editOrder:{name:'',num:'',price:'',money:'',M_num:'',M_money:'',unit:'件',index:''},
				checkData:[],
				allCheck:false,//是否全选
				editShow:false,//切换添加和编辑按钮
			}
		},
		props:["ORDER","PROLIST"],
		watch:{
			checkData(){//监看点击选项
				if(this.checkData.length==this.list.length){
					this.allCheck=true;
				}else{
					this.allCheck=false;
				}
			},
			deep: true, // 深度监视
		},
		computed:{
			total(){
				if(this.list.length==0){
					return 0
				}else{
					return this.list.map(row=>row.money).reduce((acc,cur)=>{return parseFloat(cur)+acc})
				}
			},
		},
		mounted(){
			var that=this
			$('#proSelect').selectFilter({
				callBack: function(val) {
					//返回选择的值
					console.log(val + '-是返回的值')
					that.editOrder.name = val
				}
			});
		},
		methods:{
			closeAlert(){//关闭蒙层
				this.topLayer=false;
				this.alertShow=false;
			},
			alert(){//弹出订单添加弹窗
				this.topLayer=!this.topLayer
				this.alertShow=!this.alertShow
				this.editOrder={name:'',num:'',price:'',money:'',M_num:'',M_money:'',unit:'件',index:''};
			},
			delOrder(){//删除订单
				var that=this;
				if(that.checkData.length==0){
					return false
				}else{
					mui.confirm('你确定要删除订单','提示',['取消','确定 '],(e)=>{
						if(e.index==1){
							/*this.list.forEach((el,index)=>{
								if(this.checkData.indexOf(el.name)!=-1){
									this.checkData=this.checkData.filter((item)=>{//去掉勾选
										return item!=el.name
									})
									this.list.splice(index,1)
								}
							})*/
							that.list=that.list.filter((el,index)=>{
								return that.checkData.includes(el.name)==false
							})
							that.checkData=[]
						}
					})
				}
			},
			editGoods(){//编辑订单
				if(this.checkData.length==0){
					return false
				}else{
					this.editShow=true
					this.list.forEach((el,index)=>{
						if(el.name.indexOf(this.checkData[0])!=-1){
							this.editOrder=this.list[index]
							this.editOrder.index=index
							this.topLayer=true
							this.alertShow=true
						}
					})
				}
			},
			checkAll(){// 点击全选事件
				this.allCheck=!this.allCheck
                if(this.allCheck=false){
                    this.checkData = [];
                    return false
                }else { // 全不选选则清空绑定的数组
                	this.checkData = [];
                    this.list.forEach((el,index)=>{
                        this.checkData.push(el.name);
                    });
                    return false
                }
			},
			saveOrder(){//编辑后保存
				this.topLayer=false
				this.alertShow=false
				var curIndex=this.editOrder.index
				this.list[curIndex]=this.editOrder
				this.editOrder={name:'',num:'',price:'',money:'',M_num:'',M_money:'',unit:'件',index:''}
			},
			addOrder(){//添加订单
				if(this.editOrder.name==''){
					mui.alert('请输入产品名称')
					return false
				}else if(this.editOrder.num==''){
					mui.alert('请输入订单数量')
					return false
				}else if(this.editOrder.price==''){
					mui.alert('请输入订单价格')
					return false
				}else if(this.editOrder.price==''){
					mui.alert('请输入订单价格')
					return false
				}
				else{
					if(this.list.length==0){
						this.list.push(this.editOrder)
						this.editOrder={name:'',num:'',price:'',money:'',M_num:'',M_money:'',unit:'件',index:''};
						this.alertShow=false
						this.topLayer=false;
						return false
					}else{
						var isHave=false;
						this.list.forEach((el,index)=>{
							if(el.name==this.editOrder.name){//确保没有重复
								mui.alert("此产品已经退货，请重新选择")
								isHave=true
								return false
							}
						})
						if(isHave==false){//没有就添加
								this.list.push(this.editOrder)
								this.editOrder={name:'',num:'',price:'',money:'',M_num:'',M_money:'',unit:'件',index:''};
								this.alertShow=false;
								this.topLayer=false;
						}
					}
				}
			},
			
		}
	}
</script>

<style>
	
</style>