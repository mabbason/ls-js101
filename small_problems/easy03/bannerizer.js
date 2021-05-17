/*
Pseudocode
function logInBox(string) {
  let borderFill = '+-';
  for (let stringlength; < stringlength, i += 1) {
    borderFill += '-';
  }
  let bodyFill = '| ';
  same for loop, but += ' '
  console.log(`${borderFill}-+`);
  log same idea bodyFill
  console.log(`${borderFill}${string} |`);
  log same blank bodyFill again
  log same borderFill
}
*/

function logInBox(string) {
  let borderFill = '+-';
  for (let i = string.length; i > 0; i -= 1) {
    borderFill += '-';
  }

  let bodyFill = '| ';
  for (let i = string.length; i > 0; i -= 1) {
    bodyFill += ' ';
  }

  console.log(`${borderFill}-+`);
  console.log(`${bodyFill} |`);
  console.log(`| ${string} |`);
  console.log(`${bodyFill} |`);
  console.log(`${borderFill}-+`);
}

logInBox('To boldly go where no one has gone before.');