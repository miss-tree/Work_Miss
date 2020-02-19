<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<!--<div class="col_20">省区</div>-->
					<div class="col_60">产品名称</div>
					<!--<div class="col_10">数量</div>-->
					<div class="col_20">单位</div>
					<div class="col_20">规格</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_60">
							<span class="span_13px nowrap">{{item.proName}}</span>
						</div>
						<!--<div class="col_10" style="text-align: center;">
							<span class="span_13px ">{{item.num}}</span>
						</div>-->
						<div class="col_20" style="text-align: center;" >
							<span class="span_13px ">{{item.unit}}</span>
						</div>
						<div class="col_20"  style="text-align: center;">
							<span class="span_13px nowrap">{{item.norms}}</span>
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
				this.$router.push({path:"/proDetail",query:{id:item.id}})
			},
		}
	}
</script>

<style>
</style>