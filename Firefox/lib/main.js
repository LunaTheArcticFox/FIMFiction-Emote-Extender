var ss = require("sdk/simple-storage");

if (!ss.storage.modules) {
	ss.storage.modules = [
		{
			"name" : "Pony Module 1",
			"author" : "KrazyTheFox",
			"enabled" : true,
			"emoteTables" : [
				{
					"shortName" : "PONY",
					"longName" : "Obscure Pony",
					"numberOfEmotes" : 3,
					"emotes" : [
						[ "http://i.imgur.com/3UFhl3F1.png", "obspony1" ],
						[ "http://i.imgur.com/3UFhl3F2.png", "obspony2" ],
						[ "http://i.imgur.com/3UFhl3F3.png", "obspony3" ]
					]
				}
			]
		}/*,
		{
			"name" : "Appletastic",
			"author" : "KrazyTheFox",
			"enabled" : true,
			"emoteTables" : [
				{
					"shortName" : "AJ",
					"longName" : "Applejack",
					"numberOfEmotes" : 1,
					"emotes" : [
						[ "http://i.imgur.com/NBEDt.png", "ajlie" ]
					]
				},
				{
					"shortName" : "AB",
					"longName" : "Apple Bloom",
					"numberOfEmotes" : 1,
					"emotes" : [
						[ "http://i.imgur.com/ab30Fs.png", "abwat" ]
					]
				}
			]
		},
		{
			"name" : "Rainbowgasmic",
			"author" : "KrazyTheFox",
			"enabled" : "false",
			"emoteTables" : [
				{
					"shortName" : "RD",
					"longName" : "Rainbow Dash",
					"numberOfEmotes" : 1,
					"emotes" : [
						[ "http://i.imgur.com/NRtTF.png", "rdash" ]
					]
				}
			]
		}*/
	];
}

var uiButton = require('sdk/ui/button/action').ActionButton({
	id: "mozilla-link",
	label: "FIMFiction Emote Extender Settings",
	icon: {
		"16": "./images/icon-16.png",
		"32": "./images/icon-32.png",
		"64": "./images/icon-64.png"
	},
	onClick: uiButtonClicked
});

function uiButtonClicked() {

	var mainPanel = require("sdk/panel").Panel({
		width: 350,
		height: 500,
		position: uiButton,
		contentURL: "./mainMenu.html",
		contentScriptFile: "./js/mainMenu.js"
	});

	mainPanel.on("show", function() {
		mainPanel.port.emit("show", ss.storage.modules);
	});

	mainPanel.port.on("addModule", function() {
		mainPanel.hide();
		addModule();
	});

	mainPanel.port.on("save", function(modules) {
		ss.storage.modules = modules;
	});


	mainPanel.show();

}

function addModule() {

	var modulePanel = require("sdk/panel").Panel({
		width: 500,
		height: 110,
		contentURL: "./addModule.html",
		contentScriptFile: "./js/addModule.js"
	});

	modulePanel.on("show", function() {
		modulePanel.port.emit("show");
	});

	modulePanel.port.on("addURL", function(url) {
		modulePanel.hide();
		addURL(url);
	});
	
	modulePanel.show();
	
}

function addURL(urlTemp) {

	try {

		var Request = require("sdk/request").Request;
		var moduleRequest = Request({
			url: urlTemp,
			onComplete: function (response) {
				if (response.status == 200) {
					var module = JSON.parse(response.text);
					ss.storage.modules.push(module);
					var modulePanel = require("sdk/panel").Panel({
						width: 250,
						height: 150,
						contentURL: "./moduleAddSuccess.html"
					});
					modulePanel.show();
				} else {
					var modulePanel = require("sdk/panel").Panel({
						width: 250,
						height: 150,
						contentURL: "./moduleAddFailed.html"
					});
					modulePanel.show();
				}
			}
		});
		
		moduleRequest.get();

	} catch (e) {
		var modulePanel = require("sdk/panel").Panel({
			width: 250,
			height: 150,
			contentURL: "./moduleAddFailed.html"
		});
		modulePanel.show();
	}

}