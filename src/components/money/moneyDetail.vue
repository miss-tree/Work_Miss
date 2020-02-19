<template>
	<div>
		<header class="mui-bar mui-bar-nav back_title">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">工资详情</h1>
		</header>
		<div class="mui-content">
			<div class="detail back-color" style="margin-bottom: 35px;">
				<div class="text_algin ">
					<span class="border_bottom title">
						2019年1月工资
					</span>
				</div>
				<div class="row_div">
					<span class="span_15px">
						你好，以下是你2019年1月份薪资
					</span>
					<p>
						应发款项
					</p>
				</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							基本工资<span class=""></span>
						</label>
						<span class="margin-lr">
							{{INFOR.base}}
						</span>
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							绩效工资<span class=""></span>
						</label>
						<span class="margin-lr">{{INFOR.jiXiao}}</span>	
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							加班费<span class=""></span></label>
						<span class="margin-lr">{{INFOR.overTime}}</span>	
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							交通补贴<span class=""></span></label>
						<span class="margin-lr">{{INFOR.traffic}}</span>	
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							岗位津贴<span class=""></span></label>
						<span class="margin-lr">
							{{INFOR.post}}
						</span>	 	
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							其他应发<span class=""></span></label>
						<span class="margin-lr">
							{{INFOR.other}}
						</span>
					</div>
					<div class="row_div">
						<label class="span_title inline_label">
							应发合计<span class=""></span></label>
						<span class="margin-lr">
							{{heJi=INFOR.base+INFOR.jiXiao+INFOR.overTime+INFOR.traffic+INFOR.post+INFOR.other}}
						</span>
					</div>
					<div class="detail_title">
						应扣款项
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							社保<span class=""></span>
						</label>
						<span class="margin-lr">{{INFOR.sheBao}}</span>
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							公积金<span class=""></span>
						</label>
						<span class="margin-lr">{{INFOR.gJiJin}}</span>
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							事假<span class=""></span>
						</label>
						<span class="margin-lr">{{INFOR.qinJia}}</span>
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							代扣税<span class=""></span>
						</label>
						<span class="margin-lr">{{INFOR.daiKou}}</span>
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							个税<span class=""></span>
						</label>
						<span class="margin-lr">{{INFOR.geShui}}</span>
					</div>
					<div class="row_div">
						<label class="span_title huise inline_label">
							其他扣款<span class=""></span></label>
						<span class="margin-lr">{{INFOR.qiTa}}</span>
					</div>
					<div class="row_div">
						<label class="span_title inline_label">
							扣款合计<span class=""></span></label>
						<span class="margin-lr">{{kouKuan=INFOR.gJiJin+INFOR.gJiJin+INFOR.qinJia+INFOR.daiKou+INFOR.geShui+INFOR.qiTa}}</span>
					</div>
					<div class="detail_title">
						实发合计
						<span style="margin-left: 60px;">{{wages=heJi-kouKuan}}</span>
					</div>
					<div class="detail_title">
						如有疑问请联系HR
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				INFOR:{base:5000,overTime:700,jiXiao:200,traffic:400,post:1500,other:500,
				sheBao:234,gJiJin:300,qinJia:500,daiKou:100,geShui:120,qiTa:25},
				heJi:0,//应发
				kouKuan:0,//扣款
				wages:0,//实发薪资
			}
		}
	}
</script>

<style>
	
</style>