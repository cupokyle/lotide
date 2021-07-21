const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    let allMatch = true;
    for (let key of Object.keys(object1)) {
      let currentKey = key;
      let currentMatch = false;
      for (let otherKey of Object.keys(object2)) {
        if (Array.isArray(object1[currentKey]) && Array.isArray(object2[otherKey]) && eqArrays(object1[currentKey], object2[otherKey])) {
          currentMatch = true;
        }
        if (currentKey === otherKey && object1[currentKey] === object2[currentKey]) {
          currentMatch = true;
        }
      }
      if (currentMatch === false) {
        allMatch = false;
      }
    }
    return allMatch;
  }
};

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


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 3]});