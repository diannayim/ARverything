// JavaScript Document

$(document).ready(function() {
	"use strict";
	
	var users = [
		{"username": "dianna.yim", "password": "cheese123"},
		{"username": "racheleden", "password": "frog123"}
	];
	
	$("#login-form").submit(function() {
		var userVal = document.getElementById("username").value;
		var passVal = document.getElementById("password").value;

		for (var i = 0; i < users.length; i++) {
			if (users[i].username === userVal && users[i].password === passVal) {
				localStorage.setItem("loggedIn", "true");
				window.location = "index.html";
			}	
			else {
				localStorage.setItem("loggedIn", "false");
			}
		}
	});
});
