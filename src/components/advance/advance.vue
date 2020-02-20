<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">预借款</h1>
		</header>
		<!--内容-->
		<div class="mui-content">
			<div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/advanceAdd">
							<i class="iconfont icon-shuru"></i>预借款申请
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to='/advanceList'>
							<i class="iconfont icon-liebiao1"></i>我的申请列表
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

