/**
 Do not return anything, modify matrix in-place instead.
 */
function transpose(matrix: number[][]): void {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = x + 1; y < matrix.length; y++) {
      const temp = matrix[y][x];
      matrix[y][x] = matrix[x][y];
      matrix[x][y] = temp;
    }
  }
}

function reflect(matrix: number[][]): void {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length / 2; x++) {
      const temp = matrix[y][x];
      matrix[y][x] = matrix[y][matrix.length - 1 - x];
      matrix[y][matrix.length - 1 - x] = temp;
    }
  }
}

function rotate(matrix: number[][]): void {
  transpose(matrix);
  reflect(matrix);
}
