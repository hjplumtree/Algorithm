let fs = require('fs')
let input = fs.readFileSync('daily_log.txt').toString().split('\n')

let day = +input.shift()
let log_b = input[0].split(' ').map(Number)
let log_a = []
let sum = 0

for(let i = 0; i < day; i++ ) {
    let val = log_b[i] * (i + 1) - sum
    sum = sum + val
    log_a.push(val)
}

console.log(log_a.join(' '));