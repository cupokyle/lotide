const assert = require('chai').assert;
const countOnly = require('../countOnly');



describe("#countOnly", () => {
  it("returns 1 for firstNames,['Jason']", () => {
    assert.deepEqual(countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 } )
  });
  it("returns undefined for firstNames, ['Karima']", () => {
    assert.deepEqual(countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": false, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2 })
  });
})
