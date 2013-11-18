// ==UserScript==
// @name FIMFiction Emote Extender: Sample Module
// @namespace (Pick something to identify these as your scripts, such as 'krazythefox')
// @description (Your Description Here)
// @include http*://www.fimfiction.net/*
// @include http*://fimfiction.net/*
// @grant none
// @require https://raw.github.com/KrazyTheFox/FIMFiction-Emote-API/master/emoteAPI.js
// @version 1.0
// ==/UserScript==

//Start by adding this line. When the page has loaded, this calls the run() function.
$(document).ready(run());

//The run() function is responsible for adding all of your emotes.
//You could technically name it whatever you like, but I like 'run'.
function run() {

	//To add each emote, use the following format:
	//As an example, I've taken this line from my Roseluck module.
    addEmote("http://i.imgur.com/z3ePgg1.png", "rosewhat", "ROSE", "Roseluck", 1);

    //The first part ("http://i.imgur.com/z3ePgg1.png") is the url to the emote's image. Make sure it's a direct link.

    //The second part ("rosewhat") is the name of the emote that will fit with FIMFiction's regular emote parsing.
    //The above emote will look like ':rosewhat:' when used in the beta script.
    //This feature is not present in the stable version, but it should be used for future-proofing.

    //The next part ("ROSE") is the short table name. Keep it as short as possible, with all caps.

    //The part after that ("Roseluck") is the long table name.

    //Finally, the number at the end ("1") indicated which page of the table this emote appears on.

    //Do this for each emote you want to add, then name your file: (scriptname.user.js)
    //The ".user.js" extension is necessary for Greasemonkey to recognize the script.

    //Make sure your emotes are 70x70px. Support for different sizes is coming, but right now they'll break.

}