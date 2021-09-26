let fs = require('fs')
let input = fs.readFileSync('line.txt').toString().split(' ')

let order = []

for(let i = input.length - 1; i >= 0; i--) {
  order = [...order.slice(0, +input[i]), i+1, ...order.slice(+input[i])]
}
order = order.join(' ')
console.log(order);