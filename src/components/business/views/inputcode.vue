<template>
	<div>
		<div>
			<div class="code_input" id="list">
				<div style="background-color: #fff;text-align: center;line-height: 40px;">
					<input type="text" id="search" 
						@blur="changeShow" 
						@focus="changeShow" 
						autocomplete="off"
						@keyup="get($event)" 
						@keydown.down="changeDown()" 
						@keydown.up.prevent="changeUp()"
						style="width: 80%;background-color:#efeff4;"
						placeholder="请输入客户名称..." />
						<span @click="setChange">取消</span>
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
				cancel:false,
				myData: ["全部","个别"],
				tl: '',
				now: -1,
				willShow: false,
				isShow: true,
				value:{
					tl:'',
					cancel:false,
				}
			}
		},
		props:["inputVal"],
		methods: {
			setChange(){
				this.value.cancel=true,
				this.value.tl=this.inputVal,
				this.$emit("searchVal",this.value)
			},
			setInput($event){/*键盘输入事件*/
				this.tl = $event;
			},
			/*方法2点击获取选择的值*/
			getCheck(index) {
				this.tl = this.myData[index];
				this.value.cancel=true,
				this.value.tl = this.myData[index];
				this.$emit("searchVal", this.value)
				this.willShow = false
			},
			/*方法2激活窗口显示数据*/
			changeShow() {
				//console.log('hi')
				this.willShow = !this.willShow;
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

<style>
</style>