/*
 *	Fimfiction Emote Script v2.0
 *
 *	Written by KrazyTheFox
 */

window.initialized = false;
window.emoteTables = [];

var pageOther = -1;
var pageGroupThread = 0;
var pageBlogEdit = 1;

var sitePage = pageOther;

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

function logInfo(message) {
	console.log("Emote API [INFO]: " + message);
}

function initialize() {
	
	logInfo("Initializing...");
	
	getSitePage();
	
	if (window.initialized) {
		return;
	}
	
	window.initialized = true;
	
	var theCSS = [];
	
	theCSS.push(
		
		".emoticons_panel {",
			"height: auto !important;",
			"min-height: 300px !important;",
			"display: block !important;",
		"}"
		
		
		
	);
	
	GM_addStyle(theHTML.join(''));
	
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