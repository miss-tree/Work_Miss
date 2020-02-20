<template>
	<div>
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">工资单</h1>
		</header>
		<div class="mui-content">
			<div class="form_div searchFixed">
				<div class="form_row" style="position: relative;background: #807f82;">
					<span class="span_15px">开始</span>
					<div class="dateInput">
						<input type="text" id="bgTime" data-options='{"type":"month"}'
							 class="btn mui-btn mui-btn-block inputTime" />
					</div>
					<span class="span_15px">结束</span>
					<div class="dateInput">
						<input type="text" id="endTime" data-options='{"type":"month"}'
							 class="btn mui-btn mui-btn-block inputTime" />
					</div>
					<div class="searchBtn searchLocation">
						搜索
					</div>
				</div>
			</div>
			<div style="height: 40px;"></div>
			<div class="margin-t" v-for="(item,index) in INFOR">
				<div class="margin-lr  backg">
					<div class="look">
						<router-link :to="{path:'/moneyDetail',query:{ id:item.id}}">
							<span class="mui-icon mui-icon-eye"></span>
							<span>点击查看详情</span>
						</router-link>
					</div>
					<div class="hang" style="text-align: center;">
						<span class="margin-lr" style="display: inline-block;">
							{{item.title}}
						</span>
					</div>
					<div class="hang">
						<label class="text-justify huise">基本工资<span class="span-justify"></span></label>
						<span class="margin-lr">{{item.base}}</span>
					</div>
					<div class="hang">
						<label class="text-justify huise">绩效工资<span class="span-justify"></span></label>
						<span class="margin-lr">{{item.addMoney}}</span>
					</div>
					<div class="" style="padding: 0 15px;">
						<span class="">……</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {selectTime} from "../../../static/utils/public.js"
	export default {
		data() {
			return {
				INFOR:[{title:"2018年8月份工资",base:5000,addMoney:500,id:484655258},
					{title:"2019年2月份工资",base:6000,addMoney:800,id:788544166},
					{title:"2019年4月份工资",base:6000,addMoney:700,id:875565615},
					{title:"2018年8月份工资",base:5000,addMoney:500,id:484655258},
					{title:"2019年2月份工资",base:6000,addMoney:800,id:788544166},
					{title:"2019年4月份工资",base:6000,addMoney:700,id:875565615}]
			}
		},
		mounted(){
			selectTime()
		},
	}
</script>

<style>
	.searchLocation{
		width: 54px;
		font-size: 15px;
		position: absolute;
    	right: 15px;
		top: 5px;
		height: 30px;
	}
	.inputTime{
		font-size: 15px;
		width: 80px;
		text-align: center;
		line-height: 30px !important;
	}
</style>
