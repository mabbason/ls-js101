/*
Problem
  input: two arrays
  output: one array
  rules:
    Explicit
    - write a function that take two args, each an array (may assume arrays)
    - return one array of values
      - contains ALL unique values between both arrays
    
    Questions
    - Any values?
    - Arrays of different length?

Examples
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

Data Structure
Array

Algorithm
- create function that takes two args
- create result array as copy of arg1
- iterate through arg2 array
  - checking to see if result array includes arg2 elements
  - if doesn't then push element to result array
- return result array 

Code
*/

function union(arr1, arr2) {
  let comboArr = [...arr1, ...arr2];
  let resultArr = [];

  comboArr.forEach( value => {
    if(!resultArr.includes(value)) {
      resultArr.push(value);
    }
  });

  return resultArr;
}

console.log(union([1, 3, 5, 9, 3, 5, 7], [3, 6, 9]));    // [1, 3, 5, 6, 9]