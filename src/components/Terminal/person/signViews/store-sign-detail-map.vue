<template>
	<div>
		<baidu-map :center="view" :zoom="15">
			<!-- @ready="handlerBaiduMapReady" @click="setNewIcon"-->
			<bm-view class="map"></bm-view>
			<!--比例尺-->
			<bm-scale anchor="BMAP_ANCHOR_TOP_LEFT"></bm-scale>
			<!--位置标记-->
			<bm-marker :position="center" 
				:icon="{url:require('../../../../../static/assets/location.png'),size:{width:25,height:25}}" 
				class="mapMark" >
				<bm-label :content="content" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: 10, height: 25}"/>
			</bm-marker>
			<!--搜索-->
			<!--<bm-local-search :keyword="keyword" :auto-viewport="true" @click="changIcon==true"
		    	 :location="location" :forceLocal="true" :icon="null"
		    	 ></bm-local-search>-->
			<!--圆范围-->
			<!--<bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" fillColor="green" :stroke-opacity="0.5" :stroke-weight="2"></bm-circle>-->
		</baidu-map>
		<div>
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				签到地址
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.where}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				药店经纬度
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.lng}},{{IPINFOR.lat}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  修复次数
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{IPINFOR.num}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '', //关键词
				content:"签到位置：我是在这里的",
				view: {
//					lng: 113.36811,
//					lat: 23.14003
					lng: 113.3831,
					lat: 23.13013
				},/*在缩放比例为15的情况下：lng偏移-0.015，lat偏移+0.01*/
				center: {
					lng: 113.3831,
					lat: 23.1273
				},
				initLocation: false,
				circlePath: { //圆形区域
					center: {
						lng: 113.3831,
						lat: 23.13013
					},
					radius: 200
				},
			}
		},
		props:["IPINFOR"],
		methods: {
		}
	}
</script>

<style>

</style>