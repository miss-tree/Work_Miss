<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title"><!--<img src="../assets/logo.png" class="logo"/>-->列表查询</h1>
		</header>
		<div class="mui-content">
			<div id="slider" class="mui-slider mui-fullscreen">
			<!--头部选项卡-->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<ul class="table_scroll">
						<li v-for="(item,index) in list" :class="{'mui-active':curIndex==index}"
							v-on:click="setIndex(index)">
							<span>{{item.title}}</span>
						</li>
					</ul>
				</div>
			<!--头部选项卡结束-->
				<!--数据表格内容-->
				<div class="mui-slider-group listHeight">
					<!--第一个选项卡-->
					<div id="item1mobile" class="mui-slider-item mui-control-content mui-active" v-show="curIndex==0">
						<!--标题下面的select-->
						<div class="select_condition">
							<div class="select_div">
								<div class="filter-box" id="filter-box">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected disabled="disabled">请选择时间</option>
										<option value="new" >最新的</option>
										<option value="三个月内">三个月内</option>
										<option value="三个月至六个月内">三个月至六个月内</option>
										<option value="六个月一年内">六个月一年内</option>
										<option value="一年前">一年前</option>
									</select>
								</div>
								<div class="filter-box" id="selectTow">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected>请选择部门</option>
										<option value="new" disabled>股份公司</option>
										<option value="未审核">销售部</option>
										<option value="正在审核">电商部</option>
										<option value="已审核">招商部</option>
										<option value="已通过">大ka部</option>
										<option value="111">市场部</option>
									</select>
								</div>
								<div class="filter-box" id="selectThree">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected>请选择状态</option>
										<option value="new" disabled>最新的</option>
										<option value="未审核">未审核</option>
										<option value="正在审核">正在审核</option>
										<option value="已审核">已审核</option>
										<option value="已通过">已通过</option>
										<option value="111">审核驳回</option>
									</select>
								</div>
							</div>
						</div>
						<!--标题下面的select结束-->
						<!--列表内容-->
						<div id="scroll1" class="mui-scroll-wrapper list_margin">
							<div class="mui-scroll">
								<ul class="ul_List mui-table-view" >
									<li class="tableList" @click="jumpTo">
										<router-link class="mui-navigate-right" to='/moneyDetail'>
											<div class="li_flex">
												<div></div>
												<div class="flex_grow">
													<div class="message_div_title">
														<span class="span_title">最新活动</span>
														<span class="right_time">2018-11-11 12:05:12</span>
													</div>
													<div class="mui-ellipsis span_13" style="width: 320px;">
														666 感谢楼主不错的分享 666 感谢楼主不错的分享 666 感谢楼主不错的分享
													</div>
												</div>
											</div>
										</router-link>
									</li>
									<li class="tableList">
										<router-link class="mui-navigate-right" to='/tabView'>
											<div class="li_flex">
												<div></div>
												<div class="flex_grow">
													<div class="message_div_title">
														<span class="span_title">最新活动</span>
														<span class="right_time">2018-11-11 12:05:12</span>
													</div>
													<div class="mui-ellipsis span_13" style="width: 320px;">
														666 感谢楼主不错的分享666 感谢楼主不错的分享 666 感谢楼主不错的分享
													</div>
												</div>
											</div>
										</router-link>
									</li>
								</ul>
							</div>
						</div>
						<!--列表内容结束-->
					</div>
					<!--第一个选项卡结束-->
					<div id="item2mobile" class="mui-slider-item mui-control-content"  v-show="curIndex==1">
						<div class="select_condition">
							<div>
								<div class="filter-box" id="four">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected disabled="disabled">请选择时间</option>
										<option value="new" >最新的</option>
										<option value="三个月内">三个月内</option>
										<option value="三个月至六个月内">三个月至六个月内</option>
										<option value="六个月一年内">六个月一年内</option>
										<option value="一年前">一年前</option>
									</select>
								</div>
								<div class="filter-box" id="five">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected>请选择部门</option>
										<option value="new" disabled>股份公司</option>
										<option value="未审核">销售部</option>
										<option value="正在审核">电商部</option>
										<option value="已审核">招商部</option>
										<option value="已通过">大ka部</option>
										<option value="111">市场部</option>
									</select>
								</div>
								<div class="filter-box" id="six">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected>请选择状态</option>
										<option value="new" disabled>最新的</option>
										<option value="未审核">未审核</option>
										<option value="正在审核">正在审核</option>
										<option value="已审核">已审核</option>
										<option value="已通过">已通过</option>
										<option value="111">审核驳回</option>
									</select>
								</div>
							</div>
						</div>
						<div class="mui-scroll-wrapper list_margin">
							<div class="mui-scroll">
								<ul class="mui-table-view">
									<li class="mui-table-view-cell">
										第2个选项卡子项-1
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-2
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-3
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-4
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-5
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-6
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-7
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-8
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-9
									</li>
									<li class="mui-table-view-cell">
										第2个选项卡子项-10
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="item3mobile" class="mui-slider-item mui-control-content"  v-show="curIndex==2">
						<div class="select_condition">
							<div>
								<div class="filter-box" id="seven">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected disabled="disabled">请选择时间</option>
										<option value="new" >最新的</option>
										<option value="三个月内">三个月内</option>
										<option value="三个月至六个月内">三个月至六个月内</option>
										<option value="六个月一年内">六个月一年内</option>
										<option value="一年前">一年前</option>
									</select>
								</div>
								<div class="filter-box" id="eight">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected>请选择部门</option>
										<option value="new" disabled>股份公司</option>
										<option value="未审核">销售部</option>
										<option value="正在审核">电商部</option>
										<option value="已审核">招商部</option>
										<option value="已通过">大ka部</option>
										<option value="111">市场部</option>
									</select>
								</div>
								<div class="filter-box" id="nine">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="pleace select" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter">
										<option value="请选择" selected>请选择状态</option>
										<option value="new" disabled>最新的</option>
										<option value="未审核">未审核</option>
										<option value="正在审核">正在审核</option>
										<option value="已审核">已审核</option>
										<option value="已通过">已通过</option>
										<option value="111">审核驳回</option>
									</select>
								</div>
							</div>
						</div>
						<div class="mui-scroll-wrapper list_margin">
							<div class="mui-scroll">
								<ul class="mui-table-view">
									<li class="mui-table-view-cell">
										第3个选项卡子项-1
									</li>
									<li class="mui-table-view-cell">
										第3个选项卡子项-2
									</li>
									<li class="mui-table-view-cell">
										第3个选项卡子项-3
									</li>
									<li class="mui-table-view-cell">
										第3个选项卡子项-4
									</li>
									<li class="mui-table-view-cell">
										第3个选项卡子项-5
									</li>
									<li class="mui-table-view-cell">
										第3个选项卡子项-6
									</li>
									<li class="mui-table-view-cell">
										第3个选项卡子项-7
									</li>
									<li class="mui-table-view-cell">
										第3个选项卡子项-8
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!--数据表格内容结束-->
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
	data() {
		return {
			curIndex: 0,
			list: [{
				title: '订单申请'
			}, {
				title: '订单发送'
			}, {
				title: '订单开票'
			}],
			hello: 'hello',
			hi: ''
		}
	},
	mounted() {
		var that = this
		//pullRefresh()
		//这里是初始化
		$('#filter-box').selectFilter({
			callBack: function(val) {
				//返回选择的值
				console.log(val + '-是返回的值')
				that.hello = val
			}
		});
		$('#selectTow').selectFilter({
			callBack: function(val) {
				that.hi = val
			}
		});
		$('#selectThree').selectFilter({
			callBack: function(val) {
				that.hello = val
			}
		});
		$('#four').selectFilter({
			callBack: function(val) {
				that.hi = val
			}
		});
		$('#five').selectFilter({
			callBack: function(val) {
				that.hi = val
			}
		});
		$('#six').selectFilter({
			callBack: function(val) {
				that.hi = val
			}
		});
		$('#seven').selectFilter({
			callBack: function(val) {
				that.hi = val
			}
		});
		$('#eight').selectFilter({
			callBack: function(val) {
				that.hi = val
			}
		});
		$('#nine').selectFilter({
			callBack: function(val) {
				that.hi = val
			}
		});
	},
	methods: {
		setIndex(i) {
			this.curIndex = i
		},
		jumpTo(){
			console.log('hi')
			//this.$router.push({path:"/moneyDetail",query:{id:id}})
		}
	}
}
</script>

