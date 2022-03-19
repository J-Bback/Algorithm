/**
 * @brief 세 수 중 최솟값 구하기
 * @author J-Bback
 *  */

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

r1.on('line', function(line) {
  console.log(line);
  r1.close();
}).on('close', function() {

  process.exit();
});