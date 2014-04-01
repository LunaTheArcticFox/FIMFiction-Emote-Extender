// ==UserScript==
// @name FIMFiction Emote Extender: Roseluck Module
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

    addEmote("http://i.imgur.com/z3ePgg1.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/iK0Xz0v.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/3FXM2bw.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/Y3BcKY7.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/9mowejk.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/5YjZf5N.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/4GVsw3z.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/Ni95wGQ.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/YwR8mr7.png", "Emote", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/KbqYzkO.png", "Emote", "ROSE", "Roseluck", 1);

}