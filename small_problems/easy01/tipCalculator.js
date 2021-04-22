/*
Create a simple tip calculator. The program should prompt for a bill 
amount and a tip rate. The program must compute the tip, and then log 
both the tip and the total amount of the bill to the console. You can 
ignore input validation and assume that the user will enter numbers.

Pseudocode workup:

prompt for the total bill amount = bill (parseFloat) to convert string to number
prompt for the tip percentage = tipPercent (parseFloat) to convert string to number
tip = bill * (tipPercent/100)
total = bill + tip
output tip \newline output total

*/

const readline = require('readline-sync');

console.log(`What is the bill?`);
let bill = parseFloat(readline.question());

console.log(`What is the tip percentage?`);
let tipPercent = parseFloat(readline.question());

let tip = bill * (tipPercent/100);
let total = bill + tip;

console.log(`\nThe tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

// Program successfully completes objective
// though I like how the suggested solution integrates the question/prompt