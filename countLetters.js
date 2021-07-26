const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let solution = {};
  for (let letter of string) {
    if (solution[letter]) {
      solution[letter]++;
    } else {
      if (letter !== ' ') {
        solution[letter] = 1;
      }
    }
  }
  return solution;
};

assertEqual(countLetters("kyle kyle kyle le kyle"), { k: 4, y: 4, l: 5, e: 5 });

module.exports = countLetters;