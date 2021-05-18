/*
Pseudocode
alphabetArr = [a, b, c, etc.]

function cleanUp(string) {
  cleanString = '';
  for loop {
    if (alphabetArr.includes(string[i].toLowerCase()) 
        && cleanStringArr[length - 1] !== ' ') {
      cleanStringArr += string[i];
    }
  }
 return cleanStringArr;
}
*/

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cleanUp(string) {
  let cleanString = '';
  
  for(let i = 0; i < string.length; i += 1) {
    if(ALPHABET.includes(string[i].toLowerCase())) {
      cleanString += string[i];       
    } else if (cleanString[cleanString.length - 1] !== ' ') {
      cleanString += ' ';
    }
  }
  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "