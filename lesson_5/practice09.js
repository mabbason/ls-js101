/*
PROBLEM
  input: array, nested array
  output: COPY of the array(s) sorted
  rules:
    EXPLICIT
    - sort each subarray in ascending order
    - return a NEW array, do not sort the original 

EXAMPLES
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

result
arr = [['a', 'b', 'c'], [1, 2, 3], ['black', 'blue', 'green']];

DATA STRUCTURE
  array

ALGORITHM
 - iterate through the outer array
 - copy each sub-array
 - sort each sub array
  - if an element in a sub array is a number
    make sure to sort it correctly

CODE
*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arrSorted = arr.map( subArr => {
  let sortedSubArr;
  
  if(typeof subArr[0] === 'number') {
    sortedSubArr = [...subArr].sort((a, b) => {
      return Number(a) - Number(b);
    });    
  } else {
    sortedSubArr = [...subArr].sort();
  }
  return sortedSubArr;
});

console.log(arrSorted);
console.log(arr);