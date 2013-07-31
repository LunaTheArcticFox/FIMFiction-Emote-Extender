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

window.onerror = function(message, url, line) {
	logError(message + " at line: " + line);
}

// GM function replacements are from https://raw.github.com/gist/3123124
function GM_addStyle(aCss) {
	
	var head = document.getElementsByTagName("head")[0];
	
	if(head) {
		var stylenode = document.createElement("style");
		stylenode.type = "text/css";
		stylenode.textContent = aCss;
		head.appendChild(stylenode);
		return stylenode;
	}
	
	return null;
	
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
		
		".emoticons_panel {",
			"margin-top: 15px !important;",
		"}"
		
	);
	
	GM_addStyle(theHTML.join(''));
	
	//$("div#comment_comment");
	//$("div.emoticons_panel");
	//$('.emoticons_panel > .inner_padding');
	
	logInfo("Added CSS.");
	
	window.emoteTables[window.tablePrefix + "FF"] = $('.emoticons_panel > .inner_padding');
	
	logInfo("Added default table.");
	
	window.tabContainer = $("<div id='emoteAPITabContainer'></div>");
	$('.emoticons_panel > .inner_padding').prepend(tabContainer);
	
	logInfo("Added tab container.");
	
	logInfo("Initialized successfully.");
	
}

function addEmote(url, emoteName, shortTableName, longTableName) {
	
	if (!window.initialized) {
		initialize();
	}
	
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