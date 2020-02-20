<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				发票编号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.billNum}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				客户名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		              	  开票金额
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.payMony}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				发票地址
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.where}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				收票人
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.person}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				联系电话
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.phone}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				经办人
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.staff}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				EMS
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.EMS}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				开票日期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.billDate}}</div>
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