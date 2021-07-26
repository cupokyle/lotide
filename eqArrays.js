const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected) {
  //If array lengths do not match, false.
  if (actual.length !== expected.length) {
    return false;
  //If all items are not identical, false
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  //If above conditions are not triggered, true.
  return true;
};

module.exports = eqArrays;