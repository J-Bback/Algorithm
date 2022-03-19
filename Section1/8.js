/**
 * @brief 일곱난쟁이
 * @author J-Bback
 *  */

// 노가다로 풀었기 때문에 강의 듣기

// 원하는방법: 1. 쉬운 노가다 2. 정렬한 뒤 중앙값들을 더해서 100보다 큰지 작은지 판별 후 작으면 작은 값 두개 버리고 크면 큰값 두개 버리고 다시 반복~...

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 1;

r1.on('line', function (line) {
  input.push(Number(line));
  if (count === 9) {
    r1.close();
  }
  count += 1;
}).on('close', function () {
  solution(input);
  process.exit();
});

// 순열과 조합 문제! 순열과 조합을 코드로 어떻게 나타낼 수 있을까?
//9개 중에 7개를 중복없이 골라서 그들의 합을 구한다.
//6개 값을 고정했을때 가능한 경우의 수 + (5개 값을 고정했을 때 가능한 경우의 수 - 6개 값을 고정했을 때 가능한 경우의 수) + ... + 1개 값 고정~ - 2개 값 고정~
function solution(arr) {
  // const sorted = arr.sort((a, b) => a - b);
  let sum = 0;
  let answer;
  while (sum !== 100) {
    sum = 0; // sum === 100 아니면 초기화
    for (let i = 0; i < 9; i++) {
      if (sum === 100) return;
      const eight = [...arr];
      eight.splice(i, 1);
      for (let j = 1; j < 9; j++) {
        if (sum === 100) return;
        const seven = [...eight];
        seven.splice(j, 1);
        // console.log('seven', seven);
        sum = seven.reduce((acc, cur) => acc + cur);
        // console.log('sum', sum);
        if (sum === 100) {
          answer = seven;
          console.log(answer);
        }
      }
    }
  }
}
