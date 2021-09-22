let fs = require('fs')
const input = +fs.readFileSync('stairs.txt')

function stairs(n) {
    if(n === 1) {
        return 1
    }
    else if(n === 2) {
        return 1 + stairs(1)
    } 
    else {
        return stairs(n - 1) + stairs(n - 2)
    }
}

console.log(stairs(input));