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
		    				发货单位
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.company}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  应收金额
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.payMony}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="person">
		    				经办人
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.person}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				业务员
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.staff}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				出货方式
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.outType}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				发货日期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.time}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				发货单号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.sendNum}}</div>
				</div>
			</div>
			<!--备注-->
			<div class="form_title">备注</div>
			<div class="form_div bottom_boder">
				<div class="padding-lr padding_bb" style="padding-top: 8px;">
					<div class="detail_bz">{{INFOR.bz}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["INFOR"],
	}
</script>
