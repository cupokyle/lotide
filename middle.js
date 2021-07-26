const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
