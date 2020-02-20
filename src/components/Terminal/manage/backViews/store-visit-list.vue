<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_20">省区</div>
					<div class="col_50">药店名称</div>
					<div class="col_15">姓名</div>
					<div class="col_15">操作</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST">
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.where}}</span>
						</div>
						<div class="col_50" style="text-align: left;">
							<span class="span_13px nowrap">{{item.title}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px" :class="{span_green:item.state=='1',span_red:item.state=='0'}">{{item.person}}</span>
						</div>
						<div class="col_15" >
							<div class="tabRightBtn" @click="routerTo">审核</div>
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
				this.$router.push({path:"/backDetail",query:{id:item.id}})
			},
		}
	}
</script>
