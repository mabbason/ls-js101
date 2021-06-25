/*
PROBLEM
  input: array of strings, mult arr length
  output: an array with same same strings/structure, but no vowels
  rules:
    - one long string
    - mult strings in arr
    - Upper or Lowercase
  
EXAMPLES
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         
      // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  
      // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                
      // ["BC", "", "XYZ"]
      
DATA STRUCTURE
array

ALGORITHM
- write const vowels array
- write function removeVowels() take one param: arr
- return this: iterate through the array, modified arr return so map()?
  - return needs to be modified string value
  - declare noVowelStr to empty string value
  - each value is string, so need to iterate on string
    - if char is NOT vowel (compare lower/UPPER case)
      - concat to noVowelStr variable
  - return noVowelStr

CODE
*/
const VOWELS = ['a','e', 'i', 'o', 'u','A','E', 'I', 'O', 'U' ];

function removeVowels (arr) {
  return arr.map(str => {
    let noVowelStr = '';
    
    for (let charIdx = 0; charIdx < str.length; charIdx++) {
      if (!VOWELS.includes(str[charIdx])) {
        noVowelStr += str[charIdx];
      }
    }
    return noVowelStr;
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));