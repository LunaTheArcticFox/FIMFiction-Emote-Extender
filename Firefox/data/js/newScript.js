self.port.on("show", function onShow(scriptText) {
	document.body.appendChild(document.createTextNode(scriptText));
});