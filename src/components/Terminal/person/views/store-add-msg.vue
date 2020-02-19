<template>
	<div>
		<div class="">
	    		<div class="form_div">
		    		<div class="form_row" style="border-top: 1px #E6E6E6 solid;">
		    			<label class="form_row_left huise" id="khmc">
		    				客户名称
		    				<span class="span_red">*</span>
		    			</label>
			            <input type="text" class="form_row_right" data="required"
			            autocomplete="off" name="khmc" v-model="INFOR.name" placeholder="请输入">
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="storeAttr">
		    				门店属性
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" @click="showAttr = true"
		    				readonly="readonly" v-model="INFOR.storeAttr" name="storeAttr" placeholder="请选择" />
		    			<van-popup v-model="showAttr" position="bottom">
						  <van-picker
						    show-toolbar
						    title="门店属性"
						    :columns="attrArr"
						    @cancel="showAttr = false"
						    @confirm="getAttr"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="storeAttr">
		    				门店类型
		    				<span class="span_red">*</span>
		    			</label>
		    			<input type="text" class="form_row_right" data="required" @click="showType = true"
		    				readonly="readonly" v-model="INFOR.type" name="storeAttr" placeholder="请选择" />
		    			<van-popup v-model="showType" position="bottom">
						  <van-picker
						    show-toolbar
						    title="门店类型"
						    :columns="typeArr"
						    @cancel="showType = false"
						    @confirm="getType"
						  />
						</van-popup>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise">
		    				医保情况
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="form_row_right">
		    				<label for="isPlay">
		    				<input class="myRadio" type="radio" value="是" name="isPlay"  v-model="INFOR.isYB" id="isPlay"/>
		    					是
			    			</label>
		    				<label for="noPlay">
			    			<input class="myRadio" type="radio" value="否" name="isPlay"  v-model="INFOR.isYB" id="noPlay"/>
		    					否
			    			</label>
		    			</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="money">
		    				月营业额
		    				<span class="span_red">*</span>
		    			</label>
			            <input type="text" class="form_row_right" data="required"
			            	name="money" v-model="INFOR.money" placeholder="请输入">
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="" id="level">
		    				门店级别
		    				<span class="span_red">*</span>
		    			</label>
		    			<div class="filter-box form_row_right" id="storeLevel">
							<div class="filter-text" >
								<input class="filter-title" type="text" readonly placeholder="请选择" />
								<i class="icon icon-filter-arrow"></i>
							</div>
							<select name="filter" v-for="(item,index) in levelArr">
								<option>{{item.text}}</option>
							</select>
						</div>	
		    		</div>
		    		<div class="form_row">
		    			<div class="huise" style="font-size: 12px;">
		    				A:30万/月以上、B:15万-30万/月、C:5万-15万/月、D:5万/月以下
		    			</div>
		    		</div>
	    			<div class="form_row">
		              	<label class="form_row_left huise" id="where">
		              	  省市区
		                <span class="span_red">*</span>
		              	</label>
		              	<input
			                type="text"
			                class="form_row_right"
			                name="where"
			                placeholder="请选择"
			                id="storeWhere"
			                v-model="INFOR.where"
			              >
		            </div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="person">
		    				联系人
		    				<span class="span_red">*</span>
		    			</label>
			            <input type="text" class="form_row_right" data="required"
			            autocomplete="off" name="person" v-model="INFOR.person" placeholder="请输入">
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="phone">
		    				电话
		    				<span class="span_red">*</span>
		    			</label>
			            <input type="text" class="form_row_right" data="required" pattern="/\d{3}-\d{8}|\d{4}-\d{7}/"
			            autocomplete="off" name="phone" v-model="INFOR.phone" placeholder="请输入">
		    		</div>
	    		</div>
	    		<!--备注-->
		        <div class="form_title">备注</div>
		        <div class="form_div bottom_boder">
		          <div class="padding-lr">
		            <span class="form_row_height huise">
		           	   备注
		              <span class="span_red"></span>
		            </span>
		          </div>
		          <div class="padding-lr padding_bb">
						<textarea class="textarea" name="" rows="1" cols="38" placeholder="请输入订单备注" v-model="INFOR.bz"></textarea>
					</div>
					<!--<div class="bottomOver"></div>-->
		        </div>
		    </div>
	</div>
</template>

<script>
	import {PopPicker,mustFill} from "../../../../../static/utils/public.js";
	export default{
		data(){
			return{
				showAttr:false,
				attrArr:["KA门店","连锁大店Vip","单体大店Vip","优质诊所Vip","小连锁","单体药店","诊所",],
				showType:false,
				typeArr:["社区店","街边店","商业中心店","职业院校院区店","镇区中心店","偏僻","其他",],
				levelArr:[{text:"A"},{text:"B"},{text:"C"},{text:"D"},],
				
			}
		},
		props:["INFOR"],
		watch:{
			INFOR(newVal,oldVal){
				if(newVal){
					this.$emit("setInfor",newVal)
				}
			}
		},
		mounted(){
			PopPicker("storeWhere");
			var that=this
			$('#storeLevel').selectFilter({
				callBack: function(val) {
					that.INFOR.level = val
				}
			});
		},
		methods:{
			getAttr(value, index){//选择门店属性
		    	this.INFOR.storeAttr=value,
		    	this.showAttr=false
			},
			getType(value, index){//选择门店类型
		    	this.INFOR.type=value,
		    	this.showType=false
			},
		}
	}
</script>

<style>
</style>