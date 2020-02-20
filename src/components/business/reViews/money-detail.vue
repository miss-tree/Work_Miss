<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				客户名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				总应收金额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.payMony.toFixed(2)}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				未核销余额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.priceMoney.toFixed(2)}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				审核金额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.examMoney.toFixed(2)}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" style="width: 120px;">
		    				实际总应收金额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.realMoney.toFixed(2)}}元</div>
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
