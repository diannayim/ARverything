// JavaScript Document

$(document).ready(function() {
	"use strict";
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$("#navbar").removeClass("opaque");
		}
		else {
			$("#navbar").addClass("opaque");
		}
	});
	
	$("#navbar").mouseenter(function () {
		$("#navbar").addClass("opaque");
	})
	.mouseleave(function () {
		if ($(window).scrollTop() > 200) {
			$("#navbar").removeClass("opaque");
		}
	});
});