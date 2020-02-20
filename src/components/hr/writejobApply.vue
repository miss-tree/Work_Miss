<template>
  <div >
  	<header class="mui-bar mui-bar-nav">
  	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  	    <h1 class="mui-title">招聘申请</h1>
		<span class="top-left">提交</span>
  	</header>
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
  </div>
</template>

<script>
	export default{
		data(){
			return{
				beginDate:'选择日期 ...',
				endDate:'选择日期 ...',
				d:2
			};
		},
		mounted(){
			 $('#demo1').click(function(){
			 	var sj=null
            //规定年月日的选择
            let that= this
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
                var sj = new Date(e.value).getTime() / 1000;
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
            });
        });

		},
	}
</script>