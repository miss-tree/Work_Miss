<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">订单申请详情</h1>
	    </header>
	    <!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
	    	<!--加载组件-->
	    	<loading v-show="dataOver==false"></loading>
	    	<div class="formTable">
	    		<div class="form_title">
	    			客户信息
	    		</div>
	    		<div class="form_div">
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="WHERE">
		    				区域
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{WHERE}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="CLIENT">
		    				客户名称
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{CLIENT}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="">
		    				促销活动
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{isPlay}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="section">
		    				部门
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{SECTION}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" for="" id="company">
		    				开票公司
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{COMPANY}}</div>
		    		</div>

	    		</div>
	    		<div>
		    		<!--客户订单信息-->
		    		<div class="form_title">订单详情</div>
	    			<lookdetail :ORDER="ORDER" :total="total"></lookdetail>
		    		<!--收货信息-->
		    		<div class="form_title">收货人</div>
		    		<orderwhere :REINFOR="REINFOR"></orderwhere>
		    		<!--收货信息结束-->
	    		</div>
	    		<!--资信额度-->
		    	 <credit-line :KEHUINFOR="KEHUINFOR"></credit-line>
	    		<!--备注-->
	    		<div class="form_title">
	    			备注
	    		</div>
				<div class="form_div bottom_boder">
					<div class="padding-lr">
						<span class="form_row_height huise">
							备注
							<span class="span_red"></span>
						</span>
					</div>
					<div class="padding-lr padding_bb">
						<div class="detail_bz">{{BZ}}</div>
					</div>
				</div>
		    	<!--审核进度-->
	    		<div class="form_title">
	    			审核进度
	    		</div>
	    		<time-line :examInfor="examInfor"></time-line>
		    </div>
	    </div>
	</div>
</template>

<script>
	import orderwhere from "./views/order-where.vue"/*订单收货信息*/
	import lookdetail from "./views/look-order-detail.vue"/*订单信息*/
	import creditLine from "./views/creditLine.vue"			/*资信额度*/
	export default{
		data(){
			return{
				dataOver:false,//是否加载完数据
				WHERE:'',//区域
				CLIENT:'',//客户名称
				isPlay:'',//是否促销活动
				SECTION:'',//选择的部门
				COMPANY:'',//开票公司
				ORDER:[{name:'红花油',num:12,price:5,money:60,M_num:10,M_money:100,unit:'箱'},
				{name:'和胃整肠丸',num:35,price:55,money:1925,M_num:35,M_money:3500,unit:'件'}
				],//订单
				BZ:'客户要求提供产品最新批次',//备注
				KEHUINFOR:{
					PART:'销售部',//部门
					LIMIT:'50000',//固定额度
					TEMPORARY:'2000',//临时额度
					RECEVIE:'18800',//应收款
					WAITmoney:'3800',//待核销金额
					GOODSmoney:'15000',//发货金额
					BALANCE:'50000',},//余额
				REINFOR:[{person:'黎放',phone:15699874568,where:'广州市天河区棠下336号',otc:'袁芳',otcPhone:15894652388,bz:''}],
				editInfor:{person:'',phone:'',where:'',otc:'',otcPhone:'',bz:'',index:''},//收货信息编辑
				examInfor:[{progress:'总监审核',opinion:'驳回',bz:'明细不清',time:'2018-04-03 16:50'},
							{progress:'复审',opinion:'驳回',bz:'明细不清明细不清明细不清明细不清',time:'2018-04-03 16:23'},
							{progress:'人资审核',opinion:'同意',bz:'明细不清',time:'2018-04-02 09:16'},
							{progress:'提交申请',opinion:'',bz:'',time:'2018-04-01 20:42'}],
				params:''
			}
		},
		components:{
			creditLine,orderwhere,lookdetail
		},
		computed:{
			total(){
				if(this.ORDER.length==0){
					return 0
				}else{
					return this.ORDER.map(row=>row.money).reduce((acc,cur)=>{return parseFloat(cur)+acc})
				}
			}
		},
		created(){//获取传入的参数
          //如果使用query方式传入的参数使用this.$route.query 接收
          //如果使用params方式传入的参数使用this.$router.params接收
          var param = this.$route.query;
          // var param = this.$route.params;
          this.params = param
    	},
    	mounted(){
    		this.setLoading()
    	},
		methods:{
		    setLoading(){//假装在加载
		    	setTimeout(()=>{
		    		this.dataOver=true
		    		this.WHERE='广东'
					this.CLIENT='大参林dashenlin'
					this.isPlay='是'
					this.SECTION='销售部'
					this.COMPANY='泰恩康股份'
		    	},3000)
		    },
			applyAjax(){//请求客户数据
				return new Promise((resolve,reject)=>{
					var xhr=new XMLHttpRequest();
					xhr.open('get',basurl)
					xhr.send();
					xhr.addEventListener("readystatechange",function(){
						if(xhr.readyState==4&&xhr.status==200){
							resolve(xhr.response)
						}
					}).then((res)=>{
						this.KEHUINFOR=JSON.parse(res).data
					})
				})
			},
			checkAll(){ // 点击全选事件
				this.allCheck=!this.allCheck
                if(this.allCheck=false){
                    this.checkData = [];
                    return false
                }else { // 全不选选则清空绑定的数组
                	this.checkData = [];
                    this.ORDER.forEach((el,index)=>{
                        this.checkData.push(el.name);
                    });
                    return false
                }
			},
			changeInfor(index){//编辑或查看收货信息
				console.log(index)
				this.whereShow=true
				this.editInfor=this.REINFOR[index]
				this.editOrder.index=index
				this.topLayer=true
				this.editShow=true
			},
			saveWhere(){//保存编辑后的收货信息
				this.topLayer=false
				this.whereShow=false
				this.editShow=false
			},
			mustFull(){
				var isOk=mustFill();
				if(isOk.length==0){
					console.log('hi')
				}
			}
		}
	}
</script>