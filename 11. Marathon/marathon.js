let fs = require('fs')
let input = fs.readFileSync('marathon.txt').toString().split(' ')
let rank = input.map(Number)
let runners = {}

for(let i = 0; i < input.length; i ++) {
    runners[i] = +input[i]
}
console.log(runners);

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr.map(Number)
    }
    let mid = Math.floor(arr.length / 2)
    
    let a_l = arr.slice(0, mid)
    let a_r = arr.slice(mid)
    return merge(mergeSort(a_l), mergeSort(a_r))
}

function merge(a_l, a_r) {
    let result = []
    let l_index = 0
    let r_index = 0

    while(l_index < a_l.length && r_index < a_r.length) {
        if(a_l[l_index] <= a_r[r_index]) {
            result.push(a_l[l_index])
            l_index++
        }
        else {
            result.push(a_r[r_index])
            r_index++
        }
    }   
    return result.concat(a_l.slice(l_index), a_r.slice(r_index))
}

console.log(mergeSort(input))