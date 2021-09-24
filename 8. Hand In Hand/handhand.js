let fs = require('fs')
let input = fs.readFileSync('handhand.txt').toString().split('\n')

const ppl = +input.shift()
let coorArr = []

coorArr = input.sort((a, b) => {
    return a[1] - b[1]
})

console.log(coorArr);