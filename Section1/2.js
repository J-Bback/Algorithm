/**
 * @brief 삼각형 판별하기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function(line) {
  input = line.split(' ');
  solution(input);
  r1.close();
}).on('close', function() {
  process.exit();
});

function solution(arr) {
  const sorted = arr;
  for (let i = 0; i < arr.length; i++) {
    sorted[i] = Number(sorted[i]);
  }
  sorted.sort((a, b) => {
    return a-b;
  });
  if (sorted[0] + sorted[1] > sorted[2]) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}