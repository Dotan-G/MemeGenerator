'use strict'

var gElImg;
var gIdx = 0;

function init() {
    createCanvas()
}

function onImgClick(elImg) {
    gElImg = saveElImg(elImg)
    var elGenaretor = document.querySelector('.ganerator')
    elGenaretor.style.display = 'flex';
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none';
    resizeCanvas()
    drawImg(gElImg)
}

function onAddLine() {
    clearInput()
    gIdx++
    return gIdx
}

function onGoBack() {
    var elGenaretor = document.querySelector('.ganerator')
    elGenaretor.style.display = 'none';
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'flex';
    clearCanvas()
}

function onEnterText(inputText) {
    clearCanvas()
    drawImg(gElImg)
    var lines = getLines();
    lines[gIdx] = inputText;
    drewTextOnCanvas()
}

function onChangeLinePos() {
    var input = document.querySelector('.text-on-meme')
    var lines = getLine();
    var x = gIdx
    input.value = lines[--gIdx]
}

function onTrachClick() {
    var input = document.querySelector('.text-on-meme')
    var lines = getLines();
    if (!lines || !lines.length) return
    var lineIdx = lines.findIndex((line) => {
        console.log('input.value', input.value);
        return line === input.value
    })
    lines.splice(lineIdx, 1)
    --gIdx
    if (!lines.length) clearInput()
    clearCanvas()
    drawImg(gElImg)
    drewTextOnCanvas()
}

function checkevent(ev) {
    console.log('ev', ev);
}

function onChangeFontSize(diff) {
    changeFontSize(diff);
    onEnterText(inputText)
}