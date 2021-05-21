/*
PROBLEM
  input: two arrays
  output: one new array
  rules:
    EXPLICIT
    - write a function, takes two equal length arrays as args
      - each value in them is a number
    - multiply each value at the same index of each arg Array
    - store the result in a new array
    - return the new array

EXAMPLES
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

DATA STRUCTURE
array

ALGORITHM
- create function multiplyList, takes two array args
- create empty new array
- iterate through each array multiplying each index value by each other
- store the result in the new array
- return the new array

CODE
*/

function multiplyList(arr1, arr2) {
  let productArr = [];

  for (let index = 0; index < arr1.length; index += 1) {
    let currentProduct = arr1[index] * arr2[index];
    productArr.push(currentProduct);
  }

  return productArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]