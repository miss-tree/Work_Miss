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
			<!--搜索-->
			<!--圆范围-->
			<bm-circle :center="IPINFOR.mapInfo.circlePath.center" 
				:radius="IPINFOR.mapInfo.circlePath.radius" 
				stroke-color="blue" fillColor="blue" 
				:fillOpacity="0.4"
				:stroke-opacity="0.4" :stroke-weight="2"></bm-circle>
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
		    				药店地址
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right" style="line-height: 30px;">{{IPINFOR.position}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				药店经纬度
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.lng}},{{IPINFOR.lat}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				当前地址
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.where}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="khmc">
		    				当前经纬度
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.mapInfo.position.lng}},{{IPINFOR.mapInfo.position.lat}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				相距
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.away}}km</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" for="" id="level">
		    				备注
		    				<span class="span_red"></span>
		    			</label>
					<div class="form_row_right">{{IPINFOR.bz}}</div>
				</div>
				<div class="form_row">
					<label class="form_row_left huise" id="where">
		              	  修复次数
		                <span class="span_red"></span>
		              	</label>
					<div class="form_row_right">{{IPINFOR.num}}</div>
				</div>
				<div class="form_row">
					<div class="form_row_left huise">
						 药店偏移
					</div>
					<div class="form_row_right">
						<div class="mui-btn mui-btn-success">确认修正</div>
					</div>
				</div>
				<div class="form_row">
					<div class="form_row_left huise">
						 当前位置偏移
					</div>
					<div class="form_row_right">
						<div class="mui-btn mui-btn-primary">无须修正</div>
					</div>
				</div>
			</div>
			<div style="height: 40px;"></div>
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
