<template>
	<div>
		<baidu-map :center="IPINFOR.view" :zoom="13">
			<!-- @ready="handlerBaiduMapReady" @click="setNewIcon"-->
			<bm-view class="map"></bm-view>
			<!--比例尺-->
			<bm-scale anchor="BMAP_ANCHOR_TOP_LEFT"></bm-scale>
			<!--位置标记-->
			<div v-for="(item,index) in IPINFOR.point">
				<bm-marker :position="item.center"
					:icon="{url:require('../../../../../static/assets/location.png'),size:{width:25,height:25}}" 
					class="mapMark" >
					<bm-label :content="item.label" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: 10, height: 25}"/>
				</bm-marker>
			</div>
		</baidu-map>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props:["IPINFOR"],
		methods: {
		}
	}
</script>

<style>

</style>