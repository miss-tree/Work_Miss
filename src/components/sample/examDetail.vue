<template>
	<div>
		<header class="mui-bar mui-bar-nav back_title">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">时间线</h1>
		</header>
		<div class="mui-content">
			<div class="time_line_div">
				<ul class="timeline_ul">
					<li class="timeline_li">
						<div class="line"></div>
						<div class="line_icon line_icon--large line_icon--primary">
							<i class="timeline_li__icon el-icon-more"></i></div>
						<!---->
						<div class="line_right">
							<!---->
							<div class="line_content">
								总监审核
							</div>
							<div class="timeline_li__timestamp is-bottom">
								2018-04-12 20:46
							</div>
						</div>
					</li>
					<li class="timeline_li">
						<div class="line"></div>
						<div class="line_icon line_icon--normal line_icon--" style="background-color: rgb(11, 189, 135);">
						</div>
						<div class="line_right">
							<div class="line_content">
								复审
								<span>审核意见：明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清</span>
							</div>
							<div class="timeline_li__timestamp is-bottom">
								2018-04-03 20:46
							</div>
						</div>
					</li>
					<li class="timeline_li">
						<div class="line"></div>
						<div class="line_icon line_icon--large line_icon--">
						</div>
						<div class="line_right">
							<div class="line_content">
								人资审核
							</div>
							<div class="timeline_li__timestamp is-bottom">
								2018-04-03 20:46
							</div>
						</div>
					</li>
					<li class="timeline_li">
						<div class="line"></div>
						<div class="line_icon line_icon--normal line_icon--">
						</div>
						<div class="line_right">
							<div class="line_content">
								提交申请
							</div>
							<div class="timeline_li__timestamp is-bottom">
								2018-04-03 20:46
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	<!--功能组件-->
	</div>
</template>

<style>
	.time_line_div{
		padding: 15px;
	}
	.timeline_ul{
		margin: 0;
    font-size: 14px;
    list-style: none;
	}
	.timeline_li {
    position: relative;
    padding-bottom: 20px;
}
.line {
    position: absolute;
    left: 7px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
}
.line_icon--primary {
    background-color: #409eff !important;
}
.el-icon-more::after{
	position: absolute;
    content: "";
    width: 8px;
    height: 4px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg) translate(-50%,-50%);
     top: 1px; 
    left: 50%;
}
.timeline_li__icon {
    color: #fff;
    font-size: 13px;
}
.line_icon--large {
    left: 0px;
    width: 14px;
    height: 14px;
}
.line_icon {
    position: absolute;
    background-color: #e4e7ed;
    border-radius: 50%;
    display: flex;
    height: 15px;
    width: 15px;
    justify-content: center;
    align-items: center;
}
.line_right {
    position: relative;
    padding-left: 28px;
    top: -1px;
}
.line_content {
    color: #303133;
    font-size: 15px;
}
.line_content >span{
	display: block;
    color: #ccc;
    font-size: 14px;
}
.timeline_li__timestamp.is-bottom {
    margin-top: 8px;
}
.timeline_li__timestamp {
    color: #909399;
    line-height: 1;
    font-size: 13px;
}
</style>