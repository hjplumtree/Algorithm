let fs = require('fs');
let input = fs.readFileSync('sliding_window.txt').toString().split('\n')

const M = +input[0]
let item_list = input[1].split(' ')
let left_index = 0
let right_index = 0
let answer = "See you later..."

while (left_index < item_list.length) {
    let sum = 0
    for(let i = left_index; i <= right_index; i++) {
        sum += +item_list[i]
    }
    if(sum < M) {
        if(right_index === item_list.length - 1) {
            break;
        }
        right_index++
    }
    else if(sum > M) {
        left_index++
    }
    else {
        answer = "Could you get me from here to here?"
        break;
    }
}

console.log(answer)