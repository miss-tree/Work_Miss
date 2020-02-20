<template>
	<div>
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">表单列表</h1>
		</header>
		<div class="mui-content">
			<!--搜索框-->
			<div class="tableSearch">
				<div style="width: 70%;">
					<input type="text" name="" id="search" value="" placeholder="请输入关键字"/>
				</div>
				<div class="searchBtn">
						搜索
				</div>
				<div style="margin-left: 15px;">
					<i class="iconfont icon-fenxiaosousuo" style="color: #fff;display: inline-block; font-size: 30px;margin-top: 5px;"></i>
				</div>
			</div>
			<!--列表部分-->
			<div>
				<div class="form_title">
					列表样式1
				</div>
				<ul class="ul_List">
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
				<div class="margin_top"></div>
				<div class="form_title">
					列表样式2
				</div>
				<ul class="ul_List">
					<li class="tableList">
						<router-link class="mui-navigate-right" to='/tabView'>
							<div class="li_flex">
								<div class="list_img"><img src="../../assets/1.png" alt="这是一张图片" /></div>
								<div class="flex_grow">
									<div class="message_div_title">
										<span class="span_title">最新活动</span>
										<span class="right_time">2018-11-11 12:05:12</span>
									</div>
									<div class="mui-ellipsis span_13" style="width: 300px;">
										666 感谢楼主不错的分享666 感谢楼主不错的分享 666 感谢楼主不错的分享
									</div>
								</div>
							</div>
						</router-link>
					</li>
					<li class="tableList">
						<router-link class="mui-navigate-right" to='/tabView'>
							<div class="li_flex">
								<div class="list_img"><img src="../../assets/1.png" alt="这是一张图片" /></div>
								<div class="flex_grow">
									<div class="message_div_title">
										<span class="span_title">最新活动</span>
										<span class="right_time">2018-11-11 12:05:12</span>
									</div>
									<div class="mui-ellipsis span_13" style="width: 300px;">
										666 感谢楼主不错的分享666 感谢楼主不错的分享 666 感谢楼主不错的分享
									</div>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
				<div class="margin_top"></div>
				<!--头部可能出现的内容-->
		    	<div v-show="editShow!=false" style="padding: 0 10px;background: #fff;">
		    		<div class="flex flex_between">
		    			<div class="span_green text_algin line_25_ft_15" @click="allCheck">全选</div>
		    			<div class="span_green text_algin line_25_ft_15" @click="checkBack">取反</div>
		    			<div class="span_green text_algin line_25_ft_15"  @click="editCheck">完成</div>
		    		</div>
		    	</div>
				<div class="form_title">
					列表样式3
				</div>
				<div class="mui-content">
		            <ul
		              class="mui-table-view mui-table-view-striped mui-table-view-condensed"
		              style="border-radius:0;">
		              <li class="mui-table-view-cell">
		                <div class="mui-table right_arrow_icon">
		                	<div v-show="selectShow == true" class="mui-table-cell mui-col-xs-2 mui-checkbox">
		                		<input name="checkbox" class="input_middle" value="Item 2" type="checkbox" ></input>
		                	</div>
		                  <div class="mui-table-cell mui-col-xs-10">
		                  	<router-link to="/uploadpic">
		                    <span>2019-06-17</span>
		                    <h5 class="mui-ellipsis"></h5>
		                    <p
		                      class="mui-h6 mui-ellipsis-2"
		                    >Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，100元等你拿!100元等你拿!</p>
		                    <button type="button" class="mui-btn mui-btn-success">查看</button>
		                    <button type="button" class="mui-btn mui-btn-warning">编辑</button>
		                    <button type="button" class="mui-btn mui-btn-primary">审核</button>
		                    </router-link>
		                  </div>
		                  <div class="mui-table-cell mui-col-xs-2 mui-text-right">
		                    <span>李四</span>
		                    <div class="fixed_bottom">
		                      <button
		                        type="button"
		                        id="toastBtn"
		                        class="mui-btn mui-btn-danger"
		                        @click="delate"
		                      >删除</button>
		                    </div>
		                  </div>
		                </div>
		              </li>
		              <li class="mui-table-view-cell">
		                <div class="mui-table">
		                  <div class="mui-table-cell mui-col-xs-10">
		                  	<h5 style="color: #444;">申请人：李四</h5>
		                    <h5 class="mui-ellipsis-2">信息化推进办公室张彦合同付款信息化推进办公室张彦合同付款信息化推进办公室张彦合同付款</h5>
		                    <p class="mui-h6 mui-ellipsis">Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，</p>
		                  </div>
		                  <div class="mui-table-cell mui-col-xs-2 mui-text-right">
		                    <span class="mui-h5">12:25</span>
		                  </div>
		                </div>
		              </li>
		            </ul>
		          </div>
				<div class="margin_top"></div>
				<div class="form_title">
					列表样式4
				</div>
				<div class="margin-t">
					<div class="margin-lr  backg">
						<div class="look">
							<a href="#">
								<span class="mui-icon mui-icon-eye"></span>
								<span>点击查看详情</span>
							</a>
						</div>
						<div class="hang" style="text-align: center;">
							<span class="margin-lr" style="display: inline-block;">
										2018年8月工资
									</span>
						</div>
						<div class="hang">
							<label class="huise">基本工资<span class=""></span></label>
							<span class="margin-lr">5000</span>
						</div>
						<div class="hang">
							<label class="huise">绩效工资<span class=""></span></label>
							<span class="margin-lr">200</span>
						</div>
						<div class="hang">
							<label class="text-justify"><span class="span-justify"></span></label>
							<span class="move-t huise">……</span>
						</div>
					</div>
				</div>
				<div class="margin_top"></div>
				<div class="form_title">
					列表样式5
				</div>
				<div class="listRow">
					<div>
						<div class="huise">国药控股股份有限公司</div>
						<div class="huise">TEK190712HW33</div>
						<div class="huise">黎放</div>
					</div>
					<div>
						<div class="textRight span_green">通过</div>
						<div class="textRight">￥28450</div>
						<div class="textRight huise">2019-07-12</div>
					</div>
				</div>
				<div style="height: 80px;"></div>
				
			</div>
			<!--底部选择-->
	        <div class="mui-bar mui-bar-tab bottom_tab">
	        	<div class="mui-table">
		          	<div class="tab_div mui-table-cell mui-col-xs-12" @click="editCheck">
		          			更多操作
		          	</div>
		        </div>
	          	<div class="mui-table bottom_div_alert" :class="editShow?'trans_move':'trans_down'">
	          		<div class="tab_div active mui-table-cell mui-col-xs-4" @click="passCheck">
	          			通过
	          		</div>
	          		<div class="tab_div tab_line mui-table-cell mui-col-xs-4" @click="rejectCheck">
	          			驳回
	          		</div>
	          		<div class="tab_div tab_line mui-table-cell mui-col-xs-4" @click="delate">
	          			删除
	          		</div>
	          	</div>
	        </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				selectShow:false,
				editShow:false,
			}
		},
		methods:{
			allCheck(){
				this.tableData.forEach((el,index)=>{
					if(el.isCheck!=true){
						el.isCheck=true
						return false
					}
				})
			},
			checkBack(){//取反
				this.tableData.forEach((el,index)=>{
						el.isCheck=!el.isCheck
					})
			},
			//显示更多
			editCheck(){
				this.editShow=!this.editShow
				this.selectShow=!this.selectShow
			},
			//通过
			passCheck(){
				
			},
			//驳回
			rejectCheck(){
				
			},
			//	点击删除
		    delate() {
		      var btnArray = ["否", "是"];
		      mui.confirm("是否确认删除", "提示", btnArray, function(e) {
		        if (e.index == 1) {
		          setTimeout(function() {
		            mui.toast("已经删除");
		          }, 1000);
		        } else {
		          return;
		        }
		      });
		    },
		}
	}
</script>

<style>
.trans_move {
    transition: all 0.5s;
    transform: translateY(-98%);
}
</style>