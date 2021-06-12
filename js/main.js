'use strict'

var gElImg;

function init() {
    createCanvas()
    renderGallery()
}

function renderGallery() {
    var images = getImages()
    var strHTMLs = images.map((image) => {
        return `
        <div>
            <img id=${image.id} src="${image.url}"" onclick="onImgClick(this)">
        </div>`
    })
    var elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTMLs.join('');
}

function onImgClick(elImg) {
    gElImg = elImg;
    changeMemeImgId(elImg.id)
    var elGenaretor = document.querySelector('.ganerator')
    elGenaretor.style.display = 'flex';
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none';
    resizeCanvas()
    drawImg(elImg)
}

function onAddLine() {
    var input = document.querySelector('.text-on-meme')
    if (!input.value) return
    clearInput()
    var meme = getMeme();
    meme.lines.push({
        txt: '',
        size: 60,
        align: 'center',
        color: 'white',
        strokeColor: 'black',
        font: 'Impact'
    });
    changeMemeLineIdx(1)
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
    var meme = getMeme();
    var lineIdx = meme.selectedLineIdx
    meme.lines[lineIdx].txt = inputText;
    drewTextOnCanvas()
}

function onChangeLinePos() {
    var input = document.querySelector('.text-on-meme')
    var meme = getMeme();
    var diff;
    if (!meme.selectedLineIdx) {
        diff = 1
    } else if (meme.selectedLineIdx = meme.lines.length - 1) {
        diff = -1
    }
    input.value = meme.lines[meme.selectedLineIdx + diff].txt
}

function onTrachClick() {
    var meme = getMeme();
    var lineIdx = meme.selectedLineIdx
    var memeLines = meme.lines
    if (!lineIdx) {
        memeLines[lineIdx].txt = '';
        clearInput()
    } else {
        var lineIdx = memeLines.findIndex((line) => {
            line.txt === memeLines[lineIdx].txt
        })
        memeLines.splice(lineIdx, 1)
        changeMemeLineIdx(-1)
    }
    renderCanvas()
}

function onChangeFontSize(diff) {
    var meme = getMeme();
    changeFontSize(diff, meme.selectedLineIdx);
    renderCanvas()
}

function onChangeFont(elFont) {
    var meme = getMeme()
    var idx = meme.selectedLineIdx
    changeFont(elFont, idx)
    renderCanvas()
}

function renderCanvas() {
    clearCanvas()
    drawImg(gElImg)
    drewTextOnCanvas()
}

function onChangeStrokeColor(value) {
    var meme = getMeme()
    var idx = meme.selectedLineIdx
    changeStrokeColor(value, idx)
    renderCanvas()
}
function onChangeTextColor(value) {
    var meme = getMeme()
    var idx = meme.selectedLineIdx
    changeTextColor(value, idx)
    renderCanvas()
}

function onChangeAlign(align) {
    var meme = getMeme()
    var idx = meme.selectedLineIdx
    changeAlign(align, idx)
    renderCanvas()
}

function onDownloadCanvas(elLink) {
    downloadCanvas(elLink)
}

function checkevent(ev) {
    console.log('ev', ev);
}