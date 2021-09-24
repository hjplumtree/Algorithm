let fs = require('fs')
let input = fs.readFileSync('crain.txt').toString().split(' ').sort((a, b) => b - a)

function showWeight(kg) {
    let maxWeight = 0
    let sum = 0
    for(let i = 0; i < kg.length; i++) {
        sum = kg[i] * (i + 1)
        maxWeight = Math.max(maxWeight, sum)
    }
    return maxWeight
}

console.log(showWeight(input))