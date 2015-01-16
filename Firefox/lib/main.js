var ss = require("sdk/simple-storage");

if (!ss.storage.scripts) {
	ss.storage.scripts = [
		{
			"name" : "Pony Script 1",
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
		mainPanel.port.emit("show", ss.storage.scripts);
	});

	mainPanel.port.on("addScript", function(scriptText) {
		mainPanel.hide();
		addScript(scriptText);
	});

	mainPanel.show();

}

function addScript(scriptText) {

	var scriptPanel = require("sdk/panel").Panel({
		width: 250,
		height: 75,
		contentURL: "./newScript.html",
		contentScriptFile: "./js/newScript.js"
	});

	scriptPanel.on("show", function() {
		scriptPanel.port.emit("show", scriptText);
	});

	scriptPanel.show();
	
}