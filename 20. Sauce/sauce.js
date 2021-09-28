let fs = require('fs')
let input = fs.readFileSync('sauce.txt').toString().split(' ').map(Number)
let len = input.length
let answer = 0
for (let i = 2; i <= len; i++) {
    let arr = input.slice(0, i).sort((a, b) => a - b)
    if(i % 2 === 0) {
        answer = (arr[arr.length/2 - 1] + arr[arr.length / 2]) / 2
    }
    else {
        answer = arr[Math.floor(arr.length/2)]
    }
    if(answer < 0) {
        answer = Math.round(answer)
    }
    if(answer === - 0)
    answer = 0
    console.log(Math.floor(answer));
}

