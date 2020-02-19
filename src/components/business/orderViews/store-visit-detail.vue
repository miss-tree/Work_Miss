<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				客户名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				签到时间
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.time}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				店员加提
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.shopAdd}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				主品培训
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.shopTrain}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  竞赛
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.contest}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="person">
		    				主品竞品
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.medicine}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				同类产品
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.same}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				行内热点
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.hot}}</div>
				</div>
			</div>
			<!--备注-->
			<div class="form_title">备注</div>
			<div class="form_div bottom_boder">
				<div class="padding-lr">
					<span class="form_row_height huise">
		           	   备注
		              <span class="span_red"></span>
					</span>
				</div>
				<div class="padding-lr padding_bb">
					<textarea class="textarea" readonly="readonly" cols="38" v-model="INFOR.bz"></textarea>
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