<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"
		    	 @click="jump()"></a>
		    <h1 class="mui-title">申请详情</h1>
		    <span class="top-left">提交</span>
		</header>
		<div class="mui-content">
			<div class="margin-t">
				<div class="padding-lr padding-tb">
					<div class="hang">
						<label class="text-justify">部门<span class="span-justify"></span></label>
						<span class="margin-lr">电商部</span>
					</div>
					<div class="hang">
						<label class="text-justify">职位<span class="span-justify"></span></label>
						<span class="margin-lr">服务专员</span>
					</div>
					<div class="hang">
						<label class="text-justify">区域负责<span class="span-justify"></span></label>
						<span class="margin-lr">刘X</span>
					</div>
					<div class="hang">
						<label class="text-justify">申请人<span class="span-justify"></span></label>
						<span class="margin-lr">张三</span>
					</div>
					<div class="hang">
						<label class="text-justify">招聘人数<span class="span-justify"></span></label>
						<span class="margin-lr">
							<span style="color: red;">3</span>人
						</span>
					</div>
					<div class="hang">
						<label class="text-justify">申请时间<span class="span-justify"></span></label>
						<span class="margin-lr">2018-10-23</span>
					</div>
					
					<div class="hang">
						招聘备注
					</div>
					<div class="hang">
						<p style="text-indent: 2em;">
							在广州黄埔上班
						</p>
					</div>
				</div>
			</div>
			<!--审核情况-->
			<div class="mui-card">
				<form class="mui-input-group">
					<div class="mui-input-row mui-radio">
						<label>通过</label>
						<input name="radio1" type="radio">
					</div>
					<div class="mui-input-row mui-radio">
						<label>驳回</label>
						<input name="radio1" type="radio" checked>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			jump(){
				this.$router.go(-1)
			}
		}
	}
</script>
