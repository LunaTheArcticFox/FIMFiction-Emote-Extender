/*
 *	Fimfiction Emote Script v2.0
 *
 *	Written by KrazyTheFox
 */

window.initialized = false;
window.emoteTables = [];

var sitePage = PAGE.OTHER;
 
var Page = {
	OTHER:	{value: -1, name: "Other"},
	BLOGEDIT:	{value: 0, name: "Blog Editor"},
	GROUPTHREAD:	{value: 1, name: "Group Thread"},
};

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
	
	//loadScript('http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
		setupPage();
	//});
	
}

function setupPage() {
	
	getSitePage();
	
	if (window.initialized) {
		return;
	}
	
	initialized = true;
	
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

function loadScript(url, callback) {
	
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	
	script.onreadystatechange = callback;
	script.onload = callback;
	
	head.appendChild(script);
	
}

function getSitePage() {
	
	if(/\/manage_user\/edit_blog_post/.test(location.href)) {
		sitePage = Page.BLOGEDIT;
		logInfo("Site page set to blog editor.");
	} else if(/\/group\//.test(location.href)) {
		if (/\/thread\//.test(location.href)) {
			sitePage = PAGE.GROUPTHREAD;
			logInfo("Site page set to group thread.");
		}
	}
	
}