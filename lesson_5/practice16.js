/*
PROBLEM
  input: array w nested arrays
  output: object w same key/values as original array stucture
  rules:
    EXPLICIT
    - return an object
    - 

EXAMPLES
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

DATA STRUCTURE
object, nested obj/arr

ALGORITHM
- create empty object
- iterate through the outer array
- on each iteration 
  - read the subarr[0] and assign it as obj key
  - read the subarr[1] and assign it as the value for subarr[0] key

CODE
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
});

console.log(obj);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }