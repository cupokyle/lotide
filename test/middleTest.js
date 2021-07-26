const middle = require('../middle');
const assert = require('chai').assert;

//Test

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4] )
  });
  it("returns [3] for [1, 4, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 4, 3, 4, 5]), [3] )
  });
  it("returns ['Hank', 100] for ['Bob', 'Peter', 'Hank', 100, 'Tom', 'Lester']", () => {
    assert.deepEqual(middle(["Bob", "Peter", "Hank", 100, "Tom", "Lester"]), ["Hank", 100] )
  });
  it("returns [1] for [1, 1, 1]", () => {
    assert.deepEqual(middle([1, 1, 1]), [1] )
  });
  it("returns [] for [2, 1]", () => {
    assert.deepEqual(middle([2, 1]), [] )
  });
})