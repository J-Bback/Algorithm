/**
 * @brief 10부제
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