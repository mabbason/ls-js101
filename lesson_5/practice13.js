/*
PROBLEM
  input: array, w nested arrays
  output: original array(s), sorted
  rules:
    EXPLICIT
    - objective is to sort the elements in the outer array
      - which are all nested arrays
    - sort them by the sum of ONLY THE ODD NUMBERS contained in each sub array


EXAMPLES
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]]; //original array

sort by only odd numbers so... 1 + 3 < 1 + 7 < 1 + 5 + 3

[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ] //sorted array

DATA STRUCTURE
original array structure

ALGORITHM
- invoke sort() on arr
- when comparing a and b
  - check the elements of the subarrays for odd even
    - sum up the odd elements only, reduce() seems good here
    - check the sum of odd a against the sum of odd b
      - should be ascending (smallest first) so a - b

CODE
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let oddSumA = a.reduce((sum, int) => {
    if(int % 2 !== 0) {
      sum += int;
    }
    return sum;
  });
  let oddSumB = b.reduce((sum, int) => {
    if(int % 2 !== 0) {
      sum += int;
    }
    return sum;
  });

  return oddSumA - oddSumB;
});

console.log(arr);