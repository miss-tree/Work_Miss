<template>
	<div>
		<!--资信额度-->
		<div class="mui-card" style="margin-bottom: 30px;">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">资信额度</a>
					<div class="mui-collapse-content">
						<div class="form_div">
							<div class="form_row">
								<label class="form_row_left huise" id="WHERE">
			    				部门
			    				<span class="span_red"></span>
			    			</label>
								<div class="form_row_right">{{KEHUINFOR.PART}}</div>
							</div>
							<div class="form_row">
								<label class="form_row_left huise" id="WHERE">
			    				固定额度
			    				<span class="span_red"></span>
			    			</label>
								<div class="form_row_right">{{KEHUINFOR.LIMIT}}</div>
							</div>
							<div class="form_row">
								<label class="form_row_left huise" id="WHERE">
			    				临时额度
			    				<span class="span_red"></span>
			    			</label>
								<div class="form_row_right">{{KEHUINFOR.TEMPORARY}}</div>
							</div>
							<div class="form_row">
								<label class="form_row_left huise" id="WHERE">
			    				应收款
			    				<span class="span_red"></span>
			    			</label>
								<div class="form_row_right">{{KEHUINFOR.RECEVIE}}</div>
							</div>
							<div class="form_row">
								<label class="form_row_left huise" id="WHERE">
			    				待核销金额
			    				<span class="span_red"></span>
			    			</label>
								<div class="form_row_right">{{KEHUINFOR.WAITMONEY}}</div>
							</div>
							<div class="form_row">
								<label class="form_row_left huise" id="WHERE">
			    				发货金额
			    				<span class="span_red"></span>
			    			</label>
								<div class="form_row_right">{{KEHUINFOR.GOODSMONEY}}</div>
							</div>
							<div class="form_row">
								<label class="form_row_left huise" id="WHERE">
			    				余额
			    				<span class="span_red"></span>
			    			</label>
								<div class="form_row_right">{{KEHUINFOR.BALANCE}}</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!--资信额度结束-->
	</div>
</template>
<script>
	export default {
		props:["KEHUINFOR"],
		methods: {
			
		}
	}
</script>