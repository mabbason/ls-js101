/*
PROBLEM
  input: n/a
  output: string
  rules:
    EXPLICIT
    - write a function, takes no arguments
    - generate a random hexidecimal digit
    - build into 32 digit UUID
      - 8-4-4-4-12 char pattern
      - hyphen as char block separators
    - return the entire string

EXAMPLES
Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f)
represented as a string. The value is typically broken into 5 sections
in an 8-4-4-4-12 pattern.

e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

DATA STRUCTURE
string

ALGORITHM
- create array with all hex characters
- write function generateUUID()
  - create empty UUID string
  - create array with 8, 4, 4, 4, 12 as values
  - iterate through that array, on iteration:
    - invoke getHexBlock function, with int as arg
    - add getHexBlock to UUID
  - remove the first char hyphen
  -return the final UUID string

- write helper function getHexBlock(int)
  - takes int arg to determine output string length
  - creat empty hexblock variable
  - write loop to build a string of length equal to the arg
    - on each loop invoke helper function getRandomHexDigit()
    - add the random digit to the hexblock string
  - return final string '-' + hexblock string

- write helper function getRandomHexDigit()
  - generate a random number from 0 - 32 to use as
  - return hexArray[random number index]


CODE
*/
const HEX_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
'a', 'b', 'c', 'd', 'e', 'f'];
const MAX_INDEX = HEX_CHARS.length;

function generateUUID() {
  let UUID = '';
  let UUIDPattern = [8, 4, 4, 4, 12]

  UUIDPattern.forEach(hexLength => UUID += getHexBlock(hexLength));

  return UUID.slice(1);
}

function getHexBlock(length) {
  let hexBlock = '';
  let currentLength = 0;

  while(currentLength < length) {
    hexBlock += getRandomHexDigit();
    currentLength += 1;
  }

  return '-' + hexBlock;
}

function getRandomHexDigit() {
  let randomIndex = Math.floor(Math.random() * MAX_INDEX);
  let randomHexDigit = HEX_CHARS[randomIndex];
  return randomHexDigit;
}

console.log(generateUUID());