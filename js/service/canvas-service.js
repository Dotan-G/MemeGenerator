'use strict'

var gCanvas;
var gCtx;

function createCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function drewTextOnCanvas() {
    var fontSize = getFontSize()
    var lineArr = getLines();
    lineArr.forEach((line, idx) => {
        const pos = (!idx) ? 'top' : 'bottom';
        const width = gCanvas.width;
        const height = gCanvas.height;
        if (!idx) {
            drawRect(0, 0, width, 102)
            drawText(line, width / 2, idx * height, pos, fontSize)
        }
        else {
            drawRect(0, (1 / idx * height) - 100, width, 100)
            drawText(line, width / 2, 1 / idx * height, pos, fontSize)
        }
    })
}

function drawText(text, x, y, baseline, fontSize) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${fontSize}px Impact`
    gCtx.textBaseline = baseline;
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
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
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'name'
}

function drawRect(x, y, a, b) {
    gCtx.beginPath()
    gCtx.rect(x, y, a, b)
    // gCtx.fillStyle = 'orange'
    // gCtx.fillRect(x, y, a, b)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}