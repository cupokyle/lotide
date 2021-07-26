const assert = require('chai').assert;
const tail = require('../tail');

// Test

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'] )
  });
  it("returns ['Forsyth', 2021, 'Grad'] for ['Kyle', 'Forsyth', 2021, 'Grad']", () => {
    assert.deepEqual(tail(['Kyle', 'Forsyth', 2021, 'Grad']), ['Forsyth', 2021, 'Grad'] )
  });
})