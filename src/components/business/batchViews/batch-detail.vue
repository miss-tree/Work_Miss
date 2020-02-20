<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				客户名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.proNum}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		              	  产品名称
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				规格
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.norms}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				批号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.batch}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				单位
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.unit}}</div>
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
		    				发货日期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.Date}}</div>
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

