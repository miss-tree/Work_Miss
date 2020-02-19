<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"
		    	 @click="jump()"></a>
		    <h1 class="mui-title">申请单</h1>
		    <span class="top-left">提交</span>
		</header>
		<div class="mui-content">
			<div class="margin-t">
				<div class="padding-lr padding-tb">
					<div class="hang">
						<label class="text-justify">审批人<span class="span-justify"></span></label>
						<span class="margin-lr">张三</span>
					</div>
					<div class="hang">
						<label class="text-justify">申请人<span class="span-justify"></span></label>
						<span class="margin-lr">张三</span>
					</div>
					<div class="hang">
						<label class="text-justify">申请类型<span class="span-justify"></span></label>
						<span class="margin-lr">事假</span>
					</div>
					<div class="hang">
						<label class="text-justify">开始时间<span class="span-justify"></span></label>
						<span class="margin-lr">2018-10-22</span>
					</div>
					<div class="hang">
						<label class="text-justify">活动名称<span class="span-justify"></span></label>
						<span class="margin-lr">2018-10-23</span>
					</div>
					<div class="hang">
						<label class="text-justify">假期<span class="span-justify"></span></label>
						<span class="margin-lr"><span style="color: red;">2</span>天</span>
					</div>
					<div class="hang">
						事由
					</div>
					<div class="hang">
						<p style="text-indent: 2em;">
							感冒发烧39度，浑身无力，没办法工作
							感冒发烧39度，浑身无力，没办法工作
							
						</p>
					</div>
				</div>
			</div>
			<div class="margin-t">
				<div class="detail-img">
					<img src="../../../static/assets/pic-516.png"/>
				</div>
				<div class="detail-img">
					<img src="../../../static/assets/pic-98465.jpg"/>
				</div>
			</div>
			
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
		data(){
			return{
			}
		},
		methods:{
			jump(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>