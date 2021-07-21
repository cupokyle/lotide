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

const middle = function(array) {
  //Create new array
  let solution = [];
  //If less than 3 elements, return empty
  if (array.length < 3) {
    return solution;
  }
  //Find the middle index
  const middleIndex = (array.length - 1) / 2;
  //If there are an even number of elements, return both middle elements
  if (array.length % 2 === 0) {
    let mid1 = Math.floor(middleIndex);
    let mid2 = Math.round(middleIndex);
    solution.push(array[mid1], array[mid2]);
  } else {
  // Odd: just the middle element.
    solution.push(array[middleIndex]);
  }
  return solution;
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle(["Bob", "Peter", "Hank", 100, "Tom", "Lester"]), ["Hank", 100]);
assertArraysEqual(middle([1, 1, 1]), [1]);
assertArraysEqual(middle([2, 1]), []);

