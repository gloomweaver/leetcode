class EventEmitter {
  #subscribers = new Map();
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.#subscribers.has(eventName)) {
      this.#subscribers.set(eventName, new Set());
    }
    this.#subscribers.get(eventName).add(callback);
    return {
      unsubscribe: () => this.#subscribers.get(eventName).delete(callback),
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.#subscribers.has(eventName)) {
      return [];
    }

    const values = this.#subscribers.get(eventName).values();
    const res = [];

    for (const fn of values) {
      res.push(fn(...args));
    }

    return res;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
