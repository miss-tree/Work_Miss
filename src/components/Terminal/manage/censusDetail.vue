<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">药店档案统计列表</h1>
		</header>
		<!--头部结束-->
		<div class="mui-content">
		<div class="form_div">
			<div class="form_row">
				<label class="form_row_left huise" id="khmc">
		    				大区
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.dq}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="storeAttr">
		    				省区
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.sq}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="storeAttr">
		    				区域
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.qy}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise">
		    				姓名
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.name}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" for="" id="level">
		    				OA开通时间
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.time}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="where">
		              	  药店数量
		                <span class="span_red"></span>
		              	</label>
				<div class="form_row_right">{{INFOR.num}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="person">
		    				草稿量
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.shu}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="phone">
		    				待审量
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.wait}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="phone">
		    				通过量
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.pass}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="phone">
		    				未通过量
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.oppose}}</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				INFOR:{
					dq:"浙江省",
					sq:"浙江省",
					qy:"浙沪",
					name:"禹曦之",
					time:"2019-08-22",
					num:"89",
					shu:3,
					wait:1,
					pass:7,
					oppose:1,
				}
			}
		}
	}
</script>

<style>

</style>