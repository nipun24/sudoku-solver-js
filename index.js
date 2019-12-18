const { performance } = require("perf_hooks");
var puzzle = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0]
];

var start = performance.now();

if (solve(puzzle)) {
  console.log(puzzle);
} else {
  console.log("no sol");
}

var end = performance.now();
var duration = end - start;
console.log(duration);

function isSafe(arr, row, col, num) {
  for (var i = 0; i < 9; i++) {
    var m = Math.floor(row / 3) * 3 + Math.floor(i / 3);
    var n = Math.floor(col / 3) * 3 + (i % 3);
    if (arr[row][i] === num || arr[i][col] === num || arr[m][n] === num) {
      return false;
    }
  }
  return true;
}

function solve(arr) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (arr[i][j] === 0) {
        for (var num = 1; num <= 9; num++) {
          if (isSafe(arr, i, j, num)) {
            arr[i][j] = num;
            if (solve(arr)) {
              return true;
            } else {
              arr[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
