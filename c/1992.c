#include <stdlib.h>

int* getFarmland(int** land, int x, int y, int rows, int cols) {
  int bottom = y;
  int right = x;
  while (right < cols && land[y][right] == 1) {
    right++;
  }
  while (bottom < rows && land[bottom][x] == 1) {
    bottom++;
  }

  for (int ix = x; ix < right; ix++) {
    for (int iy = y; iy < bottom; iy++) {
      land[iy][ix] = 0;
    }
  }
  int* res = malloc(sizeof(int) * 4);
  res[0] = y;
  res[1] = x;
  res[2] = bottom - 1;
  res[3] = right - 1;
  return res;
}

// Weird signature...
int** findFarmland(int** land, int landSize, int* landColSize, int* returnSize, int** returnColumnSizes) {
  int rows = landSize, cols = *landColSize;
  *returnSize = 0;
  int** res = malloc(sizeof(int*) * rows * cols);
  for (int y = 0; y < rows; y++) {
    for (int x = 0; x < cols; x++) {
      if (land[y][x] == 1) {
        int* coords = getFarmland(land, x, y, rows, cols);
        res[(*returnSize)++] = coords;
      }
    }
  }

  *returnColumnSizes = malloc(*returnSize * sizeof(int));
  for (int i; i < *returnSize; i++) {
    (*returnColumnSizes)[i] = 4;
  }

  return res;
}
