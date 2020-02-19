<template>
	<div>
		<div class="form_div">
			<div class="form_row">
				<label class="form_row_left huise" id="topp">
             	 一级部门
              <span class="span_red">*</span>
            </label>
				<input type="text" class="form_row_right" 
					 @click="showToPart = true" readonly="readonly"
					  v-model="TOMOVEPART" name="topp" placeholder="请选择">
				<van-popup v-model="showToPart" position="bottom">
					<van-picker show-toolbar title="一级部门"
						 :columns="movePart" @cancel="showToPart = false"
						  @confirm="getToMovePart" />
				</van-popup>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="tott">
             	二级部门
              <span class="span_red">*</span>
            </label>
				<input type="text" class="form_row_right"  
					@click="showToPartS = true" readonly="readonly" 
					v-model="TOMOVEPARTS" name="tott" placeholder="请选择">
				<van-popup v-model="showToPartS" position="bottom">
					<van-picker show-toolbar title="二级部门" 
						:columns="moveToPartS" @cancel="showToPartS = false" 
						@confirm="getToMovePartS" />
				</van-popup>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" id="toty">
             	职位类型
              <span class="span_red">*</span>
            </label>
				<input type="text" class="form_row_right"  
					@click="showToType = true" readonly="readonly" 
					v-model="TOJOBTYPE" name="toty" placeholder="请选择">
				<van-popup v-model="showToType" position="bottom">
					<van-picker show-toolbar title="职位类型" 
						:columns="toJobArr" @cancel="showToType = false" 
						@confirm="getToJobType" />
				</van-popup>
			</div>
			<div class="form_row">
				<label class="form_row_left huise" for>
             	 岗位
              <span class="span_red">*</span>
            </label>
				<input type="text" class="form_row_right" v-model="TOJOB" placeholder="请输入">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				 showToPart:false,//异动部门
			      movePart:["电商部","销售部","OTC推广部","招商部","市场部","大KA部","财务组","计生事业部","人资组","助理团队"],
			      TOMOVEPART:'',//一级部门
			      showToPartS:false,//异动部门
			      moveToPartS:["北京市","上海市","广东省","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省",
			      "江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广西壮族",
			      "海南省","重庆","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","台湾省","香港","澳门","宁夏"],
			      TOMOVEPARTS:'',//二级部门
			      showToType:false,//职位类型
			      toJobArr:["普通员工","技术员工","中级管理层","高级管理层"],
			      TOINFOR:{
			      	toMovePart:"",
			      	toMoveParts:"",
			      	toMoveType:"",
			      	toMoveJob:""
			      },
			      TOJOBTYPE:'',//
			      TOJOB:'',//岗位
			}
		},
		watch:{
			TOJOB(newVal,oldVal){
				if(newVal){
					this.TOINFOR.toMoveJob=newVal
					this.$emit("setInfor",this.TOINFOR)
				}
			}
		},
		methods:{
		  	getToMovePart(value,index){//获取选择的一级部门
		  		this.TOMOVEPART=value
		  		this.showToPart=false
		  		this.TOINFOR.toMovePart=this.TOMOVEPART
		  		this.$emit("setInfor",this.TOINFOR)
		  	},
		  	getToMovePartS(value,index){//获取选择的二级部门
		  		this.TOMOVEPARTS=value
		  		this.showToPartS=false
		  		this.TOINFOR.toMoveParts=this.TOMOVEPARTS
		  		this.$emit("setInfor",this.TOINFOR)
		  	},
		  	getToJobType(value,index){//获取选择的职位类型
		  		this.TOJOBTYPE=value
		  		this.showToType=false
		  		this.TOINFOR.toMoveType=this.TOJOBTYPE
		  		this.$emit("setInfor",this.TOINFOR)
		  	},
			
		}
	}
</script>

<style>

</style>