<template>
	<div>
		<div class="formTable">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise" id="xm">
		    				借款人
		    			<span class="span_red"></span>
		    		</label>
					<div class="form_row_right">{{INFOR.NAME}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="type">
		    				支付公司
		    			<span class="span_red"></span>
		    		</label>
					<div class="form_row_right">{{INFOR.COMPANY}}</div>
				</div>
				<!--<div class="form_row">
					<div class="huise" style="font-size: 10px;">
						天福康事业部未过户泰恩康股份客户，请选[马鞍山天福康]支付
					</div>
				</div>-->
				<div class="form_row">
					<label class="form_row_left huise" id="PART1">
		    				事业部
		    			<span class="span_red"></span>
		    		</label>
					<div class="form_row_right">{{INFOR.PARTONE}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="job">
			             	 借款金额
			            <span class="span_red"></span>
			        </label>
					<div class="form_row_right">{{INFOR.MONEY}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="start">
		               	 借款日期
		                <span class="span_red"></span>
		            </label>
					<div class="form_row_right">{{INFOR.STARTDATE}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="end">
		               	 还款日期
		                <span class="span_red"></span>
		            </label>
					<div class="form_row_right">{{INFOR.ENDDATE}}</div>
				</div>
			</div>
			<!--备注-->
			<div class="form_title">
				备注
			</div>
			<div class="form_div">
				<div class="padding-lr">
					<span class="form_row_height huise">
							用途说明
							<span class="span_red"></span>
					</span>
				</div>
				<div class="padding-lr padding_bb">
					<div class="detail_bz">{{INFOR.BZ}}</div>
					<!--<textarea class="textarea" cols="38" readonly="readonly" v-model="INFOR.BZ"></textarea>-->
				</div>
				<div class="bottomOver"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{}
		},
		props:["INFOR"],
	}
</script>

<style>

</style>