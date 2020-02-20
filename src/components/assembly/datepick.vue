<template>
	<div style="display: inline-block;">
		<button id='demo' class="btn mui-btn mui-btn-block"
			data-options='{"type":"date","beginYear":2018,"endYear":2025}' :value="updata()">
			选择日期...
		</button>
	</div>
</template>

<script>
	export default {
	data() {
		return {
			dateday:'选择日期...',
		}
	},
	props:["datetime"],
	mounted() {
		var _that=this
		$('#demo').click(function() {
			//规定年月日的选择
			var self = this;
			var dtpicker = new mui.DtPicker({
				type: "date",
				beginDate: 2018, //设置开始日期   ///yg备注：括号中不填
				endDate: 2025, //设置结束日期    //真正的是10.21
				labels: ['年', '月', '日'] //设置默认标签区域提示语 
			});
			dtpicker.show(function(e) {
				self.innerText = e.text
                var  datepic = new Date(e.value).getTime() / 1000;
                    _that.dateday=datepic
//                  console.log(datetime);
			});
		});
	},
	methods: {
		updata(){
				this.$emit('updata',this.dateday)
		}
	}
	}
</script>
