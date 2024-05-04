/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function map(arr, fn) {
  return arr.reduce((acc, cur, index) => {
    acc.push(fn(cur, index));
    return acc;
  }, []);
}
