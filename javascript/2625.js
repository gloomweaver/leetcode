/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
function flat(arr, n, res = []) {
  arr.forEach((val) => {
    if (Array.isArray(val) && n > 0) {
      flat(val, n - 1, res);
    } else {
      res.push(val);
    }
  });
  return res;
}
