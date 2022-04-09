/**
 * @brief 지도에서 봉우리 찾기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num;
let input = [];
let count = 0;

r1.on('line', function (line) {
  if (count === 0) {
    num = Number(line);
  } else {
    input.push(line.split(' '));
  }
  if (count === num) {
    r1.close();
  }
  count++;
}).on('close', function () {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      input[i][j] = Number(input[i][j]);
    }
  }
  search(num, input);
  process.exit();
});

function search(n, map) {
  const moveRow = [1, -1, 0, 0];
  const moveCol = [0, 0, 1, -1];
  let answer = 0;
  console.log('map', map);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; i++) {
        let nextRow = i + moveRow[k];
        let nextCol = j + moveCol[k];
        if (
          nextRow >= 0 &&
          nextRow < n &&
          nextCol >= 0 &&
          nextCol < n &&
          map[nextRow][nextCol] >= map[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  console.log(answer);
}
