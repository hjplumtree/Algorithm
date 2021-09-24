let fs = require('fs')
const input = +fs.readFileSync('stairs.txt')
let cases = {
    "0": 1,
    "1": 1
}

function stairs(n) {
    if(n <= 1) {
        return 1
    }
    for(let i = 2; i <= n; i++) {
        cases[i] = cases[i - 1] + cases[i - 2]
    }
    return cases[n]
}

console.log(stairs(input));
  