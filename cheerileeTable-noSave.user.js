// ==UserScript==
// @name FIMFiction Emote Extender: Cheerilee Module
// @namespace ffemoteextender
// @description Adds additional emotes to fimfiction.net.
// @include http*://www.fimfiction.net/*
// @include http*://fimfiction.net/*
// @grant none
// @require https://raw.github.com/KrazyTheFox/Fimfiction-Emote-API/master/emoteAPI-noSave.js
// @version 3.0
// ==/UserScript==

$(document).ready(run());

function run() {

	//Use the following settings only in the first script you run.

	//Uncomment to enable verbose emote tables:
	//$("body").append("<div id='verboseEnabled'></div>");

	//Uncomment *one* line to select emote size:
	//$("body").append("<div id='emoteSizeSmall'></div>"); //Small Emotes
	//$("body").append("<div id='emoteSizeRegular'></div>"); //Regular Emotes
	//$("body").append("<div id='emoteSizeLarge'></div>"); //Large Emotes

    addEmote("http://i.imgur.com/cvM4P.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/IdiNEoG.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/zi55aHB.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/Z9dmrsL.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/etvChCJ.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/4CT6FFE.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/sqalbWn.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/rRAQgvt.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/8uzdXWe.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/PsTsg73.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/7OlsrI3.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/PC1vZ9r.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/r0hl8Qx.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/um4v4cj.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/4tvC5bF.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/2VCyIBF.png", "Emote", "CHR", "Cheerilee", 1);
    addEmote("http://i.imgur.com/Ot8C5aY.png", "Emote", "CHR", "Cheerilee", 1);

}