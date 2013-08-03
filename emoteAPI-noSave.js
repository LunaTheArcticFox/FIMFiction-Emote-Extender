/*
 *	Fimfiction Emote Script v2.0 Beta
 *
 *	Written by KrazyTheFox
 */

//MANUAL SETTINGS
var useVerbose = false;
var emotePreviewSize = 58; //Standard script size: 58, Small: 40, Large: 70
//END MANUAL SETTINGS

var tablePrefix = "emoteAPI_Table:";
var pageOther = -1;
var pageGroupThread = 0;
var pageBlogEdit = 1;
var pageScriptSettings = 2;

var initialized = false;

var currentTables = [];

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
	
	if (sitePage == pageOther) {
		return;
	}
	
	$("body").append("<div id='emoteScriptInitialized'></div>");
	initialized = true;

	var theCSS = [];
	
	theCSS.push(
		
		".emoticons_panel {",
			"height: auto !important;",
			"min-height: 285px !important;",
			"padding-top: 15px !important;",
			"display: block !important;",
			"border: none !important;",
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
		
		".add_comment {",
			"background-color: #faf8f3 !important;",
		"}",
		
		"#comment_comment {",
			"border-right: 1px solid #e8e5db !important;",
		"}",

		"#emoteAPITabContainer {",
			"margin-top: 0px;",
			"margin-left: 12px;",
			"margin-bottom: 15px;",
			"float: left;",
			"clear: both;",
			"width: 279px;",
		"}",
		
		".emoteTable {",
			"display: none;",
			"margin: 0 auto 0 auto;",
			"float: left;",
			"clear: both;",
			"text-align: center;",
		"}",

		".emotescript_both_curved {",
			"-webkit-border-radius: 4px;",
			"-moz-border-radius: 4px;",
			"border-radius: 4px;",
		"}"
		
	);
	
	addGlobalStyle(theCSS.join(''));
	
	logInfo("Added CSS.");
	
	$('.emoticons_panel > .inner_padding').attr("id", tablePrefix + "FF_Area");

	logInfo("Added default table.");
	
	var tempContainer = $("<div id='emoteAPITabContainer'></div>");

	$('.emoticons_panel').prepend(tempContainer);
	
	logInfo("Added tab container.");

	createTableLink("FF", "FF");

	logInfo("Creating settings tab button.");

	showTable(tablePrefix + "FF");

	logInfo("Initialized successfully.");
	
}

function createTableLink(shortTableName, longTableName) {

	var displayName = shortTableName;

	if (useVerbose) {
		displayName = longTableName;
	}

	var tableLink = $("<span class='emoteTabButton' id='" + (tablePrefix + shortTableName) + "'>" + displayName + "</span>");

	tableLink.click(function() {
		showTable(this.id);
	});

	$("#emoteAPITabContainer").append(tableLink);

}

function showTable(tableID) {

	logInfo("Showing table: " + tableID + "_Area");

	$('.emoticons_panel').children().each(function () {
		var currentDiv = $(this);
		if (currentDiv.attr("id") == tableID + "_Area") {
			currentDiv.css('display', 'block');
		} else if (currentDiv.attr("id") != "emoteAPITabContainer") {
			currentDiv.css('display', 'none');
		}
	});

	setTimeout(function() {
		$("textarea#comment_comment").css({'min-height':(($(".emoticons_panel").height() - 5) + 'px')});
		$("textarea#comment_comment").css({'height':(($(".emoticons_panel").height() - 5) + 'px')});
	}, 2);
	
}

function addEmote(url, emoteName, shortTableName, longTableName) {

	if (!initialized) {

		getSitePage();

		if ($('div#emoteScriptInitialized').length > 0) {
			initialized = true;
			logInfo("Already initialized.");
		} else {
			initialize();
		}

	}

	if (sitePage != pageGroupThread && sitePage != pageBlogEdit) {
		return;
	}

	var tableFound = false;

	if (currentTables.indexOf(tablePrefix + shortTableName + "_Area") == -1) {
		
		var tableID = "div[id=\"" + tablePrefix + shortTableName + "_Area\"]";

		if($(tableID).length > 0) {
			tableFound = true;
			currentTables.push(tablePrefix + shortTableName + "_Area");
		}

	} else {
		tableFound = true;
	}

	if (tableFound) {
		createNewEmote(url, emoteName, shortTableName);
	} else {
		createNewTable(shortTableName, longTableName);
		createNewEmote(url, emoteName, shortTableName);
	}
	
}

function createNewEmote(url, emoteName, shortTableName) {

	logInfo("Creating emote: " + emoteName + " for table " + shortTableName);

	var image = $("<img />");
	image.attr("id", url);
	image.attr("class", "customEmote");
	image.attr("src", url);
	image.attr("width", String(emotePreviewSize));
	image.attr("height", String(emotePreviewSize));
	image.attr("title", emoteName);
	image.click(function() { addEmoteToCommentBox(this.id); });

	var selector = "div[id=\"" + tablePrefix + shortTableName + "_Area\"]";

	$(selector).append(image);

}

function createNewTable(shortTableName, longTableName) {

	logInfo("Creating emoticon table: " + longTableName + "(" + shortTableName + ")");

	currentTables.push(tablePrefix + shortTableName + "_Area");

	var emoteTable = $("<div class='emoteTable'></div>");
	$("div.emoticons_panel").append(emoteTable);
	emoteTable.attr("id", tablePrefix + shortTableName + "_Area");

	createTableLink(shortTableName, longTableName);

}

function getSitePage() {
	
	sitePage = pageOther;

	if(/\/manage_user\/edit_blog_post/.test(location.href)) {
		sitePage = pageBlogEdit;
		logInfo("Site page set to blog editor.");
	} else if(/\/group\//.test(location.href)) {
		if (/\/thread\//.test(location.href)) {
			sitePage = pageGroupThread;
			logInfo("Site page set to group thread.");
		}
	} else if(/\/emote_script_settings/.test(location.href)) {
		sitePage = pageScriptSettings;
		logInfo("Site page set to script settings.");
	}
	
}

function addEmoteToCommentBox(url) {
	replaceSelectedText(document.getElementById("comment_comment"), "[img]" + url + "[/img]");
}

function replaceSelectedText(el, text) {
	var sel = getInputSelection(el), val = el.value;
	el.value = val.slice(0, sel.start) + text + val.slice(sel.end);
}

function getInputSelection(el) {

    var _start = 0, _end = 0, normalizedValue, range,
        textInputRange, len, endRange;

    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
        _start = el.selectionStart;
        _end = el.selectionEnd;
    } else {
        range = document.selection.createRange();

        if (range && range.parentElement() == el) {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, "\n");

            // Create a working TextRange that lives only in the input
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());

            // Check if the start and end of the selection are at the very end
            // of the input, since moveStart/moveEnd doesn't return what we want
            // in those cases
            endRange = el.createTextRange();
            endRange.collapse(false);

            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                _start = _end = len;
            } else {
                _start = -textInputRange.moveStart("character", -len);
                _start += normalizedValue.slice(0, _start).split("\n").length - 1;

                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
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