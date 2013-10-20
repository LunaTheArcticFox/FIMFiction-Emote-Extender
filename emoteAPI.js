/*
 *	Fimfiction Emote Script v2.0 Release
 *
 *	Written by KrazyTheFox
 */

"use strict";

var tablePrefix = "emoteAPI_Table:";
var pageOther = -1;
var pageGroupThread = 0;
var pageBlogEdit = 1;
var pageScriptSettings = 2;

var initialized = false;
var useVerbose = false;
var emotePreviewSize = 58;

var currentTables = [];
var majorTables = [];

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

	if(/\/manage_user\//.test(location.href)) {

		var settingsTabSpan = $("<span>Emote Script</span>");
		var settingsTabImg  = $("<img src='//www.fimfiction-static.net/images/icons/white/settings.png'></img>");
		var settingsTabLink = $("<a href='/manage_user/emote_script_settings'></a>");
		var settingsTabList = $("<li class='tab'></li>");

		settingsTabLink.append(settingsTabImg);
		settingsTabLink.append(settingsTabSpan);
		settingsTabList.append(settingsTabLink);
		
		var settingsTabContainer = $("div.tabs");
		settingsTabContainer.children(0).append(settingsTabList);

		if (sitePage == pageScriptSettings) {

			createSettingsPage();

			$("body").append("<div id='emoteScriptInitialized'></div>");
			initialized = true;
			return;

		}

	}

	if (sitePage == pageBlogEdit) {
		$(".light_toolbar .no_margin").append("<div class='emoticons_panel'>Balrgh</div>");
		$("#blog_post_content").parent().css("margin-right", "300px");
	}
	
	if (sitePage == pageOther) {
		return;
	}
	
	$("body").append("<div id='emoteScriptInitialized'></div>");
	initialized = true;
	
	if (GM_getValue("verbose", false) == "true") {
		logInfo("Verbose settings detected.");
		$("body").append("<div id='verboseEnabled'></div>");
		useVerbose = true;
	} else {
		logInfo("Concise settings detected.");
		$("body").append("<div id='verboseDisabled'></div>");
	}

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
		
		".emotePageTabButton {",
			"opacity: 0.5;",
			"width: 15px;",
			"height: 15px;",
			"display: inline-block;",
			"text-align: center;",
			"padding: 0px;",
			"margin-left: 5px;",
			"font: 13px normal \"Segoe UI\" !important;",
			"-webkit-touch-callout: none;",
			"-webkit-user-select: none;",
			"-khtml-user-select: none;",
			"-moz-user-select: none;",
			"-ms-user-select: none;",
			"user-select: none;",
			"transition: opacity .2s ease-in;",
			"-moz-transition: opacity .2s ease-in;",
			"-webkit-transition: opacity .2s ease-in;",
			"-o-transition: opacity .2s ease-in;",
			"-webkit-border-radius: 10px;",
			"-moz-border-radius: 10px;",
			"border-radius: 15px;",
			"background-color: #00a9f0;",
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

		".emotePageTabButton:hover {",
			"cursor: pointer;",
			"opacity: 1.0;",
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
		
		"#emotePageTabContainer {",
			"margin-bottom: 8px;",
			"float: left;",
			"clear: both;",
			"width: 279px;",
			"text-align: center;",
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
	
	var tempContainer = $("<div id='emotePageTabContainer'></div>");
	$('.emoticons_panel').prepend(tempContainer);

	tempContainer = $("<div id='emoteAPITabContainer'></div>");
	$('.emoticons_panel').prepend(tempContainer);

	tempContainer = $("<div id='emoteURLList' style='display: none;'></div>");
	$('body').append(tempContainer);
	
	logInfo("Added tab container.");

	createTableLink("FF", "FF");

	logInfo("Creating settings tab button.");

	var settingsImage = $("<img width='16' height='16' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAM1SURBVHjadJNNSCN3GMZ/k0y+NImLTMIkNUYwJMqmkVkPBrFQe0u8FEEpgoc9pfS0PfTUntvj9tLLXmVDb0XBbdlDS6gtEbPxYv3AiMQaIjpDo/nwHzNjeui6h9K+p/fw/Hh43odX4n9mdXX1VSKRyAAcHR39uLa2lv0vne1hSafTz3K53JuJiYmPAVRV1bLZLNlsFlVVNYBUKrWay+XepNPpZw+c/AAvLy8/n56eZnJy8odSqfRaURRVlmUAFEVRnz59+uvU1NScpmkkEoknAMVi8Vs7QCaT+W5+fj40PDxMNBolGAyOJ5NJLMvCNE0ikQiqqo5qmobb7cbr9aLrerBcLr+wA7Tb7ctAIPCJ3++n1+sRCARwOByYpgmA0+nE7/fTbDa5ubmhVCqxsbHxmWEYh3YAwzAOg8HgrM/nG/f5fPT7ffb399nZ2RGVSsUSQsherxchBCcnJ5RKpdeFQuErAGlpaemVoiiaoihqMpnE6/VSrVbZ2tr6OZ/PLwCsrKxszs3NfRSNRmm1Wuzt7aHr+oWu67vy6OhoRtM0XC4XnU4HSZI4PT0Vb2EBkM/nF0ZGRv4KBAJuIQSpVIput6vu7u5mZCEEZ2dn2Gw2JEkiFAphWZb07757vZ7U6XS4uLig3+9zf3+PEAJ7OByebTQavmazOWiaJh6PB4fDIQ8NDX1wcHDwPSAvLi7+FI/Hx/v9Pufn59TrdWq12qVhGL+9c1pYWPhFVdUPFUUhFotRr9epVqtdgGg06gqFQlQqFXRdR9f17fX19TSAHSAejy/F4/EvwuEwjUaD6+trwuEwY2NjciQSkR0OB8fHx7RaLQKBAHd3dyOmaf55dXW1K71134vFYo+FENze3tJut3E6nXi9XizLotvtIoRgcHAQj8eD2+2mUqn8sbm5mZQB6vX6S8uyvna5XHS7XSzLKtvt9ic22z+vYhgGvV7v93a7Pfuguby8fPkuQr1e3/L7/T1Zlt+r1WpfFovFnKqqn0uS5BZC0Gw2rwuFwqTNZjscGBh4rOv683K5/A3AwxHtgBt4BPgkSXo0MzPzwjTN9wFkWd7b3t7+tN/vd4BroAF0gO7fAwAtE2jf5kCQVgAAAABJRU5ErkJggg==' />");
	var settingsLink = $("<a class='emotescript_both_curved' href='/manage_user/emote_script_settings' title='Emote Script Settings'></a>");
	var settingsListObj = $("<li></li>");
	var settingsList = $("<ul class='toolbar_buttons'></ul>");

	settingsLink.append(settingsImage);
	settingsListObj.append(settingsLink);
	settingsList.append(settingsListObj);

	$('.add_comment form div.light_toolbar').append(settingsList);

	showTable(tablePrefix + "FF");

	logInfo("Initialized successfully.");
	
}

