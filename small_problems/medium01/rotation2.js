/*
Problem
  input: two numbers, to be rotated, and the number of digits to rotate
  output: single number, the rotated number
  rules:
    - 
Examples
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Data Structure
array

Algorithm
- write function, two params
- turn the first param num into an array
  - convert num to string
  - string split
- remove the (array.length - param2) index
- add the removed digit to the end of the array
- turn the array back into a number
- return the number
CODE
*/

function rotateRightmostDigits(numToRotate, count) {
  let numArr = String(numToRotate).split('');
  let firstDigit = numArr.length - count;
  
  firstDigit = numArr.splice(firstDigit, 1);
  numArr.push(firstDigit[0]);
  
  return Number(numArr.join(''));
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917