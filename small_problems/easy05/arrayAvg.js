/*
PROBLEM
  input: array of integers
  output: single number
  rules:
    EXPLICIT
      - write a function, takes an array of integers
        - assume array never empty, ints always positive
      - return average all of the integers
      - round the result DOWN to the nearest int


EXAMPLES
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

DATA STRUCTURE
array

ALGORITHM
- create function average, takes one array as arg
- create result int set to 0
- add each element in the argArray to the result
- divide the result by the number of elements in the argArray
- round the result down to the nearest int
- return the result
CODE
*/
function average(arrayInts) {
  let sumInts =  arrayInts.reduce((sum, int) => {
    return sum += int;
  });

  let avg = Math.floor(sumInts / arrayInts.length);
  return avg;
}


console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40)