function createTableLink(shortTableName, longTableName, tablePage) {

	var displayName = shortTableName;

	if (useVerbose) {
		displayName = longTableName;
	}

	if (majorTables.indexOf((tablePrefix + shortTableName)) == -1 && shortTableName != "FF") {

		var tableLink = $("<span class='emoteTabButton' id='" + (tablePrefix + shortTableName) + "'>" + displayName + "</span>");

		tableLink.click(function() {
			showTableCycle(this.id);
			showPageTab(this.id);
		});

		$("#emoteAPITabContainer").append(tableLink);

		majorTables.push((tablePrefix + shortTableName));

	}

	if (shortTableName === "FF") {

		var tableLink = $("<span class='emoteTabButton' id='" + (tablePrefix + "FF") + "'>" + displayName + "</span>");

		tableLink.click(function() {
			showTable(this.id);
			showPageTab("FF");
		});

		$("#emoteAPITabContainer").append(tableLink);

	} else {

		var tableLink = $("<span class='emotePageTabButton " + (tablePrefix + shortTableName) + "pagetab' style='display: none;' id='" + (tablePrefix + shortTableName + tablePage) + "'> </span>");

		tableLink.click(function() {
			showTable(this.id);
		});

		$("#emotePageTabContainer").append(tableLink);

	}

}

