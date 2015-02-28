var ss = require("sdk/simple-storage");

ss.storage.modules = null;
if (!ss.storage.modules) {
	ss.storage.modules = [
		{
			"name" : "Standard Tables",
			"author" : "KrazyTheFox",
			"enabled" : true,
			"emoteTables" : [
				{
					"shortName" : "AJ",
					"longName" : "Applejack",
					"emotes" : [
						[ "http://i.imgur.com/NBEDt.png", "ajlie" ],
						[ "http://i.imgur.com/5Tp73.png", "ajhappy" ],
						[ "http://i.imgur.com/oa0BJ.png", "ajsup" ],
						[ "http://i.imgur.com/oaEI1BM.png", "ajderp" ],
						[ "http://i.imgur.com/bEP8EQ2.png", "ajgasp" ],
						[ "http://i.imgur.com/mMp7L.png", "ajcower" ],
						[ "http://i.imgur.com/HZlOi.png", "ajsly" ],
						[ "http://i.imgur.com/7PYFy.png", "ajsquinty" ],
						[ "http://i.imgur.com/DHDbq.png", "ajugh" ],
						[ "http://i.imgur.com/8zRAx.png", "ajwut" ],
						[ "http://i.imgur.com/aBIJ1.png", "ajfrown" ],
						[ "http://i.imgur.com/DmoWN.png", "ajhmmm" ],
						[ "http://i.imgur.com/MdJgU.png", "ajconfused" ],
						[ "http://i.imgur.com/dVnqE.png", "ajcarefree" ],
						[ "http://i.imgur.com/TAf9J.png", "ajconfident" ],
						[ "http://i.imgur.com/gNxjD.png", "ajproud" ],
						[ "http://i.imgur.com/JmYib.png", "ajmad" ],
						[ "http://i.imgur.com/aPZth.png", "ajinnocent" ],
						[ "http://i.imgur.com/4sZY1.png", "ajwoozy" ],
						[ "http://i.imgur.com/1NN8f.png", "ajwhat" ],
						[ "http://i.imgur.com/xmRQV.png", "ajskeptical" ],
						[ "http://i.imgur.com/lGb8P.png", "ajcurious" ],
						[ "http://i.imgur.com/0zTKq.png", "ajsmirk" ],
						[ "http://i.imgur.com/BeQHk.png", "ajbiggrin" ],
						[ "http://i.imgur.com/fl6ox.png", "ajcry" ],
						[ "http://i.imgur.com/mbZjl.png", "ajmoustache" ],
						[ "http://i.imgur.com/r19vB.png", "ajbashful" ],
						[ "http://i.imgur.com/hMgvT.png", "ajunamused" ],
						[ "http://i.imgur.com/ZCoEh.png", "ajsalute" ],
						[ "http://i.imgur.com/1ppRy.png", "ajglasses" ],
						[ "http://i.imgur.com/kjSfI.png", "ajhazy" ],
						[ "http://i.imgur.com/pwUmu.png", "ajdiscorded" ],
						[ "http://i.imgur.com/geqle.png", "ajghost" ],
						[ "http://i.imgur.com/LOrxf.png", "ajannoyed" ],
						[ "http://i.imgur.com/Evd0x.png", "ajcrazy" ],
						[ "http://i.imgur.com/tjCXQ.png", "ajeww" ],
						[ "http://i.imgur.com/NlvYtnA.png", "ajooh" ],
						[ "http://i.imgur.com/Qe7TiLt.png", "ajwait" ],
						[ "http://i.imgur.com/yAmRYea.png", "ajangry" ],
						[ "http://i.imgur.com/pww1wjm.png", "ajstubborn" ],
						[ "http://i.imgur.com/KZHFE8U.png", "ajno" ],
						[ "http://i.imgur.com/MZsrxQK.png", "ajunsure" ],
						[ "http://i.imgur.com/aHVIEJf.png", "ajfearful" ],
						[ "http://i.imgur.com/DPk2NZn.png", "ajnotlying" ],
						[ "http://i.imgur.com/ogtnDnC.png", "ajexcited" ],
						[ "http://i.imgur.com/oBAx788.png", "ajwink" ],
						[ "http://i.imgur.com/myOBKB4.png", "ajfaint" ],
						[ "http://i.imgur.com/LRD2W70.png", "ajglare" ],
						[ "http://i.imgur.com/MIrVmT7.png", "ajsad" ],
						[ "http://i.imgur.com/yyfj6BZ.png", "fillyaj" ],
						[ "http://i.imgur.com/6DvjrRv.png", "ajrage" ],
						[ "http://i.imgur.com/0REqcvr.png", "ajcanthearyou" ]
					]
				}
			]
		},
		{
			"name" : "Appletastic",
			"author" : "KrazyTheFox",
			"enabled" : true,
			"emoteTables" : [
				{
					"shortName" : "AJ",
					"longName" : "Obscure Pony",
					"emotes" : [
						[ "http://i.imgur.com/dVnqE.png", "obspony1" ],
						[ "http://i.imgur.com/geqle.png", "obspony2" ],
						[ "http://i.imgur.com/oBAx788.png", "obspony3" ],
						[ "http://i.imgur.com/geqle.png", "obspony2" ],
						[ "http://i.imgur.com/oBAx788.png", "obspony3" ],
						[ "http://i.imgur.com/geqle.png", "obspony2" ],
						[ "http://i.imgur.com/oBAx788.png", "obspony3" ]
					]
				},
				{
					"shortName" : "AB",
					"longName" : "Apple Bloom",
					"emotes" : [
						[ "http://i.imgur.com/dVnqE.png", "obspony1" ],
						[ "http://i.imgur.com/geqle.png", "obspony2" ],
						[ "http://i.imgur.com/oBAx788.png", "obspony3" ],
						[ "http://i.imgur.com/geqle.png", "obspony2" ],
						[ "http://i.imgur.com/oBAx788.png", "obspony3" ],
						[ "http://i.imgur.com/geqle.png", "obspony2" ],
						[ "http://i.imgur.com/oBAx788.png", "obspony3" ]
					]
				}
			]
		},
		{
			"name" : "Super Massive",
			"author" : "KrazyTheFox",
			"enabled" : true,
			"emoteTables" : [
				{
					"shortName" : "RD",
					"longName" : "Rainbow Dash",
					"emotes" : [
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ],
						[ "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAQQjBw&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FSupermoon_over_ESO%27s_Very_Large_Telescope.jpg&ei=hwC7VIbkK8u4ggT7ioGYBA&bvm=bv.83829542,d.eXY&psig=AFQjCNH0f3gpIW8qz1iwKKvkH4tkor5R3w&ust=1421627907314553", "rdash" ]
					]
				}
			]
		}
	];
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