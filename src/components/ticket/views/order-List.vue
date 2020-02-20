<template>
	<div>
		<slot></slot>
		<!--订单列表-->
		<div class="listRow" v-for="(item,index) in ORDERLIST" @click="routerTo(item,index)">
			<div>
				<div class="huise">{{item.name}}</div>
				<div class="huise">{{item.orderNum}}</div>
				<div class="huise">{{item.person}}</div>
			</div>
			<div>
				<div class="textRight span_green" v-show="item.state=='已签收'">{{item.state}}</div>
				<div class="textRight span_red" v-show="item.state=='物流中'">{{item.state}}</div>
				<div class="textRight" v-show="item.state=='未发货'">{{item.state}}</div>
				<div class="textRight">{{item.money}}</div>
				<div class="textRight huise">{{item.dateTime}}</div>
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
				if(item.state=='已签收'){
					this.$router.push({path:"/applyTicket",query:{id:item.id}})
				}
			},
		}
	}
</script>
