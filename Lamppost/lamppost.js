let fs = require('fs')
let input = fs.readFileSync('lamppost.txt').toString().split(' ')

let gcd = showGcd(+input[1], +input[2])
let answer = 0

function showGcd(a, b) {
    if(a === 0) {
        return b
    }
    else if(b === 0) {
        return a
    }
    else if(a > b) {
        return showGcd(b, a)
    }
    return showGcd(b % a, a)
}

for(let i = 0; i <= +input[input.length - 1]; i+=gcd) {
    if(!input.includes(i.toString())) {
        answer++
    }
}

console.log(answer)