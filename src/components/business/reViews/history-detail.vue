<template>
  <div>
    <div class v-for="(item,index) in INFOR">
      <div class="form_div" style="margin-bottom: 15px;">
        <div class="form_row">
          <label class="form_row_left huise">
            收款编号
            <span class="span_red"></span>
          </label>
          <div class="form_row_right">{{item.num}}</div>
        </div>
        <div class="form_row">
          <label class="form_row_left huise">
            收款总额
            <span class="span_red"></span>
          </label>
          <div class="form_row_right">{{item.tatol.toFixed(2)}}元</div>
        </div>
        <div class="form_row">
          <label class="form_row_left huise" id="phone">
            查看
            <span class="span_red"></span>
          </label>
          <div class="form_row_right">
            <div class="tabRightBtn" @click="getShow(index)">详情</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="showAct">
      <!--蒙层-->
      <div class="mongolia" @click="showAct=false"></div>
      <div>
        <div class="form_div">
          <div class="alert_div">
            <div id="midlePop">
              <div class="form_title">产品详情</div>
              <div class="content">
                <div class="form_div">
                    <div class="form_row">
                      <label class="form_row_left huise">
                        收款编号
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.num}}</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise">
                        收款总额
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.tatol.toFixed(2)}}元</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise">
                        核销金额
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.money.toFixed(2)}}元</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise">
                        经办人
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.person}}</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise">
                        收款公司
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.com}}</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise">
                        收款日期
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.time}}</div>
                    </div>
                  </div>
                </div>
                <div class="alertMidBottom">
                  <button
                    class="mui-btn mui-btn-block mui-btn-primary alertBtn"
                    @click="showAct=false"
                    style="margin-top: 5px;"
                  >关闭</button>
                </div>
              </div>
            </div>
          </div>
          <!--添加弹窗结束-->
        </div>
      </div>
      <div style="height: 10px;"></div>
      <!--统计-->
      <!--<div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;">
				<div class="bottomWidth flex justify_content">
					<span class="span_15px">产品数量：{{INFOR.length}}</span>
					<span class="span_15px" style="margin-left: 5px;">开票金额：{{MONEY}}</span>
				</div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAct: false,
      showInfo: {num:'',tatol:0,money:0,person:'',com:'',time:''}
    };
  },
  props: ["INFOR"],
  computed: {
    MONEY() {
      /*合计金额*/
      return this.INFOR.map(row => row.num * row.price).reduce(
        (acc, cur) => parseFloat(cur) + acc
      );
    }
  },
  methods: {
    getShow(index) {
      this.showAct = true;
      this.showInfo = this.INFOR[index];
    }
  }
};
</script>