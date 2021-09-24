let fs = require('fs')
let input = fs.readFileSync('handhand.txt').toString().split('\n')

const ppl = +input.shift()
let coorArr = []
let sameLine = 0
let tempDist = 0
let distance = 0
coorArr = input.sort((a, b) => {
    if(a[2] === b[2]) {
        return a[0] - b[0]
    }
    else {
        return a[2] - b[2]
    }
})

function showDist(coor) {
    for(let i = 0; i < coor.length-1; i++) {
        if(sameLine === 0 && coor[i][2] !== coor[i+1][2]) {
            return 'FAIL'
        }
        if(coor[i][2] === coor[i+1][2]) {
            sameLine = 1
            tempDist = +coor[i+1][0] - +coor[i][0]
            distance = Math.max(+distance, +tempDist)
        }
        else {
            sameLine = 0
            continue;
        }
    }
    return `SUCCESS \n${distance}`
}

console.log(showDist(coorArr));