<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">预借款申请</h1>
		</header>
		<!--头部结束-->
		<!--内容部分-->
		<div class="mui-content">
			<div class="formTable">
				<div class="form_div">
					<div class="form_row">
						<label class="form_row_left huise" id="xm">
		    				借款人
		    				<span class="span_red">*</span>
		    			</label>
						<input type="text" class="form_row_right" name="xm" data="required" v-model="NAME" />
					</div>
					<div class="form_row">
						<label class="form_row_left huise" id="type">
		    				支付公司
		    				<span class="span_red">*</span>
		    			</label>
						<div class="filter-box form_row_right" id="orderClient">
							<div class="filter-text">
								<input class="filter-title" type="text" data="required" 
									name="type" readonly placeholder="请选择" />
								<i class="icon icon-filter-arrow"></i>
							</div>
							<select name="filter" v-for="(item,index) in leaveType">
								<option>{{item.text}}</option>
							</select>
						</div>
					</div>
					<div class="form_row">
						<div class="huise" style="font-size: 10px;">
							天福康事业部未过户泰恩康股份客户，请选[马鞍山天福康]支付
						</div>
					</div>
					<div class="form_row">
						<label class="form_row_left huise" id="PART1">
		    				事业部
		    				<span class="span_red">*</span>
		    			</label>
						<input type="text" class="form_row_right" data="required" 
							name="PART1" @click="showPART1 = true" readonly="readonly" 
							v-model="PARTONE" placeholder="请选择" />
						<van-popup v-model="showPART1" position="bottom">
							<van-picker show-toolbar title="事业部" 
								:columns="partArr" @cancel="showPART1 = false" 
								@confirm="getPart1" />
						</van-popup>
					</div>
					<div class="form_row">
						<label class="form_row_left huise" id="job">
			             	 借款金额
			              <span class="span_red">*</span>
			            </label>
						<input type="text" class="form_row_right" autocomplete="off" 
							data="required" name="job" v-model="MONEY" placeholder="请输入">
					</div>
					<div class="form_row">
						<label class="form_row_left huise" id="start">
		               	 借款日期
		                <span class="span_red"></span>
		              </label>
						<div class="form_row_right">{{STARTDATE}}</div>
					</div>
					<div class="form_row">
						<label class="form_row_left huise" id="end">
		               	 还款日期
		                <span class="span_red"></span>
		              </label>
						<div class="form_row_right">{{ENDDATE}}</div>
					</div>
				</div>
				<!--备注-->
				<div class="form_title">
					备注
				</div>
				<div class="form_div">
					<div class="padding-lr">
						<span class="form_row_height huise">
							用途说明
							<span class="span_red"></span>
						</span>
					</div>
					<div class="padding-lr padding_bb">
						<textarea class="textarea" rows="2" cols="38" placeholder="请输入备注" v-model="BZ"></textarea>
					</div>
					<div class="bottomOver"></div>
				</div>
				<!--备注结束-->
				<div class="submitBtn">
					<button type="button" style="width: 80%; padding: 10px;" id="update" @click="mustFull" 
						class="mui-btn update mui-btn-block mui-btn-primary">提交</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import dayjs from 'dayjs' //时间插件
	import { getDate, mustFill, selecTion,padNumber} from '../../../static/utils/public.js'
	export default {
		data() {
			return {
				NAME: '', //姓名
				COMPANY: '', //请假类型
				leaveType: [{text: '泰恩康股份'}, {text: '马鞍山天福康'}, {text: '安徽维泰利'}, {text: '制药厂'}],
				PARTONE: '', //部门
				showPART1: false, //一级部门选择
				partArr: ["销售部", "电商部", "OTC推广部", "大KA部", "财务部", "市场部", "财务组", "助理团队", "计生事业部"], //
				MONEY: '', //借款金额
				STARTDATE: '', //开始时间
				ENDDATE: '',
				DAYS: '',
				LEADER: '', //上级领导
				BZ: '', //备注
			}
		},
		mounted() {
			var that = this
			$('#orderClient').selectFilter({
				callBack: function(val) {
					that.COMPANY = val
				}
			});
			that.STARTDATE = getDate()
			that.ENDDATE = that.getEndTime()
		},
		methods: {
			getPart1(value, index) { //选择部门
				this.PARTONE = value,
					this.showPART1 = false
			},
			getEndTime() { /*获取两个月后的时间*/
				var now = new Date();
				/*设置相隔的月份 */
				var tt = dayjs().month(now.getMonth() + 3)
				console.log(tt)
				/*var jj= new Date("2019-12-06");
				var ss = dayjs().month(jj.getMonth() + 3)
				console.log(ss)
				var yy = ss.year().toString()
				var mm = ss.month().toString()
				var dd = ss.date().toString()
				console.log(yy + "-" + mm + "-" + dd)*/
				var y = tt.year().toString()
				var m = tt.month().toString()
				var d = tt.date().toString()
				console.log(y + "-" + m + "-" + d)
				if(m="0"){//当到12时会变为0
					m="12"
				}
				var last = y + "-" + m + "-" + d /*将dayjs()对象转为字符串*/
				/*获取两个月后前一天的时间戳*/
				console.log(last)
				console.log((new Date("2019-10-11").getTime())- 24 * 60 * 60 * 1000)
				var fultrue = (new Date(""+last)).getTime() - 24 * 60 * 60 * 1000;
				console.log(fultrue)
				var fultrue = new Date(fultrue)
				//fultrue = `${fultrue.getFullYear()}-${fultrue.getMonth() + 1}-${fultrue.getDate()}`
				fultrue =`${fultrue.getFullYear()}-${padNumber(fultrue.getMonth()+1,2)}-${padNumber(fultrue.getDate(),2)}`
				return fultrue
			},
			applyAjax() { //请求客户数据
				axios.get().then()
			},
			mustFull() {
				var isOk = mustFill();
				if(isOk.length == 0) {
					console.log('hi')
				}
			},
		}
	}
</script>
