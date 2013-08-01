/*
 *	Fimfiction Emote Script v2.0
 *
 *	Written by KrazyTheFox
 */

window.initialized = false;
window.emoteTables = [];
window.tabContainer;
window.tablePrefix = "emoteAPI_Table:";

var pageOther = -1;
var pageGroupThread = 0;
var pageBlogEdit = 1;

var sitePage = pageOther;

function logInfo(message) {
	console.log("Emote API [INFO]: " + message);
}

function logError(message) {
	console.log("Emote API [ERROR]: " + message);
}

// GM function replacements are from https://raw.github.com/gist/3123124
function addGlobalStyle(css) {
	
	try {
		var elmHead, elmStyle;
		elmHead = document.getElementsByTagName('head')[0];
		elmStyle = document.createElement('style');
		elmStyle.type = 'text/css';
		elmHead.appendChild(elmStyle);
		elmStyle.innerHTML = css;
	} catch (e) {
		if (!document.styleSheets.length) {
			document.createStyleSheet();
		}
		document.styleSheets[0].cssText += css;
	}
	
}

function initialize() {
	
	logInfo("Initializing...");
	
	getSitePage();
	
	if (window.initialized || sitePage == pageOther) {
		logError("Already initialized, returning.");
		return;
	}
	
	window.initialized = true;
	
	var theCSS = [];
	
	theCSS.push(
		
		".emoticons_panel {",
			"height: auto !important;",
			"min-height: 300px !important;",
			"display: block !important;",
		"}",
		
		".customEmote {",
			"box-shadow: #000 0em 0em 0em;",
			"opacity: 0.75;",
			"transition: opacity .2s ease-out;",
			"-moz-transition: opacity .2s ease-out;",
			"-webkit-transition: opacity .2s ease-out;",
			"-o-transition: opacity .2s ease-out;",
			"-webkit-touch-callout: none;",
			"-webkit-user-select: none;",
			"-khtml-user-select: none;",
			"-moz-user-select: none;",
			"-ms-user-select: none;",
			"user-select: none;",
			"margin: 5px;",
		"}",
		
		".customEmote:hover {",
			"opacity: 1;",
			"transition: opacity .2s ease-in;",
			"-moz-transition: opacity .2s ease-in;",
			"-webkit-transition: opacity .2s ease-in;",
			"-o-transition: opacity .2s ease-in;",
			"cursor: pointer;",
		"}",
		
		".emoteTabButton {",
			"width: auto;",
			"height: 23px;",
			"float: left;",
			"text-align: center;",
			"padding: 5px 8px 0px 8px;",
			"margin: 5px 0px 0px 5px;",
			"font: 13px normal \"Segoe UI\" !important;",
			"-webkit-touch-callout: none;",
			"-webkit-user-select: none;",
			"-khtml-user-select: none;",
			"-moz-user-select: none;",
			"-ms-user-select: none;",
			"user-select: none;",
			"opacity: 1;",
			"transition: opacity .2s ease-in;",
			"-moz-transition: opacity .2s ease-in;",
			"-webkit-transition: opacity .2s ease-in;",
			"-o-transition: opacity .2s ease-in;",
			"-webkit-border-radius: 3px;",
			"-moz-border-radius: 3px;",
			"border-radius: 3px;",
			"background-color: #abc156;",
			"color: #ffffff",
		"}",
		
		".emoteTabButton:hover {",
			"cursor: pointer;",
			"opacity: 0.8;",
			"transition: opacity .2s ease-out;",
			"-moz-transition: opacity .2s ease-out;",
			"-webkit-transition: opacity .2s ease-out;",
			"-o-transition: opacity .2s ease-out;",
		"}",
		
		".inner_padding {",
			"margin-top: 0px !important;",
		"}",
		
		"#emoteAPITabContainer {",
			"margin-top: 0px;",
			"margin-left: 12px;",
			"float: left;",
			"clear: both;",
			"width: 279px;",
		"}",
		
		".emoteTable {",
			"display: none;",
			"margin: 10px;",
			"padding: 20px;",
			"float: left;",
			"clear: both;",
			"text-align: center;",
		"}",
		
		".emoticons_panel {",
			"padding-top: 15px !important;",
		"}"
		
	);
	
	logInfo("Adding CSS.");
	
	addGlobalStyle(theCSS.join(''));
	
	//$("div#comment_comment");
	//$("div.emoticons_panel");
	//$('.emoticons_panel > .inner_padding');
	
	logInfo("Added CSS.");
	
	window.emoteTables[window.tablePrefix + "FF"] = $('.emoticons_panel > .inner_padding');
	
	logInfo("Added default table.");
	
	window.tabContainer = $("<div id='emoteAPITabContainer'></div>");
	$('.emoticons_panel').prepend(tabContainer);
	
	logInfo("Added tab container.");

	createTableLink("FF");

	logInfo("Initialized successfully.");
	
}

