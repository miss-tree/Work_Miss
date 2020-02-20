<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"
		    	 ></a>
		    <h1 class="mui-title">请假申请</h1>
		</header>
		<div class="bar-ge"></div>
		<div>
		  	<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/writeApply">
							<i class="iconfont icon-tuandui"></i> 写申请
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/applyList" class="mui-navigate-right">
							<i class="iconfont icon-shouji"></i>申请记录
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/piyue" class="mui-navigate-right">
							<i class="iconfont icon-chicun-"></i>审批
						</router-link>
					</li>
			</ul>
  		</div>
	</div>
</template>
