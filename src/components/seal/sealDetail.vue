<template>
	<div>
		<!--头部-->
		<header class="mui-bar mui-bar-nav back_title">
	      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	      <h1 class="mui-title">印章申请详情</h1>
	    </header>
	    <!--头部结束-->
	    <!--内容部分-->
	    <div class="mui-content">
	    	<!--回到顶部-->
	    	<get-top></get-top>
	    	<div class="formTable">
	    		<div class="form_div">
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="company">
		    				所属公司
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{COMPANY}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="type">
		    				印章类型
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{SEALTYPE}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="part">
		    				事业部
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{PART}}</div>
		    		</div>
		    		<div class="form_row">
		    			<label class="form_row_left huise" id="title">
		    				标题
		    				<span class="span_red"></span>
		    			</label>
		    			<div class="form_row_right">{{TITLE}}</div>
		    		</div>
		    		<div class="form_row">
			            <label class="form_row_left huise" id="obj">
			             	 对象
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{OBJ}}</div>
			        </div>
		    		<div class="form_row">
			            <label class="form_row_left huise" id="use">
			             	 用途
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{USE}}</div>
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="somebody">
			             	 申请人
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{SOMEBODY}}</div>
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="applytime">
			             	 日期
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{APPLYTIME}}</div>
			        </div>
	    		</div>
	    		<!--备注-->
	    		<div class="form_title">
	    			<span>联系人</span>
	    		</div>
				<div class="form_div">
					<div class="form_row">
			            <label class="form_row_left huise" id="person">
			             	 收件人
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{PERSON}}</div>
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="phone">
			             	 电话
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{PHONE}}</div>
			        </div>
			        <div class="form_row">
			            <label class="form_row_left huise" id="where">
			             	 地址
			              <span class="span_red"></span>
			            </label>
		    			<div class="form_row_right">{{WHERE}}</div>
			        </div>
				</div>
	    		<!--备注-->
	    		<div class="form_title">
	    			备注
	    		</div>
				<div class="form_div">
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
				<!--图片上传-->
	        	<div class="bottomOver"></div>
	        	<div class="form_title">
		    		审核进度
			    </div>
		       	 <time-line :examInfor="EXAMINFOR"></time-line>
		        </div>
	        	<!--图片上传结束-->
		    </div>
	    </div>
	</div>
</template>

<script>
	import uploadpic from "./views/uploadpic.vue"
	import lookimg from "./views/lookFile.vue"/*图片查看*/
	export default{
		data(){
			return{
				SEALTYPE:'财务部',//印章类型
				COMPANY:'股份公司',//一级部门
				PART:'电商部',//部门
			    TITLE:'协议资料变更',//标题
			    OBJ:'聚缘堂药店',//对象
			    USE:'协议变更',//用途
			    SOMEBODY:'刘备',//申请人
			    APPLYTIME:'2019-08-13',//申请时间
			    PERSON:'赵芳洲',//收件人
			    PHONE:'15546258936',//电话
			    WHERE:'广州市从化区良口镇新街30号101房',//地址
			    BZ:'麻烦安照附件的要求准备文件，整理好发给诸葛亮',//
			    SURETIME:'',//当前时间
			    FILEARR:[{fileUrl:"https://pm.myapp.com/invc/xfspeed/qqpcmgr/download/PS_PCDownload1584.exe",name:"管家安全下载"},
			    		{fileUrl:"https://pm.myapp.com/invc/xfspeed/qqsoftmgr/PCSoftDownloader_v1.1_webnew_3216@.exe",name:"普通下载"},],
			    EXAMINFOR:[{progress:'经理审核',opinion:'同意',bz:'',time:'2019-08-03 16:54'},
					{progress:'部门审核',opinion:'同意',bz:'',time:'2018-04-03 16:23'},
					{progress:'大区审核',opinion:'同意',bz:'',time:'2019-08-02 10:33'},
					{progress:'提交申请',opinion:'',bz:'',time:'2019-08-01 21:42'}],
				IMAGES:["http://pic.sc.chinaz.com/Files/pic/pic9/201406/apic4453_s.jpg",
				"http://pic.sc.chinaz.com/Files/pic/pic9/201309/apic823_s.jpg",
				"http://pic.sc.chinaz.com/Files/pic/pic9/201311/apic1847_s.jpg",
				"http://pic.sc.chinaz.com/Files/pic/pic8/xpic1946_s.jpg",],	
			    ORDER: [
				{
					where: "广州市荔湾区紫荆道90号102铺",
					person: "兰冰真",
					phone:1568987463,
				}, {
					where: "广州市白云区黄石街陈田中街72号",
					person: "姜从冬",
					phone:15865423654,
				}, {
					where: "广州市增城区荔城街荔乡路95号首层101铺位",
					person: "赵芳洲",
					phone:15546258936,
				}, {
					where: "广州市从化区良口镇新街30号101房",
					person: "林丰雅",
					phone:13956224862,
				}, {
					where: "广州市增城区永宁街翟洞新村一街4号",
					person: "沙骏伟",
					phone:13764892315,
				}, {
					where: "广州市白云区华成路216-220号",
					person: "溥之桃",
					phone:13465842698,
				}, {
					where: "广州市白云区鹤龙六路248号首层",
					person: "梁和昶",
					phone:18856248652,
				}, {
					where: "碧泉路3号",
					person: "粟如冰",
					phone:13864852658,
				}],//输入历史
			}
		},
		components:{uploadpic,lookimg},
		mounted(){
		},
		methods:{
		}
	}
</script>