<style>
	.table_scroll{
		width: 100%;
	}
	.table_scroll li{
		width: 30%;
	}
	.select_condition{
	position: absolute;
    z-index: 222;
	}
	.select_div{
		position: relative;
	}
	.listHeight{
		height: 530px;
	}
	.list_margin{
		margin-top: 40px;
	}
	#filter-box>.filter-list,#selectTow>.filter-list,#selectThree>.filter-list,
	#four>.filter-list,#five>.filter-list,#six>.filter-list,
	#seven>.filter-list,#eight>.filter-list,#nine>.filter-list, {
		position: fixed;
		width: 100%;
		/*top: 38px;*/
		top: 123px !important;
		left: 0;
	}
	
	.item {
		width: 240px;
		height: 32px;
		margin: 100px auto;
	}
	
	.filter-box {
		display: inline-block;
		width: 32.2%;
	}
	
	.mui-control-content {
		background-color: white;
		min-height: 215px;
	}
	
	.mui-control-content .mui-loading {
		margin-top: 50px;
	}
	#sliderSegmentedControl .mui-active{
	position: relative;
	}
	#sliderSegmentedControl .table_scroll .mui-active::after{
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2px;
		background-color: #6596cc;
	}
	#sliderSegmentedControl .table_scroll .mui-active{
		color: #6596cc;
	}
</style>