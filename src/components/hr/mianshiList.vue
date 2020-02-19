<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">面试记录</h1>
		    <span class="top-left" @click="jump()">添加</span>
		</header>
		<!--功能键-->
		<gongneng></gongneng>
		<div class="mui-content">
			<!--信息-->
			<div class="detail back-color">
				<div class="margin">
					<label class="text-justify">部门<span class="span-justify"></span></label>
					<span class="margin-lr">
						电商部
					</span>
				</div>
				<div class="margin">
					<label class="text-justify">职位<span class="span-justify"></span></label>
					<span class="margin-lr">服务专员</span>	
				</div>
				<div class="margin">
					<label class="text-justify">区域负责<span class="span-justify"></span></label>
					<span class="margin-lr">刘东</span>	
				</div>
				<div class="margin">
					<label class="text-justify">申请人<span class="span-justify"></span></label>
					<span class="margin-lr">张三</span>	
				</div>
				<div class="margin">
					<label class="text-justify">计划招聘<span class="span-justify"></span></label>
					<span class="margin-lr">
						3人
					</span>	 	
				</div>
				<div class="margin">
					<label class="text-justify">申请时间<span class="span-justify"></span></label>
						 	<span class="margin-lr">
						 		2018-11-28
							</span>
				</div>
				<div class="margin">
					<label class="text-justify">招聘备注<span class="span-justify"></span></label>
						 	<span class="margin-lr">
						 	</span>
				</div>
				<div class="margin">
						 	<span style="text-indent: 2em;display: inline-block;">
						 		在广州黄埔区上班
						 	</span>
				</div>
				<!--<div class="margin"></div>-->
			</div>
			<!--列表-->
			<div class="margin-t">
				<div class="margin-lr  backg">
					<div class="biaoqian">
						录用
					</div>
					<div class="hang">
						<label class="text-justify">面试时间<span class="span-justify"></span></label>
						<span class="margin-lr">
							2018-12-13
						</span>	
					</div>
					<div class="hang">
						<label class="text-justify">面试HR<span class="span-justify"></span></label>
						<span class="margin-lr">
							刘东
						</span>	
					</div>
					<div class="hang margin-bot">
						<label class="text-justify">面试人<span class="span-justify"></span></label>
						<span class="margin-lr">
							张山
						</span>	
					</div>
					<div class="look">
						<router-link to="/mianshiDetail">
							<span class="mui-icon mui-icon-eye"></span>
							<span>点击查看详情</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import gongneng from '../gongneng'
	export default{
		components:{
			gongneng,
		},
		methods:{
			jump(){
				this.$router.push({path:"/mianshiRecord"})
			}
		}
	}
</script>

<style>
</style>