<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_20">省区</div>
					<div class="col_45">经销商名称</div>
					<div class="col_20">协议类型</div>
					<div class="col_15">查看</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST">
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.where}}</span>
						</div>
						<div class="col_45" style="text-align: left;">
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.type}}</span>
						</div>
						<div class="col_15" >
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
				this.$router.push({path:"/agreeDetail",query:{id:item.id}})
			},
		}
	}
</script>

<style>
</style>