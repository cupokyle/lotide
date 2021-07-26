const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

// assertEqual(findKeyByValue({a:1, b:2, c:3, d:2}, 1), "a");
// assertEqual(findKeyByValue({a:1, b:2, c:3, d:2}, 2), "b");
// assertEqual(findKeyByValue({a:"john", b:"johnny", c:"johnathon", d:"j"}, "johnathon"), "c");
// assertEqual(findKeyByValue({a:1, b:2, c:3, d:"pineapple"}, "pineapple"), "d");

module.exports = findKeyByValue;