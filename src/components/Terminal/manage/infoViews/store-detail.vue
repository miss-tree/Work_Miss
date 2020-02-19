<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				客户名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="storeAttr">
		    				门店属性
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.storeAttr}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="storeAttr">
		    				门店类型
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.type}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				医保情况
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.isYB}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				月营业额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.money}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				门店级别
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.level}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  省市区
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.where}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="person">
		    				联系人
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.person}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				电话
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.phone}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				登记时间
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.time}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				OTC代表
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.otc}}</div>
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
					<textarea class="textarea" readonly="readonly" cols="38" v-model="INFOR.bz"></textarea>
				</div>
				<div class="bottomOver"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showAttr: false,
				attrArr: ["KA门店", "连锁大店Vip", "单体大店Vip", "优质诊所Vip", "小连锁", "单体药店", "诊所", ],
				showType: false,
				typeArr: ["社区店", "街边店", "商业中心店", "职业院校院区店", "镇区中心店", "偏僻", "其他", ],
				levelArr: [{
					text: "A"
				}, {
					text: "B"
				}, {
					text: "C"
				}, {
					text: "D"
				}, ],

			}
		},
		props: ["INFOR"],
	}
</script>

<style>

</style>