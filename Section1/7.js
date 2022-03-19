/**
 * @brief 10부제
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let date;
let carNums = [];
let count = 0;

r1.on('line', function (line) {
  if (count === 0) {
    date = Number(line);
  } else {
    carNums = line.split(' ');
  }
  if (count === 1) {
    r1.close();
  }
  count += 1;
}).on('close', function () {
  solution(date, carNums);
  process.exit();
});

function solution(date, carNums) {
  const penalty = [];
  const carEndNum = [];
  for (let i = 0; i < 7; i++) {
    carEndNum.push(Number(carNums[i].split('')[1]));
    if (date === carEndNum[i]) {
      penalty.push(carNums[i]);
    }
  }
  // console.log('penalty', penalty);
  // console.log(carEndNum);
  console.log(penalty.length);
}
