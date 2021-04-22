/*
Pseudocode Workup:
take a string and sum up each character's UTF-16 value 
to output a total value for the whole string.
function utf16Value(singleStringArg) {
  let sumValue = 0;
  maybe a for loop ( set i to string length, i > 0, i--) {
    sumValue = singleStringArg.charCodeAt(i) + sumValue;
  }
  return sumValue;
}
*/

function utf16Value(string) {
  let sumValue = 0;
  for(let i = string.length; i > 0; i -= 1) {
    
    sumValue = string.charCodeAt(i-1) + sumValue;
  }
  return sumValue;
}


//Test Cases
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811