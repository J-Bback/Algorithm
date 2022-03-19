/**
 * @brief A를 #으로
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