let fs = require('fs')
let input = fs.readFileSync('mart_counter.txt').toString().split('\n')

let customer = +input[0]
let counters = input[1].split(' ').map(Number)
let minute = 0
let done = 0
let min = 1
let max = Math.min(...counters) * customer
let middle = 0

while(min < max) {
    done = 0
    middle = Math.floor((min + max) / 2)
    for(let i = 0; i < counters.length; i++) {
        done += Math.floor(middle/counters[i])
    }
    if(done > customer) {
        min = middle
    }

}
