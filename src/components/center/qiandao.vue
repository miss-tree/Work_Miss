<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">每日签到</h1>
		    <span class="top-left">提交</span>
		</header>
		<div class="bar-ge"></div>
		<div class="time">
			<span>2018年11月1日</span>
		</div>
		<div>
			<iframe src="https://map.baidu.com/" width="100%" height="150px"></iframe>
		</div>
			<ul class="mui-table-view margin-t">
			    <li class="mui-table-view-cell">店名</li>
			    <li class="mui-table-view-cell">地点</li>
			    <li class="mui-table-view-cell">产品 
			    	<select name="">
				    	<option value="" disabled="disabled"  style="color: ##C7C7CC;">请选择</option>
				    	<option value="">口罩</option>
				    	<option value="">和胃整肠丸</option>
				    	<option value="">维泰利</option>
			   		 </select>
			    </li>
			</ul>
		
		<div class="margin-t padding-lr">
				<span>备注</span>
				<!--<div class="img-div">-->
					<textarea name="" rows="2" cols="28" style="width: 100%;"></textarea>
				<!--</div>-->
		</div>
		
		<uploadpic></uploadpic>
		
	</div>
</template>

<script>
	import uploadpic from "../assembly/uploadpic"
	export default{
		mounted(){
			
		},
		components:{
			uploadpic
		},
		data(){
			return{
				
			}
		},
		methods:{
//			jump(){
//				this.$router.go(-1)
//			},
		}
	}
</script>

<style lang="scss">
	
</style>