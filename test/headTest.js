const assertEqual = require('../assertEqual');
const head = require('../head');

//Tests

assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([7, "Lighthouse", "Labs"]), 7);
