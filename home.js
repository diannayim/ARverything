// JavaScript Document

$(document).ready(function() {
	"use strict";
	
	(function(global) {
		if (global.localStorage.getItem("logged-in")) {
			alert("asdf");
		}
	}(window));
});