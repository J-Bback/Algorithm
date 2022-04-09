/**
 * @brief 괄호 문자 제거
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function (line) {
  input = line;
  r1.close();
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(str) {
  let answer = [];
  let stack = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    }
    if (str[i] === ')') {
      stack.pop();
    }

    if (stack.length === 0 && str[i + 1] !== '(') {
      answer.push(str[i + 1]);
    }
  }
  console.log(answer.join(''));
}
