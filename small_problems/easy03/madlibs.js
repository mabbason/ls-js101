const READLINE = require('readline-sync');

let noun = READLINE.question('Enter a noun: ');
let verb = READLINE.question('Enter a verb: ');
let adjective = READLINE.question('Enter an adjective: ');
let adverb = READLINE.question('Enter an adverb: ');

console.log(`\nDo you ${verb} your ${adjective} ${noun} ${adverb}? That's groovy!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy hedgehog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Babushka's bearded dragon.`);