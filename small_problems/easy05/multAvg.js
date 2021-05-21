/*
PROBLEM
  input: one array of integers
  output: string
  rules:
    EXPLICIT
    - write a function, takes one array as arg
    - each element in that array is an integer
    - multiply all of the integers by each other
    - then divide the result by the total number of integers
    - return that result as a string, but with a decimal accuracy of three digits

EXAMPLES
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
DATA STRUCTURE

ALGORITHM
- create function multiplicativeAverage, takes one array arg
- create result variable to store the result with value of 1
- iterate over the array multiplying each element by the result num
- create result Avg variable = divide the mutiply result by the length of the input array
- round the Avg to decimal of 3 places
- return the Avg converted to string

CODE
*/

function multiplicativeAverage(arr) {
  let result = 1;
  
  arr.forEach(int => {
    result *= int;
  });

  let resultAvg = result / arr.length;
  return resultAvg.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"