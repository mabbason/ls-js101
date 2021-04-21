/*
Create a simple tip calculator. The program should prompt for a bill 
amount and a tip rate. The program must compute the tip, and then log 
both the tip and the total amount of the bill to the console. You can 
ignore input validation and assume that the user will enter numbers.

Pseudocode workup:

prompt for the total bill amount = bill
prompt for the tip percentage = tipPercent
tip = bill * (tipPercent/100)
total = bill + tip
output tip \newline output total

*/

const readline = require