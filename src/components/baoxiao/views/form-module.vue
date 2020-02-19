<template>
	<div>
		<!--<div class="form_div">-->
          <div class="form_row" v-for="(item,index) in list">
            <label class="form_row_left huise" for>
              {{item.name}}
              <span class="span_red" v-show="item.isMust">*</span>
            </label>
            <input type="text" class="form_row_right" v-model="item.inpt" placeholder="请输入">
          </div>
        <!--</div>-->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['list'],
	}
</script>

<style>
</style>