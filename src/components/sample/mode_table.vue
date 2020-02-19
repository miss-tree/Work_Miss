<template>
  <div>
    <!-- 头部 -->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">table数据表格模板</h1>
    </header>
    <!-- 下面内容 -->
    <div class="mui-content">
    	<!--头部可能出现的内容-->
    	<div v-show="editShow!=false" style="padding: 0 10px;">
    		<div class="flex flex_between">
    			<div class="span_green text_algin line_25_ft_15" @click="allCheck">全选</div>
    			<div class="span_green text_algin line_25_ft_15" @click="checkBack">取反</div>
    			<div class="span_green text_algin line_25_ft_15"  @click="editCheck">完成</div>
    		</div>
    	</div>
        <!--数据表格-->
          <div class="content_padding">
          	<table border="0" cellspacing="" cellpadding="" class="dataTable">
          		<tr><th class="col_10">
          			<label class="bui-checkbox-label bui-checkbox-anim">
						        <input type="checkbox" name="isCheck" disabled="disabled"><i class="bui-checkbox"></i>
						    </label>
          			</th>
          			<th class="col_30">标题</th>
          			<th class="col_20">编号</th>
          			<th class="col_30">属性</th>
          			<th class="col_10">地区</th>
          		</tr>
          		<tr v-for="(item,index) in tableData">
          			<td class="col_10">
          				<label class="bui-checkbox-label bui-checkbox-anim">
						        <input type="checkbox" name="isCheck" :checked="item.isCheck" :value="item.title" v-model="item.isCheck">
						        <i class="bui-checkbox"></i>
						   		</label>
          			</td>
          			<td class="col_30"><span class="">{{item.title}}</span></td>
          			<td class="col_20"><span class="span_green">{{item.id}}</span></td>
          			<td class="col_30"><span class="">{{item.type}}</span></td>
          			<td class="col_10"><span>{{item.where}}</span></td>
          		</tr>
          	</table>
          </div>
          	<!--底部选择-->
          <div class="mui-bar mui-bar-tab bottom_tab">
          	<div class="flex">
          		<div style="width: 50%;line-height: 40px;"
          			class="tab_div active" @click="addCheck">
          			新增
          		</div>
          		<div style="width: 50%; line-height: 40px;" 
          			class="tab_div tab_line" @click="editCheck">
          			编辑
          		</div>
          	</div>
          </div>
          <div class="bottom_div_alert mui-bar-tab" :class="editShow?'trans_move':'trans_down'">
          	<div class="flex">
          		<div style="width: 50%;line-height: 40px;"
          			class="tab_div active" @click="delate">
          			删除
          		</div>
          		<div style="width: 50%; line-height: 40px;" 
          			class="tab_div tab_line" >
          			更多
          		</div>
          	</div>
          </div>
    </div>
  </div>
</template>

<script>
	import {carousel} from '../../../static/utils/public.js'
export default {
  data() {
    return {
    	tableData:[{where:'杭州',id:458876,title:"产品A",type:"一类配置",isCheck:true},
    	{where:'常州',id:8446645,title:"产品B",type:"二类配置",isCheck:false},
    	{where:'广州',id:7854532,title:"产品C",type:"C类配置",isCheck:false}],
    	editShow:false,//
    	addShow:false,//
    	checkModel:[],
    	checkAll:false
		};
	},
	watch:{
		checkModel:{
			handler(){
				if(this.checkModel.length==this.tableData.length){
					this.checkAll=true
				}else{
					this.checkAll=false
				}
			},
			deep:true
		}
	},
	mounted() {
		carousel()
	},
	methods: {
		addCheck(){
			this.addShow=!this.addShow
			if(this.addShow==true){
				mui.confirm('增加项目？', ['是','否'],(e)=> {
					if (e.index == 1) {
						mui.toast('增加项目')
						this.addShow=false
					}
				})
			}
		},
		allCheck(){
				this.tableData.forEach((el,index)=>{
					if(el.isCheck!=true){
						el.isCheck=true
						return false
					}
				})
		},
		checkBack(){//取反
			this.tableData.forEach((el,index)=>{
					el.isCheck=!el.isCheck
				})
		},
		editCheck(){
			this.editShow=!this.editShow
		},
		//编辑
		editTable(index){
			console.log(index)
			this.tableData.splice(index,1)
		},
		//点击删除
	    delate() {
	      var btnArray = ["否", "是"];
	      mui.confirm("是否确认删除", "提示", btnArray, function(e) {
	        if (e.index == 1) {
	          setTimeout(function() {
	            mui.toast("已经删除");
	          }, 1000);
	        } else {
	          return;
	        }
	      });
	    },
  	}
};
</script>

<style>
	.dataTable tr td,.dataTable tr th{
		text-align: left;
		padding-left: 7px;
	}
	.bottom_tab{
		height: 40px;
	}
	.tab_div{
		text-align: center;
		font-size: 15px;
	}
	.tab_line{
		position: relative;
	}
	.tab_line::before{
		content: '';
		height: 100%;
		width: 1px;
		top: 0;
		left: 0;
		position: absolute;
		background-color: #ccc;
	}
</style>