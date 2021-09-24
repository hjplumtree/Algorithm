let fs = require('fs')
let input = fs.readFileSync('compress.txt').toString()

function compress(str) {
    if([...str].every(s => s === str[0])){
        return str[0]
    }
    else {
        return `(${compress(str.slice(0, str.length/2))}${compress(str.slice(str.length/2))})`
    }
}

console.log(compress(input))