/*
Pseudocode
function isPalindrome(string) {
  stringArr = string.split('');
  stringArrReversed = [...stringArr].reversed();
  for loop {
    if (stringArr[i] !== stringArrReversed[i]) {
      return false;
    }
  }
  return true;
}
*/

function isPalindrome(string) {
  stringArr = string.split('');
  stringArrReversed = [...stringArr].reverse();

  for(let i = 0; i < stringArr.length; i += 1) {
    if(stringArr[i] !== stringArrReversed[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true