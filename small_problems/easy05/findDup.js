/*
PROBLEM
  input: array
  output: value
  rules: 
    EXPLICIT
    - write a function findDup, takes one arg, an array
    - find the one value which is duplicated, all others are unique

    IMPLICIT
    - Input array must have 2 elements
    - No limit to unique values an array may have
    - Not returning a string/number identifying the value... 
      - return the value itself

    Questions:
    - Do the values have to be numbers?
    - Can the original array be modified?

EXAMPLES
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

DATA STRUCTURE
Array

ALGORITHM
- create function findDup, takes one array as arg
- create copy of argArray = copyArray
- take onevalue out of the copyArray at a time
- then test to see if the copyArray still has that value
- if it does then return that element
- if it does not, then move to the next value
CODE
*/

function findDup(arr) {
  let copyArr = [...arr];
  let dupValue;

  do {
    dupValue = copyArr.shift();
  } while(!copyArr.includes(dupValue));

  return dupValue;
}

console.log(findDup([1, 5, 3, 7, 3]));                                // 3
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 103, 32, 43, 24,  4, 56,
   7, 34, 57, 74, 45, 11, 88, 73,  5, 58]));    // 73