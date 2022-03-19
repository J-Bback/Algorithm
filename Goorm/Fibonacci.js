/**
 * @brief 피보나치 수열의 합 구하기
 * @author hyesoo-ahn
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
let value = "";

rl.on("line", function (input) {
  value = input;
  rl.close();
}).on("close", function () {
  Fibonacci(Number(value));
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

  console.log("NUMARR", numArr);
  console.log(totalNum);
}