function showPageTab(tabID) {

	if (tabID === "FF") {
		$('#emotePageTabContainer').children().each(function () {
			var currentDiv = $(this);
			currentDiv.css('display', 'none');
		});
	} else {
		$('#emotePageTabContainer').children().each(function () {
			var currentDiv = $(this);
			if (currentDiv.attr("class") == "emotePageTabButton " + tabID + "pagetab") {
				currentDiv.css('display', 'inline-block');
			} else {
				currentDiv.css('display', 'none');
			}
		});
	}

	setTimeout(function() {
		$("textarea#comment_comment").css({'min-height':(($(".emoticons_panel").height() - 5) + 'px')});
		$("textarea#comment_comment").css({'height':(($(".emoticons_panel").height() - 5) + 'px')});
	}, 2);

}

function showTable(tableID) {

	logInfo("Showing table: " + tableID + "_Area");

	$('.emoticons_panel').children().each(function () {
		var currentDiv = $(this);
		
		if (currentDiv.attr("id") == tableID + "_Area") {
			currentDiv.css('display', 'block');
		} else if (currentDiv.attr("id") != "emoteAPITabContainer" && currentDiv.attr("id") != "emotePageTabContainer") {
			currentDiv.css('display', 'none');
		}

	});

	$('#emotePageTabContainer').children().each(function () {

		var currentDiv = $(this);
		currentDiv.css('background-color', "#00a9f0");

		if (currentDiv.attr("id") == tableID) {
			currentDiv.css('background-color', "#003fe0");
		}

	});

	setTimeout(function() {
		$("textarea#comment_comment").css({'min-height':(($(".emoticons_panel").height() - 5) + 'px')});
		$("textarea#comment_comment").css({'height':(($(".emoticons_panel").height() - 5) + 'px')});
	}, 2);
	
}

function showTableCycle(tableID) {

	var currPage = 0;
	var totalPages = 0;

	$('.emoticons_panel').children().each(function () {
		var currentDiv = $(this);
		if (currentDiv.attr("id") == tableID + (totalPages + 1) + "_Area") {
			totalPages++;
			if (currentDiv.css("display") === "block") {
				currPage = totalPages;
			}
		}
	});

	var nextPage = currPage + 1;

	if (nextPage > totalPages) {
		nextPage = 1;
	}

	logInfo("Showing table: " + tableID + nextPage + "_Area");

	$('.emoticons_panel').children().each(function () {

		var currentDiv = $(this);
		if (currentDiv.attr("id") == tableID + nextPage + "_Area") {
			currentDiv.css('display', 'block');
		} else if (currentDiv.attr("id") != "emoteAPITabContainer" && currentDiv.attr("id") != "emotePageTabContainer") {
			currentDiv.css('display', 'none');
		}

	});

	$('#emotePageTabContainer').children().each(function () {

		var currentDiv = $(this);
		currentDiv.css('background-color', "#00a9f0");

		if (currentDiv.attr("id") == tableID + nextPage) {
			currentDiv.css('background-color', "#003fe0");
		}

	});

	setTimeout(function() {
		$("textarea#comment_comment").css({'min-height':(($(".emoticons_panel").height() - 5) + 'px')});
		$("textarea#comment_comment").css({'height':(($(".emoticons_panel").height() - 5) + 'px')});
	}, 2);
	
}

