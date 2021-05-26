/*
PROBLEM
  input: array
  output: array sorted
  rules:
    EXPLICIT
    - order the original array
    - the largest number string at index 0, to the smallest number string at the end

EXAMPLES
  - starting array ['10', '11', '9', '7', '8'];
  - ordered array  ['11', '10', '9', '8', '7'];

DATA STRUCTURE
array

ALGORITHM
  - sort(a, b) methodology where b-a would result in descending order
  - the callback function needs to return a positive number
  - create a and b variables in the callback
    convert each string to a number and store to variable
    then do b-a to tell sort which order to put them in
CODE
*/

let arr = ['10', '11', '9', '7', '8'];


arr.sort((a, b) => Number(b)- Number(a));

console.log(arr);