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
				<label class="form_row_left huise" id="storeAttr">
		    				省区
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.sq}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise">
		    				药店名称
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.name}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="phone">
		    				地址
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.where}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" for="" id="level">
		    				手机号
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.phone}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="where">
		              	  微信号
		                <span class="span_red"></span>
		              	</label>
				<div class="form_row_right">{{INFOR.wx}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="person">
		    				监管码
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.code}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="phone">
		    				扫码时间
		    				<span class="span_red"></span>
		    			</label>
				<div class="form_row_right">{{INFOR.time}}</div>
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
					sq:"浙江省",
					name:"青云药店(青云路)",
					time:"2019-08-22",
					where:"街口街道青云路26号",
					num:"89",
					phone:13789546800,
					wx:"FF6699sd",
					code:"SDS5645WER",
					oppose:1,
				}
			}
		}
	}
</script>

<style>

</style>