'use strict'

let gElImg;
let gDiffLinePos;
let gStartPos;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function init() {
    renderGallery(false)
    createCanvas()
    addListeners()
}

function renderGallery(isSearched, imgs) {
    let imgsToShow;
    if (!isSearched) imgsToShow = getImgs()
    else imgsToShow = imgs
    let strHTMLs = imgsToShow.map((img) => {
        return `
        <div class="img-box">
            <img id=${img.id} src="${img.url}"" onclick="onImgClick(this)">
        </div>`
    })
    let elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTMLs.join('');
}

function onImgClick(elImg) {
    gElImg = elImg;
    setMemeImgId(elImg.id)
    resizeCanvas(elImg.offsetHeight, elImg.offsetWidth)
    drawImg(elImg)
    let elGenerator = document.querySelector('.generator-container')
    elGenerator.style.display = 'block';
    let elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'none';
    let elSearch = document.querySelector('.search-container')
    elSearch.style.display = 'none';
    let elAbout = document.querySelector('.about');
    elAbout.style.display = 'none';

}

function onEnterText(inputText) {
    clearCanvas()
    let meme = getMeme();
    let currLine = getCurrLine();
    let line = meme.lines[currLine];
    if (!line) {
        meme.lines.push(getEmptyLineObg());
        line = meme.lines[currLine];
    }
    line.txt = inputText;
    renderCanvas()
    onLineSelected()
}

function onAddLine() {
    let input = document.querySelector('.text-on-meme')
    if (!input.value) return
    clearInput()
    renderCanvas()
    let meme = getMeme();
    if (getCurrLine() < meme.lines.length - 1) return onChangeLinePos();
    setCurrLine(1);
    setLineIdx(1);
    meme.lines.push(getEmptyLineObg());
}

function onChangeLinePos() {
    let input = document.querySelector('.text-on-meme');
    let meme = getMeme();
    console.log('before');
    if (!(meme.lines.length - 1)) return;
    console.log('after');
    if (!getCurrLine()) {
        gDiffLinePos = 1;
    } else if (getCurrLine() === meme.lines.length - 1 || getCurrLine() === meme.lines.length) {
        gDiffLinePos = -1;
    }
    console.log('gDiffLinePos', gDiffLinePos);
    setCurrLine(gDiffLinePos);
    input.value = meme.lines[getCurrLine()].txt;
    onLineSelected()
    return
}
function onLineSelected() {
    let input = document.querySelector('.text-on-meme');
    let meme = getMeme();
    input.value = meme.lines[getCurrLine()].txt;
    renderCanvas()
    if (input.value) drawRect(0, meme.lines[getCurrLine()].pos.y - meme.lines[getCurrLine()].size, gCanvas.width, meme.lines[getCurrLine()].size);
    return
}

function onTrashClick() {
    let meme = getMeme();
    let currLine = getCurrLine();
    if (currLine > 0) setCurrLine(-1)
    meme.lines.splice(currLine, 1)
    if (!meme.lines.length) clearInput()
    renderCanvas()
}

function onChangeFontSize(diff) {
    setFontSize(diff);
    renderCanvas()
}

function onChangeFont(elFont) {
    setFont(elFont)
    renderCanvas()
}

function onChangeStrokeColor(value) {
    setStrokeColor(value)
    renderCanvas()
}

function onChangeTextColor(value) {
    setTextColor(value)
    renderCanvas()
}

function onChangeAlign(align) {
    let meme = getMeme()
    let idx = meme.selectedLineIdx
    setChangeAlign(align, idx)
    renderCanvas()
}

function onGoBack() {
    onSearchInput('')
    let elGenaretor = document.querySelector('.generator-container')
    elGenaretor.style.display = 'none';
    let elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'block';
    let elSearch = document.querySelector('.search-container')
    elSearch.style.display = 'flex';
    let elAbout = document.querySelector('.about');
    elAbout.style.display = 'flex';
    clearGMeme()
    clearCanvas()
}

function renderCanvas() {
    let input = document.querySelector('.text-on-meme')
    clearCanvas()
    drawImg(gElImg)
    drawTextOnCanvas(input.value)
}

function onDownloadCanvas(elLink) {
    downloadCanvas(elLink)
}

function clearInput() {
    let input = document.querySelector('.text-on-meme')
    input.value = ''
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}
function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}
function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isLineClicked(pos)) return
    setLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}
function onMove(ev) {
    const line = getMeme().lines[getCurrLine()];
    if (line.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveLine(dx, dy)
        gStartPos = pos
        renderCanvas()
    }
}
function onUp() {
    setLineDrag(false);
    document.body.style.cursor = 'grab';
    onLineSelected();
}
function getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        console.log('ev.type', ev.type);
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function onSearchInput(val) {
    let y = []
    let inputText = document.querySelector('.search-input');
    inputText.value = val;
    gImgs.forEach(img => {
        let x = val.toLowerCase()
        if (img.keywords.join(' ').includes(x)) y.push(img)
    });
    return renderGallery(val, y)
}