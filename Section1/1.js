/**
 * @brief 세 수 중 최솟값 구하기
 * @author J-Bback
 *  */

const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require('constants');
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
  // console.log(solution2(input));
  solution(input);
  process.exit();
});
// 숫자 3개만 입력 받을 때 솔루션
function solution2(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let min = arr[0] > arr[1] ? arr[1] : arr[0];
  return min > arr[2] ? arr[2] : min;
}
// 숫자가 몇개든 상관없이 최솟값 구하기
function solution(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let min = arr[0] < arr[1] ? arr[0] : arr[1];
  arr.map((n, index) => {
    if (index > 0 && index < (arr.length - 1)) {
      if (min > arr[index+1]) {
        return min = arr[index+1];
      }
    }
    return;
  });
  console.log(min);
}