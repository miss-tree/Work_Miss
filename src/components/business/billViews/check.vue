<template>
	<div>
		<!--底部-->
		<div class="alert_bottom_div height_40px">
            <div class="flex" style="border-top: 1px solid #ddd;">
              <div @click="resetCkeck()">重置</div>
              <!--<div @click="setChang()">取消</div>-->
              <div @click="setChang()">确定</div>
            </div>
        </div>
		<!--底部-->	
		<!--选项卡-->
		<div style="display: flex;width: 100%;height: calc(100vh - 44px);top: 44px;">
			<!--左边-->
			<div style="width: 30%;background-color: #efeff4;border-right: 1px solid #ddd;">
				<div class="screen_table_left_div"
					:class="{active:curIndex==0,getSearch:dateCheck!=''}"
					@click="curIndex=0">
					<div>发票状态</div>
					<!--<div >{{dateCheck}}</div>-->
				</div>
				<div class="screen_table_left_div"
					:class="{active:curIndex==1,getSearch:selectCheck.length!=0}"
					@click="curIndex=1">
					<div>开票公司</div>
					<!--<div>{{selectCheck}}</div>-->
				</div>
				<div class="screen_table_left_div"
					:class="{active:curIndex==2,getSearch:setDate!=''}"
					@click="curIndex=2">	
					<div>开票日期</div>
					<!--<div>{{setDate}}</div>-->
				</div>
				<!--<div class="screen_table_left_div"
					:class="{active:curIndex==3,line_30px:PRONAME.length==0}"
					@click="curIndex=3">	
					<div>产品选择</div>
					<div><span v-for="item in PRONAME">{{item}}、</span></div>
				</div>-->
				<div class="screen_table_left_div"
					:class="{active:curIndex==4,getSearch:NATURE.length!=0}"
					@click="curIndex=4">	
					<div>经营性质</div>
					<!--<div><span v-for="item in NATURE">{{item}}、</span></div>-->
				</div>
				<!--<div class="screen_table_left_div"
					:class="{active:curIndex==5,line_30px:HANDLE==''}"
					@click="curIndex=5">	
					<div>操作方式</div>
					<div>{{HANDLE}}</div>
				</div>
				<div class="screen_table_left_div"
					:class="{active:curIndex==6,line_30px:PART==''}"
					@click="curIndex=6">	
					<div>部门</div>
					<div>{{PART}}</div>
				</div>-->
			</div>
			<!--左边-->
			<!--右边-->
			<div style="width: calc(70% - 1px);background-color: #fff;">
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
								<input class="playnone" type="radio" name="ss" v-model="dateCheck"  value="审核通过" />
								审核通过
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
						<li class="mui-table-view-cell" id="222">
							<label class="screen_check_li" for="222">
								<input class="playnone" type="radio" name="ss" v-model="dateCheck"  value="待复审" />
								待复审
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell" id="222">
							<label class="screen_check_li" for="222">
								<input class="playnone" type="radio" name="ss" v-model="dateCheck"  value="草稿" />
								草稿
								<i class="check_radio"></i>
							</label>
						</li>
					</ul>
				</div>
				<div v-show="curIndex==1">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="more" v-model="selectCheck"  value="泰恩康股份" />
								泰恩康股份
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="more" v-model="selectCheck"  value="马鞍山天福康" />
								马鞍山天福康
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="more" v-model="selectCheck"  value="器械厂" />
								器械厂
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="more" v-model="selectCheck"  value="设备厂" />
								设备厂
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="more" v-model="selectCheck"  value="制药厂" />
								制药厂
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="more" v-model="selectCheck"  value="安徽维泰利" />
								安徽维泰利
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="more" v-model="selectCheck"  value="电商公司" />
								电商公司
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
				<div v-show="curIndex==3">
					<!--默认展开：default-expand-all-->
					<el-tree
					  :data="data"
					  show-checkbox
					  node-key="id"
					  ref="tree"
					  highlight-current
					  :props="defaultProps">
					</el-tree>
					<div style="padding: 10px 15px 10px 10px;font-size: 12px;">
						<span v-for="item in PRONAME">{{item}}、</span>
					</div>
					<div class="buttons" style="margin-top: 20px;text-align: center;">
					  <el-button @click="getCheckedNodes">选择确定</el-button>
					</div>
				</div>
				<div v-show="curIndex==4">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							<label class="screen_check_li">
								<input class="playnone" type="checkbox" name="nature" v-model="NATURE"  value="批发" />
								批发
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="checkbox" name="nature" v-model="NATURE"  value="连锁" />
								连锁
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li" >
								<input class="playnone" type="checkbox" name="nature" v-model="NATURE"  value="单体药店" />
								单体药店
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li">
								<input class="playnone" type="checkbox" name="nature" v-model="NATURE"  value="门诊社区" />
								门诊社区
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="checkbox" name="nature" v-model="NATURE"  value="电商客户" />
								电商客户
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li">
								<input class="playnone" type="checkbox" name="nature" v-model="NATURE"  value="特殊客户" />
								特殊客户
								<i class="check_radio"></i>
							</label>
						</li>
					</ul>
				</div>
				<div v-show="curIndex==5">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="handle" v-model="HANDLE"  value="贴牌" />
								贴牌
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="handle" v-model="HANDLE"  value="代理" />
								代理
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li" >
								<input class="playnone" type="radio" name="handle" v-model="HANDLE"  value="自营" />
								自营
								<i class="check_radio"></i>
							</label>
						</li>
					</ul>
				</div>
				<div v-show="curIndex==6">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="part" v-model="PART"  value="销售部" />
								销售部
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="part" v-model="PART"  value="计生部" />
								计生部
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li" >
								<input class="playnone" type="radio" name="part" v-model="PART"  value="大KA部" />
								大KA部
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell mui-selected">
							<label class="screen_check_li">
								<input class="playnone" type="radio" name="part" v-model="PART"  value="电商部" />
								电商部
								<i class="check_radio"></i>
							</label>
						</li>
						<li class="mui-table-view-cell">
							<label class="screen_check_li" >
								<input class="playnone" type="radio" name="part" v-model="PART"  value="招商部" />
								招商部
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
				selectCheck:'',
				setDate:'',
				STARTDATE:'',
				ENDDATE:'',
				PRONAME:[],//选择的产品项
				NATURE:[],//经营性质
				HANDLE:'',//操作方式
				PART:'',//选择的部门
				data: [{
		          id: 1,
		          label: '和胃',
		          children: [{
		            id: 4,
		            label: '和胃2',
		            children: [{
		              id: 9,
		              label: '和胃整肠丸120丸'
		            }, {
		              id: 10,
		              label: '和胃整肠丸300丸'
		            }]
		          }]
		        }, {
		          id: 2,
		          label: '天福康',
		          children: [{
		            id: 5,
		            label: '天福康60粒'
		          }, {
		            id: 6,
		            label: '复方乌鸡丸'
		          }]
		        }, {
		          id: 3,
		          label: '其他',
		          children: [{
		            id: 7,
		            label: '赫素类'
		          }, {
		            id: 8,
		            label: '润和'
		          }]
		        }],
		        defaultProps: {
		          children: 'children',
		          label: 'label'
		        }
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
			getCheckedNodes() {//点击获取树控件上的
				this.PRONAME=this.$refs.tree.getCheckedNodes().map(row=>{ return row.label})
		        console.log(this.$refs.tree.getCheckedNodes());
		    },
			setChang(){//确定按钮
				this.cancel=false;
				this.$emit("ssChange",this.cancel)
			},
		    resetCkeck() {//重置
		      this.dateCheck = "";
		      this.selectCheck = '';
		      this.setDate = "";
		      this.ENDDATE = '';
		      this.STARTDATE = '';
		      this.PRONAME=[];
		      this.NATURE=[];
		      this.$refs.tree.setCheckedKeys([]);
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
