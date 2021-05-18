const READLINE = require('readline-sync');

let today = new Date();
let year = today.getFullYear();

let age = READLINE.question(`What is your age? `);
let retireAge = READLINE.question(`At what age would you like to retire? `);

let yearsLeftWorking = retireAge - age;

console.log(`\nIt's ${year}. You will retire in ${yearsLeftWorking + year}.`);
console.log(`You have only ${yearsLeftWorking} years of work to go!`);
