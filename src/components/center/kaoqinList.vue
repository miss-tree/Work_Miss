<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" ></a>		    
		    <h1 class="mui-title">签到记录</h1>
		</header>
		<div class="bar-ge"></div>
		<div class="margin-t">
			<router-link to="/kaoqingDetail">
				<div class="margin-lr  backg">
					<div class="biaoqian">
						正常
					</div>
					<div class="hang">
						<span class="huise">签到日期：</span>
						<span>2018-12-13</span>
					</div>
					<div class="hang">
						<span class="huise">签到时间：</span>
						<span></span>
					</div>
					<div class="hang margin-bot">
						<span class="huise">签退时间：</span>
						<span></span>
					</div>
				</div>
			</router-link>
		</div>
		<div class="margin-t">
			<div class="margin-lr  backg">
				<div class="biaoqian col-yel">
					异常
				</div>
				<div class="hang">
					<span class="huise">签到日期：</span>
					<span>2018-12-13</span>
				</div>
				<div class="hang">
					<span class="huise">签到时间：</span>
					<span>有类似的问题需要解决，写了简单的网页模拟情况</span>
				</div>
				<div class="hang margin-bot">
					<span class="huise">签退时间：</span>
				</div>
			</div>
		</div>
		<gongneng></gongneng>
	</div>
</template>

<script>
	import gongneng from  "../gongneng.vue"
	export default{
		components:{
			gongneng
		},
		methods:{
			jump(){
				this.$router.go(-1)
			}
		}
	}
</script>
