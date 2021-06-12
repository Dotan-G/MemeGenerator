'use strict'

var gLines = [];
var gLinesIdx;
var gFontSize = 100;

function getLines() {
    return gLines
}

function getLineIdx() {
    return gLinesIdx
}

function textBaseline() {
    return gLineBaseline
}

function saveElImg(elImg) {
    return elImg
}

function clearInput() {
    var input = document.querySelector('.text-on-meme')
    input.value = ''
}

function getFontSize() {
    return gFontSize
}

function changeFontSize(diff) {
    return gFontSize + diff
}