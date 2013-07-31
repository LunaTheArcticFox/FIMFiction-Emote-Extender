/*
 *	Fimfiction Emote Script v2.0
 *
 *	Written by KrazyTheFox
 */

window.initialized = false;
window.emoteTables = [];

function initialize() {
	
	initialized = true;
	
	$(".textbox_container").css("height", "600");
	$("#comment_comment").css("height", "100%");
	
	console.log("Success");
}

function addEmote(url, emoteName, shortTableName, longTableName) {
	
}