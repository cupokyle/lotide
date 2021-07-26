const assertObjectsEqual = require('./assertObjectsEqual');

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

module.exports = countLetters;