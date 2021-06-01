/*
PROBLEM
  input: object
  output: number (to console)
  rules:
    EXPLICIT
    - sum up the ages of all the 'male' munsters
    - display the total age
      - presumably to the console?

EXAMPLES
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
  - need to get the age of Herman, Grandpa, Eddie... add them up
  - so... 32 + 402 + 10 = 444
  - then console.log the result

  There are two methods obvious to me at this time
  - brute force, access each applicable number and then add them up
  - create a function perhaps sumAgesMale() that could be fed any object
  and it checks for the male value, then adds the age value... Ima do this

DATA STRUCTURE
  object

ALGORITHM
 - create function takes Obj as arg
 - create age variable = 0
 - iterate through family Obj looking at each munster Obj
 - check the munster Obj for value === male
    - if yes, add the age value to the variable
 - return the age as a number

 - console.log the function as a result

CODE
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

function sumAgesMale(obj) {
  let ageTotal = 0;

  for(let name in obj) {
    if(obj[name]['gender'] === 'male') {
      ageTotal += obj[name]['age'];
    }
  }

  return ageTotal;
}

console.log(`The total age of all the male members of the Munster family is ${sumAgesMale(munsters)}.`);