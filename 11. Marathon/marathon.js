let fs = require('fs')
let input = fs.readFileSync('marathon.txt').toString().split(' ')

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    
    let a_l = arr.slice(0, mid)
    let a_r = arr.slice(mid)
    merge(mergeSort(a_l), mergeSort(a_r))
}

function merge(a_l, a_r) {
    let result = []
    let left_index = 0
    let right_index = 0
    console.log(a_r);
    while(left_index < a_l.length && right_index < a_r.length) {
        console.log(right_index);
        if(a_l[left_index] <= a_r[right_index]) {
            result.push(+a_l[left_index])
            left_index++
        }
        else {
            result.push(+a_r[right_index])
            console.log(result);
            right_index++
        }
    }   
    return result.concat(a_l.slice(left_index), a_r.slice(right_index))
}

console.log(mergeSort(input));