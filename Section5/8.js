/**
 * @brief 모든 아나그램 찾기 (해쉬, 투포인터, 슬라이딩 윈도우)
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input1;
let input2;
let cnt = 0;

r1.on('line', function (line) {
  if (cnt === 0) input1 = line;
  if (cnt === 1) input2 = line;
  if (cnt === 1) r1.close();
  cnt++;
}).on('close', function () {
  solution(input1, input2);
  process.exit();
});

function solution(str1, str2) {
  let sH = new Map();
  let tH = new Map();

  for (let x of str2) {
    if (tH.has(x)) {
      tH.set(x, tH.get(x) + 1);
    } else {
      tH.set(x, 1);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (sH.has(str1[i])) {
      sH.set(str1[i], sH.get(str1[i]) + 1);
    } else {
      sH.set(str1[i], 1);
    }
  }
  let lt = 0;
  let len = str2.length - 1;
  let answer = 0;
  for (let rt = len; rt < str1.length - len; rt++) {
    if (sH.has(str1[rt])) {
      sH.set(str1[rt], sH.get(str1[rt]) + 1);
    } else {
      sH.set(str1[rt], 1);
    }
    if (compareMaps(sH, tH)) answer++;
    sH.set(str1[lt], sH.get(str1[lt]) - 1);
    if (sH.get(str1[lt]) === 0) sH.delete(str1[lt]);
    lt++;
  }
  console.log(answer);
}
/* 두 해쉬 맵(객체)을 비교할 때 고려할 사항
1. 사이즈 2. key 3. key에 해당하는 value */
function compareMaps(sH, tH) {
  if (sH.size !== tH.size) return false;
  for (let [key, val] of sH) {
    if (!tH.has(key) || tH.get(key) !== val) return false;
    else return true;
  }
}
