class Iterator {
  hasNext(): boolean {
    return true;
  }

  next(): number {
    return 0;
  }
}

class PeekingIterator {
  private peekedValue: any;

  constructor(private iterator: Iterator) {
    this.peekedValue = this.iterator.next();
  }

  peek(): number {
    return this.peekedValue;
  }

  next(): number {
    const res = this.peekedValue;
    this.peekedValue = this.iterator.hasNext() ? this.iterator.next() : null;
    return res;
  }

  hasNext(): boolean {
    return !!this.peekedValue;
  }
}
