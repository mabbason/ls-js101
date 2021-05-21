/*
PROBLEM
  input: array
  output: log to console
  rules:
    EXPLICIT
    - write a function that takes an array as an arg
    - the function's purpose is to log informaton to the console
    - the informaton logged is:
      - each unique element
        - and the number of times it occurs in the input array
    
    IMPLICIT
    - the output information isn't static, it is taken from the input array
    
    QUESTIONS
    1. does case sensitivity matter?
    2. extra spaces matter?
    3. does data type matter?

EXAMPLES
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

DATA STRUCTURE
object b/c key (element that occurs): value (how many times it appears)

ALGORITHM
- create function countOccurrences, takes one arg which is array
- create new object 
- iterate through array
- if the object contains a key equal to the element
  - increment the value associated with that key
- if the object does not contain a key equal to the element
  - add the element as a key with value of one to the object
- iterate through the object and log each key value pair

CODE
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let occurences = {};

  arr.forEach(element => {
    if(Object.keys(occurences).includes(element)) {
      occurences[element] += 1;
    } else {
      occurences[element] = 1;
    }
  });

  for(let prop in occurences) {
    console.log(`${prop} => ${occurences[prop]}`);
  }
}




countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2