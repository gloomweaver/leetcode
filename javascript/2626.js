/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums, fn, init) {
  let res = init;
  nums.forEach((val, index, array) => {
    res = fn(res, val, index, array);
  });
  return res;
}
