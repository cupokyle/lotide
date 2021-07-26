const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
  }
};


module.exports = assertArraysEqual;