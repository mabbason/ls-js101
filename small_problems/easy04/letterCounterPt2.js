/*
Pseudocode
function wordSizes(string) {
  wordArr = wordCleaner.split(' ');
  wordSizesObj = {};
  
  forLoop(index; wordArr.length; += 1) {
    if(wordSizesObj includes key === wordArr[i].length) {
      wordSizesObj[String(wordArr[i].length)] =  wordSizesObj[String(wordArr[i].length)] + 1;
    } else {
      wordSizesObj[String(wordArr[i].length)] = 1;
    }
  }
  return wordSizesObj;
}

create helper function wordCleaner(string) {
  stringArray = split string
  iterate stringArray forLoop( ) {
    iterate through each word
    cleanWord = '';
    forLoop() {
      if (char !== isletter) {
        cleanWord += char
      }
    }
    stringArray[i] = cleanWord;
  }
  return stringArray.join(' '); 
}

create helper function isLetter(char){
  lowerChar = char.toLowerCase;
  if(lowerChar >= 'a' && lowerChar <= 'z'){
    return true
  }
  return false
}
*/

function wordSizes(string) {
  let wordArr = wordCleaner(string).split(' ');
  let wordSizesObj = {};

  for(let i = 0; i < wordArr.length; i += 1) {
    let wordLength = String(wordArr[i].length);

    if (wordLength === '0') {
      continue;
    }

    if(Object.keys(wordSizesObj).includes(wordLength)) {
      wordSizesObj[wordLength] += 1;
    } else {
      wordSizesObj[wordLength] = 1;
    }
  }
  return wordSizesObj;
}

function wordCleaner(string) {
  stringArray = string.split(' ');

  for(let i = 0; i < stringArray.length; i += 1) {
    let word = stringArray[i];
    let cleanWord = '';
    
    for(let char = 0; char < word.length; char += 1) {
      
      if(isLetter(word[char])) {
        cleanWord += word[char];
      }
    }
    stringArray[i] = cleanWord;
  }
  return stringArray.join(' '); 
}

function isLetter(char) {
  let lowerChar = char.toLowerCase();
  if(lowerChar >= 'a' && lowerChar <= 'z') {
    return true
  }
  return false
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}