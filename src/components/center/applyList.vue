<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">申请记录</h1>
		</header>
		<div class="bar-ge"></div>
		<div class="margin-t">
			<div class="margin-lr  backg">
				<div class="biaoqian">
					通过
				</div>
				<div class="look">
					<router-link to="/shenqingDetail">
						<span class="mui-icon mui-icon-eye"></span>
						<span>点击查看详情</span>
					</router-link>
				</div>
				
				<div class="hang">
					<label class="text-justify">申请人<span class="span-justify"></span></label>
					<span class="margin-lr">张三</span>
				</div>
				<div class="hang">
					<label class="text-justify">审批人<span class="span-justify"></span></label>
					<span class="margin-lr">张三</span>
				</div>
				<div class="hang">
					<label class="text-justify">开始日期<span class="span-justify"></span></label>
					<span class="margin-lr">2018-11-25</span>
				</div>
				<div class="hang">
					<label class="text-justify">结束日期<span class="span-justify"></span></label>
					<span class="margin-lr">2018-11-26</span>
				</div>
				<div class="hang margin-bot">
					<label class="text-justify">假期<span class="span-justify"></span></label>
					<span class="margin-lr">2天</span>
				</div>
			</div>
		</div>
		<gongneng></gongneng>
	</div>
</template>

<script>
	import gongneng from "../gongneng.vue"
	export default{
		data(){
			return{
			}
		},
		components:{
			gongneng
		},
	}
</script>
