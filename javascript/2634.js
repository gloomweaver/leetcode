/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
  return arr.reduce((acc, cur, index) => {
    if (fn(cur, index)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
