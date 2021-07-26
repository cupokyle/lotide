const assert = require('chai').assert;
const countLetters = require('../countLetters');

// Test

describe("#countLetters", () => {
  it("returns { k: 4, y: 4, l: 5, e: 5 } for 'kyle kyle kyle le kyle'", () => {
    assert.deepEqual(countLetters("kyle kyle kyle le kyle"), { k: 4, y: 4, l: 5, e: 5 } )
  });
})