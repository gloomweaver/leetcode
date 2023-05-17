import { test } from "node:test";
import assert from "node:assert";

import "../2619";

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

test("2619", async (t) => {
  await t.test("case 1", () => {
    assert.equal([1, 2, 3].last(), 3);
  });
  await t.test("case 2", () => {
    assert.equal([].last(), -1);
  });
});
