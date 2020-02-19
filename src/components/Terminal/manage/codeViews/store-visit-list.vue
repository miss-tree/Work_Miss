<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_30">药店名称</div>
					<div class="col_30">手机号</div>
					<div class="col_20">微信号</div>
					<div class="col_20">监管码</div>
					<!--<div class="col_15">操作</div>-->
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST" @click="routerTo">
						<div class="col_30" >
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_30">
							<span class="span_13px nowrap">{{item.phone}}</span>
						</div>
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.wx}}</span>
						</div>
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.num}}</span>
						</div>
						<!--<div class="col_15" >
							<div class="tabRightBtn">详情</div>
						</div>-->
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
				this.$router.push({path:"/codeDetail",query:{id:item.id}})
			},
		}
	}
</script>

<style>
</style>