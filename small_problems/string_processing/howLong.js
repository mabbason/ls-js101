// Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a single space.

/*
P
  I: string
  O: array
  R:
  - break words by the space in input string
E
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

D
array

A
write function takes one arg, string
- split the string into an array of words
- iterate through the array, map()  maybe
  - new string
    - original word
    - concat space
    - concat length of word
- return the new array

C
*/

function wordLengths (str) {
    let wordLengths = [];
    
    if (str)  {
      wordLengths = str.split(' ').map(word => word + ' ' + word.length);
    }
    
    return wordLengths;
  }
  
  console.log(wordLengths('cow sheep chicken'));
  
  
  
  
  
  wordLengths('cow sheep chicken');
  // ["cow 3", "sheep 5", "chicken 7"]
  
  wordLengths('baseball hot dogs and apple pie');
  // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
  
  wordLengths("It ain't easy, is it?");
  // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
  
  wordLengths('Supercalifragilisticexpialidocious');
  // ["Supercalifragilisticexpialidocious 34"]
  
  wordLengths('');      // []
  wordLengths();        // []