const readline = require('readline-sync');

function getUserName() {
  let name = readline.question(`What is your name? `);
  return name;
}

function screamOrNotGreeting(name) {
  let greeting;
  if (name[name.length - 1] === '!') {
    name = name.split('').slice(0, name.length - 1).join('');
    greeting = `hello ${name}. why are we screaming?`.toUpperCase();
  } else {
    greeting = `Hello ${name}.`;
  }
  return greeting;
}

console.log(screamOrNotGreeting(getUserName()));