/**
 * @brief 두 배열 합치기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let M;
let firstInput;
let secondInput;
let cnt = 0;

r1.on('line', function (line) {
  if (cnt === 0) {
    N = Number(line);
  }
  if (cnt === 1) {
    firstInput = line.split(' ');
  }
  if (cnt === 2) {
    M = Number(line);
  }
  if (cnt === 3) {
    secondInput = line.split(' ');
  }
  if (cnt === 3) {
    r1.close();
  }
  cnt++;
}).on('close', function () {
  solution(firstInput, secondInput);
  process.exit();
});

function solution(arr1, arr2) {
  arr1.push(...arr2);
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
  }
  const answer = arr1.sort((a, b) => a - b);
  console.log(...answer);
}
