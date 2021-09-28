let fs = require('fs')
let input = fs.readFileSync('change2.txt').toString().split('\n')

let change = +input.shift()
let coins = input[0].split(' ').map(Number)
let total = 0

for(let i = coins.length - 1; i >= 0; i--) {
    if(change >= coins[i]){

    }

}

