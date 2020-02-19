<template>
<div>
	<!--头部开始-->
	<header class="mui-bar mui-bar-nav back_title">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left "></a>
		<h1 class="mui-title">搜索查询弹窗</h1>
	</header>
	<!--头部结束-->
	<div class="mui-content">
		<gongneng></gongneng>
		<list :ORDERLIST="ORDER"></list>
	</div>
</div>
</template>

<script>
	import gongneng from "../gongneng.vue"
	import list from "../return/order-List.vue"
	export default{
		data(){
			return{
				ORDER:[{name:'国药控股股份有限公司',orderNum:'TEK190712HW33',money:'￥28450',state:'未发货',person:'黎放',dateTime:'2019-07-12',id:758961},
					{name:'华润医药控股有限公司',orderNum:'TEK190701WG451',money:'￥120000',state:'物流中',person:'刘禅',dateTime:'2019-07-01',id:894355444},
				{name:'华润医药控股有限公司',orderNum:'TEK170701XX658',money:'￥8000',state:'已签收',person:'吕布',dateTime:'2017-07-01',id:98796331854},]
			}
		},
		components:{
			gongneng,list
		}
	}
</script>

<style>
</style>