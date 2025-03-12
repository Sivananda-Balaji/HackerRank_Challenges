function diagonalDifference(arr) {
  // Write your code here
  let dia1 = 0;
  let dia2 = 0;
  const row = arr.length;
  const col = arr.length;
  let i = 0,
    j = 0;
  while (i < row && j < col) {
    dia1 += arr[i][j];
    i++;
    j++;
  }
  (i = 0), (j = col - 1);
  while (i < col) {
    dia2 += arr[i][j];
    i++;
    j--;
  }
  return Math.abs(dia1 - dia2);
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const result = diagonalDifference(arr);

console.log(result);
