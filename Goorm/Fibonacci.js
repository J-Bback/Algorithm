/**
 * @brief 피보나치 수열의 합 구하기
 * @author hyesoo-ahn, J-Bback
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
let value;

rl.on("line", function (input) {
  value = Number(input);
  rl.close();
}).on("close", function () {
  Fibonacci(value);
  // sum(value);
  process.exit();
});

function Fibonacci(n) {
  let totalNum = 1;
  var numArr = [0, 1];
  if (n <= 1) {
    return n;
  } else {
    for (var i = 2; i <= n; i++) {
      totalNum += numArr[i - 2] + numArr[i - 1];
      numArr[i] = numArr[i - 2] + numArr[i - 1];
    }
  }

  // console.log("NUMARR", numArr);
  console.log(totalNum);
}

/* J-Bback, 재귀함수 */
// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// function sum(n) {
//   let total = 0;
//   for (let j = n; j > 0; j--) {
//     total += fibonacci(j);
//   }
//   console.log(total);
// }