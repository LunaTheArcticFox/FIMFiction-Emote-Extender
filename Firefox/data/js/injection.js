self.port.on("addModules", function addScripts(modules) {

	var editors = document.getElementsByClassName("bbcode-editor");

	for(var i = 0; i < editors.length; i++) {
		injectEmoteModules(editors.item(i));
	}

});

function injectEmoteModules(editor) {

	var toolbar = editor.children[0];

	var emoteDropdown = document.createElement("div");
	emoteDropdown.classList.add("drop-down");
	emoteDropdown.classList.add("drop-down-emoticons");

	//Locates the vanilla FIMFiction emote button
	var emoteButton = toolbar.children[2].children[6].children[0];
	emoteButton.onclick = function(e) {
  		e.preventDefault();
		e.stopPropagation();
		emoteButton.parentNode.appendChild(emoteDropdown);
	};

}