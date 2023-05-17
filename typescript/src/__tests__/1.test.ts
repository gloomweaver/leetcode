import assert from "assert";
import { test } from "node:test";

import { twoSum } from "../1";

test("1", (t) => {
  t.test("case 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    assert.deepStrictEqual(twoSum(nums, target), expected);
  });
});
