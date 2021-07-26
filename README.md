# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cupokyle/lotide`

**Require it:**

`const _ = require('@cupokyle/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: asserts whether two values are identical.
* `eqArrays(array1, array2)`: returns true if two arrays are identical.
* `assertArraysEqual(actual, expected)`: asserts whether two arrays are identical.
* `eqObjects(object1, object2)`: returns true if two objects are identical.
* `assertObjectsEqual(actual, expected)`: asserts whether two objects are identical.
* `countLetters(string)`: takes in a string and outputs an object containing a numeric value for how many times each letter appeared in the string.
* `countOnly(array, itemsToCount)`: takes in an array and an object, and returns an object containing only the count of each array value that held a truthy value in the input object.
* `findKey(object, callback)`: returns the key (as a string) of the first property that satisfies the provided callback function.
* `findKeyByValue(object, value)`: returns the key (as a string) of the first property that's value matches the provided input value.
* `flatten(array)`: returns an array virtually-identical to the input however with no nested arrays and all formerly nested values present.
* `head(array)`: returns the first value in an array.
* `middle(array)`: returns the middle value/values of an array.
* `tail(array)`: returns a new array without the initial value.
* `map(array, callback)`: returns a new array in which the contents have been altered by a callback function.
* `letterPositions(string)`: returns an object that lists the positions that each letter resides in a string.
* `takeUntil(array, callback)`: returns a new array that lists all items of the original array up until the provided callback function is no longer satisfied.
* `without(array, itemsToRemove)`: returns a new array without any value provided in the itemsToRemove argument.