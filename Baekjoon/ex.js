// readline을 활용한 입력방법입니다.

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