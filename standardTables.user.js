// ==UserScript==
// @name Fimfiction Emote Extender v2
// @namespace ffemoteextender
// @description Adds additional emotes to fimfiction.net.
// @include http*://www.fimfiction.net/*
// @include http*://fimfiction.net/*
// @grant none
// @require https://raw.github.com/KrazyTheFox/Fimfiction-Emote-API/master/emoteAPI.js
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @version 2.0
// ==/UserScript==

$(document).ready(run);

function run() {
	
	console.log("Start.");
	
	initialize();
	
	alert("End.");
	
}