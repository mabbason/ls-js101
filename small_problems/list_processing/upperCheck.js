/*
Problem
  input: string, mult words poss
  output: boolean, predicate function
  rules:
  - ignore characters that are not alphabetic
  - an empty string returns true
  - of all the chars that are alphabetic
    - are all of them uppercase?
      - yes, function returns TRUE
      - no, function returns FALSE
      
Examples
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

*** basically the function returns true unless a lowercase letter is found

Data Structure
array

Algorithm
- write function isUpperCase() takes one param: string
- set areAllUpper variable value to TRUE, same variable to return
- split the string into array
- iterate over array
  - test each value
    - is letter?
      - yes
        - is lowerCase?
          - yes: set variable to FALSE
          - no: continue to next char
      - no: continue to next char
- return areAllUpper

CODE
*/
function isUppercase (str) {
    let areAllUpper = true;
    
    str.split('').forEach(char => {
       if (char >= 'a' && char <= 'z') {
       areAllUpper = false;
     } 
    });
    
    return areAllUpper;
  }
  
  
  isUppercase('t');               // false
  isUppercase('T');               // true
  isUppercase('Four Score');      // false
  isUppercase('FOUR SCORE');      // true
  isUppercase('4SCORE!');         // true
  isUppercase('');                // true