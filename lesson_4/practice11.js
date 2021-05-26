/*
PROBLEM
  input: string
  output: object
  rules:
    - create object
      - each unique letter is a key
      - the frequency of each letter in the string is the value for that string
    
EXAMPLES
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

DATA STRUCTURE
Object

ALGORITHM
- Create empty object
- iterate over the string
- if a letter is key a in the object already increment its value by 1
- if a letter is not a key in the object, then set its value to 1

CODE

*/

let statement = "The Flintstones Rock";

let statementObj = {};

statement.split('').forEach(char => {
  if(char !== ' ') {
    Object.keys(statementObj).includes(char) ? 
    statementObj[char] += 1 : statementObj[char] = 1;
  }
});



console.log(statementObj);