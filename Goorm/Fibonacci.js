const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
let value = "";

rl.on("line", function (input) {
  // 반복하여 터미널에 입력을 받음, 조건문이 없을 경우 한번만 입력받음.
  value = input;
  rl.close();
}).on("close", function () {
  // 위에서 입력받는 코드실행(조건문)이 끝나면 여기서 출력 코드 실행.
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
