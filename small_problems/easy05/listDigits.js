/*
PROBLEM
  input: positive integer
  output: array
  rules:
    EXPLICIT
    - write a function, takes one arg of positive integer
    - return an array
      - every element contains one digit from the input
    IMPLICIT
    - duplicate numbers are still represented
    - integer length doesnt matter

  
EXAMPLES
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

DATA STRUCTURE
array

ALGORITHM
- create function digitList that takes one arg
- create empty digit list array
- don't think of the integer as a whole number but rather combination of digits
- break each digit off and store it in an array
- return the array
CODE
*/

function digitList(int) {
  let digitStrArr = String(int).split('');

 return digitStrArr.map( digit => { 
    return Number(digit);
  });
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4])