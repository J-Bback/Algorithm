/**
 * @brief 학급 회장 뽑기 (해쉬)
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let N;
let cnt = 0;

r1.on('line', function (line) {
  if (cnt === 0) {
    N = Number(line);
  } else {
    input = line;
  }
  if (cnt > 0) {
    r1.close();
  }
  cnt++;
}).on('close', function () {
  solution(N, input);
  process.exit();
});

function solution(n, str) {
  const sH = new Map();
  for (let x of str) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  console.log(answer);
}
