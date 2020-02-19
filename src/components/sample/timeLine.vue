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
						<div class="line_right">
							<div class="line_content">
								总监审核
								<span class="">审核意见：明细不清</span>
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
								<span class="">审核意见：明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清明细不清</span>
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
								<span class="">审核意见：明细不清明细不清</span>
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

<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
//			jump(){
//				this.$router.go(-1)
//			}
		}
	}
</script>

<style>
	
</style>