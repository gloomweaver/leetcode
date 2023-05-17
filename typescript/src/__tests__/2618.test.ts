import { test } from "node:test";
import assert from "node:assert";

import { checkIfInstanceOf } from "../2618";

test("2618", async (t) => {
  await t.test("case 1", () => {
    assert.equal(checkIfInstanceOf(new Date(), Date), true);
  });
  await t.test("case 2", () => {
    assert.equal(checkIfInstanceOf(5, Number), true);
  });
  await t.test("case 3", () => {
    assert.equal(checkIfInstanceOf([], Error), false);
  });
  await t.test("case 4", () => {
    assert.equal(checkIfInstanceOf(0, Object), true);
  });
  await t.test("case 4", () => {
    assert.equal(checkIfInstanceOf(null, null), false);
  });
});
