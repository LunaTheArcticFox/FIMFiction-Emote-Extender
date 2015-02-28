self.port.on("show", function onShow(module) {

	var label = document.getElementById("moduleURLLabel");
	label.innerHTML = label.innerHTML.replace(/{{module}}/g, module.name);

	var deleteButton = document.getElementById("deleteButton");

	deleteButton.onclick = function() {
		self.port.emit("deleteModule", module);
	};

	var cancelButton = document.getElementById("cancelButton");

	cancelButton.onclick = function() {
		self.port.emit("cancel");
	};

});