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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
  }
};

//-------------------------------------------------------//

const words = ["you", "cant", "always", "get", "what", "you", "want"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual((results1), ["y", "c", "a", "g", "w", "y", "w"]);

const results2 = map(words, word => word.length);
assertArraysEqual((results2), [3, 4, 6, 3, 4, 3, 4]);

const results3 = map(words, word => word.toUpperCase());
assertArraysEqual((results3), ["YOU", "CANT", "ALWAYS", "GET", "WHAT", "YOU", "WANT"]);

const results4 = map(words, word => word[0] + "up");
assertArraysEqual((results4), ["yup", "cup", "aup", "gup", "wup", "yup", "wup"]);

module.exports = map;