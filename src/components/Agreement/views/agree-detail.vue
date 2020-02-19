<template>
	<div>
		<div class="">
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise">
		    				所属公司
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.company}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				价格备案
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.priceRecord}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				事业部
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.part}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  协议类型
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.agreeType}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="person">
		    				客户级别
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.level}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				区域
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.where}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				经销商
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				连锁客户
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.isChain}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				客户类型
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.clienType}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				进货单位
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.outCom}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				经销商范围
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.whereClient}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  付款方式
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{INFOR.payType}}-{{INFOR.payMony}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="person">
		    				返利周期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.redate}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				协议年份
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.beginYear}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				协议有效期
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.duringTime}}至{{INFOR.timeTo}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				一式几份
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.num}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				盖章状态
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{INFOR.seal}}</div>
				</div>
			</div>
			<!--备注-->
			<div class="form_title">备注</div>
			<div class="form_div bottom_boder">
				<div class="padding-lr padding_bb" style="padding-top: 8px;">
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