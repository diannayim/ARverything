// JavaScript Document

$(document).ready(function() {
	"use strict";
	
	$("#whoAreWe").scroll(function() {
		var pos = $('#whoAreWe').scrollTop();
		console.log(pos);
		if (pos === 0) {
			alert('top of the div');
		}
	});
});