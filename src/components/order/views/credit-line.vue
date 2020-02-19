<template>
  <div>
    <div class="form_div">
      <div class="form_row">
        <label class="form_row_left huise" id="WHERE">
          部门
          <span class="span_red"></span>
        </label>
        <div class="form_row_right">{{KEHUINFOR.PART}}</div>
      </div>
      <div class="form_row">
        <label class="form_row_left huise" id="WHERE">
          固定额度
          <span class="span_red"></span>
        </label>
        <div class="form_row_right">{{KEHUINFOR.LIMIT}}</div>
      </div>
      <div class="form_row">
        <label class="form_row_left huise" id="WHERE">
          临时额度
          <span class="span_red"></span>
        </label>
        <div class="form_row_right">{{KEHUINFOR.TEMPORARY}}</div>
      </div>
      <div class="form_row">
        <label class="form_row_left huise" id="WHERE">
          应收款
          <span class="span_red"></span>
        </label>
        <div class="form_row_right">{{KEHUINFOR.RECEVIE}}</div>
      </div>
      <div class="form_row">
        <label class="form_row_left huise" id="WHERE">
          待核销金额
          <span class="span_red"></span>
        </label>
        <div class="form_row_right">{{KEHUINFOR.WAITMONEY}}</div>
      </div>
      <div class="form_row">
        <label class="form_row_left huise" id="WHERE">
          发货金额
          <span class="span_red"></span>
        </label>
        <div class="form_row_right">{{KEHUINFOR.GOODSMONEY}}</div>
      </div>
      <div class="form_row">
        <label class="form_row_left huise" id="WHERE">
          余额
          <span class="span_red"></span>
        </label>
        <div class="form_row_right">{{KEHUINFOR.BALANCE}}</div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
	data() {
		return {};
	},
	props: ["KEHUINFOR"],
	methods: {}
	};
</script>

<style>
</style>