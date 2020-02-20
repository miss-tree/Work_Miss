<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_60">产品名称</div>
					<div class="col_20">供货价</div>
					<div class="col_20">时间</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_60">
							<span class="span_13px nowrap">{{item.proName}}</span>
						</div>
						<div class="col_20" style="text-align: center;" >
							<span class="span_13px">{{item.price}}</span>
						</div>
						<div class="col_20"  style="text-align: center;">
							<span class="span_13px ">{{item.time}}</span>
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
		props: ["ORDERLIST"],
		methods: {
			routerTo(item,index){//页面跳转
				this.$router.push({path:"/policyDetail",query:{id:item.id}})
			},
		}
	}
</script>
