<template>
  <div v-show="showAct">
    <div class="mongolia"  @click="closeAlert"></div>
    <!--蒙层-->
    <div>
      <div class="form_div">
        <!--添加弹窗-->
        <!--:class="showAct?'alertOut':'alertIn'"-->
        <div class="alert_div" >
          <div>
            <div class="form_title">活动关联</div>
            <div class="content" style="padding-bottom: 30px;">
              <div class="formTable">
                <div class="form_div">
                	<!--搜索框-->
					<div class="search">
						<div style="width: 70%;">
							<input type="text" name="" id="search" value="" placeholder="请输入关键字(代码联想)"/>
							<!--<i class="iconfont icon-sousuo3"></i>-->
						</div>
						<div class="searchBtn">
								搜索
						</div>
					</div>
			    	<!--搜索框结束-->
                	 <!--活动列表-->
                	<div id="dateTable">
                		<div class="Row">
                			<div class="col_50">活动主题</div>
				            <div class="col_30">活动完整报销</div>
				            <div class="col_20">操作</div>
                		</div>
                		<div style="height: 250px">
	                		<div class="row" v-for="(item,index) in ORDER">
	                			<div class="col_50" style="text-align: left;">
					              <span>{{item.theme}}</span>
					            </div>
					            <div class="col_25 text_algin" @click="setIsCheck(index)">
					              <label class="bui-checkbox-label bui-checkbox-anim">
					              	<input type="checkbox" name="isCheck" value="红花油">
					              	<i class="bui-checkbox"></i>
					              </label>
					            </div>
					            <div class="col_25">
					              <div class="tabRightBtn" @click="getActInfor(index)">
					            	关联活动
					              </div>
					            </div>
	                		</div>
                		</div>
                	</div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--添加弹窗结束-->
      </div>
    </div>
  </div>
</template>

<script>
	import "../../../../static/css/dateTable.css"
export default {
  data() {
    return {
    	showInfor:this.showAct,
    	newInfor:{},
      ORDER: [
		{
			id:"325451545",
			num: "9147082635",
			theme: "公司电脑配置",
			person: "兰冰真",
			time: "2019-06-12",
			bz: "人生恰似一场修行",
			budget:5000,
			isCheck: false,
		}, {
			id:"358948331",
			num: "3061548729",
			theme: "更换老化打印机更换老化打印机更换老化打印机",
			person: "姜从冬",
			time: "2017-08-10",
			bz: "人生恰似一场修行",
			budget:1000,
			isCheck: false,
		}, {
			id:"665485115",
			num: "8451296370",
			theme: "软件更新",
			person: "赵芳洲",
			time: "2018-10-24",
			bz: "人生恰似一场修行",
			budget:2000,
			isCheck: false,
		}, {
			id:"852215324",
			num: "0936847521",
			theme: "公司年会",
			person: "林丰雅",
			time: "2018-09-06",
			bz: "人生恰似一场修行",
			budget:30000,
			isCheck: false,
		}, {
			id:"4545566214",
			num: "8426531709",
			theme: "公司娱乐活动",
			person: "沙骏伟",
			time: "2018-08-15",
			bz: "人生恰似一场修行",
			budget:3000,
			isCheck: false,
		}, {
			id:"24556521255",
			num: "3517249806",
			theme: "购买新电脑",
			person: "溥之桃",
			time: "2018-08-28",
			bz: "人生恰似一场修行",
			budget:10500,
			isCheck: false,
		}, {
			id:"65551245",
			num: "5672093481",
			theme: "增加办公座椅",
			person: "梁和昶",
			time: "2018-07-16",
			bz: "人生恰似一场修行",
			budget:1000,
			isCheck: false,
		}, {
			id:"654748455",
			num: "0481526793",
			theme: "新租办公地址",
			person: "粟如冰",
			time: "2018-06-13",
			bz: "人生恰似一场修行",
			budget:105000,
			isCheck: false,
		}
	]
    };
  },
  props: ["showAct"],
  methods: {
    closeAlert() {//关闭蒙层
      this.showInfor = false;
      this.$emit("getShowAct",this.showInfor)
    },
    getActInfor(index){//点击关联活动
    		console.log(index)
      	this.newInfor=this.ORDER[index]
        this.$emit("setInfor",this.newInfor)
        this.showInfor = false;
        this.$emit("getShowAct",this.showInfor)
    },
    setIsCheck(index){//点击完整报销
    	this.ORDER[index].isCheck=!this.ORDER[index].isCheck
    },
    saveOrder() {//编辑后保存
      this.topLayer = false;
      this.alertShow = false;
    }
  }
};
</script>

<style>
	.search{
		width: 100%;
	    padding: 5px 15px;
	    background: #807f82;
	    display: flex;
	    z-index: 2;
	}
</style>