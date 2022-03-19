/**
 * @brief 중복 문자 제거
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str;

r1.on('line', function (line) {
  str = line;
  r1.close();
}).on('close', function () {
  solution(str);
  process.exit();
});

function solution(str) {
  let arr = str.split('');
  const answer = arr.reduce((acc, cur) => (acc.includes(cur) ? acc : acc + cur));
  console.log(answer);
}
