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

//----------------------------------------------------------------------------------//

const myFriends = ["Benjamin", "Aaron", "Tiffany", "Moe", "Randall", "Lillian", "Jim"];

const takeUntil = function(array, callback) {
  const results = [];
  let i = 0;
  while (!callback(array[i])) {
    results.push(array[i]);
    i++;
  }
  return results;
};

const results1 = takeUntil(myFriends, x => x.length === 3);
const results2 = takeUntil(myFriends, x => x[x.length - 1] === "m");

assertArraysEqual((results1), ["Benjamin", "Aaron", "Tiffany"]); //pass
console.log("-----------");
assertArraysEqual((results2), ["Benjamin", "Aaron", "Tiffany", "Moe", "Randall", "Lillian"]); // pass
console.log("-----------");
assertArraysEqual((results2), ["Benjamin", "Aaron", "Tiffany", "Moe", "Randall", "Lillian", "Jim"]); // fail

module.exports = takeUntil;
