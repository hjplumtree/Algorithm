let fs = require('fs')
let input = fs.readFileSync('mart_counter.txt').toString().split('\n')

let customer = +input[0]
let counters = input[1].split(' ').map(Number)
let minute = 0
let done = 0
while(done < customer) {
    done = 0
    minute++
    for(let i = 0; i < counters.length; i++) {
        done += Math.floor(minute/counters[i])
    }
}

console.log(minute)
