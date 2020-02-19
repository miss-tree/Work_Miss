<template>
<div>
	<!--头部-->
	<header class="mui-bar mui-bar-nav back_title">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">代码联想</h1>
	</header>
	<div class="mui-content">
		<div class="binding" data-title="绑定账号">
			<div>方法一：直接给定data不用请求</div>
			<div class="bindingbtn">
				<input type="text" v-model="city" placeholder="请输入北、广、上" />
			</div>
			<div class="code_div" v-show="isshow==true">
				<p v-for="(item,index) in selectCitys" @click="getSelect(index)">{{item}}</p>
			</div>
		</div>

		<div>
			<div>方法二：实时数据请求(就是输入时变化，现在没接口，也是直接给死数据)</div>
			<div class="code_input" id="list">
				<input type="text" class="" @blur="changeShow"  @focus="changeShow"
					 v-model="tl" @keyup="get($event)" placeholder="请输入北、广、上"
					 @keydown.down="changeDown()" @keydown.up.prevent="changeUp()">
				<span class="mui-btn mui-btn-primary">百度一下</span>
				<ul class="code_ul" v-show="willShow">
                    <li v-for="(value,index) in myData" @click="getCheck(index)" :class="{gray:index==now}">
                    	{{value}}</li>
                    <li v-show="myData.length==0">&nbsp;&nbsp;&nbsp;暂无数据...</li>
				</ul>
			</div>
		</div>
	</div>
</div> 
</template>
<script src="../../../static/utils/vue-resource.js" type="text/javascript">
</script>
<script>
	export default{
		 data() {
		 	return{
		 		myData:[],
                tl:'',
                now:-1,
                willShow:false,
                isShow:true,
                
	            isshow:true,
			    city:"",
			    citys:['北京','北海','东北','上海','武汉','东京','广州','广元市','上饶','上水市'],
			    selectCitys:[],
		 	}
        },
        watch:{
		    city:function(val, oldVal){
		      if(val.length==0&&val.length==this.selectCitys.length){
		         this.isshow = false
		       }else{
		          this.isshow = true;
		          var citys = []
		          this.citys.forEach((item,index) => {
		              if(item.indexOf(val)>=0){
		                  citys.unshift(item)
		              }
		          })  
		          this.selectCitys = citys;
		       }
		    }
		},
        methods: {
        	/*方法2点击获取选择的值*/
        	getCheck(index){
        		this.tl=this.myData[index];
        		this.willShow=false
        	},
        	/*方法1点击获取选择的值*/
            getSelect(index){
            	console.log(index)
            	this.city=this.selectCitys[index]
            	this.selectCitys=[]
            	this.isshow = false;
            },
            /*方法2激活窗口显示数据*/
            changeShow(){
            	console.log('hi')
            	this.willShow=!this.willShow;
            },
            get:function(ev){
                //判断如果按上下键搜索，则不访问百度接口数据，只显示下拉列表数据
                if(ev.keyCode==38||ev.keyCode==40)return;
                //按enter键进入相应词汇百度搜索页面
                if(ev.keyCode==13){
                    window.open('https://www.baidu.com/s?wd='+this.tl);
                    this.tl='';
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
               this.myData=['北京','北海','东北','上海','武汉','东京','广州','广元市','上饶','上水市']
            },
            changeDown:function(){
                //判断如果循环超出了整个下拉列表，则从头开始循环
                this.now++;
                if(this.now==this.myData.length)this.now=-1;
                this.tl=this.myData[this.now];
            },
            changeUp:function(){
                //判断如果循环超出了整个下拉列表，则从尾开始循环
                this.now--;
                if(this.now==-2)this.now=this.myData.length-1;
                this.tl=this.myData[this.now];
            },
            clk:function(e){
                    var index=e.target.innerText;
                    this.t1=index;
                    var input=document.getElementById("input");
                    input.style.color="blue";
                    input.focus()
                    this.isShow=false;
                    var boxUl=document.getElementById("boxUl");
                    console.log(boxUl);
            }
        }
	}
</script>

<style>
.bindingbtn{
	padding: 10px 15px;
	position: relative;
}
.bindingbtn input{
  border:1px solid #ccc;
}
.box {
	width: 220px;
	height: 40px;
	margin-top: 50px;
	margin-left: 200px;
	border: 1px solid darkgoldenrod;
}

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
.code_input{
	position: relative;
}
.code_ul{
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
.code_ul li{
	font-size: 13px;
	line-height: 25px;
	border-bottom: 1px #ddd solid;
}
</style>