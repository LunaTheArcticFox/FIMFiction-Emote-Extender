self.port.on("show", function onShow() {

	var addURLButton = document.getElementById("addURLButton");

	addURLButton.onclick = function() {
		var moduleURLInput = document.getElementById("moduleURLInput");
		self.port.emit("addURL", moduleURLInput.value);
	};

});