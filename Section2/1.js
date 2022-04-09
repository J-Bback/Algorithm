/**
 * @brief
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
    input = line.split(' ');
  }
  if (count === 1) {
    r1.close(0);
  }
  count++;
}).on('close', function () {
  solution(num, input);
  process.exit();
});

function solution(num, input) {
  // const answer = Array.from(input, (v, i) => (v > input[i - 1] ? v : ''));
  let answer = [];
  const initialValue = Number(input[0]);

  for (let i = 0; i < num - 1; i++) {
    Number(input[i]) < Number(input[i + 1]) ? answer.push(Number(input[i + 1])) : '';
  }
  answer.unshift(initialValue);
  const print = answer.join(' ');
  console.log('print', print);
  // console.log('ans', answer);
  // arr.unshift(input[0]);
  // console.log('answer', arr);
}
