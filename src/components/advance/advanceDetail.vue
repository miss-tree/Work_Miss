<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">预借款申请详情</h1>
		</header>
		<!--头部结束-->
		<!--内容部分-->
		<div class="mui-content">
			<detail :INFOR="INFOR"></detail>
			<div class="form_title">
		    		审核进度
			</div>
			<div>
		       	 <time-line :examInfor="EXAMINFOR"></time-line>
		    </div>
	        	<!--图片上传结束-->
			<div style="height: 50px"></div>
		</div>
	</div>
</template>

<script>
	import detail from "./views/advance-detail.vue"
	import { getDate, mustFill, selecTion } from '../../../static/utils/public.js'
	export default {
		data() {
			return {
				INFOR:{
					NAME: '苏俊远', //姓名
					COMPANY: '泰恩康股份', //请假类型
					PARTONE: '电商部', //部门
					MONEY: '20000', //借款金额
					STARTDATE: '2019-08-23', //开始时间
					ENDDATE: '2019-10-22',
					BZ:'小说，以刻画人物形象为中心，通过完整的故事情节和环境描写来反映社会生活的文学体裁。人物、情节、环境是小说的三要素。情节一般包括开端、发展、高潮、结局四部分，有的包括序幕、尾声。环境包括自然环境和社会环境。', //备注
				},
				EXAMINFOR:[{progress:'经理审核',opinion:'同意',bz:'',time:'2019-08-03 16:54'},
					{progress:'复审',opinion:'同意',bz:'',time:'2018-04-03 16:23'},
					{progress:'人事审核',opinion:'同意',bz:'',time:'2019-08-02 10:33'},
					{progress:'提交申请',opinion:'',bz:'',time:'2019-08-01 21:42'}],
			}
		},
		components:{detail},
		mounted() {
		},
		methods: {
			getPart1(value, index) { //选择部门
				this.PARTONE = value,
					this.showPART1 = false
			},
			applyAjax() { //请求客户数据
				axios.get().then()
			},
			mustFull() {
				var isOk = mustFill();
				if(isOk.length == 0) {
					console.log('hi')
				}
			},
		}
	}
</script>
