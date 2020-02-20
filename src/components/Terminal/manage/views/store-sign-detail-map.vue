<template>
	<div>
		<baidu-map :center="IPINFOR.mapInfo.view" :zoom="17">
			<bm-view class="map"></bm-view>
			<!--比例尺-->
			<bm-scale anchor="BMAP_ANCHOR_TOP_LEFT"></bm-scale>
			<!--位置标记-->
			<bm-marker :position="IPINFOR.mapInfo.center" 
				:icon="{url:require('../../../../../static/assets/map-2.png'),size:{width:25,height:25}}" 
				class="mapMark" >
				<bm-label :content="IPINFOR.mapInfo.label" :labelStyle="{color: 'blue', fontSize : '12px'}" :offset="{width: 10, height: 25}"/>
			</bm-marker>
			<bm-marker :position="IPINFOR.mapInfo.position" 
				:icon="{url:require('../../../../../static/assets/map-1.png'),size:{width:25,height:25}}" 
				class="mapMark" >
				<bm-label :content="IPINFOR.mapInfo.content" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: 10, height: 25}"/>
			</bm-marker>
			<!--线-->
			<bm-polyline :path="IPINFOR.mapInfo.way" stroke-color="blue" :stroke-opacity="0.5" 
				:stroke-weight="2"></bm-polyline>
			<!--圆范围-->
			<bm-circle :center="IPINFOR.mapInfo.circlePath.center" 
				:radius="IPINFOR.mapInfo.circlePath.radius" 
				stroke-color="blue" fillColor="blue" 
				:stroke-opacity="0.5" :fillOpacity="0.4" :stroke-weight="2"></bm-circle>
		</baidu-map>
		<div>
			<div class="form_div">
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				药店名称
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.name}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				签到时间
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.time}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				药店地址
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right" style="line-height: 30px;">{{IPINFOR.position}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				签到地址
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.where}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				相距
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.away}}km</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["IPINFOR"],
		methods: {
		}
	}
</script>