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

write new function copying some past functionality from excercises
clean out the string from all Uppercase, non-alphanumeric chars
then feed that as arg calling previous isPalindrome()

isRealPalindrome(string) {
  
  cleanString = '';
  forLoop() {
    if (string[char] isLetter || string[char]isNumber) {
      cleanString += char.toLowerCase;
    }
  }
  return isPalindrome(cleanString);
}

write helper function
function isLetter(char) {
  return char.toLowerCase() === letter;
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

function isValidChar(char) {
  let lowerChar = char.toLowerCase();
  return ((lowerChar >= 'a' && lowerChar <= 'z') || 
          (lowerChar >= '0' && lowerChar <= '9'));
}

function isRealPalindrome(string) {
  cleanString = '';

  for(let i = 0; i < string.length; i += 1) {
    if(isValidChar(string[i])) {
      cleanString += string[i].toLowerCase();
    }
  }
  return isPalindrome(cleanString);
}
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false