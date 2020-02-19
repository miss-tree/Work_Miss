<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				产品编号
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
		    				结算底价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.price}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				统一供货价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.samePrice}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				调整时间
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
		data() {
			return {}
		},
		props: ["INFOR"],
	}
</script>

<style>

</style>