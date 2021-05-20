/*Pseudocode

function swap(string) {
  stringArr = stringsplit

  stringArr.forEach( word =>  {
    letterArr = word.split
    letterArr.unshift(letterArr.pop()) 
    }
    word = letterArr.join('')
  );
}

*/

function swap(string) {
  let wordArr = string.split(' ');

  for(let i = 0; i < wordArr.length; i += 1) {
    let letterArr = wordArr[i].split('');
    let firstLetter = letterArr.shift();
    let lastLetter = letterArr.pop();
    letterArr.unshift(lastLetter);
    letterArr.push(firstLetter); 
    wordArr[i] = letterArr.join('');
  }
  return wordArr.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"