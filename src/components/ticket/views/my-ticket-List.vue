<template>
	<div>
		<!--订单列表-->
		<div class="dateRow" v-for="(item,index) in ORDERLIST" @click="routerTo(item,index)">
			<div class="dateRowGrow">
				<div class="dateRowRight">
					<div class="huise dateRow_left">{{item.name}}</div>
					<div class="dateRow_right" :class="{span_green:item.state=='已开票',span_red:item.state=='审核中'}">{{item.state}}</div>
				</div>
				<div class="dateRowRight">
					<div class="huise dateRow_left">{{item.orderNum}}</div>
					<div class="dateRow_right ">{{item.money}}</div>
				</div>
				<div class="dateRowRight">
					<div class="huise dateRow_left">{{item.person}}</div>
					<div class="dateRow_right huise ">{{item.dateTime}}</div>
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
					this.$router.push({path:"/applyDetail",query:{id:item.id}})
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