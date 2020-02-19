<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				药店名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="storeAttr">
		    				签到时间
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.time}}</div>
				</div>
				<!--<div class="form_row">
					<label class="form_row_left huise" id="storeAttr">
		    				门店类型
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.type}}</div>
				</div>-->
				<div class="form_row">
					<label class="form_row_left huise">
		    				医保情况
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.isYB}}</div>
				</div>
				<!--<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				月营业额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.money}}</div>
				</div>-->
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				门店级别
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.level}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  地址
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
						<div class="detail_bz">{{INFOR.bz}}</div>
					<!--<textarea class="textarea" readonly="readonly" cols="38" v-model="INFOR.bz"></textarea>-->
				</div>
				<div class="bottomOver"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ["INFOR"],
	}
</script>

<style>

</style>