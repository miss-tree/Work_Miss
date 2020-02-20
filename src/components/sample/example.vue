<template>
  <div>
    <!-- 头部 -->
    <header class="mui-bar mui-bar-nav back_title">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">内容隐藏示例</h1>
    </header>
    <div class="bar-ge"></div>
    <!-- 下面内容 -->
    <div class="mui-card">
      <ul class="mui-table-view">
      	<!--任务-->
        <li class="mui-table-view-cell mui-collapse">
          <a class="mui-navigate-right" href="#">任务</a>
          <div class="mui-content">
            <ul
              class="mui-table-view mui-table-view-striped mui-table-view-condensed"
              style="border-radius:0;"
            >
              <li class="mui-table-view-cell">
                <div class="mui-table">
                  <div class="mui-table-cell mui-col-xs-10">
                    <span>2019-06-17</span>
                    <h5 class="mui-ellipsis"></h5>
                    <p
                      class="mui-h6 mui-ellipsis-2"
                    >Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，100元等你拿!100元等你拿!</p>
                    <button type="button" class="mui-btn mui-btn-success">查看</button>
                    <button type="button" class="mui-btn mui-btn-warning">编辑</button>
                    <button type="button" class="mui-btn mui-btn-primary">审核</button>
                  </div>
                  <div class="mui-table-cell mui-col-xs-2 mui-text-right">
                    <span>李四</span>
                    <div class="fixed_bottom">
                      <button
                        type="button"
                        id="toastBtn"
                        class="mui-btn mui-btn-danger"
                        @click="delate"
                      >删除</button>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mui-table-view-cell">
                <div class="mui-table">
                  <div class="mui-table-cell mui-col-xs-10">
                    <h5 class="mui-ellipsis-2">信息化推进办公室张彦合同付款信息化推进办公室张彦合同付款信息化推进办公室张彦合同付款</h5>
                    <h5>申请人：李四</h5>
                    <p class="mui-h6 mui-ellipsis">Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，</p>
                  </div>
                  <div class="mui-table-cell mui-col-xs-2 mui-text-right">
                    <span class="mui-h5">12:25</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
       	<!--图片轮播-->
				<li class="mui-table-view-cell mui-collapse">
          <a class="mui-navigate-right" href="#">图片轮播</a>
          <div class="mui-collapse-content">
            <div id="slider" class="mui-slider">
              <div class="mui-slider-group mui-slider-loop">
                <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                  <a href="#">
                    <img src="..\..\assets\pic-98465.jpg">
                  </a>
                </div>
                <!-- 第一张 -->
                <div class="mui-slider-item">
                  <a href="#">
                    <img src="..\..\assets\pic-98465.jpg">
                  </a>
                </div>
                <!-- 第二张 -->
                <div class="mui-slider-item">
                  <a href="#">
                    <img src="..\..\assets\29343.jpg">
                  </a>
                </div>
                <!-- 第三张 -->
                <div class="mui-slider-item">
                  <a href="#">
                    <img src="..\..\assets\pic-98465.jpg">
                  </a>
                </div>
                <!-- 第四张 -->
                <div class="mui-slider-item">
                  <a href="#">
                    <img src="..\..\assets\29343.jpg">
                  </a>
                </div>
                <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                  <a href="#">
                    <img src="..\..\assets\pic-98465.jpg">
                  </a>
                </div>
              </div>
              <div class="mui-slider-indicator">
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
              </div>
            </div>
          </div>
        </li>
       	<!--最近留言-->
				<li class="mui-table-view-cell mui-collapse">
          <a class="mui-navigate-right" href="#">最近留言</a>
          <div class="mui-collapse-content">
            <ul>
              <li>
                <div class="pl">
                  <div class="tx">
                    <img src="../../assets/1.png">
                    <img
                      src="../../assets/tx.png"
                      alt
                      style="position: absolute; right: -1px;top:0px;width: 15px;height: 15px;"
                    >
                  </div>
                  <div class="pl_r">
                    <ul class="plbg">
                      <div class="f z13">
                        <h5>天山飞雨</h5>
                        <!-- <span class="jl">0</span> -->
                      </div>
                      <div class="r">
                        <h5 class="z13">2019/3/28 10:05:42</h5>
                      </div>
                      <div class="dr"></div>
                    </ul>
                    <ul class="plul">
                      <span class="mui-ellipsis-2">
                        666 感谢楼主不错的分享
                        666 感谢楼主不错的分享
                        666 感谢楼主不错的分享
                        666 感谢楼主不错的分享
                      </span>
                      <div class="lyhf"></div>
                      <div class="dr"></div>
                    </ul>
                  </div>
                </div>
              </li>
              <li style="margin-top:10px;">
                <div class="pl">
                  <div class="tx">
                    <img src="../../assets/1.png">
                    <img src="../../assets/tx.png"
                      style="position: absolute; right: -1px;top:0px;width: 15px;height: 15px;" >
                  </div>
                  <div class="pl_r">
                    <ul class="plbg">
                      <div class="f z13">
                        <h5>天山飞雨</h5>
                      </div>
                      <div class="r">
                        <h5 class="z13">2019/3/28 10:05:42</h5>
                      </div>
                      <div class="dr"></div>
                    </ul>
                    <ul class="plul">
                      <span class="mui-ellipsis-2">
                        666 感谢楼主不错的分享
                        666 感谢楼主不错的分享
                        666 感谢楼主不错的分享
                        666 感谢楼主不错的分享
                      </span>
                      <div class="lyhf"></div>
                      <div class="dr"></div>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
           
          </div>
        </li>
        <!--数据表格-->
        <li class="mui-table-view-cell mui-collapse">
          <a class="mui-navigate-right" href="#">数据表格</a>
          <div class="mui-collapse-content">
          	<table border="0" cellspacing="" cellpadding="" class="dataTable">
          		<tr><th class="col_10">
          			<label class="bui-checkbox-label bui-checkbox-anim">
						        <input type="checkbox" name="isCheck" disabled="disabled"><i class="bui-checkbox"></i>
						    </label>
          			</th>
          			<th class="col_15">ID</th>
          			<th class="col_50">标题</th>
          			<th class="col_15">类别</th>
          			<th class="col_10">操作</th>
          		</tr>
          		<tr v-for="(item,index) in tableData">
          			<td class="col_10">
          				<label class="bui-checkbox-label bui-checkbox-anim">
						        <input type="checkbox" name="isCheck"><i class="bui-checkbox"></i>
						   		</label>
          			</td>
          			<td class="col_15"><span class="span_blue">{{item.id}}</span></td>
          			<td class="col_50"><span class="span_green">{{item.title}}</span></td>
          			<td class="col_15"><span class="span_red">{{item.type}}</span></td>
          			<td class="col_10"><span @click="editTable">编辑</span></td>
          		</tr>
          	</table>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
	import "../../../static/css/maybe.css"
	import {carousel} from '../../../static/utils/public.js'
export default {
  data() {
    return {
    	tableData:[{isCheck:'false',id:458876,title:"你好",type:"hello"},
    	{isCheck:'false',id:8446645,title:"很好",type:"good"},
    	{isCheck:'true',id:7854532,title:"今天天气怎样",type:"weather"}]
    };
  },
			mounted() {
				carousel()
			},
  methods: {
//	编辑
		editTable(index){
			console.log(index)
			this.tableData.splice(index,1)
		},
//	点击删除
    delate() {
      var btnArray = ["否", "是"];
      mui.confirm("是否确认删除", "提示", btnArray, function(e) {
        if (e.index == 1) {
          setTimeout(function() {
            mui.toast("已经删除");
          }, 1000);
        } else {
          return;
        }
      });
    },
  }
};
</script>