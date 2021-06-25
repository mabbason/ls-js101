/*
Program
  input: sentence string
  output: sentence string with 'word numbers' replaced w 'digit numbers'
  rules:
    - write a function
    - The rest of the sentence stays as is
    - only replace the word numbers
    
Example
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

Data Structure
Array, maybe object for reference of "number words"

Algorithm
  - write function, one param
  - make word number object
  - split string up into array
  - iterate over array, maybe map()
    - check if the element === a prop in word number object
      - if true, return the value
    - if not, then return the element
  

CODE

*/