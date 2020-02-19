<template>
	<div>
		<!--底部-->
		<div class="alert_bottom_div height_40px">
            <div class="flex" style="border-top: 1px solid #ddd;">
              <div @click="resetCkeck()">重置</div>
              <div @click="setChang()">取消</div>
              <div @click="setChang()">确定</div>
            </div>
          </div>
			<!--<div style="position: fixed;bottom: 0;left: 0;width: 100%;height: 40px;line-height: 40px;z-index: 99;text-align: center;background-color: red;"
				@click="setChang">
				底部
			</div>-->
		<!--底部-->	
		<!--选项卡-->
		<div style="display: flex;width: 100%;height: calc(100% - 44px);top: 44px;">
			<!--左边-->
			<div style="width: 30%;background-color: #efeff4;border-right: 1px solid #ddd;">
				<div class="screen_table_left_div"
					:class="{active:curIndex==0,line_30px:dateCheck==''}"
					@click="curIndex=0">
					<div>订单状态</div>
					<div >{{dateCheck}}</div>
				</div>
				<div class="screen_table_left_div"
					:class="{active:curIndex==1,line_30px:selectCheck.length==0}"
					@click="curIndex=1">
					<div>开单公司</div>
					<div><span v-for="item in selectCheck">{{item}}</span></div>
				</div>
				<div class="screen_table_left_div"
					:class="{active:curIndex==2,line_30px:setDate==''}"
					@click="curIndex=2">	
					<div>订单日期</div>
					<div>{{setDate}}</div>
				</div>
			</div>
			<!--左边-->
			<!--右边-->
			<div style="width: calc(70% - 1px);background-color: #fff;height: 700px;">
				<div v-show="curIndex==0">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell" id="cao">
							<label class="screen_check_li" for="cao">
								<input class="playnone" type="radio" name="ss" v-model="dateCheck"  value="" />
								全部
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected" id="111">
							<label class="screen_check_li" for="111">
								<input class="playnone" type="radio" name="ss" v-model="dateCheck"  value="已通过" />
								已通过
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell" id="222">
							<label class="screen_check_li" for="222">
								<input class="playnone" type="radio" name="ss" v-model="dateCheck"  value="待审核" />
								待审核
								<i class="check_radio"></i>
							</label>
						</li>
					</ul>
				</div>
				<div v-show="curIndex==1">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-selected" id="tek">
							<label class="screen_check_li" for="tek">
								<input class="playnone" type="checkbox" name="more" v-model="selectCheck"  value="泰恩康股份" />
								泰恩康股份
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell" id="tfk">
							<label class="screen_check_li" for="tfk">
								<input class="playnone" type="checkbox" name="more" v-model="selectCheck"  value="马鞍山天福康" />
								马鞍山天福康
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected" id="qxc">
							<label class="screen_check_li" for="qxc">
								<input class="playnone" type="checkbox" name="more" v-model="selectCheck"  value="器械厂" />
								器械厂
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell" id="zyc">
							<label class="screen_check_li" for="zyc">
								<input class="playnone" type="checkbox" name="more" v-model="selectCheck"  value="制药厂" />
								制药厂
								<i class="check_radio"></i>
							</label>
						</li>
					</ul>
				</div>
				<div v-show="curIndex==2">
					<div class="alertRow">
		                <input type="text" id="start856" data-options='{"type":"date"}'
		                	class="btn mui-btn-block alertInput" 
		                	placeholder="选择日期 ..." 
		                	v-model="STARTDATE">
		                <span>-</span>
		                <input type="text" id="end978" data-options='{"type":"date"}'
		                	class="btn mui-btn-block alertInput" 
		                	placeholder="选择日期 ..." 
		                	v-model="ENDDATE">
		            </div>
					<ul class="mui-table-view">
						<li class="mui-table-view-cell" id="tt" @click="today()">
							<label class="screen_check_li" for="tt">
								<input class="playnone" type="radio" name="more" v-model="setDate"  value="今天" />
								今天
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected" id="2222222" @click="yesterday()">
							<label class="screen_check_li" for="2222222">
								<input class="playnone" type="radio" name="more" v-model="setDate"  value="昨天" />
								昨天
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell" id="7777" @click="weekly()">
							<label class="screen_check_li" for="7777">
								<input class="playnone" type="radio" name="more" v-model="setDate"  value="近七天" />
								近七天
								<i class="check_radio"></i>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {selectTime,getTime,getDate,DateAdd,selecTion} from "../../../../static/utils/public.js";
	export default{
		data(){
			return{
				cancel:true,
				curIndex:0,
				dateCheck:"",
				selectCheck:[],
				setDate:'',
				STARTDATE:'',
				ENDDATE:''
			}
		},
		watch:{
			STARTDATE(newVal,oldVal){
				if(newVal){
					this.setDate=newVal+'至'+this.ENDDATE
				}
			},
			ENDDATE(newVal,oldVal){
				if(newVal){
					this.setDate=this.ENDDATE+'至'+newVal
				}
			},
		},
		mounted(){
			selectTime();
		},
		methods:{
			setChang(){
				this.cancel=false;
				this.$emit("ssChange",this.cancel)
			},
		    resetCkeck() {//重置
		      this.dateCheck = "";
		      this.selectCheck = [];
		      this.setDate = "";
		      this.ENDDATE = '';
		      this.STARTDATE = '';
		    },
		    today() {//点击默认时间
		      this.ENDDATE = getDate();
		      this.STARTDATE = getDate();
		    },
		    yesterday() {//点击获取昨天时间
		      var now = new Date();
		      var newDate = now.setDate(now.getDate() + -1);
		      var d = new Date(newDate);
		      d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
		      this.STARTDATE = d;
		      this.ENDDATE = getDate();
		    },
		    weekly() {//获取一周前的时间
		      var now = new Date();
		      var newDate = now.setDate(now.getDate() + -7);
		      var d = new Date(newDate);
		      d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
		      this.STARTDATE = d;
		      this.ENDDATE = getDate();
		    },
		}
	}
</script>
