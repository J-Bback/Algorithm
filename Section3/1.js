/**
 * @brief 회문 문자열 탐색
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function (line) {
  input = line.split('');
  r1.close();
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(str) {
  const len = str.length;
  let answer = 1;
  for (let j = 0; j < len; j++) {
    str[j] = str[j].toUpperCase();
  }
  for (let i = 0; i < parseInt(len / 2); i++) {
    if (!(str[i] === str[len - 1 - i])) {
      answer = 0;
      break;
    }
  }
  if (answer) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
