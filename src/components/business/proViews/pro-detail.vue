<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				用友编号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.fNumber}}</div>
				</div>
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
		    				单位
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.unit}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				最低供货价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.lowPrice}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				底价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.price}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				最高供货价
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.supPrice}}元</div>
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
		    				装箱量
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.num}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				中包装数
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.pageNum}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				商品产地
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.where}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				生产周期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.cycle}}</div>
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
