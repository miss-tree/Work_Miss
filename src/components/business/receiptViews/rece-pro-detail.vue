<template>
  <div>
    <div class v-for="(item,index) in INFOR">
      <div class="form_title">产品({{index+1}})</div>
      <div class="form_div">
        <div class="form_row">
          <label class="form_row_left huise">
            产品名称
            <span class="span_red"></span>
          </label>
          <div class="form_row_right">{{item.name}}</div>
        </div>
        <div class="form_row">
          <label class="form_row_left huise" id="person">
            合计金额
            <span class="span_red"></span>
          </label>
          <div class="form_row_right">{{item.money=item.num*item.price}}元</div>
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
                      <label class="form_row_left huise" id="phone">
                        订单号
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.orderNum}}</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise">
                        产品名称
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.name}}</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise" id="money">
                      	  数量
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.num}}</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise" for id="level">
                        	单位
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.unit}}</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise" id="where">
                       	 单价
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.price}}元</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise" id="person">
                      	  合计金额
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.money=showInfo.num*showInfo.price}}元</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise" id="phone">
                       	 规格
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.norms}}</div>
                    </div>
                    <div class="form_row">
                      <label class="form_row_left huise" id="khmc">
                     	   审核状态
                        <span class="span_red"></span>
                      </label>
                      <div class="form_row_right">{{showInfo.exam}}</div>
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
      <!--统计-->
      <div class="mui-bar-tab mui-bar" style="height: 40px;padding: 0 15px;">
        <div class="bottomWidth flex justify_content">
          <span class="span_15px">产品数量：{{INFOR.length}}</span>
          <span class="span_15px" style="margin-left: 5px;">开票金额：{{MONEY}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAct: false,
      showInfo: {}
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

<style>
</style>