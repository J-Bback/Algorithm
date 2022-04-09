/**
 * @brief 섬나라 아일랜드 DFS
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N;
let cnt = 0;

r1.on('line', function (line) {
  if (cnt === 0) {
    N = Number(line);
  } else {
    input.push(line.split(' ').map((v) => Number(v)));
  }
  if (cnt === N) {
    r1.close();
  }
  cnt++;
}).on('close', function () {
  solution(N, input);
  process.exit();
});

function solution(n, graph) {
  let answer = 0;
  let dx = [1, 1, 0, -1, -1, -1, 0, 1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        queue.push([i, j]);
        graph[i][j] = 0;
        answer++;
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 1) {
              graph[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  console.log(answer);
}
