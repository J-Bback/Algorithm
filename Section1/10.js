/**
 * @brief 문자 찾기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str;
let char;
let count = 0;

r1.on('line', function (line) {
  if (count === 0) {
    str = line;
  } else {
    char = line;
  }
  if (count === 1) {
    r1.close();
  }
  count += 1;
}).on('close', function () {
  solution(str, char);
  process.exit();
});

function solution(str, char) {
  const answer = Array.from(str, (v) => (v === char ? v : '')).join('').length;
  console.log('answer', answer);
}
