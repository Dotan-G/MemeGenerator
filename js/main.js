'use strict'

var gLine = 100;

function init() {
    createCanvas()
}

function onImgClick(elImg) {
    var elGenaretor = document.querySelector('.ganerator')
    elGenaretor.style.display = 'flex';
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none';
    resizeCanvas()
    drawImg(elImg)
}

function onGoBack() {
    var elGenaretor = document.querySelector('.ganerator')
    elGenaretor.style.display = 'none';
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'flex';
    clearCanvas()
}

function onEnterText(inputText) {
    var elCanvas = document.querySelector('canvas')
    const width = elCanvas.width;
    const height = elCanvas.height;
    drawText(inputText, width / 2, gLine)
}

function onChangeLinePos() {
    var elCanvas = document.querySelector('canvas')
    gLine = elCanvas.height - 100;
    console.log('gLine', gLine);
}