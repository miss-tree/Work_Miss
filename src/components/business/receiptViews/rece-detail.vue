<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				来款单号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.billNum}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				来款客户
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		              	  收款金额
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.payMony}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				收款方式
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.type}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				收款银行
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.bank}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				待核销金额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.debt}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				收款日期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.billDate}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				收款公司
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.outCom}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				经办人
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.staff}}</div>
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