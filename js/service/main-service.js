'use strict'

let currLine = 0;
let lineIdx = 0;
let gId = 1;
const gImgs = [
    {
        id: gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['trump', 'angry']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['funny', 'nature']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['baby', 'dogs', 'sleep', 'cute']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['dogs', 'love', 'cute']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['baby', 'yes', 'achievement']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['cat', 'sleep']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['dr.', 'crazy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['dr.', 'boring', 'listen']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['baby', 'giggle']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['crazy', 'bold']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['kids', 'dance']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['haim']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['trump', 'angry']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['kid']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['dogs', 'yoga']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['obama', 'smile']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['kiss', 'love', 'fight']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['funny', 'drinks']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['what are you doing']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['undercover']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['game of thrones']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['opra']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['listen']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['putin']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['toy', 'comics']
    },
]
let gMeme = {
    selectedImgId: 0,
    lines: [
        {
            lineIdx,
            txt: '',
            size: 60,
            align: 'center',
            color: 'white',
            strokeColor: 'black',
            font: 'Impact',
            align: 'center',
            pos: { x: 0, y: 0 },
            isDrag: false
        }
    ]
}



function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}
function setMemeImgId(id) {
    return gMeme.selectedImgId = id;
}
function setLineIdx(diff) {
    return lineIdx += diff;
}
function getCurrLine() {
    return currLine;
}
function setCurrLine(diff) {
    return currLine += diff;
}
function setCurrLineByClick(idx) {
    return currLine = idx;
}
function findImgById(id) {
    return gImgs.find(img => img.id === +id)
}
function findLineById(id) {
    return gMeme.lines.find(line => line.id === id)
}
function getEmptyLineObg() {
    return {
        lineIdx,
        txt: '',
        size: 60,
        align: 'center',
        color: 'white',
        strokeColor: 'black',
        font: 'Impact',
        align: 'center',
        pos: { x: 0, y: 0 },
        isDrag: false
    }
}

function saveElImg(elImg) {
    return elImg
}

function getFontSize() {
    return gFontSize
}

function clearGMeme() {
    gMeme = {
        selectedImgId: 0,
        lines: [
            {
                lineIdx,
                txt: '',
                size: 60,
                align: 'center',
                color: 'white',
                strokeColor: 'black',
                font: 'Impact',
                align: 'center',
                pos: { x: 0, y: 0 },
                isDrag: false
            }
        ]
    }
}

function setMeme(meme) {
    return gMeme = meme;
}

function setFontSize(diff) {
    gMeme.lines[currLine].size += diff;
}
function setFont(font) {
    gMeme.lines[currLine].font = font;
}
function setStrokeColor(value) {
    gMeme.lines[currLine].strokeColor = value;
}
function setTextColor(value) {
    gMeme.lines[currLine].color = value;
}

function setChangeAlign(align) {
    gMeme.lines[currLine].align = align;
}