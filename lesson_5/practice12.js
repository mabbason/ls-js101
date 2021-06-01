/*
PROBLEM
  input: array, nested arrays with integers
  output: COPY of all original array(s) structure
  rules:
    EXPLICIT
    - keep data structure the same
    - only populate data structure with integers that are multiples of 3
    - do not mutate original arrays
    - use filter()

EXAMPLES
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

DATA STRUCTURE
array, nested arrays

ALGORITHM
- create function multiplesOf3 takes array w nested arrays as arg
- iterate through outer arr
  - iterate through sub arrays
    - use Filter to return only values that are multiples of 3
- return the outer arr

CODE
*/

let nestedInts = [[2], [3, 5, 7], [9], [11, 15, 18]];

function multiplesOf3(arr) {
  return arr.map( subArr => {
    return subArr.filter( int => int % 3 === 0);
  });
}

console.log(multiplesOf3(nestedInts));
console.log(nestedInts);