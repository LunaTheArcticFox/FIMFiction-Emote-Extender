// ==UserScript==
// @name FIMFiction Emote Extender: Roseluck Module
// @namespace ffemoteextender
// @description Adds additional emotes to fimfiction.net.
// @include http*://www.fimfiction.net/*
// @include http*://fimfiction.net/*
// @grant none
// @require https://raw.github.com/KrazyTheFox/Fimfiction-Emote-API/master/emoteAPI.js
// @version 3.0
// ==/UserScript==

$(document).ready(run());

function run() {

    addEmote("http://i.imgur.com/z3ePgg1.png", "rosewhat", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/iK0Xz0v.png", "roserage", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/Y3BcKY7.png", "rosescared", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/9mowejk.png", "rosesad", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/5YjZf5N.png", "rosemad", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/4GVsw3z.png", "rosesmug", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/Ni95wGQ.png", "rosechipper", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/YwR8mr7.png", "rosejoy", "ROSE", "Roseluck", 1);
    addEmote("http://i.imgur.com/KbqYzkO.png", "rosecute", "ROSE", "Roseluck", 1);

}