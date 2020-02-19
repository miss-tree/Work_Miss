<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				订单号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.orderNum}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				客户名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				产品
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.proName}}</div>
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
		    				单价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.price}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				数量
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.num}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				销售金额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">
						{{INFOR.money=INFOR.price*INFOR.num}}元
					</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				发货日期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.sendDate}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				批号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.batch}}</div>
				</div>
			</div>
			<!--备注-->
			<!--<div class="form_title">备注</div>
			<div class="form_div bottom_boder">
				<div class="padding-lr padding_bb" style="padding-top: 8px;">
					<div class="detail_bz">{{INFOR.bz}}</div>
				</div>
			</div>-->
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