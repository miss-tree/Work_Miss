import Vue from 'vue'
import router from '@/router'
import {cityData3} from './city.data-3.js'


/*
 * 九宫格轮播图
 */
export function swiper() {
	mui.init();
	mui.ready(function() {
		var slider = document.getElementById('Gallery');
		var group = slider.querySelector('.mui-slider-group');
		var items = mui('.mui-slider-item', group);
		//克隆第一个节点
		var first = items[0].cloneNode(true);
		first.classList.add('mui-slider-item-duplicate');
		//克隆最后一个节点
		var last = items[items.length - 1].cloneNode(true);
		last.classList.add('mui-slider-item-duplicate');
		//处理是否循环逻辑，若支持循环，需支持两点：
		//1、在.mui-slider-group节点上增加.mui-slider-loop类
		//2、重复增加2个循环节点，图片顺序变为：N、1、2...N、1
		var sliderApi = mui(slider).slider();

		function toggleLoop(loop) {
			if(loop) {
				group.classList.add('mui-slider-loop');
				group.insertBefore(last, group.firstChild);
				group.appendChild(first);
				sliderApi.refresh();
				sliderApi.gotoItem(0);
			} else {
				group.classList.remove('mui-slider-loop');
				group.removeChild(first);
				group.removeChild(last);
				sliderApi.refresh();
				sliderApi.gotoItem(0);
			}
		}
	});
}

/*
 * 正常普通轮播图
 */
export function carousel() {
	mui.init({
		swipeBack: true //启用右滑关闭功能
	});
	//获得slider插件对象
	//需要在动态生成完整DOM (包含mui-slider下所有DOM结构) 后，手动调用图片轮播的初始化方法
	var gallery = mui('.mui-slider');
	gallery.slider({
		interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
	});
}


/**
 * 进度条
* 通过随机数模拟业务进度，真实业务中需根据实际进度修改
* @param {Object} container
 * @param {Object} progress
 */
export function progress() {
function simulateLoading(container, progress) {
	if(typeof container === 'number') {
		progress = container;
		container = 'body';
	}
	setTimeout(function() {
		progress += Math.random() * 20;
		mui(container).progressbar().setProgress(progress);
		if(progress < 100) {
			simulateLoading(container, progress);
		} else {
			mui(container).progressbar().hide();
		}
	}, Math.random() * 200 + 200);
}
//页面顶部进度条
	var progressbar3 = mui('#demo3');
	progressbar3.on('tap', 'button', function() {
		mui('body').progressbar({
			progress: 0
		}).show();
		simulateLoading(0);
	});
}


/*
 * 时间选择器
 * 元素是input，因为下面是id.vaule
 * 自动获取，需要自己设置id来设置值
 */
export function selectTime() {
	(function($) {
		$.init();
		var btns = $('.btn');
		btns.each(function(i, btn) {
			btn.addEventListener('tap', function() {
				var self=this
				var optionsJson = self.getAttribute('data-options') || '{}';
				var options = JSON.parse(optionsJson);
				var timeVal=self.value
				var id = self.getAttribute('id');
				/*
				 * 首次显示时实例化组件
				 * 示例为了简洁，将 options 放在了按钮的 dom 上
				 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
				 */
				var picker = new $.DtPicker(options);
				picker.show(function(rs) {
					/*
					 * rs.value 拼合后的 value
					 * rs.text 拼合后的 text
					 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
					 * rs.m 月，用法同年
					 * rs.d 日，用法同年
					 * rs.h 时，用法同年
					 * rs.i 分（minutes 的第二个字母），用法同年
					 */
					document.getElementById(id).value = rs.text;
//					timeVal=rs.text;
					//console.log(timeVal)
//					btn.dispatchEvent(new Event('input'))
					document.getElementById(id).dispatchEvent(new Event('input'))
					/* 
					 * 返回 false 可以阻止选择框的关闭
					 * return false;
					 */
					/*
					 * 释放组件资源，释放后将将不能再操作组件
					 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
					 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
					 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
					 */
					picker.dispose();
					picker = null;
				});

			}, false);
		});
	})(mui);
}



/*
 * 点击按钮加载
 * 关键词类名 ".update"
 */
export function refresh() {
	mui.init({
		swipeBack: true //启用右滑关闭功能
	});
	mui(document.body).on('tap', '.update', function(e) {
		mui(this).button('loading');
		setTimeout(function() {
			mui(this).button('reset');
		}.bind(this), 2000);
	});
}


/*
 * 三级联动
 * 
 */
