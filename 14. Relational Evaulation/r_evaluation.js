let fs = require('fs')
let input = fs.readFileSync('r_evaluation.txt').toString().split('\n')

let applicant = +input.shift()
let max = 0
let pass = 0


function splitSubject(arr) {
    return arr.map(ele => ele.split(' '))
}
let des = splitSubject(input)

des = des.sort((a, b) => {
    if(a[0] === b[0]) {
        return +b[2] - +a[1]
    }
    return +b[0] - +a[0]
})

for(let i = 0; i < applicant; i++) {
    if(max < des[i][1]) {
        max = des[i][1]
        pass++
    }
}

console.log(pass);