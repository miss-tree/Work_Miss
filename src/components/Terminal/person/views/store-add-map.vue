<template>
	<div>
		<label style="font-size: 15px;">
			<input type="text" v-model="keyword" id="txtAddress" placeholder="请输入搜索地址" style="width: 100%;">
		</label>
		<div id="allmap" style="width: 100%;height: 300px;"></div>
		<input name="hidpoint" type="hidden" id="hidpoint" value="113.276343,23.133093">
		<div id="searchResultPanel" style="border:1px solid #ccc;width:150px;height:auto; display:none;">
			onconfirm<br>index = 4<br>myValue = 广州市越秀区广卫商务大厦(在点击时获取点击的地址)
		</div>
		<input type="hidden" id="lastAddress" v-model="place">
		<input type="hidden" id="lastAddress">
		<input type="hidden" name="hidpoint" id="hidpoint" value="113.383385,23.129537">
		<input type="hidden" id="coordinate_x" v-model="x">
		<input type="hidden" id="coordinate_y" v-model="y">
		  <!--<baidu-map :zoom="18">-->
		    <!--<bm-view class="map"></bm-view>-->
		    <!--位置标记-->
			<!--<bm-marker :position="center" :dragging="true" :icon="{url:require('../../../../../static/assets/location.png'),size:{width:25,height:25}}"
				class="mapMark" v-if="initLocation">
    		</bm-marker>-->
    		<!--获取当前位置-->
		    <!--<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="false"></bm-geolocation>
		    <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location" :forceLocal="true"></bm-local-search>-->
		    <!--圆范围-->	
			<!--<bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" fill-color="blue" 
			fill-opacity="0.5" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" :editing="false">
			</bm-circle>-->
		  <!--</baidu-map>-->
		  <!--<label>关键词：<input v-model="keyword"></label>-->
	</div>
</template>

<script>
	import {map} from "../../../../../static/utils/baiduMap.js"
	export default {
  data () {
    return {
      location: '广州',//地点
      keyword: '',//关键词
      initLocation:false,
      circlePath: {//圆形区域
        center: {
          lng: 113.3831,
          lat: 23.13013
        },
        radius: 300
      },
      x:"",
      y:"",
      place:""
    }
  },
  mounted(){
  	var addMap=new map("allmap")
  	addMap.basic()
  	addMap.getPosition()
	addMap.getClickPoint()
//  addMap.search()
	//this.getLocation()
  },
  methods:{
  	getin(v){
  		console.log(v)
  	},
  	getLocation(){ //获取地理位置 
		function myFun(result){
		var cityName = result.name;
		console.log("当前定位城市:"+cityName)
		}
		var myCity = new BMap.LocalCity();
		myCity.get(myFun); 
  	},
    updateCirclePath (e) {//改变点的位置
      this.circlePath.center = e.target.getCenter()
    },
  }
}
</script>

<style>
</style>