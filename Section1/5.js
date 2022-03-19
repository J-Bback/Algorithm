/**
 * @brief 최솟값 구하기
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
  r1.close();
}).on('close', function() {
    solution4(input);
  process.exit();
});
// 반복문 사용
function solution1(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  let len = arr.length;
  let answer = arr[len - 1];
  while(len--) {
    if (answer > arr[len - 1]) {
      answer = arr[len - 1];
    }
  }
  console.log(answer);
}

// Math함수 사용: 문자열도 가능
function solution2(arr) {
  const answer = Math.min(...arr);
  console.log(answer);
}

// reduce 사용
function solution3(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  const answer = arr.reduce((min, val) => min < val ? min : val);
  console.log(answer);
}

// sort 사용
function solution4(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  const answer = arr.sort((a, b) => a-b)[0];
  console.log(answer);
}