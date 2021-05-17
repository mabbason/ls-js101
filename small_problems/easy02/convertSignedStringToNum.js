const STRING_NUM_DIGITS = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
  6: 6, 7: 7, 8: 8, 9: 9
};

function signedStringToInteger(string) {
  let num = 0;
  let numSign;
  let stringArray = string.split('');
  if (stringArray[0] === '+') {
    stringArray.shift();
    numSign = 1;
  } else if (stringArray[0] === '-') {
    stringArray.shift();
    numSign = -1;
  } else {
    numSign = 1;
  }
  stringArray.forEach(stDigit => {
    num = (num * 10) + STRING_NUM_DIGITS[stDigit];
  });
  return num * numSign;
}


console.log(signedStringToInteger("4321") === 4321); // logs true
console.log(signedStringToInteger("-570") === -570); // logs true
console.log(signedStringToInteger("+100") === 100); // logs true