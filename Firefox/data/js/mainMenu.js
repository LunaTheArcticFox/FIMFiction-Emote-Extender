self.port.on("show", function onShow(modules) {

	var moduleParent = document.getElementById("modules");

	for (var i = 0; i < modules.length; i++) {
		createModule(modules[i], moduleParent, modules);
	}

	var addModuleButton = document.getElementById("addModuleButton");

	addModuleButton.onclick = function() {
		self.port.emit("addModule");
	};

});

function createModule(module, moduleParent, modules) {

	var textNode = document.createElement("div");
	textNode.classList.add("col-xs-10");
	textNode.classList.add(module.enabled ? "enabled" : "disabled");
	textNode.innerHTML = '\
		<div class="verticalAlignment">\
			<span class="moduleTitle">' + module.name + '</span><br>\
			<span class="moduleAuthor">' + module.author + '</span>\
		</div>\
	';

	var imageNode = document.createElement("div");
	imageNode.classList.add("col-xs-2");

	var imageParent = document.createElement("div");
	imageParent.classList.add("moduleImage");
	imageParent.classList.add(module.enabled ? "enabled" : "disabled");
	imageParent.innerHTML = '\
		<img src="images/enabled.png">\
		<img src="images/not-enabled.png">\
	';

	imageParent.onclick = function() {
		module.enabled = !module.enabled;
		if (module.enabled) {
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
		self.port.emit("save", modules);
	}

	var imageParentAlignment = document.createElement("div");
	imageParentAlignment.classList.add("verticalAlignment");
	imageParentAlignment.appendChild(imageParent);
	imageNode.appendChild(imageParentAlignment);

	moduleParent.appendChild(textNode);
	moduleParent.appendChild(imageNode);

}