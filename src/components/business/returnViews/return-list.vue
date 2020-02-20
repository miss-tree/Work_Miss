<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_40">客户</div>
					<div class="col_40">产品</div>
					<div class="col_20">退货日期</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_40">
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_40" >
							<span class="span_13px nowrap">{{item.proName}}</span>
						</div>
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.time}}</span>
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
				this.$router.push({path:"/returnDetail",query:{id:item.id}})
			},
		}
	}
</script>
