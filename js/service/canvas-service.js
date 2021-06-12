'use strict'

var gCanvas;
var gCtx;

function createCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function alignOnCanvas(memeLine, idx, width) {
    var x = gCtx.measureText(memeLine[idx].txt)
    console.log('x', x);
    let align;
    if (memeLine[idx].align === 'center') align = width / 2;
    if (memeLine[idx].align === 'left') align = 0;
    if (memeLine[idx].align === 'right') align = width - x.width;
    return align;
}

function drewTextOnCanvas() {
    var memeLines = getMeme().lines;
    memeLines.forEach((memeTxt, idx) => {
        const pos = (!idx) ? 'top' : 'bottom';
        const width = gCanvas.width;
        const align = alignOnCanvas(memeLines, idx, width)
        const height = gCanvas.height;
        if (!idx) {
            drawRect(0, 0, width, memeLines[idx].size)
            drawText(memeTxt.txt, align, idx * height, pos, memeLines[idx].size,
                memeLines[idx].color, memeLines[idx].strokeColor, memeLines[idx].font, memeLines[idx].align)
        }
        else {
            drawRect(0, (1 / idx * height) - memeLines[idx].size, width, memeLines[idx].size)
            drawText(memeTxt.txt, align, 1 / idx * height, pos, memeLines[idx].size,
                memeLines[idx].color, memeLines[idx].strokeColor, memeLines[idx].font, memeLines[idx].align)
        }
    })
}

function drawText(text, x, y, baseline, fontSize, textColor, strokeColor, fontStyle, align) {
    if (align === 'right') align = 'left'
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${strokeColor}`
    gCtx.fillStyle = `${textColor}`
    gCtx.font = `${fontSize}px ${fontStyle}`
    gCtx.textBaseline = baseline;
    gCtx.textAlign = `${align}`
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
    elLink.download = 'name.png'
}

function drawRect(x, y, a, b) {
    gCtx.beginPath()
    gCtx.rect(x, y, a, b)
    // gCtx.fillStyle = 'orange'
    // gCtx.fillRect(x, y, a, b)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}