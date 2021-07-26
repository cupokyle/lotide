const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// Test

describe("#findKeyByValue", () => {
  it("returns 'a' for {a:1, b:2, c:3, d:2}, 1)", () => {
    assert.deepEqual(findKeyByValue({a:1, b:2, c:3, d:2}, 1), "a")
  });
  it("returns 'b' for {a:1, b:2, c:3, d:2}, 2)", () => {
    assert.deepEqual(findKeyByValue({a:1, b:2, c:3, d:2}, 2), 'b')
  });
})