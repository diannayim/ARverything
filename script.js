// JavaScript Document

$(document).ready(function() {
	"use strict";
	
	var users = [
		{"username": "dianna.yim", "password": "cheese123"},
		{"username": "racheleden", "password": "frog123"}
	];
	
	(function (global) {
		$("#login-form").submit(function() {
			alert("asdf");
			var userVal = document.getElementById("username").value;
			var passVal = document.getElementById("password").value;

			for (var i = 0; i < users.length; i++) {
				if (users[i].username === userVal && users[i].password === passVal) {
					global.localStorage.setItem("logged-in", true);
				}	
				else {
					global.localStorage.setItem("logged-in", false);
				}
			}
		});
	}(this));
});
