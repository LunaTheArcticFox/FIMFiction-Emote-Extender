var tables = {};

self.port.on("addModules", function addScripts(modules) {

	var editors = document.getElementsByClassName("bbcode-editor");

	combineTables(modules);

	for(var i = 0; i < editors.length; i++) {
		injectEmoteModules(editors.item(i), modules);
	}

});

function combineTables(modules) {

	for (var i = 0; i < modules.length; i++) {
		for (var j = 0; j < modules[i].emoteTables.length; j++) {

			var table = modules[i].emoteTables[j];

			if (table.longName in tables) {

				tables[table.longName].numberOfEmotes += table.numberOfEmotes;
				tables[table.longName].emotes.concat(table.emotes);

			} else {

				tables[table.longName] = table;

			}

		}
	}

}

function injectEmoteModules(editor, modules) {

	var toolbar = editor.children[0];

	var emoteDropdown = document.createElement("div");
	emoteDropdown.classList.add("drop-down");
	emoteDropdown.classList.add("drop-down-emoticons");

	var arrow = document.createElement("div");
	arrow.classList.add("arrow");
	emoteDropdown.appendChild(arrow);

	addTableSelector(emoteDropdown);

	resizeDropdown(emoteDropdown);

	window.onresize = function() {
		resizeDropdown(emoteDropdown);
	};

	//Locates the vanilla FIMFiction emote button
	var emoteButton = toolbar.children[2].children[6].children[0];
	emoteButton.parentNode.appendChild(emoteDropdown);
	emoteButton.onclick = function(e) {

  		e.preventDefault();
		e.stopPropagation();

		if (emoteButton.parentNode.classList.contains("drop-down-show")) {
			emoteButton.parentNode.classList.remove("drop-down-show");
		} else {
			emoteButton.parentNode.classList.add("drop-down-show");
		}

	};

}

function addTableSelector(emoteDropdown) {

	var tableSelector = document.createElement("select");

	for (var key in tables) {

		var table = tables[key];

		var option = document.createElement("option");
		option.innerHTML = table.longName;
		option.value = table.longName;
		tableSelector.appendChild(option);

	}

	tableSelector.onchange = function() {
		showTable(tableSelector.value, emoteDropdown);
	};

	emoteDropdown.appendChild(tableSelector);

}

function showTable(tableName, emoteDropdown) {

	var div = document.createElement("div");

	div.innerHTML = tableName;

	emoteDropdown.appendChild(div);

}

function resizeDropdown(emoteDropdown) {

	var w = Math.min(200, Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
	var h = Math.min(250, Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
	emoteDropdown.style.width = w + "px";
	//emoteDropdown.style.right = "-200px";
	emoteDropdown.style.height = h + "px";

}