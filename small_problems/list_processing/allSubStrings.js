function leadingSubstrings (str) {
    let subString = '';
    let subStrArr = [];
    
    for (let charIdx = 0; charIdx < str.length; charIdx += 1) {
      subString += str[charIdx];
      subStrArr.push(subString);
    }
    
    return subStrArr;
  }
  
  function substrings (str) {
    let allSubsArr = [];
    for (let charIdx = 0; charIdx < str.length; charIdx += 1) {
      leadingSubstrings(str.slice(charIdx)).forEach(sub => {
        allSubsArr.push(sub);
      });
    }
    console.log(allSubsArr);
    return allSubsArr;
  }
  
  substrings('abcde');
  
  /* returns
  [ "a", "ab", "abc", "abcd", "abcde",
    "b", "bc", "bcd", "bcde",
    "c", "cd", "cde",
    "d", "de",
    "e" ]*/