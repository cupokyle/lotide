const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    let allMatch = true;
    for (let key of Object.keys(object1)) {
      let currentKey = key;
      let currentMatch = false;
      for (let otherKey of Object.keys(object2)) {
        if (Array.isArray(object1[currentKey]) && Array.isArray(object2[otherKey]) && eqArrays(object1[currentKey], object2[otherKey])) {
          currentMatch = true;
        }
        if (currentKey === otherKey && object1[currentKey] === object2[currentKey]) {
          currentMatch = true;
        }
      }
      if (currentMatch === false) {
        allMatch = false;
      }
    }
    return allMatch;
  }
};

module.exports = eqObjects;