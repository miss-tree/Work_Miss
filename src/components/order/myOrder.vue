<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">我的订单</h1>
		</header>
		<!--内容-->
		<div class="mui-content">
			<div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/orderAdd">
							<i class="iconfont icon-shuru"></i>订单申请
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/orderList'>
							<i class="iconfont icon-liebiao1"></i>订单申请列表
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/signList'>
							<i class="iconfont icon-qianshoudingdan"></i>订单签收(OTC)
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>