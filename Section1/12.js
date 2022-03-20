/**
 * @brief 중복단어제거
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
let input = [];
let count = 0;

r1.on('line', function (line) {
  if (count === 0) {
    num = Number(line);
  } else {
    input.push(line);
  }
  if (count === num) {
    r1.close();
  }
  count += 1;
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(arr) {
  const answer = [...new Set(arr)];
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}
