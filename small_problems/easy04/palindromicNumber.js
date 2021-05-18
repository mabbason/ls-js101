/*
Pseudocode
I believe I can use the exact same solution as I originally used for 
my palindromic string excercise
*/


function isPalindromicNumber(number) {
  numberArr = String(number).split('');
  numberArrReversed = [...numberArr].reverse();

  for(let i = 0; i < numberArr.length; i += 1) {
    if(numberArr[i] !== numberArrReversed[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true