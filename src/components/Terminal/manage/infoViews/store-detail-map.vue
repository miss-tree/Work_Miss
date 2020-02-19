<template>
	<div>
		<!--<label style="font-size: 15px;">
			<input type="text" v-model="keyword" id="txtAddress" placeholder="请输入搜索地址" style="width: 100%;">
		</label>-->
		<baidu-map :center="view" :zoom="15">
			<!-- @ready="handlerBaiduMapReady" @click="setNewIcon"-->
			<bm-view class="map"></bm-view>
			<!--比例尺-->
			<bm-scale anchor="BMAP_ANCHOR_TOP_LEFT"></bm-scale>
			<!--位置标记-->
			<bm-marker :position="center" 
				:icon="{url:require('../../../../../static/assets/location.png'),size:{width:25,height:25}}" 
				class="mapMark" >
			</bm-marker>
			<!--获取当前位置-->
			<!--<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" 
		    	:showAddressBar="true" :autoLocation="false" @locationSuccess="getlocationPoint"
		    	:icon="{url:require('../../../../../static/assets/location.png'),size:{width:25,height:25}}"
		    	></bm-geolocation>-->
			<!--搜索-->
			<!--<bm-local-search :keyword="keyword" :auto-viewport="true" @click="changIcon==true"
		    	 :location="location" :forceLocal="true" :icon="null"
		    	 ></bm-local-search>-->
			<!--圆范围-->
			<bm-circle :center="circlePath.center" 
				:radius="circlePath.radius" stroke-color="blue" fillColor="blue" 
				:fillOpacity="0.4"
				:stroke-opacity="0.4" :stroke-weight="2"></bm-circle>
		</baidu-map>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '', //关键词
				view: {
					lng: 113.36811,
					lat: 23.14003
				},/*在缩放比例为15的情况下：lng偏移-0.015，lat偏移+0.01*/
				center: {
					lng: 113.3831,
					lat: 23.13013
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
		methods: {
			setNewIcon(type) { //点击地图时获取的坐标
				this.center = {
					lng: type.point.lng,
					lat: type.point.lat
				}
			},
			handlerBaiduMapReady({BMap,map}) {
				// let _this = this;   // 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
				// var geolocation = new BMap.Geolocation();
				new BMap.Geolocation().getCurrentPosition((result) => {
					this.location = result.address.city //获取城市地址
					this.center = {
						lng: result.longitude,
						lat: result.latitude
					}; // 设置center属性值
					this.circlePath.center = this.center;
					console.log(this.circlePath)
					this.autoLocationPoint = {
						lng: result.longitude,
						lat: result.latitude
					}; // 自定义覆盖物
					this.initLocation = true;
					console.log('center:', this.center) // 如果这里直接使用this是不行的
					/*this.$store.dispatch("updateLocation", this.center);*/
				}, {enableHighAccuracy: true})
			},
			getlocationPoint(type) { //点击获取当前坐标
				this.center = {
					lng: type.point.lng,
					lat: type.point.lat
				}
			},
		}
	}
</script>

<style>

</style>