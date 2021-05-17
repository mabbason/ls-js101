/*
Pseudocode
function crunch(string arg) {
  split string -> stringArray
  let emptyStringArray = [];

  stringArray.forEach(char){
  check if stringArray[char] === stringArray[previous char];
  if it doesn't then push into empty stringArray
  }
  return emptyStringArray.join();
}
*/

function crunch(string) {
  let stringArr = string.split('');
  let crunchStringArr = [];

  stringArr.forEach(char => {
    if (crunchStringArr[crunchStringArr.length - 1] !== char) {
      crunchStringArr.push(char);
    }
  });
  return crunchStringArr.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""