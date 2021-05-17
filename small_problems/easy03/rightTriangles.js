/*
Pseudocode
function triangle(posInt) {
let array[posInt] = '*';
for (i = posInt; > 0 ; i -= 1 ){
  console.log(`repeat' '(i)${array.join()}`)
  array.push('*');
}

maybe a do/while loop if not for loop
*/

function triangle(height) {
  let triangleStar = '*';
  
  for (let i = height; i > 0; i -= 1) {
    console.log(`${' '.repeat(i - 1)}${triangleStar}`);
    triangleStar += '*';
  }
}

triangle(5);
triangle(9);