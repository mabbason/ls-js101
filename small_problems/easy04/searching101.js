const READLINE = require('readline-sync');

let enteredNums = [];


enteredNums.push(READLINE.question(`Enter the 1st number: `));
enteredNums.push(READLINE.question(`Enter the 2nd number: `));
enteredNums.push(READLINE.question(`Enter the 3rd number: `));
enteredNums.push(READLINE.question(`Enter the 4th number: `));
enteredNums.push(READLINE.question(`Enter the 5th number: `));
let lastNum = READLINE.question(`Enter the last number: `);

if (enteredNums.includes(lastNum)) {
  console.log(`\nThe number ${lastNum} appears in ${enteredNums.join()}.`);
} else {
  console.log(`\nThe number ${lastNum} does not appear in ${enteredNums.join()}.`);
}
