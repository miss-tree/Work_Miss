<template>
	<div>
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
                  通用
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
	</div>
</template>

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
