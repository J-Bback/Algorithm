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
  solution2(str);
  process.exit();
});
//중복문자 제거하는 문제
// reduce와 includes를 이용한 해답
function solution(str) {
  let arr = str.split('');
  const answer = arr.reduce((acc, cur) => (acc.includes(cur) ? acc : acc + cur));
  console.log(answer);
}
// set을 이용한 해답
function solution2(str) {
  const answer = [...new Set(Array.from(str))].join('');
  console.log(answer);
}
