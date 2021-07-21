const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

assertEqual(findKeyByValue({a:1, b:2, c:3, d:2}, 1), "a");
assertEqual(findKeyByValue({a:1, b:2, c:3, d:2}, 2), "b");
assertEqual(findKeyByValue({a:"john", b:"johnny", c:"johnathon", d:"j"}, "johnathon"), "c");
assertEqual(findKeyByValue({a:1, b:2, c:3, d:"pineapple"}, "pineapple"), "d");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);