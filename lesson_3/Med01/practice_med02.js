/*
Psedocode thinking...
I need to iterate through the string checking each character.
While iterating I need to convert the character to Upper/Lower case and 
compare it to the original letter. If it === or not, I know what case the
character is and can convert accordingly.
*/

let munstersDescription = "The Munsters are creepy and spooky.";

function reverseCase(string) {
  let newString = '';
  for (char = 0; char < string.length; char += 1) {
    if (string[char].toUpperCase() === string[char]) {
      newString += string[char].toLowerCase();
    } else {
      newString += string[char].toUpperCase();
    }
  }
  return newString;
}

console.log(reverseCase(munstersDescription));

//Boom, two for two, nice I like this! Though I can take a little check here
//my solution was less clear then the suggested solution. 