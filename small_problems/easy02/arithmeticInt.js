/*
PseudoCode
spec readline
creating prompt function
getUserNumOne, prompt w readline
getUserNumTwo, prompt w readline

lets try a forEach() array combined with prompt()
*/
const readline = require('readline-sync');

function prompt(message) {
  console.log(`<> ${message}`);
}

prompt(`Enter the first number:`);
let num1 = parseInt(readline.question(), 10);

prompt(`Enter the second number:`);
let num2 = parseInt(readline.question(), 10);

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);