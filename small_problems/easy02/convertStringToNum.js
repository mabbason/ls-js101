/*
Pseudocode
create an object that has a key value pair for each digit
function to take the (stringArg)
  then stringArray = stringArg.split()
  let numberArray
  stringArray.forEach( stringNum => {
  numberArray.push(object[stringNum])
  })
  return numberArray.join('')
*/

const STRING_NUM_DIGITS = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
  6: 6, 7: 7, 8: 8, 9: 9
};

function stringToInteger(string) {
  let numArray = [];
  let stringArray = string.split('');
  stringArray.forEach(stDigit => {
    numArray.push(STRING_NUM_DIGITS[stDigit]);
  });
  return numArray.join('');
}

console.log(stringToInteger("4321"));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

/*
Gah, join() returns a string... I forgot that and that's where I lost it.

*/