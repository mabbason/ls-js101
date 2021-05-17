/*
Pseudocode
create function (valid number as arg) {
use loop
}
*/

const NUM_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(int) {
  let intString = '';
  do {
    let remainder = int % 10;
    intString = NUM_DIGITS[remainder] + intString;
    int = Math.floor(int / 10);
  } while (int > 0);
  return intString;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
