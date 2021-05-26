/*
PROBLEM
  input: array of strings
  output: object
  rules:
    EXPLICIT
    - create an object
      - object keys are elements of array
      - object values are positions within the array 

EXAMPLE
{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

DATA STRUCTURE
Object

ALGORITHM
- create empty object
- iterate over array
  - add each element as the key and its value as the current index

CODE
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintObj = {}

for(let i = 0; i < flintstones.length; i += 1) {
  flintObj[flintstones[i]] = i;
}

console.log(flintObj)