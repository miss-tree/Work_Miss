<template>
	<div>
		<div>
			<div class="code_input" id="list">
				<div>
					<input type="text" id="search" 
						@blur="changeShow" 
						@focus="changeShow" 
						autocomplete="off"
						v-model="tl" @keyup="get($event)" 
						@keydown.down="changeDown()" 
						@keydown.up.prevent="changeUp()" 
						placeholder="请输入药店名称..." />
				</div>
				<ul class="code_ul" v-show="willShow" style="position: fixed;top: 85px;width: 100%;">
					<li v-for="(value,index) in myData" @click="getCheck(index)" :class="{gray:index==now}">
						{{value}}</li>
					<li v-show="myData.length==0">&nbsp;&nbsp;&nbsp;请输入药店名称...</li>
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
			setInput($event){/*键盘输入事件*/
				this.tl = $event;
			},
			/*方法2点击获取选择的值*/
			getCheck(index) {
				this.tl = this.myData[index];
				this.$emit("searchVal", this.tl)
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
				this.myData = ['广西授权人变更', '电商资料申请', '浙江地区办事点变更',
					'办理资料申请', '电商网上交易', '粤东客户信息变更', '益丰大药房'
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
	.list {
		width: 220px;
		margin-left: 200px;
		list-style: none;
	}
	
	.code_div {
		margin: 0 15px;
		background: #fff;
		margin-top: -10px;
	}
	
	.code_input {
		position: relative;
	}
	
	.code_ul {
		width: 100%;
		max-height: 300px;
		background-color: #fff;
		font-size: 14px;
		position: absolute;
		top: 25px;
		left: 0;
		z-index: 99;
		border: 1px solid #e6e6e6;
		overflow: auto;
	}
	
	.code_ul li {
		font-size: 14px;
		padding-left: 15px;
		line-height: 30px;
		border-bottom: 1px #ddd solid;
	}
</style>