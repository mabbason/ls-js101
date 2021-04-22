/*
Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the 
product of all numbers between 1 and the entered integer, inclusive.

Pseudocode Workup:
get user input for integer = intLimit
get user input for math 
  (s or p, use toLowerCase as basic guard clause) = userMathInput
If/Then to direct the program for sum or product, assign output string for userMath as well
  userMath: Need a loop, maybe while? incase the user input is 1
  - idea: I believe this would be a case for recursive function // research
Output `userMathString of the integers... userMathResult`
*/

let readline = require('readline-sync');

//User input integer, test for valid user entry
let intLimit = parseInt(readline.question('Please enter an integer greater than 0: '));
while (!Number.isInteger(intLimit) || !(intLimit > 1)) {
  intLimit = parseInt(readline.question('Please enter an integer greater than 0: '));
}

//User input math operation, test for valid user entry
let userMathInput = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ').toLowerCase();
while (!(userMathInput === 's' || userMathInput === 'p')) {
  userMathInput = readline.question(`Must enter "s" or "p": `).toLowerCase();
}

//Math operation logic using recursion
function userMath(int) {
  if (int === 1) {
    return int;
  } else if (userMathInput === 'sum') {
    return userMath(int - 1) + int;
  } else {
    return userMath(int - 1) * int;
  }
}

//Convert user math operation selection to output friendly string
if (userMathInput === 's') {
  userMathInput = 'sum';
} else {
  userMathInput = 'product';
}

console.log(`\nThe ${userMathInput} of the integers between 1 and ${intLimit} is ${userMath(intLimit)}.`);
