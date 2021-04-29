/*
Psedocode thinking...
This feels like padStart combined with a for loop and using the
i for the padValue.
*/

for (let pad = 0; pad < 10; pad += 1) {
  stringToPrint = 'The Flintstones Rock!';
  console.log(stringToPrint.padStart(pad + stringToPrint.length));
}

//Boom, nice to have an idea work out how you think it will :)
