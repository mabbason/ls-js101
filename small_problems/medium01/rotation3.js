/*
Problem
  input: single integer, any length
  output: single integer, rotated
  rules:
  - move the first digit to the end
  - then move the second digit to the end
  - then move the third digit to the end
  - then move the fourth digit to the end

*/


function maxRotation(numToRotate) {
    let rotateTimes = String(numToRotate).length;
    
    for (let numPlace = 1; numPlace < rotateTimes; numPlace += 1) {
      numToRotate = rotateDigit(numToRotate, numPlace);
    }
    
    return numToRotate
  }
  
  function rotateDigit(numToRotate, place) {
    let numArr = String(numToRotate).split('');
    let firstDigit = numArr.splice(place - 1, 1);
      
    numArr.push(firstDigit[0]);
    
    return Number(numArr.join(''));
  }
  
  
  maxRotation(735291);          // 321579
  maxRotation(3);               // 3
  maxRotation(35);              // 53
  maxRotation(105);             // 15 -- the leading zero gets dropped
  maxRotation(8703529146);      // 7321609845