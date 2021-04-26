/*
Pseudocode:
Expected input (use readline-sync): Total loan amount,
  Annual Percentage Rate, Loan Duration.
  Test the user input: 0, negative, non-number strings, NaN, undefined, etc.
  Ensure valid input with loops
loanMonthsLong = convert user input from years to months
Expected output: monthly payment with two decimal places.

Working from formula...
  monthlyPayment = loanAmount * (
    monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-loanMonthsLong))));

Output monthly payment, extra stuff might be fun, total interest, total cost
*/

let readline = require('readline-sync');

function invalidEntry(numString) {
  let num = parseFloat(numString);
  return (Number.isNaN(num) || num <= 0);
}


//User input loan amount, test for valid user entry
let loanAmount = Math.round(parseFloat(readline.question('Please enter desired loan amount to the nearest dollar: $')));

let loanMax = 5000000;
while (loanAmount > loanMax) {
  loanAmount = Math.round(parseFloat(readline.question(`You're barkin' up the wrong bank, try a lower amount: $`)));
}
while (invalidEntry(loanAmount) || loanAmount > loanMax) {
  loanAmount = Math.round(parseFloat(readline.question(`Please enter a valid loan amount: $`)));
}


//User input APR, test for valid entry, set monthly rate
let annualRate = parseFloat(readline.question('Please enter the Annual Percentage Rate (APR) as a percent eg. 3.75%: '));

while (invalidEntry(annualRate)) {
  annualRate = parseFloat(readline.question(`Please enter a valid interest rate: `));
}
annualRate /= 100;
let monthlyRate = annualRate / 12;


//User input loan length, test for valid user entry
let loanLength = parseFloat(readline.question('Please enter loan length in years: '));

while (invalidEntry(loanLength) || Number.isInteger(loanLength)) {
  loanLength = readline.question('Please enter valid whole number for the length of loan in years: ');
}
loanLength *= 12;


//Use all valid inputs for calculation
let monthlyPayment = (loanAmount * (monthlyRate / (1 - Math.pow(
  (1 + monthlyRate), (-loanLength))))).toFixed(2);

let totalInterest = ((monthlyPayment * loanLength) - loanAmount).toFixed(2);


//Output calculations
console.log(`\nLoan Calculation Results:\n
  Payment Every Month: $${monthlyPayment}\n
  Total of ${loanLength} Payments: $${(monthlyPayment * loanLength).toFixed(2)}\n
  Total Interest: $${totalInterest}`);

console.log(loanLength);
