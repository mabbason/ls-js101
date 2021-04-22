/*
get input from user for one variable = length
get input from user for another variable = width
meters area = length * width
sq ft area = meters area * 10.7639
round each number to two decimal places
output the resulting area calculation meters and (sq ft)
*/
const readline = require('readline-sync');

function prompt(message) {
  console.log(` > ${message}`);
}

prompt(`Enter the length of the room in meters:`);
let length = readline.question();

prompt(`Enter the width of the room in meters:`);
let width = readline.question();

let areaMeters = (length * width).toFixed(2);
let areaSqFt = (areaMeters * 10.7639).toFixed(2);

prompt(`The area of the room is ${areaMeters} square meters (${areaSqFt} square feet).`);

