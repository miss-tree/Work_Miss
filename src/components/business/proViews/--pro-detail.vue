<template>
	<div>
		<div class="" v-for="(item,index) in INFOR">
			<div class="form_title">产品({{index+1}})</div>
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				订单号
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.orderNum}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise">
		    				产品名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="money">
		    				数量
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.num}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				单位
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.unit}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  单价
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{item.price}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="person">
		    				合计金额
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.money=item.num*item.price}}元</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="phone">
		    				规格
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.norms}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				审核状态
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{item.exam}}</div>
				</div>
				<!--<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  开票日期
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{item.beginTime}}</div>
				</div>-->
			</div>
			<!--统计-->
			<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;">
				<div class="bottomWidth flex justify_content">
					<span class="span_15px">产品数量：{{INFOR.length}}</span>
					<span class="span_15px" style="margin-left: 5px;">开票金额：{{MONEY}}</span>
				</div>
				<!--<div class="mui-btn mui-btn-primary applyBtn" @click="routerTo">申请</div>-->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {}
		},
		props: ["INFOR"],
		computed:{
			MONEY(){/*合计金额*/
				return this.INFOR.map(row=>row.num*row.price).reduce((acc,cur)=>parseFloat(cur)+acc);
			}
		}
	}
</script>

<style>

</style>