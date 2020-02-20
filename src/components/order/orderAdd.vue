<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">订单申请</h1>
	    </header>
	    <!--头部结束-->
	    <!--内容部分-->
	    <div class="mui-content">
	    	<div class="formTable">
	    		<div class="form_title">
	    			客户信息
	    		</div>
	    		<div class="form_div">
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="WHERE">
		    				区域
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" name="WHERE" @click="showWHER = true"
		    				readonly="readonly" v-model="WHERE" placeholder="请选择" id="orderWhere"/>
		    			<van-popup v-model="showWHER" position="bottom">
						  <van-picker
						    show-toolbar
						    title="区域"
						    :columns="where"
						    @cancel="showWHER = false"
						    @confirm="getWhere"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="CLIENT">
		    				客户名称
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="filter-box form_row_right" id="orderClient">
									<div class="filter-text" >
										<input class="filter-title" type="text" readonly placeholder="请选择" />
										<i class="icon icon-filter-arrow"></i>
									</div>
									<select name="filter" v-for="(item,index) in clientName">
										<option>{{item.text}}</option>
									</select>
						</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				促销活动
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="form_row_right">
		    				<label for="isPlay">
		    				<input class="myRadio" type="radio" value="是" name="isPlay"  v-model="isPlay" id="isPlay"/>
		    					是
			    			</label>
		    				<label for="noPlay">
			    			<input class="myRadio" type="radio" value="否" name="isPlay"  v-model="isPlay" id="noPlay"/>
		    					否
			    			</label>
		    			</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="section">
		    				部门
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" @click="showPicker = true"
		    				readonly="readonly" v-model="SECTION" name="SECTION" placeholder="请选择" />
		    			<van-popup v-model="showPicker" position="bottom">
						  <van-picker
						    show-toolbar
						    title="部门"
						    :columns="columns"
						    @cancel="showPicker = false"
						    @confirm="onConfirm"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="" id="company">
		    				开票公司
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" @click="comPicker = true" 
		    				readonly="readonly" v-model="COMPANY" name="COMPANY" placeholder="请选择" />
		    			<van-popup v-model="comPicker" position="bottom">
						  <van-picker
						    show-toolbar
						    title="开票公司"
						    :columns="companyArr"
						    @cancel="comPicker = false"
						    @confirm="getVal"
						  />
						</van-popup>
		    		</div>
	    		</div>
	    		<div>
	    			<!--订单信息-->
	    			<div class="form_title">订单详情</div>
	    			<orderadd :ORDER="ORDER" :PROLIST="PROLIST"></orderadd>
		    		<!--订单收货-->
		    		<div class="form_title">收货人</div>
		    		<orderwhere :REINFOR="REINFOR"></orderwhere>
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
					<div class="bottomOver"></div>
				</div>
				<!--备注结束-->
	    		<div class="submitBtn">
	    			<button type="button" style="width: 80%; padding: 10px;" id="update"  @click="mustFull"
	    				class="mui-btn update mui-btn-block mui-btn-primary">提交</button>
	    		</div>
		    	 <!--资信额度-->
		    	 <credit-line v-show="showInfor==true" :KEHUINFOR="KEHUINFOR"></credit-line>
		    </div>
	    </div>
	</div>
</template>

<script>
	import creditLine from "./views/creditLine.vue"	/*资信额度*/
	import orderadd from "./views/order-add.vue"/*订单申请*/
	import orderwhere from "./views/order-where.vue"/*订单收货信息*/
	import {PopPicker,mustFill,selecTion} from '../../../static/utils/public.js'
	export default{
		data(){
			return{
				showNumber:false,
				left:'活动商品',
				showWHER:false,//区域选择
				value1: '',
			    option1: [{ text:'全部商品全部商品全部商品全部商品全部商品',value: '全部商品全部商品全部商品全部商品全部商品'},
			    { text:'新款商品', value: '新款商品'},{ text:'活动商品', value: '活动商品'}],
				CLIENT:'',//客户名称
				showPicker:false,//部门弹窗
				comPicker:false,//开票公司弹窗
				where:["北京市","上海市","广东省","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省",
			      "江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广西壮族",
			      "海南省","重庆","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","台湾省","香港","澳门","宁夏"],
				columns: ['销售部', '电商部', 'OTC推广部', '大KA部', '财务部','市场部','财务组'],
				clientName:[{text:'国药控股股份有限公司'},{text:'华润医药控股有限公司'},{text:'同仁堂'},{text:'大参林dashenlin'},{text:'益丰大药房'},
				{text:'平安医疗健康管理股份有限公司'},{text:'健康元药业集团股份有限公司'}],
				showInfor:false,//展示选择客户后显示编辑信息
				isPlay:'',//是否促销活动
				WHERE:'',//区域
				orderWhere:[{text:'广东'},{text:'福建'},{text:'山西'},{text:'上海'}],
				SECTION:'',//选择的部门
				sectionArr:[{text:'销售部'},{text:'电商部'},{text:'OTC推广部'},{text:'大KA部'},{text:'财务部'},{text:'市场部'},{text:'财务组'}],//
				COMPANY:'',//开票公司
				companyArr:['泰恩康股份','马鞍山天福康','电商公司','安徽维泰利'],
				ORDER:[],//订单
				PROLIST:[{text:"乌鸡丸"},{text:"红花油"},{text:"和胃"}],
				editOrder:{name:'红',num:12,price:6,money:'',M_num:'',M_money:'',unit:'件',index:''},//订单添加编辑
				editShow:false,
				BZ:'',//备注
				KEHUINFOR:{
					part:'销售部',//部门
					limit:'50000',//固定额度
					TEMPORARY:'2000',//临时额度
					RECEVIE:'18800',//应收款
					WAITmoney:'3800',//待核销金额
					GOODSmoney:'15000',//发货金额
					BALANCE:'50000',},//余额
				REINFOR:[{person:'黎放',phone:15699874568,where:'广州市天河区棠下336号',otc:'袁芳',otcPhone:15894652388,bz:''}],
			}
		},
		components: {
			creditLine,
			orderadd,orderwhere,
		},
		watch:{
			CLIENT(newVal,oldVal){//监听是否有选客户
				if(newVal!=''){//选择客户就请求客户数据
					this.showInfor=true;
				}else{
					this.showInfor=false;
				}
			},
			deep:true,// 深度监视
		},
		computed:{
		},
		mounted(){
			var that=this
			$('#orderClient').selectFilter({
				callBack: function(val) {
					//返回选择的值
					console.log(val + '-是返回的值')
					that.CLIENT = val
				}
			});
		},
		methods:{
			getWhere(value, index){//选择区域
		    	this.WHERE=value,
		    	this.showWHER=false
			},
			getCLIENT(value, index){//选择区域
		    	this.CLIENT=value,
		    	this.showWHER=false
			},
		    onConfirm(value, index){//vant的选择器=>选择部门
		    	this.SECTION=value,
		    	this.showPicker=false
		    },
		    getVal(value,index){//选择公司
		    	this.COMPANY=value,
		    	this.comPicker=false
		    },
			applyAjax(){//请求客户数据
				return new Promise((resolve,reject)=>{
					var xhr=new XMLHttpRequest();
					xhr.open('get',basurl)
					xhr.send();
					xhr.addEventListener("readystatechange",function(){
						if(xhr.readyState==4&&xhr.status==200){
							resolve(xhr.response)
						}
					})
					}).then((res)=>{
						this.KEHUINFOR=JSON.parse(res).data
					})
			},
			mustFull(){
				var isOk=mustFill();
				if(isOk.length==0){
					console.log('hi')
				}
			},
		}
	}
</script>