function createTableLink(tableName) {

	logInfo("Creating table tab: " + tableName);

	var tableLink = $("<span class='emoteTabButton' id='" + (window.tablePrefix + tableName) + "'>" + tableName + "</span>");

	tableLink.click(function() {
		showTable(this.id);
	});

	window.tabContainer.append(tableLink);

}

function showTable(tableID) {

	logInfo("Showing table: " + tableID + "_Area");

	window.emoteTables[tableID].css('display', 'block');

	setTimeout(function() {
		var height = ($("div.emoticons_panel").height() + 1);
		$("div#comment_comment").css('min-height', height + "px");
		$("div#comment_comment").css('height', height + "px");
	}, 1);

	for (var table in window.emoteTables) {
		if(window.emoteTables[table] != window.emoteTables[tableID]) {
			window.emoteTables[table].css('display', 'none');
		}
	}
	
}

function addEmote(url, emoteName, shortTableName, longTableName) {

	logInfo("Adding emote: " + emoteName);

	if (!window.initialized) {
		initialize();
	}

	if(window.emoteTables[window.tablePrefix + shortTableName] != undefined) {
		createNewEmote(url, emoteName, shortTableName);
	} else {
		createNewTable(shortTableName, longTableName);
		createNewEmote(url, emoteName, shortTableName);
	}
	
}

function createNewEmote(url, emoteName, shortTableName) {

	logInfo("Creating emote: " + emoteName + " for table " + shortTableName);

	image = $("<img />");
	image.attr("id", url);
	image.attr("class", "customEmote");
	image.attr("src", url);
	image.attr("width", "58");
	image.attr("height", "58");
	image.attr("title", emoteName);
	image.click(function() { addEmoteToCommentBox(this.id); });

	var selector = "div[id=\"" + window.tablePrefix + shortTableName + "_Area\"]";

	$(selector).append(image);

}

function createNewTable(shortTableName, longTableName) {

	logInfo("Creating emoticon table: " + longTableName + "(" + shortTableName + ")");

	var emoteTable = $("<div class='emoteTable'></div>");
	$("div.emoticons_panel").append(emoteTable);
	emoteTable.attr("id", window.tablePrefix + shortTableName + "_Area");
	window.emoteTables[window.tablePrefix + shortTableName] = emoteTable;

	createTableLink(shortTableName);

}

function getSitePage() {
	
	if(/\/manage_user\/edit_blog_post/.test(location.href)) {
		sitePage = pageBlogEdit;
		logInfo("Site page set to blog editor.");
	} else if(/\/group\//.test(location.href)) {
		if (/\/thread\//.test(location.href)) {
			sitePage = pageGroupThread;
			logInfo("Site page set to group thread.");
		}
	}
	
}

function addEmoteToCommentBox(url) {
	replaceSelectedText($("div#comment_comment"), "[img]" + url + "[/img]");
}

function replaceSelectedText(el, text) {
	var sel = getInputSelection(el), val = el.value;
	el.value = val.slice(0, sel.start) + text + val.slice(sel.end);
}

function getInputSelection(el) {

	var _start = 0, _end = 0, normalizedValue, range, textInputRange, len, endRange;

	if(typeof el.selectionStart === "number" && typeof el.selectionEnd === "number") {
		_start = el.selectionStart;
		_end = el.selectionEnd;
	} else {

		range = window.getSelection();

		if(range && range.parentElement() == el) {

			len = el.value.length;
			normalizedValue = el.value.replace(/\r\n/g, "\n");

			textInputRange = el.createTextRange();
			textInputRange.moveToBookmark(range.getBookmark());

			endRange = el.createTextRange();
			endRange.collapse(false);

			if(textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
				_start = _end = len;
			} else {
				_start = -textInputRange.moveStart("character", -len);
				_start += normalizedValue.slice(0, _start).split("\n").length - 1;

				if(textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
					_end = len;
				} else {
					_end = -textInputRange.moveEnd("character", -len);
					_end += normalizedValue.slice(0, _end).split("\n").length - 1;
				}
			}
		}
	}

	return {
	start: _start,
	end: _end
	};

}

Object.size = function(obj) {
	var size = 0, key;
	for(key in obj) {
		if(obj.hasOwnProperty(key)) {
			size++;
		}
	}
	return size;
};