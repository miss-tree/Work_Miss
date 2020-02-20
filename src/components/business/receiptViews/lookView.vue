<template>
	<div>
		<div>
			<div class="code_input" id="list">
				<div class="flex searchInput" >
					<div class="flex searchInput_div" style="width: 80%;">
						<div @click="changeOne" class="searchInput_left">
			    			{{startVal}}
			    			<span class="mui-icon span_13px" 
			    				:class="select1?'mui-icon-arrowdown':'mui-icon-arrowup'" 
			    				></span>
			    		</div>
						<input type="text"
							@blur="changeShow" 
							@focus="changeShow" 
							autocomplete="off"
							v-model="tl" @keyup="get($event)" 
							@keydown.down="changeDown()" 
							@keydown.up.prevent="changeUp()"
							placeholder="请输入客户名称..." />
					</div>
						<span @click="setLook" style="margin-left: 10px;line-height: 30px;">取消</span>
				</div>
				<div class="searchInput_select" v-show="select1==true">
					<div class="select_downIcon"></div>
					<ul  @click="getSelectVal">
						<li :class="{active:startVal=='产品名称'}"
							style="border: 0;">
								产品名称
						</li>
						<li :class="{active:startVal=='规格'}"
							>
								规格
						</li>
						<li :class="{active:startVal=='归属公司'}" 
							>
							归属公司
						</li>
					</ul>
				</div>
				<ul class="code_ul" v-show="willShow" style="position: fixed;top: 85px;width: 100%;">
					<li v-for="(value,index) in myData" @click="getCheck(index)" :class="{gray:index==now}">
						{{value}}</li>
					<li v-show="myData.length==0">&nbsp;&nbsp;&nbsp;请输入客户名称...</li>
				</ul>
			</div>
		</div>
	</div>
</template>
</script>
<script>
	export default {
		data() {
			return {
				select1:false,
				cancel:false,
				startVal:'产品名称',
				myData: [],
				tl: '',
				now: -1,
				willShow: false,
				isShow: true,
			}
		},
		watch:{
			tl(newVal,oldVal){
				//if(newVal){
					this.$emit("searchVal", newVal)
				//}
			}
		},
		methods: {
			getSelectVal(e){
				this.startVal=e.target.innerText
				this.select1=false
//				console.log(e.target.innerText)
			},
			changeOne(){
				this.select1=!this.select1;
				this.willShow = false;
			},
			setLook(){
				this.cancel=true,
				this.$emit("lookChange",this.cancel)
			},
			setInput($event){/*键盘输入事件*/
				this.tl = $event;
			},
			/*方法2点击获取选择的值*/
			getCheck(index) {
				this.tl = this.myData[index];
				this.$emit("searchVal", this.tl)
				this.willShow = false
				this.cancel=true,
				this.$emit("lookChange",this.cancel)
			},
			/*方法2激活窗口显示数据*/
			changeShow() {
				this.select1=false;
				this.willShow = true;
			},
			get: function(ev) {
				//判断如果按上下键搜索，则不访问百度接口数据，只显示下拉列表数据
				if(ev.keyCode == 38 || ev.keyCode == 40) return;
				//按enter键进入相应词汇百度搜索页面
				if(ev.keyCode == 13) {
					window.open('https://www.baidu.com/s?wd=' + this.tl);
					this.tl = '';
				}
				//调用访问百度接口数据
				/*    this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
				        wd:this.tl
				    },{
				        jsonp:'cb'
				    }).then(function(res){
				        this.myData = res.data.s;
				    },function(res){

				    });
				    * 当有接口用上面方法
				    * */
				/*下面是自定义给的数据*/
				this.myData = ['江西九思医药有限公司', '广东恒林源药业有限公司', '江西九思医药有限公司',
					'江西三辰医药有限公司', '广州医药集团有限公司', '中国医药集团总公司', '华东医药股份有限公司'
				]
			},
			changeDown: function() {
				//判断如果循环超出了整个下拉列表，则从头开始循环
				this.now++;
				if(this.now == this.myData.length) this.now = -1;
				this.tl = this.myData[this.now];
			},
			changeUp: function() {
				//判断如果循环超出了整个下拉列表，则从尾开始循环
				this.now--;
				if(this.now == -2) this.now = this.myData.length - 1;
				this.tl = this.myData[this.now];
			},
			clk: function(e) {//键盘上下选择
				var index = e.target.innerText;
				this.t1 = index;
				var input = document.getElementById("input");
				input.style.color = "blue";
				input.focus()
				this.isShow = false;
				var boxUl = document.getElementById("boxUl");
				console.log(boxUl);
			}
		}
	}
</script>
