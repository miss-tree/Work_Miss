<template>
  <div >
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">请假申请</h1>
		    <span class="top-left">提交</span>
  	</header>
		<!--<div class="bar-ge"></div>-->
  	<!--表单提交-->
  	<!--<form action="" method="post" class="mui-input-group">-->
  		<!--信息-->
	  	<div class="mui-content">
				<ul class="mui-table-view">
					 <li class="mui-table-view-cell">
					 	<label class="text-justify">审批人<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		<select name="">
					 			<option value="">15356</option>
					 			<option value="">2</option>
					 			<option value="">3</option>
					 		</select>
					 		<!--<input type="" name="" id="" value="" class="input-t"/>-->
					 	</span>
					 </li>
			     <li class="mui-table-view-cell">
				     	<label class="text-justify">申请人<span class="span-justify"></span></label>
						 	<span class="margin-lr">张三</span>	
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">请假类型<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		<select name="">
					 			<option value="">事假</option>
					 			<option value="">婚假</option>
					 			<option value="">产假</option>
					 		</select>
					 	</span>
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">开始时间<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		<div class="mui-content-padded">
								<button id='demo1' data-options='{"type":"date","beginYear":2018,
											"endYear":2022}'
									class="btn mui-btn mui-btn-block"  >
									选择日期 ...
								</button>
								<!--<datepick  v-bind:dateday="begindate" v-on:updata="starbegin"></datepick>-->
							</div>
						</span>
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">结束时间<span class="span-justify"></span></label>
					 	<span class="margin-lr">
							<div class="mui-content-padded">
								<datepick  v-bind:dateday="endDate" v-on:updata="anhao"></datepick>
								<!--<button id='demo2' data-options='{"type":"date","beginYear":2018,
									"endYear":2022}'
									 class="btn mui-btn mui-btn-block">
									 选择日期 ...
								</button>-->
							</div>
					 	</span>
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">假期<span class="span-justify"></span></label>
					 	<span class="margin-lr">
							<span style="color: red;">{{d}}</span>天
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
	import	datepick from "../assembly/datepick.vue"
	import uploadpic from "../assembly/uploadpic"
	export default{
		data(){
			return{
				begindate:'选择日期 ...',
				endDate:'选择日期 ...',
				d:2
			};
		},
		components:{
			uploadpic,
			datepick
		},
		mounted(){
        var _that = this;
//			var date1 = null
			 $('#demo1').click(function(){
			 	var sj=null
                //规定年月日的选择
                let that= this
//              var _self = this;
                var dtpicker = new mui.DtPicker({
       //设置日历初始视图模式 ,真正的月份比写的多一个月。type的类型可选择date datetime month time hour
                    type: "date", 
                    beginDate: 2018, //设置开始日期   ///yg备注：括号中不填
                    endDate: 2022, //设置结束日期    //真正的是10.21
                    labels: ['年', '月', '日'] //设置默认标签区域提示语 
                });
                dtpicker.show(function(e){
										 that.innerText=e.text
                    //获取到时间戳
//                  var date = new Date(e.value).getTime() / 1000;
                    var sj = new Date(e.value).getTime() / 1000;
                    console.log(sj);
                    _that.begindate=sj
                });
            });
					
//          $('#demo2').click(function() {
//              //规定年月日的选择
//              var _self = this;
//              var dtpicker = new mui.DtPicker({
//                  type: "date", 
//                  beginDate: 2018, //设置开始日期   ///yg备注：括号中不填
//                  endDate: 2022, //设置结束日期    //真正的是10.21
//                  labels: ['年', '月', '日'] //设置默认标签区域提示语 
//              });
//              dtpicker.show(function(e) {
//										_self.innerText=e.text
//                   _that.endDate = new Date(e.value).getTime() / 1000;
////                  console.log(endDate);
//              });
//          });

		},
		methods:{
//			starbegin(newVal){
//				this.beginDate=newVal
//			},
			anhao(newVal){
				this.endDate=newVal
			},
			
		},
		computed:{
			d:function(){
//				console.log('hi')
//				var chazhi=Math.abs(this.endDate-this.begindate)
//				console.log(chazhi)
//					t= Math.floor(chazhi/(60*60*24))
//					console.log(t)
				return  this.d=Math.floor(Math.abs(this.endDate-this.begindate)/(60*60*24))
			}
		}
	}
</script>
<style lang="scss">
	
</style>