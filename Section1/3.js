/**
 * @brief 연필 개수
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function(line) {
  input = Number(line);
  r1.close();
}).on('close', function() {
  solution(input);
  process.exit();
});

function solution(n) {
  const answer = Math.ceil(n / 12);
  console.log('ANS', answer);
}