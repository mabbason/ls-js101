/*
Pseudocode
create function (valid number as arg) {
use loop
}
*/

const NUM_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function IntegerToString(int) {
  let intString = '';
  do {
    let remainder = int % 10;
    intString = NUM_DIGITS[remainder] + intString;
    int = Math.floor(int / 10);
  } while (int > 0);
  return intString;
}

function signedIntegerToString(num) {
  if (num === 0) {
    return IntegerToString(num);
  } else if (num < 0) {
    return '-' + IntegerToString(-num);
  } else {
    return '+' + IntegerToString(num);
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");