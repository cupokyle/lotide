const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Kyle", "Forsyth", 2021, "Grad"]);
assertEqual(result.length, 3); // ensure we get back three elements
assertEqual(result[0], "Forsyth"); // ensure first element is "Forsyth"
assertEqual(result[1], 2021); // ensure second element is "2021"