let fs = require('fs');
let input = fs.readFileSync('prime_number.txt')
let n = Number(input)

let all_num = []
let answer = 0


for(let i = 2; i <= n; i++){
    if(all_num[i] !== false){
        for(let j = i * 2; j <= n; j+=i) {
            all_num[j] = false
        }
        answer++
    }
}