<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<!--<div class="col_20">省区</div>-->
					<div class="col_50">药店名称</div>
					<div class="col_30">时间</div>
					<div class="col_20">查看</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST">
						<!--<div class="col_20" >
							<span class="span_13px nowrap">{{item.where}}</span>
						</div>-->
						<div class="col_50" style="text-align: left;">
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_30" >
							<span class="span_13px nowrap">{{item.dateTime}}</span>
						</div>
						<div class="col_20" >
							<div class="tabRightBtn" @click="routerTo">详情</div>
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
				this.$router.push({path:"/storeVisitDetail",query:{id:item.id}})
			},
		}
	}
</script>

<style>
</style>