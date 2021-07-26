const assert = require('chai').assert;
const flatten = require('../flatten');

// Test

describe("#flatten", () => {
  it("returns [1, 2, 4, 5, 3] for [1, 2, [4, 5], 3]", () => {
    assert.deepEqual(flatten([1, 2, [4, 5], 3]), [1, 2, 4, 5, 3])
  });
  it("returns ['Johnny', 3] for [['Johnny'], 3]", () => {
    assert.deepEqual(flatten([['Johnny'], 3]), ['Johnny', 3])
  });
})