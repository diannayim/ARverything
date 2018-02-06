// JavaScript Document

$(document).ready(function () {
	"use strict";
	
	var food = [{
		name: "chickenbucket.png",
		content: "Fried Chicken",
		quality: "7/10",
		healthiness: "3/10",
		calories: "300",
		price: "$42.99",
		date: "4:39pm, 01/19/2035"
	}, {
		name: "chips.png",
		content: "Doritos - Sweet Chili Heat",
		quality: "5/10",
		healthiness: "4/10",
		calories: "150",
		price: "$2.99",
		date: "12:23pm, 01/06/2035"
	}, {
		name: "coffee.png",
		content: "Good Earth Iced Coffee",
		quality: "6/10",
		healthiness: "9/10",
		calories: "100",
		price: "$3.50",
		date: "10:11am, 01/12/2035"
	}, {
		name: "energydrink.png",
		content: "Energy Drink",
		quality: "0/10",
		healthiness: "0/10",
		calories: "90",
		price: "$1.99",
		date: "12:39pm, 02/12/2034",
		comments: "Not Drinkable Anymore!"
	}, {
		name: "fries.png",
		content: "KFC Fries",
		quality: "4/10",
		healthiness: "3/10",
		calories: "150",
		price: "$5.99",
		date: "4:39pm, 01/19/2035"
	}, {
		name: "gravey.png",
		content: "KFC Gravy",
		quality: "6/10",
		healthiness: "4/10",
		calories: "150",
		price: "$1.99",
		date: "4:39pm, 01/19/2035"
	}, {
		name: "instantnoodles.png",
		content: "Sapporo Ichiban Instant Noodles",
		quality: "5/10",
		healthiness: "5/10",
		calories: "150",
		price: "$0.99",
		date: "2:15pm, 01/09/2035"
	}, {
		name: "instantrice.png",
		content: "Instant Rice",
		quality: "5/10",
		healthiness: "6/10",
		calories: "100",
		price: "$1.99",
		date: "2:15pm, 01/09/2035"
	}, {
		name: "potatoes.png",
		content: "Tim Horton's Potato Wedges",
		quality: "8/10",
		healthiness: "7/10",
		calories: "125",
		price: "$1.99",
		date: "1:35pm01/15/2035",
		comments: "Allergy alert! Peanut oil detected."
	}, {
		name: "spaghetti.jpg",
		content: "Boston Pizza Spaghetti",
		quality: "10/10",
		healthiness: "8/10",
		calories: "250",
		price: "$18.99",
		date: "7:36pm, 01/26/2035"
	}, {
		name: "tea.png",
		content: "Tea",
		quality: "10/10",
		healthiness: "10/10",
		calories: "5",
		price: "$0",
		date: "6:31pm, 01/26/2035"
	}];
	
	var people = [ 
		{ name: "Allen.png", content: "Allen We", age: "28", birthday: "01/26/2017", city: "Calgary, AB, Canada", profession: "Computer Scientist", phone: "xxx-xxx-xxxx", caliber: "3/10" },
		{ name: "Andrew.png", content: "Andrew Dong", age: "28", birthday: "08/21/2017", city: "Calgary, AB, Canada", profession: "Computer Scientist", phone: "xxx-xxx-xxxx", caliber: "5/10" }, 
		{ name: "derek.jpg", content: "Derek Alenius", age: "28", birthday: "02/05/2017", city: "Calgary, AB, Canada", profession: "Economist", phone: "xxx-xxx-xxxx", caliber: "10/10" }, 
		{ name: "John.png", content: "John Cajayon", age: "28", birthday: "01/01/2017", city: "Calgary, AB, Canada", profession: "Economist", phone: "xxx-xxx-xxxx", caliber: "8/10" }, 		
		{ name: "rachel.jpg", content: "Rachel Lee", age: "28", birthday: "12/28/2017", city: "Calgary, AB, Canada", profession: "Electrical Engineer", phone: "xxx-xxx-xxxx", caliber: "10/10" },
		{ name: "Shelly.png", content: "Shelly Sicat", age: "28", birthday: "11/25/2017", city: "Calgary, AB, Canada", profession: "Computer Scientist", phone: "xxx-xxx-xxxx", caliber: "6/10" }, 	
	];
	
	var running = false;

	$(".settings-link").click(function () {
		if (running === true) {
			return;
		}

		running = true;

		var prevElement = "";
		$(".settings-link").each(function (index, element) {
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

		$(prevElement).fadeOut(500, function () {
			$(currElement).fadeIn(500, function () {
				running = false;
			});
		});
	});

	function PopulateFood(folderName, array) {
		for (var i = 0; i < array.length; i++) {
			var card = document.createElement("div");
			card.className = "card border-dark mb-3";

			var cardHeader = document.createElement("div");
			cardHeader.className = "card-header";

			var h6 = document.createElement("h6");
			h6.className = "card-title";
			h6.textContent = array[i].content;
			
			var cardBody = document.createElement("div");
			cardBody.className = "card-body row align-items-center";
			
			var img = document.createElement("img");
			img.className = "card-img-top";
			img.src = "images/" + folderName + "/" + array[i].name;

			cardHeader.appendChild(h6);
			cardBody.appendChild(img);
			
			var line = document.createElement("hr");
			line.className = "col-7 offset-md-2";
			line.style.backgroundColor = "#C8C8C8";
			
			cardBody.append(line);
			
			for (var item in array[i]) {
				if (item === "name" || item === "date") {
					continue;
				}
				
				var title = document.createElement("p");
				title.className = "col-4 text-right capitalize";
				title.textContent = item + ":";
				title.style.fontWeight = "bold";
				
				var content = document.createElement("p");
				content.className = "col-8 capitalize";
				content.textContent = array[i][item];
				
				cardBody.appendChild(title);
				cardBody.appendChild(content);
			}
			
			card.appendChild(cardHeader);
			card.appendChild(cardBody);
			
			if (array[i].hasOwnProperty("date")) {
				var cardFooter = document.createElement("div");
				cardFooter.className = "card-footer";

				var small = document.createElement("small");
				small.className = "text-muted";
				small.textContent = "Last seen on " + array[i].date;

				cardFooter.appendChild(small);	
				card.appendChild(cardFooter);
			}
			
			document.getElementById(folderName).appendChild(card);
		}
	}
	
	PopulateFood("food", food);
	PopulateFood("people", people);
});
