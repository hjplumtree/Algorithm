let fs = require('fs')
let input  = fs.readFileSync('blue_white.txt').toString().split('\n')

function blueWhite(input) {
    let blue = input[0].split(' ').reduce((acc, cur) => {
        return +acc + +cur
    }, 0)
    
    let white = input[1].split(' ').reduce((acc, cur) => {
        return +acc + +cur
    }, 0)
    console.log(blue > white ? blue : white)
}

blueWhite(input)