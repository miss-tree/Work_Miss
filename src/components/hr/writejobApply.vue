<template>
  <div >
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">招聘申请</h1>
		<span class="top-left">提交</span>
  	</header>
  	<!--表单提交-->
  	<!--<form action="" method="post" class="mui-input-group">-->
  		<!--信息-->
	  	<div class="mui-content">
				<ul class="mui-table-view">
					 <li class="mui-table-view-cell">
					 	<label class="text-justify">部门<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		<select name="">
					 			<option value="">电商</option>
					 			<option value="">行政</option>
					 			<option value="">研发</option>
					 		</select>
					 	</span>
					 </li>
			     <li class="mui-table-view-cell">
				     	<label class="text-justify">职位<span class="span-justify"></span></label>
						 	<span class="margin-lr">服务专员</span>	
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">区域负责<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		<select name="">
					 			<option value="">黎XX</option>
					 			<option value="">张X</option>
					 			<option value="">刘XX</option>
					 		</select>
					 	</span>
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">申请人<span class="span-justify"></span></label>
					 	<span class="margin-lr">
					 		张三
						</span>
			     </li>
			      <li class="mui-table-view-cell">
			     	<label class="text-justify">招聘人数<span class="span-justify"></span></label>
					 	<span class="margin-lr">
							<span style="color: red;">3</span>人
					 	</span>
			     </li>
			     <li class="mui-table-view-cell">
			     	<label class="text-justify">申请时间<span class="span-justify"></span></label>
					 	<span class="margin-lr">
							<div class="mui-content-padded">
								<button id='demo2' data-options='{"type":"date","beginYear":2018,
									"endYear":2022}'
									 class="btn mui-btn mui-btn-block">
									 {{endDate}}
								</button>
							</div>
					 	</span>
			     </li>
			    
				</ul>
			</div>
			
			<div class="margin-t padding-lr">
				<span>备注</span>
	<textarea name="" rows="2" cols="28" style="width: 100%;">在广州黄埔区上班</textarea>
			</div>
  	<!--</form>-->
<!--  	<uploadpic></uploadpic>
-->		
  </div>
</template>

<script>
//	import uploadpic from "../assembly/uploadpic"
	export default{
		data(){
			return{
				beginDate:'选择日期 ...',
				endDate:'选择日期 ...',
				d:2
			};
		},
		components:{
//			uploadpic
		},
		mounted(){
//      var that = this;
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
//                  this.beginDate=sj
                    console.log(sj);
                });
            });
					
            $('#demo2').click(function() {
                //规定年月日的选择
                var _self = this;
                var dtpicker = new mui.DtPicker({
                    type: "date", 
                    beginDate: 2018, //设置开始日期   ///yg备注：括号中不填
                    endDate: 2022, //设置结束日期    //真正的是10.21
                    labels: ['年', '月', '日'] //设置默认标签区域提示语 
                });
                dtpicker.show(function(e) {
										_self.innerText=e.text
//                   _self.endDate = new Date(e.value).getTime() / 1000;
//                  console.log(endDate);
                });
            });

		},
		methods:{
//			changtime(){
//			$('#demo1').click(function() {
//              //规定年月日的选择
//              var _self = this;
//              var dtpicker = new mui.DtPicker({
//     //设置日历初始视图模式 ,真正的月份比写的多一个月。type的类型可选择date datetime month time hour
//                  type: "date", 
//                  beginDate: 2018, //设置开始日期   ///yg备注：括号中不填
//                  endDate: 2022, //设置结束日期    //真正的是10.21
//                  labels: ['年', '月', '日'] //设置默认标签区域提示语 
//              });
//              dtpicker.show(function(e) {
//										_self.innerText=e.text
//                  //获取到时间戳
////                  var date = new Date(e.value).getTime() / 1000;
//                  this.beginDate = new Date(e.value).getTime() / 1000;
//                  console.log(beginDate);
//              });
//          });
//			}
		},
		computed:{
//			dateChange(e){
//				this.d= Math.ceil((this.beginDate-this.beginDate)/1000/60/60%24)
//				return this.d
//			}
		}
	}
	//			(function($) {
//				$.init();
//				var result = $('#result')[0];
//				var btns = $('.btn');
//				btns.each(function(i, btn) {
//					btn.addEventListener('tap', function() {
//						var _self = this;
//						if(_self.picker) {
//							_self.picker.show(function (rs) {
//								result.innerText = rs.text;
//								_self.picker.dispose();
//								_self.picker = null;
//							});
//						} else {
//							var optionsJson = this.getAttribute('data-options') || '{}';
//							var options = JSON.parse(optionsJson);
//							var id = this.getAttribute('id');
//							/*
//							 * 首次显示时实例化组件
//							 * 示例为了简洁，将 options 放在了按钮的 dom 上
//							 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
//							 */
//							_self.picker = new $.DtPicker(options);
//							_self.picker.show(function(rs) {
//								/*
//								 * rs.value 拼合后的 value
//								 * rs.text 拼合后的 text
//								 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
//								 * rs.m 月，用法同年
//								 * rs.d 日，用法同年
//								 * rs.h 时，用法同年
//								 * rs.i 分（minutes 的第二个字母），用法同年
//								 */
//								btn.innerText =  rs.text;
////								btns[i].innerText =  rs.text;
////								console.log(rs.y)
////								console.log(i)
//								/* 
//								 * 返回 false 可以阻止选择框的关闭
//								 * return false;
//								 */
//								/*
//								 * 释放组件资源，释放后将将不能再操作组件
//								 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
//								 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
//								 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
//								 */
//								_self.picker.dispose();
//								_self.picker = null;
//							});
//						}
//						
//					}, false);
//				});
//			})(mui);
</script>
<style lang="scss">
	
</style>