/*
PROBLEM
 input: array
 output: array, with two elements each an array itself
 rules:
  Explicit
  - split the values of an array evenly between two nested arrays
  - if the array has odd length, put the middle value into 1st nested array

  Implicit
  - initial array is empty returns same stucture, but two empty nested arrays
  - initial array has one value, same structure, but second array is empty
  - when looking at overall sequence of values, their sequence doesn't change

  Questions
  - is the original array modified?
  - returning the original array?

EXAMPLES
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

DATA STRUCTURE
array, two nested arrays

ALGORITHM
- create function halvsies has one arg, takes array
- create empty halvsieArr array
- determine length of argArray
- if even, divide length by two to get the length of each nested array
- if odd
  1st nest arr length = divide argArray length by two and add one
  2nd nest arr length = divide argArray by two
- copy the 1st nest arr length number of elements from argArray into element 0 of halvsieArr
- copy the remaining elements from argArray into element 1 of halvsieArr
- return halvsieArr
CODE
*/

function halvsies(argArray) {
  let halvsieArr = [];
  let firstArrLength = (argArray.length % 2) + Math.floor(argArray.length / 2);
  
  halvsieArr[0] = argArray.slice(0, firstArrLength);
  halvsieArr[1] = argArray.slice(firstArrLength);

  return halvsieArr;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]