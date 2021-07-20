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
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const flatten = function(array) {
  let solution = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(numberInArray => {
        solution.push(numberInArray);
      });
    } else {
      solution.push(element);
    }
  });
  return solution;
};

assertArraysEqual(flatten([1, 2, [4, 5], 3]), [1, 2, 4, 5, 3]);