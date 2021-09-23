let fs = require('fs')
const input = +fs.readFileSync('stairs.txt')
let cases = {}

function stairs(n) {
        if(cases.hasOwnProperty(cases[n])) {
            // console.log(cases);
            return cases[n]
        }
        else {
            if(n <= 1) {
                return 1
            }
            else {
                cases[n] = stairs(n - 1) + stairs(n - 2)
                // console.log(cases);
                return cases[n]
            }
        }

}

console.log(stairs(input));