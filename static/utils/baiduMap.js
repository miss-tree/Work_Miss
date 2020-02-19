/*
 * 百度地图方法的封装
 * id div的id
 * areaValue 登记地址 input框
 * signValue 签到地址input框
 * BADZ	登记时输入的药店地址
 * QDDZ 签到时的药店地址
 */
export  class map{
	constructor(id,areaValue,signValue,BADZ,QDDZ){
			this.id=id;
			this.areaValue=areaValue;
			this.signValue=signValue;
			this.BADZ=BADZ;
			this.QDDZ=QDDZ;
		var map = new BMap.Map(this.id)
//		//根据ip定位
//		function myFun(result) {
//			var cityName = result.name;
//			map.setCenter(cityName);
//		}
//		//当地城市
//		var myCity = new BMap.LocalCity();
//		myCity.get(myFun);
		var point=new BMap.Point(113.721713, 34.774855);
		var top_left_control = new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_TOP_LEFT
		}); // 左上角，添加比例尺
		var top_left_navigation = new BMap.NavigationControl({
			anchor: BMAP_ANCHOR_TOP_LEFT
		}); //左上角，添加默认缩放平移控件
		/*缩放控件type有四种类型:
		BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；
		BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；
		BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
		//添加控件和比例尺
		function add_control() {
			map.addControl(top_left_control);
			map.addControl(top_left_navigation);
		}
		add_control();
		map.addControl(new BMap.GeolocationControl({
			anchor: BMAP_ANCHOR_BOTTOM_RIGHT
		}));//移动端定位按钮
		map.centerAndZoom("广州", 18);
		map.enableScrollWheelZoom(true);//实现缩放
		//map.enableDragging();//实现拖拽
	}
	basic(){//基本方法
	}
	getPosition(){//点击定位
		//var map = new BMap.Map(this.id)
		 var geolocation = new BMap.Geolocation();
	    geolocation.getCurrentPosition(function(r){
	    	console.log(r.point)
	        if(this.getStatus() == BMAP_STATUS_SUCCESS){
	            var mk = new BMap.Marker(r.point);
	            map.addOverlay(mk);//标出所在地
	            map.panTo(r.point);//地图中心移动到位置
	            //alert('您的位置：'+r.point.lng+','+r.point.lat);
	            var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
	            var gc = new BMap.Geocoder();
	            gc.getLocation(point, function(rs){
	               var addComp = rs.addressComponents; console.log(rs.address);//地址信息
	               alert(rs.address);//弹出所在地址
	
	            });
	        }else {
	            alert('failed'+this.getStatus());
	        }        
	    },{enableHighAccuracy: true})
	}
	getLocation(){//进入页面获取地址
		var map = new BMap.Map(this.id)
		//根据ip定位
		function myFun(result) {
			var cityName = result.name;
			map.setCenter(cityName);
		}
		//当地城市
		var myCity = new BMap.LocalCity();
		myCity.get(myFun);
	}
	getClickPoint(){//点击获取坐标
		var x = "";
		var y = "";
		map.addEventListener("touchend", showInfo);
		function showInfo(e) {
			x = e.point.lng; //获取鼠标当前点击的经纬度
			y = e.point.lat;
			if(x != "" && y != "") {
				document.getElementById("hidpoint").value = x + ',' + y;
				map.clearOverlays(); //清除地图上存在的标注
				var point = new BMap.Point(x, y);
				map.centerAndZoom(point);
				marker = new BMap.Marker(point); // 创建新的标注
				map.addOverlay(marker); //将标注添加到地图上
			} else {
				map.centerAndZoom("北京", 12);
			}
			var coordinate_x = document.querySelector('#coordinate_x')
			coordinate_x.value = x;
			var coordinate_y = document.querySelector('#coordinate_y')
			coordinate_y.value = y;
		}
	}
	search(){
		var map = new BMap.Map(this.id)
		var lbs_point = '';
		var address = '';
		var geoc = new BMap.Geocoder();
		map.addEventListener("touchend", function(e) {
			var pt = e.point;
			geoc.getLocation(pt, function(rs) {
				if(rs.surroundingPois.length > 0) {
					lbs_point = rs.surroundingPois[0].point.lng + "," + rs.surroundingPois[0].point.lat;
					address = rs.address + rs.surroundingPois[0].title;
				} else {
					lbs_point = rs.point.lng + "," + rs.point.lat;
					address = rs.address;
				}
				document.getElementById("hidpoint").value = lbs_point;
				document.getElementById("txtAddress").value = address;
			});
		});
		//点击事件获取附近地名
		function G(id) {
			return document.getElementById(id);
		}
		var ac = new BMap.Autocomplete( //建立一个自动完成的对象
			{
				"input": "txtAddress",
				"location": map
			});
		ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
			var str = "";
			var _value = e.fromitem.value;
			var value = "";
			if(e.fromitem.index > -1) {
				value = _value.province + _value.city + _value.district + _value.street + _value.business;
			}
			str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
			value = "";
			if(e.toitem.index > -1) {
				_value = e.toitem.value;
				value = _value.province + _value.city + _value.district + _value.street + _value.business;
			}
			str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
			G("searchResultPanel").innerHTML = str;
		});
		var myValue;
		ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
			var _value = e.item.value;
			myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
			G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
			setPlace();
			var localVal = (G("searchResultPanel").innerText).split('=')
			var lastAddress = document.querySelector('#lastAddress')
			lastAddress.value = localVal[2]
		});
		
		function setPlace() {
			map.clearOverlays(); //清除地图上所有覆盖物
			function myFun() {
				var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
				document.getElementById("hidpoint").value = pp.lng + "," + pp.lat;
				map.centerAndZoom(pp, 25);
				map.addOverlay(new BMap.Marker(pp)); //添加标注
			}
			var local = new BMap.LocalSearch(map, { //智能搜索
				onSearchComplete: myFun
			});
			local.search(myValue);
		}
	}
}



$(function() {
//===================百度地图多个点===================百度地图多个点===================百度地图多个点
	var markMapArr = function(options) {
		var defaults = {
			id: "",
			mapArr: [],
			baseurl: ""
		};
		var options = $.extend(defaults, options)
		var map = new BMap.Map(options.id, {}); // 创建Map实例
		var point = new BMap.Point(113.382029, 23.312903);
		map.centerAndZoom(point, 11);
		var marker = new BMap.Marker(point);
		var mapPoints = options.mapArr;
		var i = 0;
		map.addOverlay(marker);
		map.enableScrollWheelZoom(true);
		// 函数 创建多个标注
		function markerFun(points, label, infoWindows) {
			var markers = new BMap.Marker(points);
			map.addOverlay(markers);
			markers.setLabel(label);
			markers.addEventListener("click", function(event) {
				console.log("0001");
				map.openInfoWindow(infoWindows, points); //参数：窗口、点  根据点击的点出现对应的窗口
			});
		}
		for(; i < mapPoints.length; i++) {
			var points = new BMap.Point(mapPoints[i].y, mapPoints[i].x); //创建坐标点
			var opts = {
				width: 250,
				height: 100,
				title: mapPoints[i].title
			};
			//备注
			var label = new BMap.Label(mapPoints[i].con, {
				offset: new BMap.Size(20, 5)
			});
			var infoWindows = new BMap.InfoWindow(mapPoints[i].branch, opts);
			markerFun(points, label, infoWindows);
		}
		var top_left_control = new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_TOP_LEFT
		}); // 左上角，添加比例尺
		var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
		/*缩放控件type有四种类型:
			BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
		//添加控件和比例尺
		function add_control() {
			map.addControl(top_left_control);
			map.addControl(top_left_navigation);
		}
		add_control();
	}
	window.markMapArr = markMapArr
//===================百度地图单个点击加搜索===================百度地图单个个点加搜索===================百度地图单个个点加搜索	
	var mapSearch=function(options){
		var defaults = {
			id: "",
			mapArr: [],
			baseurl: ""
		};
		var options = $.extend(defaults, options)
		// 百度地图API功能
		var map = new BMap.Map(options.id);
		var point = new BMap.Point(116.331398, 39.897445);
		map.centerAndZoom(point, 28);
		
		map.addTileLayer(new BMap.PanoramaCoverageLayer());
		var stCtrl = new BMap.PanoramaControl(); //构造全景控件
		stCtrl.setOffset(new BMap.Size(20, 20));
		map.addControl(stCtrl);//添加全景控件
		
		map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
		map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
		//根据ip定位
		function myFun(result) {
			var cityName = result.name;
			map.setCenter(cityName);
		}
		//当地城市
		var myCity = new BMap.LocalCity();
		myCity.get(myFun);
		
		//添加控件
		var top_left_control = new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_TOP_LEFT
		}); // 左上角，添加比例尺
		var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
		function add_control() {
			map.addControl(top_left_control);
			map.addControl(top_left_navigation);
		}
		add_control();
		
		//点击显示/获取地名、坐标
		var lbs_point = '';
		var address = '';
		var geoc = new BMap.Geocoder();
		map.addEventListener("click", function(e) {
			var pt = e.point;
			geoc.getLocation(pt, function(rs) {
		
				if(rs.surroundingPois.length > 0) {
					lbs_point = rs.surroundingPois[0].point.lng + "," + rs.surroundingPois[0].point.lat;
					address = rs.address + rs.surroundingPois[0].title;
				} else {
					lbs_point = rs.point.lng + "," + rs.point.lat;
					address = rs.address;
				}
				document.getElementById("hidpoint").value = lbs_point;
				document.getElementById("txtAddress").value = address;
			});
		});
		//========================
		//点击事件获取附近地名
		function G(id) {
			return document.getElementById(id);
		}
		var ac = new BMap.Autocomplete( //建立一个自动完成的对象
			{
				"input": "txtAddress",
				"location": map
			});
		ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
			var str = "";
			var _value = e.fromitem.value;
			var value = "";
			if(e.fromitem.index > -1) {
				value = _value.province + _value.city + _value.district + _value.street + _value.business;
			}
			str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
			value = "";
			if(e.toitem.index > -1) {
				_value = e.toitem.value;
				value = _value.province + _value.city + _value.district + _value.street + _value.business;
			}
			str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
			G("searchResultPanel").innerHTML = str;
		});
		var myValue;
		ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
			var _value = e.item.value;
			myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
			G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
			setPlace();
			var localVal = (G("searchResultPanel").innerText).split('=')
			var lastAddress = document.querySelector('#lastAddress')
			lastAddress.value = localVal[2]
		});
		
		function setPlace() {
			map.clearOverlays(); //清除地图上所有覆盖物
			function myFun() {
				var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
				document.getElementById("hidpoint").value = pp.lng + "," + pp.lat;
				map.centerAndZoom(pp, 25);
				map.addOverlay(new BMap.Marker(pp)); //添加标注
			}
			var local = new BMap.LocalSearch(map, { //智能搜索
				onSearchComplete: myFun
			});
			local.search(myValue);
		}
		//=======================
		//点击获取坐标
		var x = "";
		var y = "";
		map.addEventListener("click", showInfo);
		
		function showInfo(e) {
			x = e.point.lng; //获取鼠标当前点击的经纬度
			y = e.point.lat;
			if(x != "" && y != "") {
				document.getElementById("hidpoint").value = x + ',' + y;
				map.clearOverlays(); //清除地图上存在的标注
				var point = new BMap.Point(x, y);
				map.centerAndZoom(point);
				marker = new BMap.Marker(point); // 创建新的标注
				map.addOverlay(marker); //将标注添加到地图上
			} else {
				map.centerAndZoom("北京", 12);
			}
			var coordinate_x = document.querySelector('#coordinate_x')
			coordinate_x.value = x;
			var coordinate_y = document.querySelector('#coordinate_y')
			coordinate_y.value = y;
		}
	}
	window.mapSearch = mapSearch
	
//================基本方法的调用===========================基本方法的调用=============基本方法的调用========
	class mapBasic{
		constructor(id,areaValue,signValue,BADZ,QDDZ){
			this.id=id;
			this.areaValue=areaValue;
			this.signValue=signValue;
			this.BADZ=BADZ;
			this.QDDZ=QDDZ;
		}
		basic(){
			var map = new BMap.Map(this.id)
			//当前城市
			function myFun(result) {
				var cityName = result.name;
				map.setCenter(cityName);
			}
			var top_left_control = new BMap.ScaleControl({
				anchor: BMAP_ANCHOR_TOP_LEFT
			}); // 左上角，添加比例尺
			var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
			/*缩放控件type有四种类型:
				BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
			//添加控件和比例尺
			function add_control() {
				map.addControl(top_left_control);
				map.addControl(top_left_navigation);
			}
			add_control();
			map.centerAndZoom("广州", 18);
			map.enableScrollWheelZoom(true);
		}
		AddPointLine(){
			var point = null;
			var points = document.getElementById(this.areaValue).value;	
			var map = new BMap.Map(this.id, {})
			if(points == "0,0") {
				point = new BMap.Point(113.383394, 23.129441);
			} else {
				var Arr = points.split(',');
			var	point = new BMap.Point(parseFloat(Arr[0]), parseFloat(Arr[1]));
				var markers = new BMap.Marker(new BMap.Point(parseFloat(Arr[0]), parseFloat(Arr[1]))); // 创建点
				map.addOverlay(markers); //增加点
				var lab = new BMap.Label("备案地址:" + this.BADZ, {
					offset: new BMap.Size(20, -10)
				});
				lab.setStyle({
					//border: "red",
					background: "#fff",
					color: "black",
					fontSize: "12px",
					height: "20px",
					lineHeight: "20px",
					fontFamily: "微软雅黑"
				})
				var Icon = new BMap.Icon("../../assets/img/map-1.png", new BMap.Size(20, 40));
		
				markers.setIcon(Icon);
				markers.setLabel(lab);
				//创建一个圆，半径为300米
				var circle = new BMap.Circle(point, 300, {
					fillColor: "blue",
					strokeWeight: 1,
					fillOpacity: 0.3,
					strokeOpacity: 0.3,
					enableEditing: true
				});
				map.addOverlay(circle);
				//添加两点的线
				var ps = document.getElementById(this.signValue).value;
				if(ps != "0,0") {
				var	Arr = ps.split(',');
					var mark = new BMap.Marker(new BMap.Point(parseFloat(Arr[0]), parseFloat(Arr[1]))); // 创建点
					map.addOverlay(mark); //增加点
					var label = new BMap.Label("签到地址:" + this.QDDZ, {
						offset: new BMap.Size(20, -10)
					});
					var Icon = new BMap.Icon("../../assets/img/map-2.png", new BMap.Size(20, 40));
					mark.setIcon(Icon);
					mark.setLabel(label);
					var endpoint = new BMap.Point(parseFloat(Arr[0]), parseFloat(Arr[1]));
					//alert('距离是：' + (map.getDistance(point, endpoint)).toFixed(2) + ' 米。');  //获取两点距离,保留小数点后两位
					var polyline = new BMap.Polyline([point, endpoint], {
						strokeColor: "red",
						strokeWeight: 3,
						strokeOpacity: 0.5
					}); //定义折线
					map.addOverlay(polyline); //添加折线到地图上
				}
			}
			map.centerAndZoom(point, 18);
			map.enableScrollWheelZoom(true);
		}
		AddToPoint(){
			// 百度地图API功能
			var map = new BMap.Map(this.id);
			var point = null;
			var points = document.getElementById(this.areaValue).value;
			if(points == "0,0") {
				point = new BMap.Point(113.383394, 23.129441);
			} else {
				var Arr = points.split(',');
				point = new BMap.Point(parseFloat(Arr[0]), parseFloat(Arr[1]));
				var markers = new BMap.Marker(new BMap.Point(parseFloat(Arr[0]), parseFloat(Arr[1]))); // 创建点
				map.addOverlay(markers); //增加点
				var lab = new BMap.Label("备案地址:" + this.BADZ, {
					offset: new BMap.Size(20, -10)
				});
				lab.setStyle({
					background: "#fff",
					color: "black",
					fontSize: "12px",
					height: "20px",
					lineHeight: "20px",
					fontFamily: "微软雅黑"
				})
				var Icon = new BMap.Icon("../../assets/img/map-1.png", new BMap.Size(20, 40));
	
				markers.setIcon(Icon);
				markers.setLabel(lab);
				//创建一个圆，半径为300米
				var circle = new BMap.Circle(point, 300, {
					fillColor: "blue",
					strokeWeight: 1,
					fillOpacity: 0.3,
					strokeOpacity: 0.3,
					enableEditing: true
				});
				map.addOverlay(circle);
				var ps = document.getElementById(this.signValue).innerText;
				if(ps != "0,0") {
				var Arr = ps.split(',');
					var mark = new BMap.Marker(new BMap.Point(parseFloat(Arr[0]), parseFloat(Arr[1]))); // 创建点
					map.addOverlay(mark); //增加点
					var label = new BMap.Label("当前地址", {
						offset: new BMap.Size(20, -10)
					});
					var Icon = new BMap.Icon("../../assets/img/map-2.png", new BMap.Size(20, 40));
					mark.setIcon(Icon);
					mark.setLabel(label);
					var endpoint = new BMap.Point(parseFloat(Arr[0]), parseFloat(Arr[1]));
					var polyline = new BMap.Polyline([point, endpoint], {
						strokeColor: "red",
						strokeWeight: 3,
						strokeOpacity: 0.8
					}); //定义折线
					map.addOverlay(polyline); //添加折线到地图上
				}
			}
			map.centerAndZoom(point, 16);
			map.enableScrollWheelZoom(true);
		}
	}
	window.mapBasic = mapBasic
}())