/*
PROBLEM
  input: object
  output: string (output to console)
  rules:
    EXPLICIT
    - do NOT use for loop OR while loop
    - output all the vowels from the strings in the arrays
    
EXAMPLES
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

  - presumably the output would be ==> `euiooueoeeao`

DATA STRUCTURE
  array

ALGORITHM
  - create a function that takes obj as arg
    - create empty string variable as container for vowels
    - iterate through obj
      - iterate through each subarray
        - iterate through each string
          - if a char is a vowel add it to the vowel container variable
    - return the vowel container variable
  - log the output of function
CODE
*/

let objWords = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function extractVowels(obj) {
  let vowels = '';

  Object.entries(obj).forEach(arr1 => {
    arr1[1].forEach( word => {
      
      word.split('').forEach( char => {
        if('aeiouAEIOU'.includes(char)){
          vowels += char;
        }
      });
    });
  });

  return vowels;
}

console.log(extractVowels(objWords));
