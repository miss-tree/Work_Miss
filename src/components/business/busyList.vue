<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">业务查询</h1>
		</header>
		<!--内容-->
		<div class="mui-content">
			<div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/busyOrder">
							<i class="iconfont icon-liebiao1"></i>订单查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/proSales'>
							<i class="iconfont icon-liebiao1"></i>产品销售
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/billList'>
							<i class="iconfont icon-liebiao1"></i>发票查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/receiptList">
							<i class="iconfont icon-liebiao1"></i>收款单查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/returnList'>
							<i class="iconfont icon-liebiao1"></i>退货查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/reMoneyList">
							<i class="iconfont icon-liebiao1"></i>应收款查询
						</router-link>
					</li>
					
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/productsList'>
							<i class="iconfont icon-liebiao1"></i>产品信息查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/policyList'>
							<i class="iconfont icon-liebiao1"></i>产品政策查询
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/batchList'>
							<i class="iconfont icon-liebiao1"></i>批号定向查询
						</router-link>
					</li>
				</ul>
				<div style="height: 50px;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			routerTo(){
				this.$router.push({path:'/storePosition'})
			}
		}
	}
</script>