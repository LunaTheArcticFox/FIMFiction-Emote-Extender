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
	
	//setupPage();
	
}