/**
 * @brief K번째 큰 수
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let N;
let K;
let count = 0;

r1.on('line', function (line) {
  if (count === 0) {
    N = Number(line.split(' ')[0]);
    K = Number(line.split(' ')[1]);
  } else {
    input = line.split(' ');
  }
  if (count > 0) {
    r1.close();
  }
  count++;
}).on('close', function () {
  solution(N, K, input);
  process.exit();
});

function solution(n, k, arr) {
  for (let i = 0; i < n; i++) {
    arr[i] = Number(arr[i]);
  }
  const sorted = arr.sort((a, b) => b - a);
  let sumArr = [];
  for (let j = 0; j < n; j++) {
    for (let k = 1; k < n; k++) {
      for (let l = 2; l < n; l++) {
        if (j !== k && k !== l && l !== j) {
          sumArr.push(sorted[j] + sorted[k] + sorted[l]);
        }
      }
    }
  }
  const sortArr = sumArr.sort((a, b) => b - a);
  const setArr = [...new Set(sortArr)];
  console.log(setArr[k - 1]);
}
