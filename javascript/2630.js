/**
 * @param {Function} fn
 * @return {Function}
 */
const VAL = Symbol();
const memoize = (fn) => {
  const argsMap = new Map();
  return (...args) => {
    const final = args.reduce((acc, cur) => acc?.get(cur), argsMap);
    if (final?.has(VAL)) {
      return final.get(VAL);
    }

    const res = fn(...args);
    const insertTo = args.reduce((acc, arg) => {
      if (!acc.has(arg)) {
        acc.set(arg, new Map());
      }
      return acc.get(arg);
    }, argsMap);
    insertTo.set(VAL, res);

    return res;
  };
};

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
