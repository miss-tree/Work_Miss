<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">订单退货</h1>
		</header>
		<!--头部结束-->
		<!--内容部分-->
		<div class="mui-content">
			<div class="mongolia" v-show="topLayer" @click="closeAlert"></div>
			<!--蒙层-->
			<div class="formTable">
				<!--头部信息-->
				<div class="form_div">
					<div class="form_row">
							<label class="form_row_left huise" id="CLIENT">
			    				客户名称
			    				<span class="span_red"></span>
			    			</label>
							<div class="form_row_right">
								{{ORDERCUSTOMERINFOR.name}}
							</div>
					</div>
						<div class="form_row">
							<label class="form_row_left huise" id="CLIENT">
			    				开票公司
			    				<span class="span_red"></span>
			    			</label>
							<div class="form_row_right">
								{{ORDERCUSTOMERINFOR.ticketCom}}
							</div>
						</div>
					<div class="form_row">
							<label class="form_row_left huise" id="CLIENT">
			    				发票号码
			    				<span class="span_red"></span>
			    			</label>
							<div class="form_row_right">
								{{ORDERCUSTOMERINFOR.ticketNum}}
							</div>
						</div>	
					<div class="form_row">
							<label class="form_row_left huise">
			    				开票日期
			    				<span class="span_red"></span>
			    			</label>
							<div class="form_row_right">
								{{ORDERCUSTOMERINFOR.ticketDate}}
							</div>
					</div>	
					<div class="form_row">
						<label class="form_row_left huise" id="CLIENT">
		    				部门
		    				<span class="span_red">*</span>
		    			</label>
						<input type="text" class="form_row_right" data="required" @click="showPart = true" readonly="readonly" v-model="SELECTPART" name="part" placeholder="请选择" />
						<van-popup v-model="showPart" position="bottom">
							<van-picker show-toolbar title="部门" :columns="partArr" @cancel="showPart = false" @confirm="getPart" />
						</van-popup>
					</div>
					<div class="form_row">
						<label class="form_row_left huise" id="section">
		    				发票类型
		    				<span class="span_red">*</span>
		    			</label>
						<input type="text" class="form_row_right" data="required" @click="showTicket = true"
							 readonly="readonly" v-model="TICKETTYPE" name="section" placeholder="发票已被税局认证，请选择红字通知单" />
						<van-popup v-model="showTicket" position="bottom">
							<van-picker show-toolbar title="发票类型" :columns="ticketType" @cancel="showTicket = false" @confirm="getTicketType" />
						</van-popup>
					</div>
					<div>
						<div class="form_row">
							<label class="form_row_left huise" id="CLIENT">
			    				是否退货
			    				<span class="span_red">*</span>
			    			</label>
							<div class="form_row_right">
			    				<label for="isPlay">
			    				<input class="myRadio" type="radio" value="是" name="ISRETURN"  v-model="ISRETURN" id="isPlay"/>
			    					是
				    			</label>
			    				<label for="noPlay">
				    			<input class="myRadio" type="radio" value="否" name="ISRETURN"  v-model="ISRETURN" id="noPlay"/>
			    					否
				    			</label>
			    			</div>
						</div>
					</div>
					<div class="form_row">
						<label class="form_row_left huise" for="" id="expressnumber">
		    				退票类型
		    				<span class="span_red">*</span>
		    			</label>
						<input type="text" class="form_row_right" data="required" @click="showReturn = true"
							 readonly="readonly" v-model="RETURNTICKET" name="section" placeholder="请选择" />
						<van-popup v-model="showReturn" position="bottom">
							<van-picker show-toolbar title="退票类型" :columns="returnType" @cancel="showReturn = false" @confirm="getReturnType" />
						</van-popup>
					</div>
					<div class="form_row">
						<label class="form_row_left huise" for="" id="expressnumber">
		    				退货原因
		    				<span class="span_red">*</span>
		    			</label>
						<input type="text" class="form_row_right" data="required" @click="showWhy = true"
							 readonly="readonly" v-model="RETURNWHY" name="section" placeholder="请选择" />
						<van-popup v-model="showWhy" position="bottom">
							<van-picker show-toolbar title="退货原因" :columns="returnReason" @cancel="showWhy = false" @confirm="getReturnWhy" />
						</van-popup>
					</div>
				</div>
				<!--选项卡-->
				<div>
					<div class="tabHead">
						<div @click="curIndex=0" :class="{'active':curIndex==0}">
							<span>订单详情</span>
						</div>
						<div @click="curIndex=1" v-show="ISRETURN=='是'" :class="{'active':curIndex==1}">
							<span>退货产品</span>
						</div>
					</div>
					<!--客户订单-->
					<div v-show="curIndex==0">
						<!--订单详情组件-->
						<listdeatail :ORDER="ORDER"></listdeatail>
					</div>
					<!--客户订单完成-->

					<div v-show="ISRETURN=='是'">
						<!--退货开始-->
						<div v-show="curIndex==1">
							<addreturn :RETURNORDER="RETURNORDER" :ORDER="ORDER"
								 :proList="proList"></addreturn>
						</div>
					</div>
					<!--退货结束-->
				</div>
					<!--备注-->
					<div class="form_title">
						备注
					</div>
					<div class="form_div">
						<div class="padding-lr">
							<span class="form_row_height huise">
							备注
							<span class="span_red"></span>
							</span>
						</div>
						<div class="padding-lr padding_bb">
							<textarea class="textarea" name="" rows="1" cols="38" placeholder="请输入订单备注" v-model="BZ"></textarea>
						</div>
					</div>
				<!--备注结束-->
				<div style="text-align: center;margin-top: 15px; margin-bottom: 15px;">
					<button type="button" style="width: 80%; padding: 10px;" id="update" @click="mustFull" class="mui-btn update mui-btn-block mui-btn-primary">提交</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import listdeatail from "./order-list-deatail.vue"/*订单详情*/
	import addreturn from "./order-list-add-return.vue"/*添加退货*/
	import {  mustFill } from '../../../static/utils/public.js'
	export default {
		data() {
			return {
				topLayer: false, //显示蒙层
				curIndex:0,
				RETURNTYPE: '', //退货数量类型
				ORDERCUSTOMERINFOR: {
					name: "平安医疗健康管理股份有限公司",
					person: '枭龙',
					ticketDate: '2019-07-19',
					ticketCom: "泰恩康股份",
					ticketNum: "TEK20190719"
				}, //客户信息
				showPart:false,//部门选择
				SELECTPART:'',//选择的部门
				partArr:["销售部","大K部","电商部","OTC部","招商部","市场部","财务部","助理团队"],
				ISRETURN:'',//是否退货
				showTicket:false,//发票类型
				TICKETTYPE:'',//发票类型
				ticketType: ['原发票','红字通知单'],//选择发票类型
				showReturn:false,//退票类型
				RETURNTICKET:'',//退票类型
				returnType:["退票重开","退货退票","退票转销"],
				showWhy:false,
				RETURNWHY:'',//退货原因
				returnReason:["近效期","自提发现破损","入库后破损","转仓","其他"],
				//partName: [{text: '部分退货'}, {text: '全部退货'}],//退货下拉选项
				companyArr: ['泰恩康股份', '马鞍山天福康', '电商公司', '安徽维泰利'],
				ORDER: [{NAME: '红花油',NUMBER: 2,PRICE: 5,MONEY: '',M_NUMBER: '',M_MONEY: '',UNIT: '件'},
					{NAME:'和胃',NUMBER:30,PRICE:150,MONEY:'5',M_NUMBER:1000,M_MONEY:1000,UNIT: '件'}
				], //订单
				editOrder: {NAME: '红',NUMBER: 12,PRICE: 6,MONEY: '',M_NUMBER: '',M_MONEY: '',UNIT: '件',index: ''},//订单查看
				RETURNORDER:[],//退货产品单
				//RETURNORDER:[{name:'红花油',num: 2,returnNum:3,price: 5,money:10,m_number: '',m_money: '',unit:'件',index:''}],//退货产品单
				selectPro:'',//选择的退货产品
				editReturn: {name:this.selectPro,num:'',returnNum:'',price:'',money:'',m_number:'',m_money:'',unit:'',index:''}, //退货添加、编辑
				BZ: '', //备注
				alertShow: false, //显示 详情弹窗
				returnShow:'',//显示退货弹窗
				isEditReturn:false,//是否是编辑退货
				editShow: false, //切换添加和编辑按钮
				checkData: [],//勾选的订单
				allCheck: false, //是否全选
			}
		},
		components:{
			listdeatail,addreturn
		},
		watch: {
			ISRETURN(newVal,oldVal){//监听改变curIndex的下标
				if(newVal=='否'){
					this.curIndex=0
				}
			},
			checkData(){//监看点击选项
				if(this.checkData.length==this.RETURNORDER.length){
					this.allCheck=true;
				}else{
					this.allCheck=false;
				}
			},
			deep:true,// 深度监视
		},
		
		computed: {
			proList(){//获取订单上的产品名称
				return this.ORDER.map(row=>({text:row.NAME}))
			},
		},
		mounted() {
			var that = this
			$('#proSelect').selectFilter({
				callBack: function(val) {
					$("#proSelect input").val(val)
					/*再次触发，让selectPro得到值*/
					$("#proSelect input")[0].dispatchEvent(new Event('input'));
					that.editReturn.name = val
				}
			});
		},
		methods: {
			getPart(value, index){//获取选择的部门
				this.SELECTPART = value,
				this.showPart = false
			},
			getTicketType(value, index) { //获取选择的发票类型
				this.TICKETTYPE = value,
				this.showTicket = false
			},
			getReturnType(value, index) { //获取选择的退票类型
				this.RETURNTICKET = value,
				this.showReturn = false
			},
			getReturnWhy(value, index) { //获取选择的退货原因
				this.RETURNWHY = value,
				this.showWhy = false
			},
			applyAjax() { //请求客户数据
				axios.get(api).then((res)=>{
					this.ORDERCUSTOMERINFOR=res.data.data
				})
			},
			
			closeAlert() { //关闭蒙层
				this.topLayer = false;
				this.alertShow = false;//关闭详情弹窗
				this.returnShow = false;//关闭退货弹窗
			},
			
			mustFull() {//必填项
				var isOk = mustFill();
				if(isOk.length == 0) {
					console.log('hi')
				}
			},
		}
	}
</script>