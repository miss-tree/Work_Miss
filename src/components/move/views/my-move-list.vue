<template>
	<div>
		<!--订单列表-->
		<div class="dateRow" v-for="(item,index) in MOVELIST" @click="routerTo(item,index)">
			<div class="dateRowGrow">
				<div class="dateRowRight">
					<div class="huise dateRow_left">{{item.part1}}</div>
					<div class="dateRow_right  " :class="{span_green:item.state=='升职申请',span_red:item.state=='离职申请'}">{{item.state}}</div>
				</div>
				<div class="dateRowRight">
					<div class="huise dateRow_left">{{item.name}}</div>
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
		props: ["MOVELIST"],
		watch:{
			checkData(newVal,oldVal){
				//console.log(newVal)
				if(this.checkData.length!=0){
					this.checkInfor=[]
					this.MOVELIST.forEach((el,index)=>{
						if(this.checkData.indexOf(el.id)>-1){
							this.checkInfor.push(this.MOVELIST[index])
						}
					})
				}
			}
		},
		methods: {
			routerTo(item,index){//页面跳转
					this.$router.push({path:"/moveDetail",query:{id:item.id}})
			},
			setInfor(){
				setTimeout(()=>{
					this.$emit("getCheck",this.checkInfor)
				},2)
			}
		}
	}
</script>
