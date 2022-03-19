/**
 * @brief 홀수를 선별해서 그 합을 구하고, 홀수 중 최솟값 구하기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function (line) {
  input = line.split(' ');
  r1.close();
}).on('close', function () {
  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
  }
  solution(input);
  process.exit();
});

function solution(arr) {
  const odds = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      odds.push(arr[i]);
      sum += arr[i];
    }
  }
  const min = odds.reduce((min, val) => (min < val ? min : val));
  // const add = odds.reduce((acc, cur) => acc + cur);
  // console.log('add', add);
  console.log(sum);
  console.log(min);
}
