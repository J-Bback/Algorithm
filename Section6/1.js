/**
 * @brief 올바른 괄호 판별
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

// 스택
function solution(str) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      answer.push(str[i]);
    }
    if (str[i] === ')') {
      answer.pop();
    }
  }
  if (!answer) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
