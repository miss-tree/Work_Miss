<template>
	<div>
		<!--订单列表-->
		<div>
			<div id="dateTable">
				<div class="Row">
					<div class="col_5">
						<label class="bui-checkbox-label bui-checkbox-anim">
						    <input type="checkbox" name="all"  @click="setAllCheck">
							<i class="bui-checkbox"></i>
						</label>
					</div>
					<div class="col_40">标题</div>
					<div class="col_20">时间</div>
					<div class="col_15">状态</div>
					<div class="col_15">查看</div>
				</div>
				<div id="">
					<div class="row" v-for="(item,index) in ORDERLIST">
						<div class="col_5 text_algin" @click="setInfor">
							<label class="bui-checkbox-label bui-checkbox-anim">
							    <input type="checkbox" name="ticket" v-model="checkData":disabled="item.state!='草稿'" :value="item.id">
							    <i class="bui-checkbox"></i>
							</label>
						</div>
						<div class="col_40" style="text-align: left;">
							<span class="span_13px nowrap" style="display: block;overflow: hidden;">{{item.title}}</span>
						</div>
						<div class="col_20" >
							<span class="span_13px">{{item.dateTime}}</span>
						</div>
						<div class="col_15" >
							<span class="span_13px" :class="{span_green:item.state=='通过',span_red:item.state=='驳回'}">{{item.state}}</span>
						</div>
						<div class="col_15" >
							<div class="tabRightBtn" @click="routerTo">详情</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--订单列表结束-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checkData:[],
				checkInfor:[]
			}
		},
		props: ["ORDERLIST"],
		watch:{
			checkData(newVal,oldVal){//将选中的产品名称转接为整个对象放到数组中
				if(this.checkData.length!=0){
					this.checkInfor=[]
					this.ORDERLIST.forEach((el,index)=>{
						if(this.checkData.indexOf(el.id)>-1){
							this.checkInfor.push(this.ORDERLIST[index])
						}
					})
					this.$emit("getCheck",this.checkInfor)
				}else{
					this.checkInfor=[]
					this.$emit("getCheck",this.checkInfor)
				}
			}
		},
		methods: {
			setAllCheck(){//点击全选
				if(this.checkData.length<this.ORDERLIST.length){
					this.checkData=[]
					this.ORDERLIST.forEach((el,index)=>{
						this.checkData.push(el.id)
					})
					this.$emit("getCheck",this.checkInfor)
				}else{
					this.checkData=[]
					this.$emit("getCheck",this.checkInfor)
				}
			},
			routerTo(item,index){//页面跳转
				this.$router.push({path:"/sealDetail",query:{id:item.id}})
			},
			setInfor(){//设置组件传递的参数
			}
		}
	}
</script>
