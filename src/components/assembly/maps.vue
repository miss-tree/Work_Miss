<template>
<div>
	<!--头部-->
	<header class="mui-bar mui-bar-nav back_title">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">百度地图</h1>
	</header>
	<div class="mui-content">
		<div style="text-align: center;background: #fff;">在手机端查看更真实</div>
		<baidu-map :center="center" :zoom="zoom" @ready="handler" class="map">
			<!--点击定位工具-->
			<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="false" ></bm-geolocation>
			<!--位置标记-->
			<bm-marker :position="center" :dragging="true" :icon="{url:require('../../../static/assets/location.png'),size:{width:25,height:25}}"
				class="mapMark" v-if="initLocation">
    		</bm-marker>
    		<!--画线-->
    		<bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="false" @lineupdate="updatePolylinePath"></bm-polyline>
			<!--圆范围-->	
			<bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" fill-color="blue" 
			fill-opacity="0.5" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" :editing="false">
			</bm-circle>
		</baidu-map>
	</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      initLocation:false,
      circlePath: {//圆形区域
        center: {
          lng: 113.3831,
          lat: 23.13013
        },
        radius: 100
      },
      polylinePath: [//点位置
        {lng: 113.36, lat: 23.12},
        {lng: 113.382, lat: 23.136},
      ]
    }
  },
  methods: {
    handler ({BMap, map}) {//初始化
    	let _this = this;	// 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r){
					console.log(r);
					_this.center = {lng: r.longitude, lat: r.latitude};		// 设置center属性值
					_this.circlePath.center = {lng: r.longitude, lat: r.latitude};		// 设置center属性值
					_this.autoLocationPoint = {lng: r.longitude, lat: r.latitude};		// 自定义覆盖物
					_this.zoom = 18
					_this.initLocation = true;	
					//console.log('center:', _this.center)	// 如果这里直接使用this是不行的
				},{enableHighAccuracy: true})
    },
    updateCirclePath (e) {//改变点的位置
      this.circlePath.center = e.target.getCenter()
      this.circlePath.radius = e.target.getRadius()
    },
    updatePolylinePath (e) {//改变点的位置
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {//添加点
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>
<style>
.map {
  width: 100%;
  height: 300px;
}

</style>