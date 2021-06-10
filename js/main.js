'use strict'

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function onImgClick(elImg) {
    var elGenaretor = document.querySelector('.ganerator')
    elGenaretor.style.display = 'flex';
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none';
    resizeCanvas()
    drawImg(elImg)
}


function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '100px Impact'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    console.log('text', text);
}

function onGoBack() {
    var elGenaretor = document.querySelector('.ganerator')
    elGenaretor.style.display = 'none';
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'flex';
    clearCanvas()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function drawImg(elImg) {
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function downloadCanvas(elLink) {
    // console.log('elLink', elLink);
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'name'
}