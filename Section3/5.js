/**
 * @brief 문자열 압축
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function (line) {
  input = line.split('');
  r1.close();
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(arr) {
  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      if (cnt > 1) {
        arr[i] = '';
      }
      cnt++;
    } else {
      if (cnt > 1) {
        arr[i] = cnt;
        cnt = 1;
      }
    }
  }
  const answer = arr.join('');
  console.log(answer);
}
