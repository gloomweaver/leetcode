/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  const result = [];

  if (this.length !== rowsCount * colsCount) {
    return result;
  }

  for (let row = 0; row < rowsCount; row++) {
    result[row] = [];
    for (let col = 0; col < colsCount; col++) {
      if (col % 2 === 0) {
        result[row][col] = this[rowsCount * col + row];
      } else {
        result[row][col] = this[rowsCount * col + (rowsCount - 1 - row)];
      }
    }
  }
  return result;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
