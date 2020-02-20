<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">印章申请</h1>
	    </header>
	    <!--头部结束-->
	    <!--内容部分-->
	    <div class="mui-content">
	    	<div class="formTable">
	    		<div class="form_div">
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="company">
		    				所属公司
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" name="company" @click="showCOM = true"
		    				readonly="readonly" v-model="COMPANY" placeholder="请选择"/>
		    			<van-popup v-model="showCOM" position="bottom">
						  <van-picker
						    show-toolbar
						    title="所属公司"
						    :columns="comArr"
						    @cancel="showCOM = false"
						    @confirm="getCom"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="type">
		    				印章类型
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="filter-box form_row_right" id="orderClient">
							<div class="filter-text" >
								<input class="filter-title" type="text" data="required" name="type" readonly placeholder="请选择" />
								<i class="icon icon-filter-arrow"></i>
							</div>
								<select name="filter" v-for="(item,index) in sealType">
									<option>{{item.text}}</option>
								</select>
						</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="part">
		    				事业部
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" name="part" @click="showPART = true"
		    				readonly="readonly" v-model="PART" placeholder="请选择"/>
		    			<van-popup v-model="showPART" position="bottom">
						  <van-picker
						    show-toolbar
						    title="事业部"
						    :columns="partArr"
						    @cancel="showPART = false"
						    @confirm="getPart"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="title">
		    				标题
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" autocomplete="off"
			            	 data="required" name="title" v-model="TITLE" placeholder="请输入">
		    		</div>
		    		<div class="form_row">
			            <label class="form_row_left huise" id="obj">
			             	 对象
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" autocomplete="off"
			            	 data="required" name="obj" v-model="OBJ" placeholder="请输入">
			        </div>
		    		<div class="form_row">
			            <label class="form_row_left huise" id="use">
			             	 用途
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" data="required" name="use" v-model="USE" placeholder="请输入">
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="somebody">
			             	 申请人
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" data="required" name="somebody" v-model="SOMEBODY" placeholder="请输入">
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="applytime">
			             	 日期
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" data="required" name="applytime" v-model="APPLYTIME" placeholder="请输入">
			        </div>
	    		</div>
	    		<!--备注-->
	    		<div class="form_title">
	    			<span>联系人</span>
	    			<span class="mui-btn mui-btn-primary" @click="showAdress">快速绑定</span>
	    			<adress :showAct="showAct" :ORDER="ORDER" @getInfor="getINFOR"></adress>
	    		</div>
				<div class="form_div">
					<div class="form_row">
			            <label class="form_row_left huise" id="person">
			             	 收件人
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" data="required" name="person" v-model="PERSON" placeholder="请输入">
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="phone">
			             	 电话
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" data="required" name="phone" v-model="PHONE" placeholder="请输入">
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="where">
			             	 地址
			              <span class="span_red">*</span>
			            </label>
			            <input type="text" class="form_row_right" data="required" name="where" v-model="WHERE" placeholder="请输入">
			        </div>
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
						<textarea class="textarea" name="" rows="2" cols="38" placeholder="请输入备注" v-model="BZ"></textarea>
					</div>
					<div class="bottomOver"></div>
				</div>
				<!--图片上传-->
	        	<div class="form_title">附件</div>
	        	<div class="form_div" style="padding: 15px 0;">																																				
		        	<uploadpic></uploadpic>
	        	</div>
	        	<div class="bottomOver"></div>
	        	<!--图片上传结束-->
				<!--备注结束-->
	    		<div class="submitBtn">
	    			<button type="button" style="width: 80%; padding: 10px;" id="update"  @click="mustFull"
	    				class="mui-btn update mui-btn-block mui-btn-primary">保存</button>
	    		</div>
		    </div>
	    </div>
	</div>
</template>

<script>
	import adress from "./views/seal-adress-add.vue"
	import uploadpic from "./views/uploadpic.vue"
	import {mustFill,getDate} from '../../../static/utils/public.js'
	export default{
		data(){
			return{
				SEALTYPE:'',//请假类型
				sealType:[{text:'财务部'},{text:'总经办'},{text:'人资部'}],
				COMPANY:'',//一级部门
				showCOM:false,//一级部门选择
				comArr:["股份公司","马鞍山天福康","制药厂","器械厂"],//
				PART:'',//部门
				showPART:false,
				partArr:["销售部","电商部","OTC推广部","大KA部","财务部","市场部","财务组","助理团队","计生事业部"],
			    TITLE:'',//标题
			    OBJ:'',//对象
			    USE:'',//用途
			    showAct:false,
			    PERSON:'',//收件人
			    PHONE:'',//电话
			    WHERE:'',//地址
			    BZ:'',//
			    SURETIME:'',//当前时间
			    SOMEBODY:'',//申请人
			    APPLYTIME:'',//申请时间
			    ORDER: [
				{
					where: "广州市荔湾区紫荆道90号102铺",
					person: "兰冰真",
					phone:1568987463,
				}, {
					where: "广州市白云区黄石街陈田中街72号",
					person: "姜从冬",
					phone:15865423654,
				}, {
					where: "广州市增城区荔城街荔乡路95号首层101铺位",
					person: "赵芳洲",
					phone:15546258936,
				}, {
					where: "广州市从化区良口镇新街30号101房",
					person: "林丰雅",
					phone:13956224862,
				}, {
					where: "广州市增城区永宁街翟洞新村一街4号",
					person: "沙骏伟",
					phone:13764892315,
				}, {
					where: "广州市白云区华成路216-220号",
					person: "溥之桃",
					phone:13465842698,
				}, {
					where: "广州市白云区鹤龙六路248号首层",
					person: "梁和昶",
					phone:18856248652,
				}, {
					where: "碧泉路3号",
					person: "粟如冰",
					phone:13864852658,
				}],//输入历史
			}
		},
		components:{uploadpic,adress},
		mounted(){
			var that=this
			that.SURETIME=getDate()
			that.APPLYTIME=that.SURETIME
			$('#orderClient').selectFilter({
				callBack: function(val) {
					that.SEALTYPE = val
				}
			});
		},
		methods:{
			getCom(value, index){//选择公司
		    	this.COMPANY=value,
		    	this.showCOM=false
			},
			getPart(value, index){//选择部门
		    	this.PART=value,
		    	this.showPART=false
			},
			showAdress(){//关联活动弹出
		    	this.showAct=true
		    },
			applyAjax(){//请求客户数据
				axios.get().then()
			},
			getINFOR(v){
				this.showAct=v.showInfor
				this.PERSON=v.newInfor.person
			    this.PHONE=v.newInfor.phone
			    this.WHERE=v.newInfor.where
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
