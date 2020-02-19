<template>
	<div>
		<label style="font-size: 15px;">
			<input type="text" v-model="keyword" id="txtAddress" placeholder="请输入搜索地址" style="width: 100%;">
		</label>
		  <!--<label>地区：<input v-model="location"></label>-->
		  <baidu-map :center="center" :zoom="15" @ready="handlerBaiduMapReady" @click="setNewIcon">
		  	<!--比例尺-->
		  	<bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
		    <bm-view class="map"></bm-view>
		    <!--位置标记-->
		    <bm-marker :position="center" :dragging="true" :icon="{url:require('../../../../../static/assets/location.png'),size:{width:25,height:25}}"
				class="mapMark" v-if="initLocation"   v-show="changIcon==false" animation="BMAP_ANIMATION_BOUNCE"
				@dragend="getNewPoint"
				>
    		</bm-marker>
			<!--<bm-marker :position="item.center" v-for="(item,index) in points" :dragging="true" :icon="{url:require('../../../../../static/assets/location.png'),size:{width:25,height:25}}"
				class="mapMark" v-if="initLocation"   v-show="changIcon==false" animation="BMAP_ANIMATION_BOUNCE"
				@dragend="getNewPoint"
				>
				<bm-label :content="item.label" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
    		</bm-marker>-->
    		<!--获取当前位置-->
		    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" 
		    	:showAddressBar="true" :autoLocation="false" @locationSuccess="getlocationPoint"
		    	:icon="{url:require('../../../../../static/assets/location.png'),size:{width:25,height:25}}"
		    	></bm-geolocation>
		    
		    <bm-local-search :keyword="keyword" :auto-viewport="true" @click="changIcon==true"
		    	 :location="location" :forceLocal="true" :icon="null" @searchcomplete="getResult"
		    	 ></bm-local-search>
		    <!--圆范围-->	
			<bm-circle :center="circlePath.center" 
				:radius="circlePath.radius" 
				stroke-color="blue" 
				fillColor="blue"
				:fillOpacity="0.4" v-if="reFresh"
				:stroke-weight="2" :massClear="true"
				@lineupdate="updateCirclePath" 
				:editing="true"></bm-circle>
		  </baidu-map>
		  <!--<label>关键词：<input v-model="keyword"></label>-->
	</div>
</template>

<script>
	export default {
  data () {
    return {
    	points:[{center: {lng: 115.89, lat: 28.68},label:"我爱北京天安门"},
    	{center: {lng: 113.3831, lat: 23.13013},label:"天安门"}],
    	reFresh:true,
    	changIcon:false,//点击的时候改变Icon
    	opacity:0.5,
      location: '桂林',//地点
      keyword: '',//关键词
      center: {lng: 115.89, lat: 28.68},
      initLocation:false,
      circlePath: {//圆形区域
        center: {
          lng: 113.3831,
          lat: 23.13013
        },
        radius: 200
      },
    }
  },
  watch:{
  	center(newVal,oldVal){
  		this.reFresh=false
  		this.circlePath.center=this.center
  		console.log(this.circlePath,newVal)
  		this.$nextTick(()=>{
            this.reFresh = true
        })
  	}
  },
  mounted(){
	//this.handlerBaiduMapReady()
  },
  methods:{
  	setNewIcon(type){//点击地图时获取的坐标
  		console.log(type)
  		this.center={lng:type.point.lng, lat:type.point.lat}
  	},
      handlerBaiduMapReady({BMap, map}) {
        // let _this = this;   // 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
        // var geolocation = new BMap.Geolocation();
        new BMap.Geolocation().getCurrentPosition( (result) => {
        	console.log(result)
        	this.location=result.address.city//获取城市地址
            this.center = {lng: result.longitude, lat: result.latitude};     // 设置center属性值
			this.circlePath.center = this.center;
			console.log(this.circlePath)
             this.autoLocationPoint = {lng: result.longitude, lat: result.latitude};      // 自定义覆盖物
             this.initLocation = true;
            console.log('center:', this.center)    // 如果这里直接使用this是不行的
//          this.$store.dispatch("updateLocation", this.center);
        }, {enableHighAccuracy: true})
      },
      getlocationPoint(type){//点击获取当前坐标
      	console.log(type.point)
      	this.center={lng:type.point.lng, lat:type.point.lat}
      },
    getNewPoint(type){//拖拽获取的坐标
        this.center={lng:type.point.lng, lat:type.point.lat}
//      this.circlePath.center={lng:type.point.lng, lat:type.point.lat}
    },
    getResult(arr){//获取每个搜索结果
    	console.log(arr)
    },
    updateCirclePath (e) {//改变点的位置
//    this.circlePath.center = e.target.getCenter()
//    this.circlePath.radius = e.target.getRadius()
    },
  }
}
</script>

<style>
</style>