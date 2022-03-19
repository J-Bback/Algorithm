/**
 * @brief 1부터 N까지 합 출력하기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function(line) {
  input = Number(line);
  r1.close();
}).on('close', function() {
  solution(input);
  process.exit();
});

function solution(n) {
  let totalNum = 0;
  for (let i = 1; i <= n; i++) {
    totalNum += i;
  }
  console.log(totalNum);
}