export function PopPicker(id){
	(function($, doc) {
		$.init();
		$.ready(function() {
			/**
			 * 获取对象属性的值
			 * 主要用于过滤三级联动中，可能出现的最低级的数据不存在的情况，实际开发中需要注意这一点；
			 * @param {Object} obj 对象
			 * @param {String} param 属性名
			 */
			var _getParam = function(obj, param) {
				return obj[param] || '';
			};
			//-----------------------------------------
			//					//级联示例
			var cityPicker3 = new $.PopPicker({
				layer: 3
			});
			cityPicker3.setData(cityData3);
			var showCityPickerButton = doc.getElementById(id);
			showCityPickerButton.addEventListener('tap', function(event) {
				cityPicker3.show(function(items) {
					showCityPickerButton.value = _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
					showCityPickerButton.dispatchEvent(new Event('input'))
					//返回 false 可以阻止选择框的关闭
					//return false;
				});
			}, false);
		});
	})(mui, document);
}

/*
 * 检索必填项目
 * !!!!!只支持input!!!!!!!!!!!
 * 通过自定义必填input[data=required]
 * 获取元素，通过元素获取name，设定标题id=name
 * 然后通过标题id获取标题内容
 */
export function mustFill() {
	var a = [];
	var mustArr = document.querySelectorAll('input[data=required]')
	mustArr.forEach((el, index) => {
		if(el.value == '') {
			a.push(el)
		}
	})
	if(a.length!=0){
		var nodeId = a[0].name
		var reqText = document.getElementById(nodeId).innerText
		var reqText = reqText.split("*").join("");
		//mui.toast('请输入' + reqText)
		/*
		 * 或者另外的弹窗方式
		 * 
		 */
		mui.alert('请输入' + reqText)
		//return false;
	}
	//console.log(isOk)
	return a
}


/*
 * 一级选择示例
 * 只支持input，需要到id
 * 选择的数据数组[{value:'你好'，txet:'真香'}，……],主要看下面的一行代码：
 * 			showUserPickerButton.value = items[0].text;
 * 如果是items[0].text，选择的就是对象里的txet
 */
export function selecTion(id,arr) {
	(function($, doc) {
		$.init();
		$.ready(function() {
			/**
			 * 获取对象属性的值
			 * 主要用于过滤三级联动中，可能出现的最低级的数据不存在的情况，实际开发中需要注意这一点；
			 * @param {Object} obj 对象
			 * @param {String} param 属性名
			 */
			var _getParam = function(obj, param) {
				return obj[param] || '';
			};
			//普通示例
			var userPicker = new $.PopPicker();
			userPicker.setData(arr);
			var showUserPickerButton = doc.getElementById(id);
			showUserPickerButton.addEventListener('tap', function(event) {
				userPicker.show(function(items) {
					//console.log(items)
					showUserPickerButton.value = items[0].text;
					showUserPickerButton.dispatchEvent(new Event('input'))
					//返回 false 可以阻止选择框的关闭
					//return false;
				});
			}, false);
		});
	})(mui, document);
}

/*
 * 上拉，下拉加载
 * 要求在.mui-table-view区域内刷新，否则报错
 * 
 */
export function pullRefresh() {
	mui.init({
		swipeBack:true,//启用右滑关闭功能
	});
	(function($) {
		//阻尼系数
		var deceleration = mui.os.ios ? 0.003 : 0.0009;
		$('.mui-scroll-wrapper').scroll({
			bounce: false,
			indicators: true, //是否显示滚动条
			deceleration: deceleration
		});
		$.ready(function() {
			//循环初始化所有下拉刷新，上拉加载。
			$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
				$(pullRefreshEl).pullToRefresh({
					/*从顶部往下滑*/
					down: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								var ul = self.element.querySelector('.mui-table-view');
								ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
								self.endPullDownToRefresh();
								console.log('下拉加载')
							}, 1000);
						}
					},
					/*从底部往上滑*/
					up: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								var ul = self.element.querySelector('.mui-table-view');
								ul.appendChild(createFragment(ul, index, 5));
								self.endPullUpToRefresh();
								console.log('上拉加载')
							}, 1000);
						}
					}
				});
			});
			var createFragment = function(ul, index, count, reverse) {
				var length = ul.querySelectorAll('li').length;
				var fragment = document.createDocumentFragment();
				var li;
				for(var i = 0; i < count; i++) {
					li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
					fragment.appendChild(li);
				}
				return fragment;
			};
		});
	})(mui);
}


/*
 *图片上传 
 * 在uploader下的server修改服务器上传地址
 */
