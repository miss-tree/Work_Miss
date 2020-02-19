var wordData = [
	"你好，我是Michael",
	"你是谁",
	"你最好啦",
	"你最珍贵",
	"你是我最好的朋友",
	"你画我猜",
	"你是笨蛋",
	"你懂得",
	"你为我着迷",
	"股份有限公司",
	"大参林dashenglin",
	"同仁堂",
	"益丰大药房",
	"你是我的眼"
];
$(document).ready(function() {
	$(document).keydown(function(e) {
		e = e || window.event;
		var keycode = e.which ? e.which : e.keyCode;
		if(keycode == 38) {
			if(jQuery.trim($("#append").html()) == "") {
				return;
			}
			movePrev();
		} else if(keycode == 40) {
			if(jQuery.trim($("#append").html()) == "") {
				return;
			}
			$("#kw").blur();
			if($(".item").hasClass("addbg")) {
				moveNext();
			} else {
				$(".item").removeClass('addbg').eq(0).addClass('addbg');
			}
		} else if(keycode == 13) {
			dojob();
		}
	});
	var movePrev = function() {
		$("#kw").blur();
		var index = $(".addbg").prevAll().length;
		if(index == 0) {
			$(".item").removeClass('addbg').eq($(".item").length - 1).addClass('addbg');
		} else {
			$(".item").removeClass('addbg').eq(index - 1).addClass('addbg');
		}
	}
	var moveNext = function() {
		var index = $(".addbg").prevAll().length;
		if(index == $(".item").length - 1) {
			$(".item").removeClass('addbg').eq(0).addClass('addbg');
		} else {
			$(".item").removeClass('addbg').eq(index + 1).addClass('addbg');
		}
	}
	/*当按下回车键*/
	var dojob = function() {
		$("#kw").blur();
		var value = $(".addbg").text();
		$("#kw").val(value);
		$("#kw")[0].dispatchEvent(new Event('input'));
		console.log($("#kw").val())
		$("#append").hide().html("");
	}
});

function getContent(obj) {
	var kw = jQuery.trim($(obj).val());
	if(kw == "") {
		$("#append").hide().html("");
		return false;
	}
	var html = "";
	for(var i = 0; i < wordData.length; i++) {
		if(wordData[i].indexOf(kw) >= 0) {
			html = html + "<p class='item' onmouseenter='getFocus(this)' onClick='getCon(this);'>" + wordData[i] + "</p>"
		}
	}
	if(html != "") {
		$("#append").show().html(html);
	} else {
		$("#append").hide().html("");
	}
}

function getFocus(obj) {
	$(".item").removeClass("addbg");
	$(obj).addClass("addbg");
}

function getCon(obj) {
	var value = $(obj).text();
	console.log(value)
	$("#kw").val(value);
	$("#kw")[0].dispatchEvent(new Event('input'));
	console.log($("#kw").val())
	$("#append").hide().html("");
}