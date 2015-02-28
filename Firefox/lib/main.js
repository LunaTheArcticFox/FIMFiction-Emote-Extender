var ss = require("sdk/simple-storage");

//ss.storage.modules = null;
if (!ss.storage.modules) {
	ss.storage.modules = [];
	addURL("https://raw.githubusercontent.com/KrazyTheFox/FIMFiction-Emote-Extender/v4.0.0-development/Scripts/standard.json", true);
	addURL("https://raw.githubusercontent.com/KrazyTheFox/FIMFiction-Emote-Extender/v4.0.0-development/Scripts/cheerilee.json", true);
	addURL("https://raw.githubusercontent.com/KrazyTheFox/FIMFiction-Emote-Extender/v4.0.0-development/Scripts/fimficdefaults.json", true);
}

require("sdk/page-mod").PageMod({
	include: "*.fimfiction.net",
	contentScriptFile: ["./js/jQuery.min.js", "./js/injection.js"],
	onAttach: function(worker) {
		worker.port.emit("addModules", ss.storage.modules);
	}
});

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

	mainPanel.port.on("deleteModule", function(module) {
		mainPanel.hide();
		requestDeleteModule(module);
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

function requestDeleteModule(module) {

	var modulePanel = require("sdk/panel").Panel({
		width: 350,
		height: 225,
		contentURL: "./moduleDelete.html",
		contentScriptFile: "./js/deleteModule.js"
	});

	modulePanel.on("show", function() {
		modulePanel.port.emit("show", module);
	});

	modulePanel.port.on("cancel", function() {
		modulePanel.hide();
	});

	modulePanel.port.on("deleteModule", function() {
		modulePanel.hide();
		var removeIndex = ss.storage.modules.indexOf(module);
		ss.storage.modules.splice(removeIndex, 1);
	});

	modulePanel.show();

}

function addURL(urlTemp) {
	addURL(urlTemp, false);
}

function addURL(urlTemp, suppress) {

	try {

		var Request = require("sdk/request").Request;
		var moduleRequest = Request({
			url: urlTemp,
			onComplete: function (response) {
				if (response.status == 200) {
					var module = JSON.parse(response.text);
					ss.storage.modules.push(module);
					if (!suppress) {
						var modulePanel = require("sdk/panel").Panel({
							width: 250,
							height: 150,
							contentURL: "./moduleAddSuccess.html"
						});
						modulePanel.show();
					}
				} else {
					if (!suppress) {
						var modulePanel = require("sdk/panel").Panel({
							width: 250,
							height: 150,
							contentURL: "./moduleAddFailed.html"
						});
						modulePanel.show();
					}
				}
			}
		});
		
		moduleRequest.get();

	} catch (e) {
		if (!suppress) {
			var modulePanel = require("sdk/panel").Panel({
				width: 250,
				height: 150,
				contentURL: "./moduleAddFailed.html"
			});
			modulePanel.show();
		}
	}

}

