<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_60">来款单位</div>
					<div class="col_20">收款金额</div>
					<div class="col_20">收款日期</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_60" style="text-align: left;">
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_20" style="text-align: center;" >
							<span class="span_13px ">{{item.money}}</span>
						</div>
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.dateTime}}</span>
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
				this.$router.push({path:"/receDetail",query:{id:item.id}})
			},
		}
	}
</script>
