// JavaScript Document

$(document).ready(function() {
	"use strict";
	
	var running = false;

	$(".settings-link").click(function() {
		if (running === true) {
			return;
		}
		
		running = true;
		
		var prevElement = "";
		$(".settings-link").each(function(index, element) {
			if ($(element).hasClass("active")) {
				prevElement = $("#" + $(element).attr("id").replace("Tab", ""));
				$(element).removeClass("active");	
			}
		});
		
		$(this).addClass("active");
		var currElement = $("#" + $(this).attr("id").replace("Tab", ""));
		
		if (prevElement.attr("id") === currElement.attr("id")) {
			running = false;
			return;
		}
		
		$(prevElement).fadeOut(500, function() {
			$(currElement).fadeIn(500, function() { running = false; });
		});
	});
	
	$(".w-100").click(function() {
		$(this).toggleClass("active");
	});
});