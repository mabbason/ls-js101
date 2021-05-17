function stringy(stringLength) {
  let string = '';
  for(let i = 0; i < stringLength; i += 1) {
    if (string[string.length - 1] === '1') {
      string += '0';
    } else {
      string += '1';
    }
  }
  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"