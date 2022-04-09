/**
 * @brief 자릿수의 합
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number;
let count = 0;
let input;

r1.on('line', function (line) {
  if (count === 0) {
    number = Number(line);
  } else {
    input = line.split(' ');
  }
  if (count > 0) {
    r1.close();
  }
  count++;
}).on('close', function () {
  solution(number, input);
  process.exit();
});

function solution(num, arr) {
  let sumArr = [];
  let answer;
  const copyArr = arr.slice();
  for (let i = 0; i < num; i++) {
    arr[i] = arr[i].split('');
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Number(arr[i][j]);
      sum += arr[i][j];
    }
    sumArr.push(sum);
  }
  const max = sumArr.reduce((a, b) => (a < b ? b : a));
  const value = sumArr.map((v, i) => (v === max ? copyArr[i] : ''));
  if (value) {
    console.log(value);
    answer = Math.max(...value);
  }
  console.log(answer);
}
