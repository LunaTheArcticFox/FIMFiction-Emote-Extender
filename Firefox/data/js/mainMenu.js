self.port.on("show", function onShow(scripts) {

	var modules = document.getElementById("modules");

	for (var i = 0; i < scripts.length; i++) {

		var script = scripts[i];

		var moduleTextNode = document.createElement("div");
		moduleTextNode.classList.add("col-xs-10");
		var textVerticalAlignmentNode = document.createElement("div");
		textVerticalAlignmentNode.classList.add("verticalAlignment");

		var titleNode = document.createElement("span");
		titleNode.classList.add("scriptTitle");
		titleNode.appendChild(document.createTextNode(script.name));
		var lineBreak = document.createElement("br");
		var authorNode = document.createElement("span");
		authorNode.classList.add("scriptAuthor");
		if (script.enabled) {
			titleNode.classList.add("enabled");
			authorNode.classList.add("enabled");
		}
		authorNode.appendChild(document.createTextNode(script.author));

		textVerticalAlignmentNode.appendChild(titleNode);
		textVerticalAlignmentNode.appendChild(lineBreak);
		textVerticalAlignmentNode.appendChild(authorNode);
		moduleTextNode.appendChild(textVerticalAlignmentNode);

		textVerticalAlignmentNode = document.createElement("div");
		textVerticalAlignmentNode.classList.add("verticalAlignment");
		var moduleButtonNode = document.createElement("div");
		moduleButtonNode.classList.add("col-xs-2");
		var moduleImage = document.createElement("img");
		moduleImage.src = "images/enabled.png";
		moduleImage.width = "24";
		moduleImage.height = "24";
		textVerticalAlignmentNode.appendChild(moduleImage);
		moduleButtonNode.appendChild(textVerticalAlignmentNode);

		modules.appendChild(moduleTextNode);
		modules.appendChild(moduleButtonNode);

		//for (var t = 0; t < scripts[i].emoteTables.length; t++) {

			/*var tableTitle = document.createElement("b");
			tableTitle.appendChild(document.createTextNode(scripts[i].emoteTables[t].longName + " (" + scripts[i].emoteTables[t].numberOfEmotes + ")"));
			infoNode.appendChild(tableTitle);
			infoNode.appendChild(document.createElement("br"));

			for (var e = 0; e < scripts[i].emoteTables[t].numberOfEmotes; e++) {
				infoNode.appendChild(document.createTextNode(scripts[i].emoteTables[t].emotes[e]));
				infoNode.appendChild(document.createElement("br"));
			}*/
		//}

		/*var scriptNode = document.createElement("div");
		scriptNode.appendChild(document.createTextNode(scripts[i].name + " -- " + scripts[i].author));
		scriptNode.appendChild(infoNode);

		document.body.appendChild(scriptNode);*/

	}

	var addModuleButton = document.getElementById("addModuleButton");

	addModuleButton.onclick = function() {
		self.port.emit("addModule");
	};

});

