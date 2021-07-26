const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

//Test

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([4, 5, 3], [4, 5, 3]);
assertArraysEqual([0], [0]);
assertArraysEqual(["Peter", "Lois", "Stewie", "Chris", "Meg", "Brian"], ["Peter", "Lois", "Stewie", "Chris", "Meg", "Brian"]);