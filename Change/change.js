let fs = require('fs')
let input = fs.readFileSync('change.txt')
let num = Number(input)

let coins = [500, 100, 50, 10]
let change = 0

for(let i = 0; i < coins.length; i++) {
    change += Math.floor(num / coins[i])
    num = num % coins[i]
    if(num === 0) {
        break;
    }
}
console.log(change)