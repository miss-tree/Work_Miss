<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_5">
						<label class="bui-checkbox-label bui-checkbox-anim">
						    <input type="checkbox" name="all"  @click="setAllCheck">
							<i class="bui-checkbox"></i>
						</label>
					</div>
					<div class="col_50">产品名称</div>
					<div class="col_15">数量</div>
					<div class="col_15">单价</div>
					<div class="col_15">金额</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST">
						<div class="col_5 text_algin" @click="setInfor">
							<label class="bui-checkbox-label bui-checkbox-anim">
							    <input type="checkbox" name="ticket" v-model="checkData" :value="item.pro">
							    <i class="bui-checkbox"></i>
							</label>
						</div>
						<div class="col_50" style="text-align: left;">
							<span class="span_13px nowrap" style="display: block;overflow: hidden;">{{item.pro}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px">{{item.num}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px">{{item.price}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px">{{item.money}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--订单列表结束-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checkData:[],
				checkInfor:[]
			}
		},
		props: ["ORDERLIST"],
		watch:{
			checkData(newVal,oldVal){//将选中的产品名称转接为整个对象放到数组中
				if(this.checkData.length!=0){
					this.checkInfor=[]
					this.ORDERLIST.forEach((el,index)=>{
						if(this.checkData.indexOf(el.pro)>-1){
							this.checkInfor.push(this.ORDERLIST[index])
						}
					})
					this.$emit("getCheck",this.checkInfor)
				}else{
					this.checkInfor=[]
					this.$emit("getCheck",this.checkInfor)
				}
			}
		},
		methods: {
			setAllCheck(){//点击全选
				if(this.checkData.length<this.ORDERLIST.length){
					this.checkData=[]
					this.ORDERLIST.forEach((el,index)=>{
						this.checkData.push(el.pro)
					})
					this.$emit("getCheck",this.checkInfor)
				}else{
					this.checkData=[]
					this.$emit("getCheck",this.checkInfor)
				}
			},
			routerTo(item,index){//页面跳转
				if(item.state=='已签收'){
					this.$router.push({path:"/applyTicket",query:{id:item.id}})
				}
			},
			setInfor(){//设置组件传递的参数
//				setTimeout(()=>{
//					this.$emit("getCheck",this.checkInfor)
//				},20)
			}
		}
	}
</script>

<style>
</style>