<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">申请记录</h1>
		    <span class="top-left" @click="jump()">申请</span>
		</header>
		<div class="mui-content">
			<div class="margin-t">
				<div class="margin-lr  backg">
					<div class="biaoqian biaoqian-se">
						审核
					</div>
					<div class="look">
						<router-link to="/jobDetail">
							<span class="mui-icon mui-icon-eye"></span>
							<span>点击查看详情</span>
						</router-link>
					</div>
					
					<div class="hang">
						<label class="text-justify">申请时间<span class="span-justify"></span></label>
						<span class="margin-lr">2019-11-03</span>
					</div>
					<div class="hang">
						<label class="text-justify">申请人<span class="span-justify"></span></label>
						<span class="margin-lr">张三</span>
					</div>
					<div class="hang margin-bot">
						<label class="text-justify">职位<span class="span-justify"></span></label>
						<span class="margin-lr">XXXX</span>
					</div>
				</div>
			</div>
			
			<div class="margin-t">
				<div class="margin-lr  backg">
					<div class="biaoqian">
						通过
					</div>
					<div class="look">
						<router-link to="/jobDetail">
							<span class="mui-icon mui-icon-eye"></span>
							<span>点击查看详情</span>
						</router-link>
					</div>
					
					<div class="hang">
						<label class="text-justify">申请时间<span class="span-justify"></span></label>
						<span class="margin-lr">2019-11-03</span>
					</div>
					<div class="hang">
						<label class="text-justify">申请人<span class="span-justify"></span></label>
						<span class="margin-lr">张三</span>
					</div>
					<div class="hang margin-bot">
						<label class="text-justify">职位<span class="span-justify"></span></label>
						<span class="margin-lr">XXXX</span>
					</div>
				</div>
			</div>
			
		</div>
		<gongneng></gongneng>
	</div>
</template>

<script>
	import gongneng from "../gongneng.vue"
	export default{
		components:{
			gongneng
		},
		methods:{
			jump(){
				this.$router.push({path:"/writejobApply"})
			}
		}
	}
</script>
