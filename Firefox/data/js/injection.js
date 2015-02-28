var tables = {};
var tableDIVs = {};

self.port.on("addModules", function addScripts(modules) {

	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "\
	#tableSelector { padding: 0 0 0 5px; width: 175px; height: 30px; margin: 9px; border-radius: 4px; background-color: #347ccd; color: #ffffff; border: none; }\
	.emoteTable { animation: fadeout 0.25s; animation-fill-mode: forwards; margin: 0px 9px 0px 9px; overflow-y: auto; }\
	.fade { animation: fadein 0.25s; animation-fill-mode: forwards; }\
	.emoteTable .invisible { opacity: 0.0 !important; }\
	.emoteTable img { opacity: 0.8; transition: opacity 0.3s; cursor: pointer; }\
	.emoteTable div { margin-bottom: 9px; margin-right: 9px; }\
	.emoteTable img:hover { opacity: 1.0; transition: opacity 0.3s; }\
	.loading { width: 70px; height: 70px; }\
	.loader { animation: loadingAnimation 7s infinite; animation-timing-function: ease-in-out; width: 10px !important; height: 10px !important; display: inline-block; position: relative; border-radius: 5px; left: 30px; top: 15px; }\
	@keyframes\
	fadein {\
	    from { opacity: 0; }\
	    to   { opacity: 1; }\
	}\
	@keyframes\
	fadeout {\
	    from { opacity: 1; }\
	    to   { opacity: 0; display: none; }\
	}\
	@keyframes\
	loadingAnimation {\
		0%    { background-color: #ffc261; }\
		16.7% { background-color: #fdf6af; }\
		33.4% { background-color: #f3b6cf; }\
		50.1% { background-color: #9edbf9; }\
		66.8% { background-color: #b689c8; }\
		83.5% { background-color: #ebeff1; }\
		100%  { background-color: #ffc261; }\
	}\
	";
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

				if (table.name in tables) {

					tables[table.name].numberOfEmotes += tables[table.name].emotes.length;
					tables[table.name].emotes.concat(table.emotes);

				} else {

					table.numberOfEmotes = table.emotes.length;
					tables[table.name] = table;

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
	if (toolbar.children[2]) {
		var emoteButton = toolbar.children[2].children[6].children[0];
	} else {
		var emoteButton = toolbar.children[1].children[5].children[0];
	}
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

	document.body.onclick = function(e) {

		if ($(emoteDropdown).find($(e.target)).length == 0) {
			if (emoteButton.parentNode.classList.contains("drop-down-show")) {
				emoteButton.parentNode.classList.remove("drop-down-show");
			}
		}

	}

	for (var key in tables) {
		showTable(tables[key].name, emoteDropdown);
		break;
	}

}

function addTableSelector(emoteDropdown) {

	var tableSelector = document.createElement("select");
	tableSelector.id = "tableSelector"

	for (var key in tables) {

		var table = tables[key];

		var option = document.createElement("option");
		option.innerHTML = table.name;
		option.value = table.name;
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
	div.style.height = $(emoteDropdown).height() - $("#tableSelector").height() - 9 - 9 - 13 + "px";

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

	var container = document.createElement("div");
	container.style.display = "inline-block";
	container.className = "loading";

	var loader = document.createElement("span");
	loader.className = "loader";

	var emoteElement = document.createElement("img");
	emoteElement.className = "invisible";
	emoteElement.title = ":" + emote[1] + ":";
	emoteElement.onclick = function() {
		insertText(document.getElementById("comment_comment"), "[img]" + emoteElement.src + "[/img]");
	};

	$(emoteElement).attr({src: emote[0]}).on('load', function() {
		container.removeChild(loader);
		container.classList.remove("loading");
		emoteElement.classList.remove("invisible");
	});

	container.appendChild(loader);
	container.appendChild(emoteElement);

	return container;

}

function resizeDropdown(emoteDropdown) {

	var w = Math.min(735, Math.max(200, Math.max(document.documentElement.clientWidth, window.innerWidth || 0)));
	var h = Math.min(300, Math.max(250, Math.max(document.documentElement.clientHeight, window.innerHeight || 0)));
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