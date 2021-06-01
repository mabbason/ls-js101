/*
PROBLEM
  input: array, nested objects, nested arrays
  output: same structure, different out array, original object
  rules:
    EXPLICIT
    - return a new array
    - but it should contain any objects from the original that 
    contain ALL even numbers
    
EXAMPLES
let arrInts = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

so the result array should be
arrEvens = [
  { e: [8], f: [6, 10] }
];

DATA STRUCTURE
Array, nested object, nested arrays

ALGORITHM
- filter() should be perfect method
  - callback function: input is object w subarrays as values, return true/false
    - every() for every value even in an array
    need to feed it one flat array w all sub arr values
      - arrayFlat helper function

CODE
*/

let arrInts = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let arrEvens = arrInts.filter( obj => {
  return objToFlatArray(obj).every(int => int % 2 === 0); 
});

function objToFlatArray(obj) {
  let resultArr = [];

  Object.values(obj).forEach(subArr => {
    subArr.forEach(int => resultArr.push(int));
  });

  return resultArr;
}

console.log(arrEvens);