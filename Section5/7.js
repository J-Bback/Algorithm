/**
 * @brief 아나그램 찾기 (해쉬)
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
  if (cnt === 0) {
    input1 = line;
  } else {
    input2 = line;
  }
  if (cnt > 0) {
    r1.close();
  }
  cnt++;
}).on('close', function () {
  solution2(input1, input2);
  process.exit();
});

function solution(str1, str2) {
  const sort1 = str1.split('').sort((a, b) => {
    if (a < b) return -1;
    if (a === b) return 0;
    if (a > b) return 1;
    else return -1;
  });
  const sort2 = str2.split('').sort((a, b) => {
    if (a < b) return -1;
    if (a === b) return 0;
    if (a > b) return 1;
    else return -1;
  });
  if (sort1.join('') === sort2.join('')) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

function solution2(str1, str2) {
  let sH = new Map();
  let answer = 'YES';
  for (let x of str1) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) {
      answer = 'NO';
    }
    sH.set(x, sH.get(x) - 1);
  }
  console.log(answer);
}
