const assertObjectsEqual = require('./assertObjectsEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (results[item]) {
      results[item]++;
    } else {
      if (itemsToCount[item]) {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;