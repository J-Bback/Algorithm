/**
   * @brief 최단 거리 구하기 문제
   * @author J-Bback
*/

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let num;
let graph = [];
let count = 0;

rl.on("line", function(input) { // 반복하여 터미널에 입력을 받음, 조건문이 없을 경우 한번만 입력받음.
	if (count === 0) {
		num = Number(input);
	} else {
		graph.push(input.split(' '));
	}
	if (count == num) {
		rl.close();	
	}
	count += 1;
}).on("close", function() { // 위에서 입력받는 코드실행(조건문)이 끝나면 여기서 출력 코드 실행.
	BFS(num, graph, 0, 0);
	process.exit();
});

function BFS(n, graph, startRow, startCol) {
	const path = Array.from(new Array(n), () => new Array(n).fill(0));
const visited = Array.from(new Array(n), () => new Array(n).fill(0));
	const dx = [1, -1, 0, 0];
	const dy = [0, 0, 1, -1];
	const queue = [];
	
	queue.push([startRow, startCol]);
	path[startRow][startCol] = 1;
	while(queue.length !== 0) {
		const target = queue.shift();
		const currentRow = target[0];
		const currentCol = target[1];

		if (!visited[currentRow][currentCol]) {
			visited[currentRow][currentCol] = 1;
			
			for (let i = 0; i < 4; i++) {
				const nextRow = currentRow + dx[i];
				const nextCol = currentCol + dy[i];
				if (
					rangeCheck(n, nextRow, nextCol) &&
					Number(graph[nextRow][nextCol]) === 1 &&
					Number(visited[nextRow][nextCol]) !== 1
				) {
					queue.push([nextRow, nextCol]);
					path[nextRow][nextCol] = path[currentRow][currentCol] + 1;
				}
			}
		}
	}
	console.log(path[n-1][n-1]);
}
	
function rangeCheck(n, nextRow, nextCol) {
	if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
		return true;
	} else {
		return false;
	}
}
	
	