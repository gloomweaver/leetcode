class TimeLimitedCache {
  #values = new Map();

  constructor() {}

  set(key, value, duration) {
    const prev = this.#values.get(key);
    const timeoutId = setTimeout(() => this.#values.delete(key), duration);
    this.#values.set(key, {
      value,
      timeoutId
    });
    if (prev?.timeoutId) {
      clearTimeout(prev.timeoutId);
      return true;
    }
    return false;
  }

  get(key) {
    const { value } = this.#values.get(key) ?? {};
    if (!value) {
      return -1;
    }
    return value;
  }

  count() {
    let count = 0;
    for (let [, val] of this.#values.entries()) {
      count++;
    }
    return count;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
