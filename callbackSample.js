function add(v1, v2) {
  return v1 + v2
}

function calculate(v1, v2, callback) {
  return callback(v1, v2)
}

const addResult = calculate(30, 50, add)
console.log(addResult)

function multiply(v1, v2) {
  return v1 * v2
}

const multiplyResult = calculate(30, 50, multiply)
console.log(multiplyResult)

function hello() {
  console.log("hello")
}

setTimeout(hello, 3000)
/* 
  setTimeout(hello(), 5000) と書くとその場でhello()を実行してしまうためエラー
  callback関数を渡すときは、()なしで関数名のみ渡すことに注意
*/

setTimeout(() => {
  console.log("hellyeah")
}, 1000)
