/*
Pseudocode
function wordSizes(string) {
  wordArr = string.split(' ');
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
*/

function wordSizes(string) {
  let wordArr = string.split(' ');
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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}