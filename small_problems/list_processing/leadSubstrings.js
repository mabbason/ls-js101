function leadingSubstrings (str) {
    let subString = '';
    let subStrArr = [];
    
    for (let charIdx = 0; charIdx < str.length; charIdx += 1) {
      subString += str[charIdx];
      subStrArr.push(subString);
    }
    
    return subStrArr;
  }
  
  
  
  leadingSubstrings('abc');      // ["a", "ab", "abc"]
  leadingSubstrings('a');        // ["a"]
  leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]