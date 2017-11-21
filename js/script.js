$(function () {
	$(".preload").fadeOut(400, function () {
		$("header, section, footer").fadeIn(200);
	});
});