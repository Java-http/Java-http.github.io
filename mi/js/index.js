$(function () {
	var oCarContent=$("#car_content");
	var oHeadCarText=$(".head_car_text");
	oHeadCarText.on({
		'mouseover':function () {
			oCarContent.stop().slideDown('fast');
		},
		'mouseout':function () {
			oCarContent.stop().slideUp('fast');
		},
	});
});