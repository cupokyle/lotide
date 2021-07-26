const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = flatten;