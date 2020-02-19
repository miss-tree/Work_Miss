<template>
	<div>
		<div class="form_div">
			<div class="form_row">
				<label class="form_row_left huise" id="topp">
             		 一级部门
              	<span class="span_red"></span>
            	</label>
           	 	<div class="form_row_right" >{{TOINFOR.toMovePart}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="tott">
             		二级部门
              	<span class="span_red"></span>
            	</label>
           	 	<div class="form_row_right" >{{TOINFOR.toMoveParts}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="toty">
             		职位类型
              	<span class="span_red"></span>
            	</label>
           	 	<div class="form_row_right" >{{TOINFOR.toMoveType}}</div>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" for>
             	 岗位
              	<span class="span_red"></span>
            	</label>
           	 	<div class="form_row_right" >{{TOINFOR.toMoveJob}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props:["TOINFOR"]
	}
</script>

<style>

</style>