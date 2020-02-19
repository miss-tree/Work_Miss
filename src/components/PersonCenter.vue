<template>
	<div>
		<!--<div class="tou-bag">
			<div class="per-msg">
				<div class="msg">
					<p>员工：<span>张三</span></p>
					<p>部门：<span>电商部</span></p>
				</div>
			</div>
		</div>
		<div>
			<ul class="mui-table-view">
					<li class="mui-table-view-cell">
							<router-link class="mui-navigate-right" to='/qiandao'>
								<i class="iconfont icon-qiandao"></i> 考勤签到
							</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/kaoqinList">
							<i class="iconfont icon-yidongbangong"></i>外勤记录
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link  class="mui-navigate-right" to="/apply">
							<i class="iconfont icon-drxx81"></i>请假申请
						</router-link>
					</li>
				</ul>
		</div>-->
		<!--选项卡-->
		<div>
			<nav class="mui-bar mui-bar-tab">
				<router-link class="bottom-bar" to="/Home">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">首页</span>
				</router-link>
				<router-link class="bottom-bar" to="/newsTable">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
					<span class="mui-tab-label">消息</span>
				</router-link>
				<router-link class="bottom-bar" to="/setUp">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
				<router-link class="bottom-bar active" to="/PersonCenter">
					<span class="mui-icon mui-icon-contact"></span>
					<span class="mui-tab-label">个人中心</span>
				</router-link>
			</nav>
		</div>
		<!--内容部分-->
		<!--<div class="mui-page-content">-->
				<!--<div class="mui-scroll-wrapper">-->
					<div class="mui-scroll">
						<ul class="mui-table-view mui-table-view-chevron back_title">
							<li class="mui-table-view-cell mui-media" style="padding: 15px 15px;">
								<a class="back_title" href="#account">
									<div class="round_div">
										<img class="mui-media-object head-img" id="head-img" src="../../static/assets/user.jpg">
									</div>
									<div class="mui-media-body" style="color: #fff;display: inline-block; margin-left: 20px;">
										Miss Tree
										<p class='mui-ellipsis' style="color: #fff;">账号:hello world</p>
									</div>
								</a>
							</li>
						</ul>
						<!--<div class="margin_top"></div>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#account" class="mui-navigate-right">账号与安全</a>
							</li>
						</ul>-->
						<div class="margin_top"></div>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#notifications" class="mui-navigate-right huise">新消息通知</a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#privacy" class="mui-navigate-right huise">隐私</a>
							</li>
							<li class="mui-table-view-cell">
								<router-link class="mui-navigate-right huise" to="/login">
									<!--<a href="#general">-->通用<!--</a>-->
								</router-link>
							</li>
						</ul>
						<div class="margin_top"></div>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right huise">关于版本<i class="mui-pull-right update">V1.0.1</i></a>
							</li>
						</ul>
					</div>
				<!--</div>-->
			<!--</div>-->
	</div>
</template>

<script>
</script>

<style>
	.round_div {
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #ccc;
		height: 42px;
		width: 42px;
		overflow: hidden;
	}
	
	.round_div .mui-pull-left::after {
		clear: both;
	}
	
	.mui-bar .mui-icon {
		padding: 0;
	}
</style>