'use strict'

let gCanvas;
let gCtx;

function createCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function alignOnCanvas(memeLine, width) {
    let middleOfText = gCtx.measureText(memeLine.txt)
    let align;
    if (memeLine.align === 'center') {
        align = width / 2;
        memeLine.pos = { x: align, y: memeLine.size }
    } else if (memeLine.align === 'left') {
        align = 0;
        memeLine.pos = { x: align + middleOfText, y: memeLine.size }
    } else if (memeLine.align === 'right') {
        align = width;
        memeLine.pos = { x: align - middleOfText, y: memeLine.size }
    }
    return align;
}

function drawTextOnCanvas(isInput, isDrag) {
    let meme = getMeme();
    let memeLines = meme.lines
    memeLines.forEach((line, idx) => {
        const width = gCanvas.width;
        const height = gCanvas.height;
        if (isDrag) drawText(line.txt, line.pos.x, line.pos.y, line.size, line.color, line.strokeColor, line.font, line.align, width)
        else {
            if (!idx) {
                if (!line.pos.x && !line.pos.y) line.pos = { x: width / 2, y: line.size }
                // if (currLine === idx && !!isInput) drawRect(0, line.pos.y - line.size, width, line.size)
                if (!!line.pos.x && !!line.pos.y) {
                    drawText(line.txt, line.pos.x, line.pos.y, line.size, line.color,
                        line.strokeColor, line.font, line.align, width)
                }
                else drawText(line.txt, width / 2, (idx * height) + line.size, line.size,
                    line.color, line.strokeColor, line.font, line.align, width);
                // line.pos = { x: width }
            } else {
                if (!line.pos.x && !line.pos.y) line.pos = { x: width / 2, y: (1 / idx * height) }
                // if (currLine === idx && !!isInput) drawRect(0, line.pos.y - line.size, width, line.size)
                if (!!line.pos.x && !!line.pos.y) drawText(line.txt, line.pos.x, line.pos.y, line.size, line.color, line.strokeColor, line.font, line.align, width)
                else drawText(line.txt, width / 2, 1 / idx * height, line.size,
                    line.color, line.strokeColor, line.font, line.align, width)
            }
        }
    })
}

function drawText(text, x, y, fontSize, textColor, strokeColor, fontStyle, align, width) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = `${strokeColor}`;
    gCtx.fillStyle = `${textColor}`;
    gCtx.font = `${fontSize}px ${fontStyle}`;
    gCtx.textBaseline = 'bottom';
    gCtx.textAlign = `${align}`;
    gCtx.fillText(text, x, y, width);
    gCtx.strokeText(text, x, y, width);
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function drawImg(elImg) {
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

function resizeCanvas(height, width) {
    let elContainer = document.querySelector('.canvas-container');
    console.log('elContainer.offsetWidth', elContainer.offsetWidth);
    gCanvas.height = 400;
    gCanvas.width = width / height * 400;
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'name.png'
}

function drawRect(x, y, a, b) {
    gCtx.beginPath()
    gCtx.rect(x, y, a, b)
    gCtx.fillStyle = '#8381816c'
    gCtx.fillRect(x, y, a, b)
}

function isLineClicked(clickedPos) {
    let isFound = false;
    const meme = getMeme()
    let lineIdx;
    meme.lines.forEach((line, idx) => {
        const { pos } = line;
        let x
        let x2 = pos.x;
        let textWidth = gCtx.measureText(line.txt).width;
        if (line.align === 'right') {
            x = pos.x - (textWidth);
            if ((clickedPos.y < pos.y && clickedPos.y > pos.y - line.size) && (clickedPos.x > x && clickedPos.x < x2)) {
                isFound = true;
                lineIdx = idx;
            };
        }
        else if (line.align === 'left') x = pos.x + (textWidth);
        else {
            x = pos.x + (textWidth / 2);
            x2 = pos.x - (textWidth / 2);
        }
        if ((clickedPos.y < pos.y && clickedPos.y > pos.y - line.size) && (clickedPos.x < x && clickedPos.x > x2)) {
            isFound = true;
            lineIdx = idx;
        };
    })
    if (lineIdx >= 0) setCurrLineByClick(lineIdx);
    return isFound;
}

function setLineDrag(isDrag) {
    const meme = getMeme()
    meme.lines[getCurrLine()].isDrag = isDrag
}

function moveLine(dx, dy) {
    gMeme.lines[getCurrLine()].pos.x += dx
    gMeme.lines[getCurrLine()].pos.y += dy
}