'use strict'

var gId = 1;
var gImgs = [
    {
        id: gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
    {
        id: ++gId,
        url: `img/meme-imgs/${gId}.jpg`,
        keywords: ['happy']
    },
]
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 60,
            align: 'center',
            color: 'white',
            strokeColor: 'black',
            font: 'Impact',
            align: 'center'
        }
    ]
}



function getImages() {
    return gImgs
}

function getMeme() {
    return gMeme
}

function changeMemeImgId(id) {
    var meme = getMeme()
    meme.selectedImgId = id;
}
function changeMemeLineIdx(diff) {
    gMeme.selectedLineIdx += diff;
}

function findImgById(id) {
    return gImgs.find((img) => {
        return img.id === +id
    })
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

function changeFontSize(diff, lineIdx) {
    gMeme.lines[lineIdx].size += diff
}
function changeFont(font, lineIdx) {
    gMeme.lines[lineIdx].font = font;
}
function changeStrokeColor(value, lineIdx) {
    gMeme.lines[lineIdx].strokeColor = value;
}
function changeTextColor(value, lineIdx) {
    gMeme.lines[lineIdx].color = value;
}

function changeAlign(align, idx) {
    gMeme.lines[idx].align = align
}