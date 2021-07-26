const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// Test

describe("#eqObjects", () => {
  it("returns false for { c: '1', d: ['2', 3]}, { c: '1', d: ['2', 3, 4]}", () => {
    assert.equal(eqObjects({ c: '1', d: ['2', 3]}, { c: '1', d: ['2', 3, 4]}), false)
  });
  it("returns true for { hat: 'Red', hair: 'Black', kids: ['Susie', 'Lisa']}, { kids: ['Susie', 'Lisa'], hat: 'Red', hair: 'Black'}", () => {
    assert.equal(eqObjects({ hat: 'Red', hair: 'Black', kids: ['Susie', 'Lisa']}, { kids: ['Susie', 'Lisa'], hat: 'Red', hair: 'Black'}),true)
  })
});