function addEmote(url, emoteName, shortTableName, longTableName, tablePage) {

	if (!initialized) {

		getSitePage();

		emotePreviewSize = GM_getValue('emotePreviewSize', 58);

		if ($('div#verboseEnabled').length > 0) {
			useVerbose = true;
		} else if ($('div#verboseDisabled').length > 0) {
			useVerbose = false;
		}

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

	if (currentTables.indexOf(tablePrefix + shortTableName + tablePage + "_Area") == -1) {
		
		var tableID = "div[id=\"" + tablePrefix + shortTableName + tablePage + "_Area\"]";

		if($(tableID).length > 0) {
			tableFound = true;
			currentTables.push(tablePrefix + shortTableName + tablePage + "_Area");
		}

	} else {
		tableFound = true;
	}

	if (tableFound) {
		createNewEmote(url, emoteName, shortTableName, tablePage);
	} else {
		createNewTable(shortTableName, longTableName, tablePage);
		createNewEmote(url, emoteName, shortTableName, tablePage);
	}
	
}

function createNewEmote(url, emoteName, shortTableName, tablePage) {

	var urlSpan = $("<span>" + url + "</span>");
	$("div#emoteURLList").append(urlSpan);

	logInfo("Creating emote: " + emoteName + " for table " + shortTableName);

	var image = $("<img />");
	image.attr("id", url);
	image.attr("class", "customEmote");
	image.attr("src", url);
	image.attr("width", String(emotePreviewSize));
	image.attr("height", String(emotePreviewSize));
	image.attr("title", emoteName);
	image.click(function() { addEmoteToCommentBox(this.id); });

	var selector = "div[id=\"" + tablePrefix + shortTableName + tablePage + "_Area\"]";

	$(selector).append(image);

}

function createNewTable(shortTableName, longTableName, tablePage) {

	logInfo("Creating emoticon table: " + longTableName + "(" + shortTableName + ")");

	currentTables.push(tablePrefix + shortTableName + tablePage + "_Area");

	var emoteTable = $("<div class='emoteTable'></div>");
	$("div.emoticons_panel").append(emoteTable);
	emoteTable.attr("id", tablePrefix + shortTableName + tablePage + "_Area");

	createTableLink(shortTableName, longTableName, tablePage);

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
	replaceSelectedText(document.getElementById("comment_comment"), "[img]" + url + "[/img] ");
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

function createSettingsPage() {

	$("div.main").append($("<input type='button' id='useConciseButton' value='Use Concise Tabs' style='margin: 15px; padding: 5px;' />"));
	$("div.main").append($("<input type='button' id='useVerboseButton' value='Use Verbose Tabs' style='margin: 15px; padding: 5px;' />"));
	$("div.main").append($("<input type='button' id='regSizeButton' value='Regular Size Previews' style='margin: 15px; padding: 5px; margin-left: 25px;' />"));
	$("div.main").append($("<input type='button' id='largeSizeButton' value='Large Size Previews' style='margin: 15px; padding: 5px;' />"));
	$("div.main").append($("<input type='button' id='smallSizeButton' value='Small Size Previews' style='margin: 15px; padding: 5px;' />"));

	$("#useVerboseButton").click(function() {
		GM_setValue("verbose", "true");
		alert("Now using verbose tabs.");
	});

	$("#useConciseButton").click(function() {
		GM_setValue("verbose", "false");
		alert("Now using concise tabs.");
	});

	$("#largeSizeButton").click(function() {
		GM_setValue("emotePreviewSize", 70);
		alert("Now using large emote preview size.");
	});

	$("#regSizeButton").click(function() {
		GM_setValue("emotePreviewSize", 58);
		alert("Now using regular emote preview size.");
	});

	$("#smallSizeButton").click(function() {
		GM_setValue("emotePreviewSize", 40);
		alert("Now using small emote preview size.");
	});

}

const __GM_STORAGE_PREFIX = [
    '', 'ffemoteextender', 'Fimfiction-Emote-Extender', ''].join('***');

// All of the GM_*Value methods rely on DOM Storage's localStorage facility.
// They work like always, but the values are scoped to a domain, unlike the
// original functions.  The content page's scripts can access, set, and
// remove these values.
// https://raw.github.com/gist/3123124
function GM_deleteValue(aKey) {
	'use strict';
	localStorage.removeItem(__GM_STORAGE_PREFIX + aKey);
}

function GM_getValue(aKey, aDefault) {
	'use strict';
	let val = localStorage.getItem(__GM_STORAGE_PREFIX + aKey)
	if (null === val && 'undefined' != typeof aDefault) return aDefault;
	return val;
}

function GM_listValues() {
	'use strict';
	let prefixLen = __GM_STORAGE_PREFIX.length;
	let values = [];
	let i = 0;
	for (let i = 0; i < localStorage.length; i++) {
		let k = localStorage.key(i);
		if (k.substr(0, prefixLen) === __GM_STORAGE_PREFIX) {
			values.push(k.substr(prefixLen));
		}
	}
	return values;
}

function GM_setValue(aKey, aVal) {
	'use strict';
	localStorage.setItem(__GM_STORAGE_PREFIX + aKey, aVal);
}