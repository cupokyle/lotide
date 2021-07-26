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

const without = function(source, itemsToRemove) {
  // Create a new array
  let solution = [];
  // Loop through each source item
  for (let i = 0; i < source.length; i++) {
  // Unless we find an item that is in both source and itemsToRemove
  // We want to add all items
    let addThisItem = true;
    // Focusing on one source item, we check all itemsToRemove
    for (let item of itemsToRemove) {
      // If we find a match, We change it's addThisItem status to false
      if (item === source[i]) {
        addThisItem = false;
      }
      //Once for each source item, we check it's addThisItem status
    }
    if (addThisItem === true) {
      // If a source item's addThisItem status evaluates to true, we add it to our solution.
      solution.push(source[i]);
    }
  }
  return solution;
};

assertArraysEqual(without([1, 2, 3, 1, 2], [1, 2, 3, 4, 5]), []); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;