export function upLoad(){
	 var $ = jQuery,
        $list = $('#fileList'),
        // 优化retina, 在retina下这个值是2
        ratio = window.devicePixelRatio || 1,
        // 缩略图大小
        thumbnailWidth = 100 * ratio,
        thumbnailHeight = 100 * ratio,
        // Web Uploader实例
        uploader;
    // 初始化Web Uploader
    uploader = WebUploader.create({
        // 自动上传。
        auto: true,
        // swf文件路径
        swf:'/js/Uploader.swf',
        // 文件接收服务端。
        server: 'http://webuploader.duapp.com/server/fileupload.php',
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#filePicker',
        // 只允许选择文件，可选。
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
        }
    });
    // 当有文件添加进来的时候
    uploader.on('fileQueued', function (file) {
        var $li = $(
                '<div id="' + file.id + '" class="file-item thumbnail">' +
                '<img>' +
                '<div class="info">' + file.name + '</div>' +
                '</div>'
            ),
            $img = $li.find('img');
        $list.append($li);
        // 创建缩略图
        uploader.makeThumb(file, function (error, src) {
            if (error) {
                $img.replaceWith('<span>不能预览</span>');
                return;
            }
            $img.attr('src', src);
        }, thumbnailWidth, thumbnailHeight);
    });

    // 文件上传过程中创建进度条实时显示。
    uploader.on('uploadProgress', function (file, percentage) {
        var $li = $('#' + file.id),
            $percent = $li.find('.progress span');
        // 避免重复创建
        if (!$percent.length) {
            $percent = $('<p class="progress"><span></span></p>')
                .appendTo($li)
                .find('span');
        }
        $percent.css('width', percentage * 100 + '%');
    });
    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
    uploader.on('uploadSuccess', function (file) {
        $('#' + file.id).addClass('upload-state-done');
    });
    // 文件上传失败，现实上传出错。
    uploader.on('uploadError', function (file) {
        var $li = $('#' + file.id),
            $error = $li.find('div.error');
        // 避免重复创建
        if (!$error.length) {
            $error = $('<div class="error"></div>').appendTo($li);
        }
        $error.text('上传失败');
    });
    // 完成上传完了，成功或者失败，先删除进度条。
    uploader.on('uploadComplete', function (file) {
        $('#' + file.id).find('.progress').remove();
    });
}


/*
 * 获取当时时间到天
 * sureTime 为data定义的数据
 * 
 */
export function getDate(){
	var d = new Date();
	d = `${d.getFullYear()}-${padNumber(d.getMonth()+1,2)}-${padNumber(d.getDate(),2)}`;
	return d
}


/*
 * 获取当时时间到秒
 * sureTime 为data定义的数据
 * 
 */
export function getTime(){
	var d = new Date();
	d = `${d.getFullYear()}-${padNumber(d.getMonth()+1,2)}-${padNumber(d.getDate(),2)} ${padNumber(d.getHours(),2)}:${padNumber(d.getMinutes(),2)}:${padNumber(d.getSeconds(),2)}`;
	return d
}

/*
 * 数字补全方法
 * arr：数字
 * num:补全位数
 */
export function padNumber(arr, num) {
	return arr.toString().padStart(num, '0')
}

/*
 *   计算时间的加减
 *   参数:interval,字符串表达式，表示要添加的时间间隔.
 *   参数:number,数值表达式，表示要添加的时间间隔的个数.
 *   参数:date,时间对象.
 *   返回:新的时间对象.
 *   var now = new Date();
 *   var newDate = DateAdd( "d", 5, now);  加五天
 *
 */
export function DateAdd(interval, number, date) {
    switch (interval) {
    case "y ": {
        date.setFullYear(date.getFullYear() + number);
        return date;
        break;
    }
    case "q ": {
        date.setMonth(date.getMonth() + number * 3);
        return date;
        break;
    }
    case "m ": {
        date.setMonth(date.getMonth() + number);
        return date;
        break;
    }
    case "w ": {
        date.setDate(date.getDate() + number * 7);
        return date;
        break;
    }
    case "d ": {
        date.setDate(date.getDate() + number);
        return date;
        break;
    }
    case "h ": {
        date.setHours(date.getHours() + number);
        return date;
        break;
    }
    case "m ": {
        date.setMinutes(date.getMinutes() + number);
        return date;
        break;
    }
    case "s ": {
        date.setSeconds(date.getSeconds() + number);
        return date;
        break;
    }
    default: {
        date.setDate(d.getDate() + number);
        return date;
        break;
    }
    }
}










