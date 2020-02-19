<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_20">批号</div>
					<div class="col_40">产品名称</div>
					<div class="col_20">发货日期</div>
					<div class="col_20">查看</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST">
						<div class="col_20" >
							<span class="span_13px nowrap">{{item.batch}}</span>
						</div>
						<div class="col_40">
							<span class="span_13px nowrap">{{item.proName}}</span>
						</div>
						<div class="col_20" style="text-align: center;" >
							<span class="span_13px">{{item.time}}</span>
						</div>
						<div class="col_20" style="padding: 0 5px;">
							<div class="tabRightBtn" @click="routerTo">详情</div>
						</div>
						<!--<div class="col_20"  style="text-align: center;">
							<span class="span_13px ">{{item.time}}</span>
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
				this.$router.push({path:"/batchDetail",query:{id:item.id}})
			},
		}
	}
</script>
