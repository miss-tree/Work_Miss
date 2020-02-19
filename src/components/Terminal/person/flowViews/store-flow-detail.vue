<template>
	<div>
		<div class="">
			<!--<div class="form_div">-->
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				商品名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				单价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.price}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				数量
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.num}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				金额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.money}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  规格
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.norms}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="person">
		    				单位
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.unit}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				批号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.batch}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				OTC
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.otc}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				流向日期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.starTime}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				上报日期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.upTime}}</div>
				</div>
			</div>
			<!--备注-->
			<!--<div class="form_title">备注</div>
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
			</div>-->
		<!--</div>-->
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