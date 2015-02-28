var displaySettings = false;
var moduleNodes = [];

var ModuleNode = function(module, textNode, imageNode) {
	this.module = module;
	this.textNode = textNode;
	this.imageNode = imageNode;
}

self.port.on("show", function onShow(modules) {

	var moduleParent = document.getElementById("modules");

	for (var i = 0; i < modules.length; i++) {
		createModule(modules[i], moduleParent, modules);
	}

	var addModuleButton = document.getElementById("addModuleButton");

	addModuleButton.onclick = function() {
		self.port.emit("addModule");
	};

	var toggleOptionsButton = document.getElementById("toggleOptionsButton");

	toggleOptionsButton.onclick = function() {
		displaySettings = !displaySettings;
		toggleOptions();
	};

});

function toggleOptions() {

	if (displaySettings) {
		moduleNodes.forEach(function(node) {
			node.imageNode.classList.add("delete");
			node.textNode.classList.add("delete");
		});
	} else {
		moduleNodes.forEach(function(node) {
			node.imageNode.classList.remove("delete");
			node.textNode.classList.remove("delete");
		});
	}

}

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
		<img src="images/delete.png">\
	';

	moduleNodes.push(new ModuleNode(module, textNode, imageParent));

	imageParent.onclick = function() {
		if (displaySettings) {
			self.port.emit("deleteModule", module);
		} else {
			module.enabled = !module.enabled;
			if (module.enabled) {
				imageParent.classList.remove("disabled");
				imageParent.classList.add("enabled");
				imageParent.classList.remove("delete");
				textNode.classList.remove("disabled");
				textNode.classList.add("enabled");
				textNode.classList.remove("delete");
			} else {
				imageParent.classList.remove("enabled");
				imageParent.classList.add("disabled");
				imageParent.classList.remove("delete");
				textNode.classList.remove("enabled");
				textNode.classList.add("disabled");
				textNode.classList.remove("delete");
			}
			self.port.emit("save", modules);
		}
	}

	var imageParentAlignment = document.createElement("div");
	imageParentAlignment.classList.add("verticalAlignment");
	imageParentAlignment.appendChild(imageParent);
	imageNode.appendChild(imageParentAlignment);

	moduleParent.appendChild(textNode);
	moduleParent.appendChild(imageNode);

}