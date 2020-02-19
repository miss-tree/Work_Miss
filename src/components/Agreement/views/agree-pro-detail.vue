<template>
	<div>
		<div class="" v-for="(item,index) in INFOR">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				产品名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				统一供货价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.supplyPrice}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				供货价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.price}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  价格差额
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{item.balance}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="person">
		    				任务数
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.task}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				返利比例
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.scale}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				返利周期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.during}}</div>
				</div>
			</div>
			<!--备注-->
			<div class="form_title">备注</div>
			<div class="form_div bottom_boder">
				<div class="padding-lr padding_bb" style="padding-top: 10px;">
					<textarea class="textarea" readonly="readonly" cols="38" v-model="item.bz"></textarea>
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