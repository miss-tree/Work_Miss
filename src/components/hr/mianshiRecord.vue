<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>		    
		    <h1 class="mui-title">面试记录</h1>
		    <span class="top-left" @click="jump()">添加</span>
		</header>
		<div class="mui-content">
				<ul class="mui-table-view">
					 <li class="mui-table-view-cell">
					 	<label class="text-justify">面试HR<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		XXX
					 	</span>
					 </li>
			     <li class="mui-table-view-cell">
				     	<label class="text-justify">面试人<span class="span-justify"></span></label>
						<span class="margin-lr"><input type="text" name=""value=""/></span>	
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">面试职位<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		<select name="">
					 			<option value="">服务专员</option>
					 			<option value="">美工</option>
					 			<option value="">产品经理</option>
					 		</select>
					 	</span>
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">面试时间<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		<div class="mui-content-padded">
								<button id='demo1' data-options='{"type":"date","beginYear":2018,
											"endYear":2022}'
									class="btn mui-btn mui-btn-block"  >
									选择日期...
								</button>
							</div>
						</span>
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">联系电话<span class="span-justify"></span></label>
					<span class="margin-lr"><input type="text" name=""value=""/></span>	
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">状态<span class="span-justify"></span></label>
					 	<span class="margin-lr">
							<select name="">
					 			<option value="">淘汰</option>
					 			<option value="">录取</option>
					 			<option value="">复试</option>
					 		</select>
					 	</span>
			     </li>
				</ul>
			</div>
			<div class="margin-t padding-lr">
				<span>备注</span>
					<textarea name="" rows="2" cols="28" style="width: 100%;"></textarea>
			</div>
  	<!--</form>-->
  			<uploadpic></uploadpic>
	</div>
</template>

<script>
	import uploadpic from "../assembly/uploadpic"
	
	export default{
		components:{
			uploadpic
		},
		methods:{
			jump(){
				this.$router.push({path:"/mianshiDetail",query:{id:id}})
			}
		}
	}
</script>

<style>
</style>