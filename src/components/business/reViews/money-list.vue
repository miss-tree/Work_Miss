<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_40">客户名称</div>
					<div class="col_20">业务状态</div>
					<div class="col_20">应收款</div>
					<div class="col_20">未核销金额</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_40">
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_20" style="text-align: center;">
							<span class="span_13px nowrap" :class="{span_red:item.state=='合作停止',span_green:item.state=='合作中'}">
								{{item.state}}
							</span>
						</div>
						<div class="col_20" style="text-align: center;" >
							<span class="span_13px ">{{item.money}}</span>
						</div>
						<div class="col_20"  style="text-align: center;">
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
			return {}
		},
		props: ["ORDERLIST"],
		methods: {
			routerTo(item,index){//页面跳转
				this.$router.push({path:"/remoneyDetail",query:{id:item.id}})
			},
		}
	}
</script>
