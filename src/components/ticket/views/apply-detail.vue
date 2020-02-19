<template>
  <div>
    <div>
      <div class="form_div">
        <!--<div class="form_row">
          <label class="form_row_left huise" for>
            折扣列表
            <span class="span_red"></span>
          </label>
          <div class="form_row_right">
          </div>
        </div>-->
        <!--产品订单列表-->
        <table border="0" cellspacing cellpadding class="dataTable">
          <tr>
            <!--<th class="col_10">
              <label class="bui-checkbox-label bui-checkbox-anim">
              </label>
            </th>-->
            <th class="col_20">项目编号</th>
            <th class="col_40">项目名称</th>
            <th class="col_15">折扣总金额</th>
          </tr>
          <tr v-for="(item,index) in DISCOUNTINFOR.arr">
            <!--<td class="col_10">
              <label class="bui-checkbox-label bui-checkbox-anim">
              </label>
            </td>-->
            <td class="col_20" style="padding-left: 15px;">
              <span>{{item.num}}</span>
            </td>
            <td class="col_40 text_algin">
              <span>{{item.name}}</span>
            </td>
            <td class="col_15 text_algin" style="padding-right: 15px;">
              <span>{{item.money}}</span>
            </td>
          </tr>
        </table>
        <!--产品订单列表结束-->
        <!--订单合计-->
        <div class="form_row">
          <label class="form_row_left huise" for>
            折扣合计
            <span class="span_red"></span>
          </label>
          <div class="form_row_right span_red">{{DISCOUNTINFOR.tatol}}</div>
        </div>
        <!--订单合计结束-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['DISCOUNTINFOR'],
  methods: {
  }
};
</script>

<style>
</style>