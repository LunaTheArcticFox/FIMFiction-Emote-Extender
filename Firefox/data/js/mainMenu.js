self.port.on("show", function onShow(scripts) {

	var modules = document.getElementById("modules");

	for (var i = 0; i < scripts.length; i++) {
		createModule(scripts[i], modules, scripts);
	}

	var addModuleButton = document.getElementById("addModuleButton");

	addModuleButton.onclick = function() {
		self.port.emit("addModule");
	};

});

function createModule(script, modules, scripts) {

	var textNode = document.createElement("div");
	textNode.classList.add("col-xs-10");
	textNode.classList.add(script.enabled ? "enabled" : "disabled");
	textNode.innerHTML = '\
		<div class="verticalAlignment">\
			<span class="scriptTitle">' + script.name + '</span><br>\
			<span class="scriptAuthor">' + script.author + '</span>\
		</div>\
	';

	var imageNode = document.createElement("div");
	imageNode.classList.add("col-xs-2");

	var imageParent = document.createElement("div");
	imageParent.classList.add("moduleImage");
	imageParent.classList.add(script.enabled ? "enabled" : "disabled");
	imageParent.innerHTML = '\
		<img src="images/enabled.png">\
		<img src="images/not-enabled.png">\
	';

	imageParent.onclick = function() {
		script.enabled = !script.enabled;
		if (script.enabled) {
			imageParent.classList.remove("disabled");
			imageParent.classList.add("enabled");
			textNode.classList.remove("disabled");
			textNode.classList.add("enabled");
		} else {
			imageParent.classList.remove("enabled");
			imageParent.classList.add("disabled");
			textNode.classList.remove("enabled");
			textNode.classList.add("disabled");
		}
		self.port.emit("save", scripts);
	}

	var imageParentAlignment = document.createElement("div");
	imageParentAlignment.classList.add("verticalAlignment");
	imageParentAlignment.appendChild(imageParent);
	imageNode.appendChild(imageParentAlignment);

	modules.appendChild(textNode);
	modules.appendChild(imageNode);

}