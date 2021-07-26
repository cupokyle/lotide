const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// Test

describe("#letterPositions", () => {
  it("returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'hello'", () => {
    assert.deepEqual(letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] })
  });
  it("returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4, 5 ] } for 'helloo'", () => {
    assert.deepEqual(letterPositions('helloo'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4, 5 ] })
  });
})