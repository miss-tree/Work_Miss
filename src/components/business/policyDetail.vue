<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">产品政策详情</h1>
		</header>
		<!--头部结束-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
			<!--选项卡-->
	        <div>
	          <div>
	          	<store-msg :INFOR="STOREINFOR"></store-msg>
	          </div>
	        </div>
        </div>  
	</div>
</template>

<script>
	import storeMsg from "./policyViews/policy-detail.vue"
	export default{
		data(){
			return{
				STOREINFOR:{fNumber:"020001",proNum:"B001",price:1.9,lowPrice:1.9,supPrice:2.35,
					samePrice:2.15,name:"薄荷通吸入剂",Date:"2019-09-05",norms:'每支含药量0.97g',
					cycle:1,num:300,unit:'盒/箱',proName:'藿香正气丸60丸',pageNum:60,
					where:"广东泰恩康制药厂有限公司",bz:''
				},
				PROINFOR:[{name:"和胃整肠丸",norms:"300粒/瓶",price:75,num:2000,unit:"瓶",money:0,ph:"20180703",beginTime:"2018-07-12",endTime:"2020-07-11",picNum:10},
				{name:"板蓝根颗粒25袋",norms:"每袋装10克",price:4.15,num:600,unit:"包",money:0,ph:"TH65962156",beginTime:"2019-08-27",endTime:"2021-08-26",picNum:0},],
			}
		},
		components:{storeMsg},
		computed:{
			changeVal(){
				console.log('hi')
			}
		},
		methods:{
		}
	}
</script>
