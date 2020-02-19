<template>
<div>
	<div class="time_line_div" style="margin-bottom: 30px;">
		<ul class="timeline_ul">
			<li class="timeline_li" v-for="(item,index) in examInfor">
				<div class="line"></div>
				<div class="line_icon line_icon--large " :class="index==0?'line_icon--primary':''">
					<i class="timeline_li__icon el-icon-more" v-show="index==0"></i>
				</div>
				<div class="line_right">
					<div class="line_content">
						{{item.progress}}
						<span class="" ><!--v-show="item.bz!=''"-->
							审核意见：
							<span :class="item.opinion=='同意'?'span_green':'span_red'">{{item.opinion}}</span>
						</span>
						<span class="" v-show="item.bz!=''">审核备注：{{item.bz}}</span>
					</div>
					<div class="timeline_li__timestamp is-bottom" v-show="item.time!=''">
						{{item.time}}
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
</template>
<!--/* 时间组件，
	 * 基础的参数{progress、time}
     * 显示进程和时间
     */*/-->
<script>
	export default {
		data() {
			return {
			}
		},
		props:["examInfor"],
		methods: {
			
		}
	}
</script>

<style>
.time_line_div{
		padding: 15px;
		background-color: #fff;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, .3);
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
.timeline_ul .timeline_li:nth-child(2) .line_icon{
		background-color: #0bbd87;
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
    color: #999;
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