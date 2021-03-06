/**
 * @brief 입력된 문자열 중에서 A를 #으로 바꿔서 출력하기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function (line) {
  input = line;
  r1.close();
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(str) {
  let arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === 'A') {
      arr[i] = '#';
    }
  }
  console.log(arr.join(''));
}
