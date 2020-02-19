<template>
	<div>
		<!--订单列表-->
		<div class="dateRow" v-for="(item,index) in ORDERLIST" ><!--@click="routerTo(item,index)"-->
			<!--<div class="width35px">-->
				<div class="mui-table-cell mui-col-xs-2 mui-checkbox width35px">
					<input name="checkbox" class="input_middle" :value="item.id" v-model="checkData" @click="setInfor" type="checkbox"/>
				</div>
			<!--</div>-->
			<div class="dateRowGrow">
				<div class="dateRowRight">
					<div class="huise dateRow_left">{{item.orderNum}}</div>
					<div class="dateRow_right span_green " v-show="item.state=='已签收'">{{item.state}}</div>
					<div class="dateRow_right span_red " v-show="item.state=='物流中'">{{item.state}}</div>
					<div class="dateRow_right " v-show="item.state=='未发货'">{{item.state}}</div>
				</div>
				<div class="dateRowRight">
					<div class="huise dateRow_left">{{item.pro}}</div>
					<div class="dateRow_right ">数量:{{item.num}}</div>
				</div>
				<div class="dateRowRight">
					<div class="huise dateRow_left">{{item.price}}</div>
					<div class="dateRow_right huise ">{{item.money}}</div>
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
			checkData(newVal,oldVal){
				//console.log(newVal)
				if(this.checkData.length!=0){
					this.checkInfor=[]
					this.ORDERLIST.forEach((el,index)=>{
						if(this.checkData.indexOf(el.id)>-1){
							this.checkInfor.push(this.ORDERLIST[index])
						}
					})
				}
			}
		},
		methods: {
			routerTo(item,index){//页面跳转
				if(item.state=='已签收'){
					this.$router.push({path:"/applyTicket",query:{id:item.id}})
				}
			},
			setInfor(){
				setTimeout(()=>{
					this.$emit("getCheck",this.checkInfor)
				},2)
			}
		}
	}
</script>

<style>
</style>