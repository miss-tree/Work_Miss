<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<!--<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>-->
			<h1 class="mui-title"><!--<img src="../assets/logo.png" class="logo"/>-->设置</h1>
		</header>
		<!--底部 选项卡-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="bottom-bar" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="bottom-bar" to="/newsTable">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="bottom-bar active" to="/setUp">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
			<router-link class="bottom-bar" to="/PersonCenter">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
		</nav>
		<!--底部 选项卡结束-->
		<div class="mui-content">
			<div id="slider" class="mui-slider">
			<!--头部选项卡-->
				<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<!--<div class="mui-scroll">-->
						<a class="mui-control-item" href="#item1mobile">
							待办公文
						</a>
						<a class="mui-control-item" href="#item2mobile">
							已办公文
						</a>
						<a class="mui-control-item" href="#item3mobile">
							全部公文
						</a>
					<!--</div>-->
				</div>
			<!--头部选项卡结束-->
				<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4"></div>
				
				<div class="mui-slider-group listHeight">
					<!--第一个选项卡-->
					<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
						<!--标题下面的select-->
						<div class="select_condition">
							<div>
								<div class="filter-box" id="filter-box">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="new" disabled>最新的</option>
										<option value="未审核">未审核</option>
										<option value="未通过" selected>未通过</option>
										<option value="正在审核">正在审核</option>
										<option value="已审核">已审核</option>
										<option value="已通过">已通过</option>
										<option value="111">111</option>
									</select>
								</div>
								<div class="filter-box" id="selectTow">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="new" disabled>最新的</option>
										<option value="未审核">未审核</option>
										<option value="未通过" selected>未通过</option>
										<option value="正在审核">正在审核</option>
										<option value="已审核">已审核</option>
										<option value="已通过">已通过</option>
										<option value="111">111</option>
									</select>
								</div>
								<div class="filter-box" id="selectThree">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="new" disabled>最新的</option>
										<option value="未审核">未审核</option>
										<option value="未通过" selected>未通过</option>
										<option value="正在审核">正在审核</option>
										<option value="已审核">已审核</option>
										<option value="已通过">已通过</option>
										<option value="111">111</option>
									</select>
								</div>
								<div class="filter-box" id="selectFour">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="new" disabled>最新的</option>
										<option value="未审核">未审核</option>
										<option value="未通过" selected>未通过</option>
										<option value="正在审核">正在审核</option>
										<option value="已审核">已审核</option>
										<option value="已通过">已通过</option>
										<option value="111">111</option>
									</select>
								</div>
							</div>
						</div>
						<!--标题下面的select结束-->
						<!--列表内容-->
						<div id="scroll1" class="mui-scroll-wrapper">
							<div class="mui-scroll">
								<ul class="mui-table-view">
									<li class="mui-table-view-cell">
										第一个选项卡子项-1
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-2
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-3
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-4
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-5
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-6
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-7
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-8
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-9
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-10
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-11
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-12
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-13
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-14
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-15
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-16
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-17
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-18
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-19
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-20
									</li>
								</ul>
							</div>
						</div>
						<!--列表内容结束-->
					</div>
					<!--第一个选项卡结束-->
					<div id="item2mobile" class="mui-slider-item mui-control-content">
						<div id="scroll2" class="mui-scroll-wrapper">
							<div class="mui-scroll">
								<div class="mui-loading">
									<div class="mui-spinner">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="item3mobile" class="mui-slider-item mui-control-content">
						<div id="scroll3" class="mui-scroll-wrapper">
							<div class="mui-scroll">
								<div class="mui-loading">
									<div class="mui-spinner">
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import '../../../static/utils/jquery.min.js'
	import '../../../static/utils/selectFilter.js'
	import '../../../static/css/selectFilter.css'
	import {pullRefresh} from '../../../static/utils/public.js'
	export default {
	data(){
		return{
			hello:'hello',
			hi:''
		}
	},
	mounted(){
//		var that=this
//		mui.init({
//				swipeBack: false
//			});
//			(function($) {
//				$('.mui-scroll-wrapper').scroll({
//					indicators: true //是否显示滚动条
//				});
//				var html2 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第二个选项卡子项-1</li><li class="mui-table-view-cell">第二个选项卡子项-2</li><li class="mui-table-view-cell">第二个选项卡子项-3</li><li class="mui-table-view-cell">第二个选项卡子项-4</li><li class="mui-table-view-cell">第二个选项卡子项-5</li></ul>';
//				var html3 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第三个选项卡子项-1</li><li class="mui-table-view-cell">第三个选项卡子项-2</li><li class="mui-table-view-cell">第三个选项卡子项-3</li><li class="mui-table-view-cell">第三个选项卡子项-4</li><li class="mui-table-view-cell">第三个选项卡子项-5</li></ul>';
//				var item2 = document.getElementById('item2mobile');
//				var item3 = document.getElementById('item3mobile');
//				document.getElementById('slider').addEventListener('slide', function(e) {
//					if (e.detail.slideNumber === 1) {
//						if (item2.querySelector('.mui-loading')) {
//							setTimeout(function() {
//								item2.querySelector('.mui-scroll').innerHTML = html2;
//							}, 500);
//						}
//					} else if (e.detail.slideNumber === 2) {
//						if (item3.querySelector('.mui-loading')) {
//							setTimeout(function() {
//								item3.querySelector('.mui-scroll').innerHTML = html3;
//							}, 500);
//						}
//					}
//				});
//				var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
//				$('.mui-input-group').on('change', 'input', function() {
//					if (this.checked) {
//						sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
//						//force repaint
//						sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
//					}
//				});
//			})(mui);
		//这里是初始化
		$('#filter-box').selectFilter({
			callBack : function (val){
				//返回选择的值
				console.log(val+'-是返回的值')
				that.hello=val
			}
		});
		$('#selectTow').selectFilter({
			callBack : function (val){
				that.hi=val
			}
		});
		$('#selectThree').selectFilter({
			callBack : function (val){
				that.hello=val
			}
		});
		$('#selectFour').selectFilter({
			callBack : function (val){
				that.hi=val
			}
		});
		pullRefresh()
	},
//	methods:{
//	}
}
</script>

<style>
	.select_condition{
	position: fixed;
    z-index: 222;
	}
	.listHeight{
		height: 530px;
	}
	.mui-scroll-wrapper{
		margin-top: 40px;
		/*position: static;*/
	}
	.filter-list {
		position: fixed;
		width: 100%;
		top: 38px;
	}
	
	.item {
		width: 240px;
		height: 32px;
		margin: 100px auto;
	}
	
	.filter-box {
		display: inline-block;
		width: 24.2%;
	}
	
	.mui-control-content {
		background-color: white;
		min-height: 215px;
	}
	
	.mui-control-content .mui-loading {
		margin-top: 50px;
	}
	.mui-bar .mui-icon{
		padding: 0;
	}
</style>