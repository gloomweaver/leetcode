function isValidSudoku(board: string[][]): boolean {
  let check = 0;
  // check rows
  for (const row of board) {
    for (const el of row) {
      const num = el.charCodeAt(0) - "0".charCodeAt(0);
      if (check & (1 << (num - 1))) {
        return false;
      }
      if (el !== ".") {
        check = check | (1 << (num - 1));
      }
    }
    check = 0;
  }
  // check columns
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      const el = board[y][x];
      const num = el.charCodeAt(0) - "0".charCodeAt(0);

      if (check & (1 << (num - 1))) {
        return false;
      }
      if (el !== ".") {
        check = check | (1 << (num - 1));
      }
    }
    check = 0;
  }
  // check squares
  for (let n = 0; n < 9; n++) {
    const cornerX = (3 * n) % 9;
    const cornerY = Math.floor(n / 3) * 3;
    for (let x = cornerX; x < cornerX + 3; x++) {
      for (let y = cornerY; y < cornerY + 3; y++) {
        const el = board[y][x];
        const num = el.charCodeAt(0) - "0".charCodeAt(0);

        if (check & (1 << (num - 1))) {
          return false;
        }
        if (el !== ".") {
          check = check | (1 << (num - 1));
        }
      }
    }
    check = 0;
  }
  return true;
}
