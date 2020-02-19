<template>
	<div>
		<div class="dingwei" @click="changeup()" v-show="!trans" :class="{playnone:trans}">
			<img src="../../static/assets/pic-01_03.png" alt="" />
		</div>
		<div class="donghua">
			<div class="dhcontain " :class="{ transup: trans }">
				<div v-show="trans">
					<router-link to="/Home" >
						<div class="dh-img">
							<img src="../../static/assets/pic-04_03.png"/>
						</div>
					</router-link>
					<div class="dh-img" @click="change()" data-init="three">
						<img src="../../static/assets/pic-02_03.png"/>
					</div>	
					<div class="dh-img" @click="changedown()">
						<img src="../../static/assets/pic-03_03.png"/>
					</div>
				</div>
			</div>
		</div>
		<div class="Search" :class="{playnone:ss}">
			<div style="height: 50px;"></div>
			<div class="search-tion">
				<div class="search_word">
					查询条件
				</div>
				<div class="search_input">
					<input type="text" name="" id="" value="" placeholder="请输入关键字" />
				</div>
			</div>
			<div class="search-date">
				<div class="row_div flex">
					<span>开始时间</span>
					<input type="text" id='demo5' data-options='{"type":"date"}' class="btn mui-btn mui-btn-block flex_right"
			    	placeholder="选择日期 ..." v-model="startDate">
				</div>
				<div class="row_div flex">
					<span>结束时间</span>
					<input type="text" id='endTime' data-options='{"type":"date"}' class="btn mui-btn mui-btn-block flex_right"
			    	placeholder="选择日期 ..."  v-model="endDate">
				</div>
				<div class="text_algin margin_top">
					<div class="mui-btn mui-btn-primary search_btn">查询</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
	import {selectTime} from "../../static/utils/public.js"
	export default{
		data(){
			return {
				trans:false,//控制动画
				ss:true,//
				startDate:'选择日期 ...',
				endDate:'选择日期 ...'
				}
	},
	mounted() {
		selectTime()
	},
	methods: {
		changeup(e) {//弹出来
			this.trans = !this.trans
		},
		changedown(){//关闭搜索，收缩
			this.trans=false
			this.ss=true
		},
		change() {//显示搜索
			this.ss = !this.ss
			//this.trans =false
		}
	}
}</script>

<style>
	.dingwei {
	position: fixed;
	bottom: 70px;
	right: 15px;
	height: 45px;
	width: 45px;
	overflow: hidden;
	z-index: 3;
}
.dingwei>img {
	width: 100%;
	height: 100%;
}
.dhcontain {
	position: absolute;
	bottom: -100%;
	left: 0;
	width: 100%;
	height: 100%;
}

.Search {
	position: absolute;
	z-index: 1;
	top: 0;
	width: 100%;
	height: 100%;
	background: #efeff4;
}

.search-tion {
	padding: 10px 20px;
	background: #fff;
}

.search-date {
	background: #fff;
	padding: 10px 20px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
}

.donghua {
    position: fixed;
    z-index: 2;
    bottom: 70px;
    right: 15px;
    height: 150px;
    width: 45px;
    overflow: hidden;
}

.transup {
	transition: all 1s;
	transform: translateY(-100%);
	transform: translate3d(0, -100%, 0);
}

.dh-img {
	margin-top: 5px;
	width: 45px;
	height: 45px;
}

.dh-img>img {
	width: 100%;
	height: 100%;
}
.search_btn {
	height: 30px;
	line-height: 30px;
	width: 50%;
	font-size: 15px;
}

.search-date>.row_div>span {
	display: inline-block;
	width: 110px;
}

.flex_right {
	flex-grow: 1;
	border: 0 !important;
	font-size: 14px;
	text-align: left;
}

.search-tion {
	display: flex;
}

.search-tion .search_word {
	width: 180px;
	font-size: 15px;
}

.search-tion .search_input {
	flex-grow: 1;
	width: 100%;
	border: 0;
}

.search-tion .search_input input {
	width: 100%;
	font-size: 15px;
	border: 0;
	text-align: left;
}
</style>