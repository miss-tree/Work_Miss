<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable" v-if="checkType!='一级商'">
				<div class="Row">
					<div class="col_40">药店名称</div>
					<div class="col_30">产品</div>
					<div class="col_15">单价</div>
					<div class="col_15">数量</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_40" >
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_30" style="text-align: left;">
							<span class="span_13px nowrap">{{item.name}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px">{{item.price}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px">{{item.num}}</span>
						</div>
					</div>
				</div>
			</div>
			<div id="dateTable" v-else="checkType=='一级商'">
				<div class="Row">
					<div class="col_40">来往客户</div>
					<div class="col_30">产品</div>
					<div class="col_15">单价</div>
					<div class="col_15">数量</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_40" >
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_30" style="text-align: left;">
							<span class="span_13px nowrap">{{item.name}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px">{{item.price}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px">{{item.num}}</span>
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
				checkType:"",
			}
		},
		props: ["ORDERLIST"],
		mounted(){
			var _this=this
			this.bus.$on("message",res=>{
				_this.checkType=res
			})
		},
		methods: {
			routerTo(item,index){//页面跳转
				this.$router.push({path:"/storeFlowDetail",query:{id:item.id}})
			},
		}
	}
</script>

<style>
</style>