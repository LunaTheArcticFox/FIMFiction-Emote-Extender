var tables = {};
var tableDIVs = {};

self.port.on("addModules", function addScripts(modules) {

	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "\
	.emoteTable { animation: fadeout 0.25s; animation-fill-mode: forwards; }\
	.fade { animation: fadein 0.25s; animation-fill-mode: forwards; }\
	.emoteTable img { opacity: 0.7; transition: opacity 0.3s; cursor: pointer; }\
	.emoteTable img:hover { opacity: 1.0; transition: opacity 0.3s; }\
	@keyframes\
	fadein {\
	    from { opacity: 0; }\
	    to   { opacity: 1; }\
	}\
	@keyframes\
	fadeout {\
	    from { opacity: 1; }\
	    to   { opacity: 0; display: none; }\
	}";
	document.body.appendChild(css);

	var editors = document.getElementsByClassName("bbcode-editor");

	combineTables(modules);

	for(var i = 0; i < editors.length; i++) {
		injectEmotes(editors.item(i));
	}

});

function combineTables(modules) {

	for (var i = 0; i < modules.length; i++) {
		if (modules[i].enabled) {
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

}

function injectEmotes(editor) {

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

	for (var key in tables) {
		showTable(tables[key].longName, emoteDropdown);
		break;
	}

	/*document.onclick = function(e) {
		emoteButton.parentNode.classList.remove("drop-down-show");
	}*/

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

	var child = null;

	if (emoteDropdown.children.length > 2) {
		child = emoteDropdown.children[2];
		child.classList.remove("fade");
	}

	if (tableName in tableDIVs) {
		var table2 = tableDIVs[tableName];
		if (child != null) {
			setTimeout(function() {
				emoteDropdown.removeChild(child);
				emoteDropdown.appendChild(table2);
				table2.classList.add("fade");
			}, 250);
		} else {
			emoteDropdown.appendChild(table2);
			table2.classList.add("fade");
		}
		return;
	}

	var div = document.createElement("div");
	div.classList.add("emoteTable");

	for (var i = 0; i < tables[tableName].numberOfEmotes; i++) {
		div.appendChild(getEmote(tables[tableName].emotes[i]));
	}

	if (child != null) {
		setTimeout(function() {
			emoteDropdown.removeChild(child);
			emoteDropdown.appendChild(div);
			div.classList.add("fade");
			tableDIVs[tableName] = div;
		}, 250);
	} else {
		emoteDropdown.appendChild(div);
		div.classList.add("fade");
		tableDIVs[tableName] = div;
	}

}

function getEmote(emote) {
	var emoteElement = document.createElement("img");
	emoteElement.src = emote[0];
	emoteElement.onclick = function() {
		insertText(document.getElementById("comment_comment"), "[img]" + emoteElement.src + "[/img]");
	};
	return emoteElement;
}

function resizeDropdown(emoteDropdown) {

	var w = Math.min(200, Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
	var h = Math.min(250, Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
	emoteDropdown.style.width = w + "px";
	//emoteDropdown.style.right = "-200px";
	emoteDropdown.style.height = h + "px";

}

function insertText(element, text) {
	text = text || '';
	if (element.selectionStart || element.selectionStart === 0) {
		var startPos = element.selectionStart;
		var endPos = element.selectionEnd;
		element.value = element.value.substring(0, startPos) +
			text +
			element.value.substring(endPos, element.value.length);
		element.selectionStart = startPos + text.length;
		element.selectionEnd = startPos + text.length;
	} else {
		element.value += text;
	}
}