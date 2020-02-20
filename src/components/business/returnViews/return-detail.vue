<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				退货单号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.orderNum}}</div>
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
		    				产品
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.proName}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				单价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.price.toFixed(2)}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				数量
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.num}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				规格
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.batch}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				退货金额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.payMony.toFixed(2)}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				接收方
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.type}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				退货日期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.time}}</div>
				</div>
			</div>
			<!--备注-->
			<div v-show="INFOR.bz!=''">
				<div class="form_title">备注</div>
				<div class="form_div bottom_boder">
					<div class="padding-lr padding_bb" style="padding-top: 8px;">
						<div class="detail_bz">{{INFOR.bz}}</div>
					</div>
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