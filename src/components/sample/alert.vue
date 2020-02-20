<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">弹窗示例</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<div class="mui-btn mui-btn-primary" @click="alert()">
	    		点击弹出弹窗
	    	</div>
	    	<div class="mongolia" v-show="alertShow" @click="closeAlert"></div><!--蒙层-->
	    	<div class="alert_div" :class="alertShow?'alertOut':'alertIn'">
	    		<div>
			    	<div class="form_title">
			    			标题
			    	</div>
			    	<div class="content">
		    			<div class="formTable">
				    		<div class="form_div">
					    		<div class="form_row">
					    			<label class="form_row_left huise" for="">
					    				左侧标题
					    				<span class="span_red">*</span>
					    			</label>
					    			<input type="text" class="form_row_right"  placeholder="请输入" />
					    		</div>
				    		</div>
				    		<div style="height: 500px;"></div>
				    		<div class="form_div">
					    		<div class="form_row">
					    			<label class="form_row_left huise" for="">
					    				左侧标题
					    				<span class="span_red">*</span>
					    			</label>
					    			<input type="text" class="form_row_right"  placeholder="请输入" />
					    		</div>
				    		</div>
			    		</div>
		    		</div>
	    			<div class="alert_bottom_div">
						<button class="mui-btn mui-btn-block mui-btn-primary alertBtn" @click="addOrder()">
							添加
						</button>
		          	</div>
	    		</div>
	    	</div>
	    </div>	
	</div>
</template>

<script>
	export default{
		data(){
			return {
				alertShow:false,
			}
		},
		methods:{
			alert(){
				this.alertShow=!this.alertShow
			},
			closeAlert(){
				this.alertShow=false
			},
			addOrder(){
				this.alertShow=false
			}
		}
	}
</script>
