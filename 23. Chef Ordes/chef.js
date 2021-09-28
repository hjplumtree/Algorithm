let fs = require('fs')
let input = fs.readFileSync('chef.txt').toString().split('\n')

let total_time = +input[0].split(' ')[1]
let cook_time = input[1].split(' ').map(Number)
let sum = 0
let answer = 0
for(let i = 0; i < cook_time.length; i++) {
    if(total_time < sum) {
        break;
    }
    else {
        sum += cook_time[i]
        answer = i
    }
}

console.log(answer);