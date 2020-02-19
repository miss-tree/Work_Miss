<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<!--<div class="col_20">省区</div>-->
					<div class="col_60">客户名称</div>
					<!--<div class="col_10">数量</div>-->
					<div class="col_20">开票金额</div>
					<div class="col_20">开票号</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_60" style="text-align: left;">
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<!--<div class="col_10" style="text-align: center;">
							<span class="span_13px ">{{item.num}}</span>
						</div>-->
						<div class="col_20" style="text-align: center;" >
							<span class="span_13px ">{{item.money}}</span>
						</div>
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.id}}</span>
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
			return {}
		},
		props: ["ORDERLIST"],
		methods: {
			routerTo(item,index){//页面跳转
				this.$router.push({path:"/billDetail",query:{id:item.id}})
			},
		}
	}
</script>

<style>
</style>