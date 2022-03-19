/**
 * @brief 홀수를 선별해서 그 합을 구하고, 홀수 중 최솟값 구하기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function(line) {
  
  r1.close();
}).on('close', function() {
  
  process.exit();
});